"use client"

import { useMemo, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { cn } from "@/lib/utils"
import { ArrowLeft, ArrowRight, DollarSign, Globe } from "lucide-react"
import { FormField } from "./form-field"

type DiagnosticOption = {
  label: string
  value: number
}

type DiagnosticQuestion = {
  id: string
  area: string
  text: string
  subtext: string
  weight: number
  options: DiagnosticOption[]
}

const INDUSTRY_OPTIONS = [
  "Beauty & Skincare",
  "Fashion & Apparel",
  "Health & Wellness",
  "Food & Beverage",
  "Home & Living",
  "Tech & Gadgets",
  "Fitness & Sports",
  "Pet Products",
  "Other D2C",
]

const MONTHLY_SPEND_OPTIONS = [
  "Under $5K",
  "$5K - $25K",
  "$25K - $100K",
  "$100K - $500K",
  "$500K+",
]

const DIAGNOSTIC_QUESTIONS: DiagnosticQuestion[] = [
  {
    id: "q1",
    area: "Hook Quality",
    text: "When you look at your last 10 ads, how many had a genuinely different opening hook?",
    subtext:
      "Not just different copy on the same template. Different visual pattern, different emotional trigger, different scroll-stop mechanism.",
    weight: 1.8,
    options: [
      {
        label:
          "8-10 had distinctly different hooks with different scroll-stop mechanics",
        value: 5,
      },
      {
        label:
          "4-7 had different hooks, the rest were variations of the same pattern",
        value: 3,
      },
      {
        label:
          "2-3 were genuinely different, the rest followed the same formula",
        value: 2,
      },
      {
        label: "Most used the same opening style with different text overlays",
        value: 1,
      },
    ],
  },
  {
    id: "q2",
    area: "Creative Volume",
    text: "How many net-new creative concepts are you launching per week?",
    subtext:
      "Not resizes. Not copy swaps. Genuinely new concepts with different angles, formats, or visual approaches.",
    weight: 1.7,
    options: [
      {
        label: "10+ new concepts per week, across multiple formats",
        value: 5,
      },
      {
        label: "5-9 new concepts per week, mostly in 1-2 formats",
        value: 3.5,
      },
      {
        label: "2-4 new concepts per week, when the team has bandwidth",
        value: 2,
      },
      {
        label: "Less than 2 per week, or we batch monthly",
        value: 1,
      },
    ],
  },
  {
    id: "q3",
    area: "Format Diversity",
    text: "How many different ad formats are you actively testing right now?",
    subtext:
      "Static, carousel, video (talking head), video (product demo), UGC-style, motion graphics, before/after, listicle.",
    weight: 1.5,
    options: [
      {
        label: "5+ formats actively in rotation, adapted per platform",
        value: 5,
      },
      {
        label: "3-4 formats, leaning heavily on 1-2",
        value: 3,
      },
      {
        label: "2 formats max",
        value: 2,
      },
      {
        label: "Primarily one format across all campaigns",
        value: 1,
      },
    ],
  },
  {
    id: "q4",
    area: "Testing Velocity",
    text: "When a creative starts winning, how quickly do you produce variations before performance decays?",
    subtext:
      "Creative fatigue is real. Winning ads have a shelf life. Can your pipeline spin variations fast enough?",
    weight: 1.8,
    options: [
      {
        label: "Within 24-48 hours we have 3-5 variations live",
        value: 5,
      },
      {
        label: "Within a week, we get 2-3 variations out",
        value: 3.5,
      },
      {
        label: "Takes 2-3 weeks, performance usually drops first",
        value: 2,
      },
      {
        label: "We rarely iterate on winners",
        value: 1,
      },
    ],
  },
  {
    id: "q5",
    area: "Creative Strategy",
    text: "Before producing a new ad, is there a documented brief with a specific angle and hypothesis?",
    subtext:
      "Not a vague 'make it look good.' A specific angle, hook type, CTA strategy, and measurable hypothesis.",
    weight: 1.6,
    options: [
      {
        label:
          "Every creative ships with angle, hook, hypothesis, and success metric",
        value: 5,
      },
      {
        label: "Most have a brief, but more directional than specific",
        value: 3,
      },
      {
        label: "Briefs exist sometimes, production often starts without one",
        value: 2,
      },
      {
        label: "We rarely brief. Designers create based on intuition",
        value: 1,
      },
    ],
  },
  {
    id: "q6",
    area: "Performance Analysis",
    text: "When an ad underperforms, can you identify exactly which creative element failed?",
    subtext:
      "Hook? Pacing? CTA? Visual style? If you can only say it did not work, your feedback loop is broken.",
    weight: 1.6,
    options: [
      {
        label: "We break down by hook, body, CTA, and visual separately",
        value: 5,
      },
      {
        label: "Can usually identify the weak point informally",
        value: 3.5,
      },
      {
        label: "Look at CTR/CPA but rarely diagnose specific elements",
        value: 2,
      },
      {
        label: "Just pause underperformers and move on",
        value: 1,
      },
    ],
  },
  {
    id: "q8",
    area: "Production Capacity",
    text: "We need 20 new creatives by Friday. Could your pipeline deliver?",
    subtext:
      "The stress test. If production cannot handle surge demand, creative is your ceiling.",
    weight: 1.7,
    options: [
      {
        label: "Yes, comfortably",
        value: 5,
      },
      {
        label: "Could do it but quality would suffer",
        value: 3,
      },
      {
        label: "Could deliver 5-10 at best",
        value: 2,
      },
      {
        label: "No chance. 2-3 weeks minimum",
        value: 1,
      },
    ],
  },
]

const TOTAL_WEIGHT = DIAGNOSTIC_QUESTIONS.reduce(
  (sum, question) => sum + question.weight,
  0
)

type DiagnosticStage = "intro" | "questions" | "result"

function getVerdict(score: number) {
  if (score >= 72) {
    return {
      label: "Strong",
      copy: "Your creative foundations are strong, with clear opportunities to push into top-tier performance.",
      className: "text-lime-600",
    }
  }

  if (score >= 45) {
    return {
      label: "Needs Work",
      copy: "You have momentum, but structural production gaps are still limiting your growth.",
      className: "text-yellow-600",
    }
  }

  return {
    label: "Critical",
    copy: "Your current creative pipeline is the bottleneck. Fixing process and speed should be your first priority.",
    className: "text-destructive",
  }
}

export function Diagnostic() {
  const [stage, setStage] = useState<DiagnosticStage>("intro")
  const [brandName, setBrandName] = useState("")
  const [industry, setIndustry] = useState("")
  const [monthlyAdSpend, setMonthlyAdSpend] = useState("")
  const [showIntroError, setShowIntroError] = useState(false)

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState<Record<string, number>>({})

  const currentQuestion = DIAGNOSTIC_QUESTIONS[currentQuestionIndex]
  const isLastQuestion =
    currentQuestionIndex === DIAGNOSTIC_QUESTIONS.length - 1
  const progress =
    stage === "questions"
      ? Math.max(8, (currentQuestionIndex / DIAGNOSTIC_QUESTIONS.length) * 100)
      : 0

  const score = useMemo(() => {
    const weightedScore = DIAGNOSTIC_QUESTIONS.reduce((sum, question) => {
      const answer = answers[question.id] ?? 1
      return sum + answer * question.weight
    }, 0)

    return Math.round((weightedScore / (5 * TOTAL_WEIGHT)) * 100)
  }, [answers])

  const verdict = useMemo(() => getVerdict(score), [score])

  const currentAnswer = currentQuestion
    ? answers[currentQuestion.id]
    : undefined

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
        : `${brandName || "Your brand"} is currently in the ${verdict.label.toLowerCase()} zone.`

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
    if (!currentQuestion) {
      return
    }

    setAnswers((previous) => ({
      ...previous,
      [currentQuestion.id]: value,
    }))
  }

  const handleQuestionSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (currentAnswer === undefined) {
      return
    }

    if (isLastQuestion) {
      setStage("result")
      return
    }

    setCurrentQuestionIndex((previous) => previous + 1)
  }

  const handlePreviousQuestion = () => {
    setCurrentQuestionIndex((previous) => Math.max(0, previous - 1))
  }

  const handleRestart = () => {
    setStage("intro")
    setBrandName("")
    setIndustry("")
    setMonthlyAdSpend("")
    setShowIntroError(false)
    setCurrentQuestionIndex(0)
    setAnswers({})
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
              <form
                onSubmit={handleStart}
                className="flex h-full flex-col gap-12"
              >
                <FormField
                  label="Brand name *"
                  help="We use this to personalize your results. Your score means more when it's named."
                >
                  <div className="flex h-9 w-80 items-center gap-2 rounded-md border border-neutral-950 bg-popover px-3 shadow-xs">
                    <Globe className="size-4 shrink-0 text-primary-foreground/70" />
                    <Input
                      value={brandName}
                      onChange={(event) => setBrandName(event.target.value)}
                      className="h-auto flex-1 rounded-none border-none bg-transparent px-0 py-0 text-sm text-primary-foreground shadow-none placeholder:text-primary-foreground/60 focus-visible:border-none focus-visible:ring-0"
                      placeholder="e.g Glowup Skincare"
                    />
                  </div>
                </FormField>

                <FormField
                  label="Industry *"
                  help="Creative benchmarks differ by vertical. A skincare brand and a fitness brand have very different hook standards."
                >
                  <Select
                    value={industry || undefined}
                    onValueChange={setIndustry}
                  >
                    <SelectTrigger className="h-9 w-80 rounded-md border-neutral-950 bg-popover text-primary-foreground shadow-xs data-placeholder:text-primary-foreground/60 [&_svg]:text-primary-foreground!">
                      <SelectValue placeholder="Select..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {INDUSTRY_OPTIONS.map((option) => (
                          <SelectItem key={option} value={option}>
                            {option}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormField>

                <FormField
                  label="Monthly ad spend"
                  help={`Helps us calibrate expectations. What counts as "low volume" at $5K looks very different at $500K.`}
                >
                  <Select
                    value={monthlyAdSpend || undefined}
                    onValueChange={setMonthlyAdSpend}
                  >
                    <SelectTrigger className="h-9 w-80 rounded-md border-neutral-950 bg-popover text-primary-foreground shadow-xs data-placeholder:text-primary-foreground/60 [&_svg]:text-primary-foreground!">
                      <DollarSign className="size-4 shrink-0" />
                      <SelectValue placeholder="Select..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {MONTHLY_SPEND_OPTIONS.map((option) => (
                          <SelectItem key={option} value={option}>
                            {option}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormField>

                <div className="mt-auto flex w-80 flex-col gap-3">
                  <Button
                    type="submit"
                    variant="destructive"
                    className="rounded-md px-6"
                  >
                    Start Creative Health Check
                    <ArrowRight className="size-4" />
                  </Button>
                  {showIntroError && (
                    <p className="font-mono text-xs leading-3.5 text-destructive">
                      Please enter your brand name and industry to continue.
                    </p>
                  )}
                </div>
              </form>
            )}

            {stage === "questions" && currentQuestion && (
              <form
                onSubmit={handleQuestionSubmit}
                className="flex h-full flex-col"
              >
                <div className="flex w-full flex-col gap-4">
                  <div className="h-2 w-full rounded-full bg-blue-100">
                    <div
                      className="h-full rounded-full bg-primary transition-all duration-300"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                  <div className="type-monospaced flex items-center justify-between text-xs text-foreground uppercase">
                    <span>Question {currentQuestionIndex + 1}</span>
                    <span>
                      {currentQuestionIndex + 1} of{" "}
                      {DIAGNOSTIC_QUESTIONS.length}
                    </span>
                  </div>
                </div>

                <div className="mt-10 flex flex-col gap-6">
                  <p className="type-monospaced text-foreground uppercase">
                    {currentQuestion.area}
                  </p>
                  <p className="type-heading-3 text-foreground">
                    {currentQuestion.text}
                  </p>
                  <p className="font-mono text-xs text-foreground">
                    {currentQuestion.subtext}
                  </p>

                  <div className="mt-4 flex w-full flex-col gap-4">
                    {currentQuestion.options.map((option, optionIndex) => {
                      const isSelected = currentAnswer === option.value

                      return (
                        <Button
                          key={option.label}
                          type="button"
                          variant="outline"
                          onClick={() => handleSelectAnswer(option.value)}
                          className={cn(
                            "h-auto justify-start gap-3 rounded-md border-neutral-950 bg-popover px-3 py-2 text-left text-sm font-normal whitespace-normal text-primary-foreground shadow-xs",
                            "hover:bg-neutral-800 hover:text-primary-foreground",
                            isSelected &&
                              "bg-secondary text-secondary-foreground hover:bg-blue-400 hover:text-secondary-foreground"
                          )}
                        >
                          <span className="type-monospaced text-xs text-primary uppercase">
                            {String.fromCharCode(65 + optionIndex)}
                          </span>
                          <span className="pl-2 font-mono text-xs tracking-tight">
                            {option.label}.
                          </span>
                        </Button>
                      )
                    })}
                  </div>
                </div>

                <div className="mt-auto flex w-80 items-center gap-3 pt-8">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handlePreviousQuestion}
                    className={cn(
                      "rounded-md border-neutral-950 px-5",
                      currentQuestionIndex === 0 && "invisible"
                    )}
                  >
                    <ArrowLeft className="size-4" />
                    Back
                  </Button>
                  <Button
                    type="submit"
                    variant="destructive"
                    className="ml-auto rounded-md px-6"
                    disabled={currentAnswer === undefined}
                  >
                    {isLastQuestion ? "See My Score" : "Next"}
                    <ArrowRight className="size-4" />
                  </Button>
                </div>
              </form>
            )}

            {stage === "result" && (
              <div className="flex h-full flex-col">
                <div className="flex w-full flex-col gap-6">
                  <p className="type-monospaced text-foreground uppercase">
                    Creative health score
                  </p>

                  <div className="rounded-md border border-neutral-950 bg-popover px-6 py-5 shadow-xs">
                    <p className="font-sans text-[72px] leading-14 font-black tracking-[-1.5px] text-white">
                      {score}
                    </p>
                    <p
                      className={cn(
                        "type-monospaced mt-2 text-sm text-primary! uppercase",
                        verdict.className
                      )}
                    >
                      {verdict.label}
                    </p>
                  </div>

                  <p className="type-heading-4 text-foreground">
                    {verdict.copy}
                  </p>
                  <p className="font-mono text-xs leading-3.5 text-foreground">
                    Industry: {industry}
                    {monthlyAdSpend ? ` | Spend: ${monthlyAdSpend}` : ""}
                  </p>
                </div>

                <div className="mt-auto flex w-80 items-center gap-3 pt-8">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => {
                      setStage("questions")
                      setCurrentQuestionIndex(0)
                    }}
                    className="rounded-md border-neutral-950 px-5"
                  >
                    <ArrowLeft className="size-4" />
                    Review
                  </Button>
                  <Button
                    type="button"
                    variant="destructive"
                    onClick={handleRestart}
                    className="ml-auto rounded-md px-6"
                  >
                    Run Again
                    <ArrowRight className="size-4" />
                  </Button>
                </div>
              </div>
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
