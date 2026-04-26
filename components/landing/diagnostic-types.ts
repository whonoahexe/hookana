export type DiagnosticOption = {
  label: string
  value: number
}

export type DiagnosticQuestion = {
  id: string
  area: string
  text: string
  subtext: string
  weight: number
  options: DiagnosticOption[]
}

export type DiagnosticStage = "intro" | "questions" | "result"

export type DiagnosticAIResult = {
  score: number
  verdict: "Strong" | "Needs Work" | "Critical"
  verdictCopy: string
  analysis: string
}
