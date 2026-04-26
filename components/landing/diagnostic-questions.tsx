"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ArrowLeft, ArrowRight } from "lucide-react"
import type { DiagnosticQuestion } from "./diagnostic-types"
import { DIAGNOSTIC_QUESTIONS } from "./diagnostic-data"

type Props = {
  currentQuestion: DiagnosticQuestion
  currentQuestionIndex: number
  currentAnswer: number | undefined
  progress: number
  isLastQuestion: boolean
  onSelectAnswer: (value: number) => void
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
  onPrevious: () => void
}

export function DiagnosticQuestions({
  currentQuestion,
  currentQuestionIndex,
  currentAnswer,
  progress,
  isLastQuestion,
  onSelectAnswer,
  onSubmit,
  onPrevious,
}: Props) {
  return (
    <form onSubmit={onSubmit} className="flex h-full flex-col">
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
            {currentQuestionIndex + 1} of {DIAGNOSTIC_QUESTIONS.length}
          </span>
        </div>
      </div>

      <div className="mt-10 flex flex-col gap-6">
        <p className="type-monospaced text-foreground uppercase">
          {currentQuestion.area}
        </p>
        <p className="type-heading-3 text-foreground">{currentQuestion.text}</p>
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
                onClick={() => onSelectAnswer(option.value)}
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
          onClick={onPrevious}
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
  )
}
