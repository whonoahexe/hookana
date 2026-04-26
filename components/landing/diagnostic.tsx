"use client"

import { useState } from "react"
import type { DiagnosticAIResult, DiagnosticStage } from "./diagnostic-types"
import { DIAGNOSTIC_QUESTIONS } from "./diagnostic-data"
import { DiagnosticIntro } from "./diagnostic-intro"
import { DiagnosticQuestions } from "./diagnostic-questions"
import { DiagnosticResult } from "./diagnostic-result"

export function Diagnostic() {
  const [stage, setStage] = useState<DiagnosticStage>("intro")
  const [brandName, setBrandName] = useState("")
  const [industry, setIndustry] = useState("")
  const [monthlyAdSpend, setMonthlyAdSpend] = useState("")
  const [showIntroError, setShowIntroError] = useState(false)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState<Record<string, number>>({})
  const [aiResult, setAiResult] = useState<DiagnosticAIResult | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [loadError, setLoadError] = useState(false)

  const currentQuestion = DIAGNOSTIC_QUESTIONS[currentQuestionIndex]
  const isLastQuestion =
    currentQuestionIndex === DIAGNOSTIC_QUESTIONS.length - 1
  const progress =
    stage === "questions"
      ? Math.max(8, (currentQuestionIndex / DIAGNOSTIC_QUESTIONS.length) * 100)
      : 0

  const currentAnswer = currentQuestion ? answers[currentQuestion.id] : undefined

  const headingLines =
    stage === "intro"
      ? ["Before", "We", "Begin"]
      : stage === "questions"
        ? [
            "Question",
            String(currentQuestionIndex + 1),
            `of ${DIAGNOSTIC_QUESTIONS.length}`,
          ]
        : ["Your", "Creative", "Score"]

  const headingSubcopy =
    stage === "intro"
      ? "Tell us about your brand so we can calibrate the diagnostic."
      : stage === "questions"
        ? currentQuestion.area
        : aiResult
          ? `${brandName || "Your brand"} is currently in the ${aiResult.verdict.toLowerCase()} zone.`
          : "Analyzing your creative pipeline..."

  const footerCopy =
    stage === "result"
      ? "This is a directional check. A full Hookana audit delivers asset-level recommendations."
      : "Built from patterns across 10,000+ ad creatives. Identifies structural gaps that cause creative fatigue, low CTR, and wasted ad spend."

  const handleStart = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!brandName.trim() || !industry) {
      setShowIntroError(true)
      return
    }
    setShowIntroError(false)
    setStage("questions")
    setCurrentQuestionIndex(0)
  }

  const handleSelectAnswer = (value: number) => {
    if (!currentQuestion) return
    setAnswers((prev) => ({ ...prev, [currentQuestion.id]: value }))
  }

  const handleQuestionSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault()
    if (currentAnswer === undefined) return

    if (!isLastQuestion) {
      setCurrentQuestionIndex((prev) => prev + 1)
      return
    }

    const finalAnswers = { ...answers, [currentQuestion.id]: currentAnswer }

    setStage("result")
    setIsLoading(true)
    setLoadError(false)
    setAiResult(null)

    try {
      const payload = {
        brandName,
        industry,
        monthlyAdSpend,
        answers: DIAGNOSTIC_QUESTIONS.map((q) => ({
          area: q.area,
          question: q.text,
          selectedOption:
            q.options.find((o) => o.value === finalAnswers[q.id])?.label ?? "",
          score: finalAnswers[q.id] ?? 1,
        })),
      }

      const response = await fetch("/api/diagnostic", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })

      if (!response.ok) throw new Error("API error")

      const result: DiagnosticAIResult = await response.json()
      setAiResult(result)
    } catch {
      setLoadError(true)
    } finally {
      setIsLoading(false)
    }
  }

  const handleRestart = () => {
    setStage("intro")
    setBrandName("")
    setIndustry("")
    setMonthlyAdSpend("")
    setShowIntroError(false)
    setCurrentQuestionIndex(0)
    setAnswers({})
    setAiResult(null)
    setLoadError(false)
  }

  return (
    <div className="flex w-full justify-center">
      <section className="relative -mt-20 min-h-232 w-full max-w-180 bg-card px-8 py-18 md:min-h-240 md:px-19">
        <div className="absolute top-0 -right-px h-16 w-16 overflow-hidden bg-pink-300">
          <div
            className="absolute inset-0 bg-muted-foreground"
            style={{ clipPath: "polygon(0 0, 0 100%, 100% 100%)" }}
          />
        </div>

        <div className="mx-auto flex h-full flex-col">
          <div className="flex justify-between gap-8">
            <h2 className="font-sans text-[64px] leading-12 font-semibold tracking-[-1.5px] text-card-foreground uppercase">
              <span className="block">{headingLines[0]}</span>
              <span className="block">{headingLines[1]}</span>
              <span className="block">{headingLines[2]}</span>
            </h2>
            <p className="type-heading-3 text-foreground">{headingSubcopy}</p>
          </div>

          <div className="mt-20 border-t border-dotted border-neutral-950" />

          <div className="mt-24 flex min-h-140 flex-col">
            {stage === "intro" && (
              <DiagnosticIntro
                brandName={brandName}
                industry={industry}
                monthlyAdSpend={monthlyAdSpend}
                showError={showIntroError}
                onBrandNameChange={setBrandName}
                onIndustryChange={setIndustry}
                onMonthlyAdSpendChange={setMonthlyAdSpend}
                onSubmit={handleStart}
              />
            )}

            {stage === "questions" && currentQuestion && (
              <DiagnosticQuestions
                currentQuestion={currentQuestion}
                currentQuestionIndex={currentQuestionIndex}
                currentAnswer={currentAnswer}
                progress={progress}
                isLastQuestion={isLastQuestion}
                onSelectAnswer={handleSelectAnswer}
                onSubmit={handleQuestionSubmit}
                onPrevious={() =>
                  setCurrentQuestionIndex((prev) => Math.max(0, prev - 1))
                }
              />
            )}

            {stage === "result" && (
              <>
                {isLoading && (
                  <div className="flex h-full flex-col justify-center gap-3">
                    <p className="type-monospaced text-foreground uppercase">
                      Analyzing your creative pipeline...
                    </p>
                    <p className="font-mono text-xs text-foreground/60">
                      This takes a few seconds.
                    </p>
                  </div>
                )}
                {loadError && (
                  <div className="flex h-full flex-col justify-center gap-6">
                    <p className="type-monospaced text-destructive uppercase">
                      Something went wrong.
                    </p>
                    <p className="font-mono text-xs text-foreground/60">
                      We couldn&apos;t analyze your results. Please try again.
                    </p>
                    <button
                      onClick={handleRestart}
                      className="font-mono text-xs text-primary underline"
                    >
                      Start over
                    </button>
                  </div>
                )}
                {!isLoading && !loadError && aiResult && (
                  <DiagnosticResult
                    result={aiResult}
                    industry={industry}
                    monthlyAdSpend={monthlyAdSpend}
                    onReview={() => {
                      setStage("questions")
                      setCurrentQuestionIndex(0)
                    }}
                    onRestart={handleRestart}
                  />
                )}
              </>
            )}
          </div>

          <div className="mt-24 border-t border-dotted border-neutral-950" />

          <p className="mt-5 font-mono text-xs leading-3.5 text-blue-500">
            {footerCopy}
          </p>
        </div>

        <div className="absolute right-0 -bottom-6.75 left-0 h-7">
          <svg
            width="100%"
            height="28"
            viewBox="0 0 696 28"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,0 L25,28 L50,0 L75,28 L100,0 L125,28 L150,0 L175,28 L200,0 L225,28 L250,0 L275,28 L300,0 L325,28 L350,0 L375,28 L400,0 L425,28 L450,0 L475,28 L500,0 L525,28 L550,0 L575,28 L600,0 L625,28 L650,0 L675,28 L696,0 Z"
              fill="#fff"
            />
          </svg>
        </div>
      </section>
    </div>
  )
}
