import Anthropic from "@anthropic-ai/sdk"
import { NextResponse } from "next/server"

const client = new Anthropic()

type DiagnosticAnswer = {
  area: string
  question: string
  selectedOption: string
  score: number
}

export type DiagnosticRequest = {
  brandName: string
  industry: string
  monthlyAdSpend?: string
  answers: DiagnosticAnswer[]
}

export type DiagnosticAnalysisResult = {
  score: number
  verdict: "Strong" | "Needs Work" | "Critical"
  verdictCopy: string
  analysis: string
}

export async function POST(request: Request) {
  const body: DiagnosticRequest = await request.json()
  const { brandName, industry, monthlyAdSpend, answers } = body

  const answersSummary = answers
    .map(
      (a, i) =>
        `${i + 1}. [${a.area}] ${a.question}\n   Selected: "${a.selectedOption}" (raw option score: ${a.score}/5)`
    )
    .join("\n\n")

  const message = await client.messages.create({
    model: "claude-haiku-4-5-20251001",
    max_tokens: 600,
    messages: [
      {
        role: "user",
        content: `You are a D2C creative performance expert evaluating a brand's creative pipeline health.

Brand: ${brandName}
Industry: ${industry}${monthlyAdSpend ? `\nMonthly Ad Spend: ${monthlyAdSpend}` : ""}

Their diagnostic answers:
${answersSummary}

Evaluate their creative health and respond with ONLY valid JSON in this exact shape:
{
  "score": <integer 0-100>,
  "verdict": <"Strong" | "Needs Work" | "Critical">,
  "verdictCopy": <one sentence summarizing their situation>,
  "analysis": <3-4 sentences — name the 1-2 biggest gaps, explain why they matter for their industry and spend level, give one concrete next step. Be direct and specific, not generic.>
}

Scoring guide: 72-100 = Strong, 45-71 = Needs Work, 0-44 = Critical. Weight hook quality and testing velocity most heavily. Calibrate expectations to their industry and spend level.`,
      },
    ],
  })

  const text =
    message.content[0].type === "text" ? message.content[0].text : "{}"

  const result: DiagnosticAnalysisResult = JSON.parse(text)

  return NextResponse.json(result)
}
