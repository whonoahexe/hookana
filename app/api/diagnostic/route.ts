import { GoogleGenerativeAI } from "@google/generative-ai"
import { NextResponse } from "next/server"

const client = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!)

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

  const model = client.getGenerativeModel({
    model: "gemini-2.0-flash",
    generationConfig: {
      responseMimeType: "application/json",
      maxOutputTokens: 600,
    },
  })

  const prompt = `You are a D2C creative performance expert evaluating a brand's creative pipeline health.

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

Scoring guide: 72-100 = Strong, 45-71 = Needs Work, 0-44 = Critical. Weight hook quality and testing velocity most heavily. Calibrate expectations to their industry and spend level.`

  try {
    const { response } = await model.generateContent(prompt)
    const text = response.text()
    const result: DiagnosticAnalysisResult = JSON.parse(text)
    return NextResponse.json(result)
  } catch {
    return NextResponse.json(computeFallbackResult(answers))
  }
}

function computeFallbackResult(answers: DiagnosticAnswer[]): DiagnosticAnalysisResult {
  const avgRaw = answers.reduce((sum, a) => sum + a.score, 0) / (answers.length || 1)
  const score = Math.round((avgRaw / 5) * 100)

  const areaScores = answers.reduce<Record<string, number[]>>((acc, a) => {
    acc[a.area] = [...(acc[a.area] ?? []), a.score]
    return acc
  }, {})

  const weakestArea = Object.entries(areaScores)
    .map(([area, scores]) => ({
      area,
      avg: scores.reduce((s, v) => s + v, 0) / scores.length,
    }))
    .sort((a, b) => a.avg - b.avg)[0]?.area ?? "creative testing"

  let verdict: DiagnosticAnalysisResult["verdict"]
  let verdictCopy: string
  let analysis: string

  if (score >= 72) {
    verdict = "Strong"
    verdictCopy = "Your creative pipeline is performing well above average."
    analysis = `Your overall score of ${score}/100 reflects solid creative operations. Focus on maintaining your testing velocity and continue iterating on winning hooks. The area of ${weakestArea} still has room for improvement — shoring it up could push results further. Keep documenting what works so the team can scale it systematically.`
  } else if (score >= 45) {
    verdict = "Needs Work"
    verdictCopy = "Your creative pipeline has real gaps that are likely costing you performance."
    analysis = `Your score of ${score}/100 suggests meaningful inefficiencies in your creative process. The weakest area is ${weakestArea}, which often has an outsized impact on overall ad performance. Prioritize building a repeatable hook-testing framework before scaling spend. Fixing the fundamentals here will compound quickly once you have reliable creative infrastructure.`
  } else {
    verdict = "Critical"
    verdictCopy = "Your creative pipeline has critical gaps that need immediate attention."
    analysis = `A score of ${score}/100 indicates foundational issues in your creative operations. ${weakestArea} is the most urgent area to address — without fixing it, additional ad spend will likely underperform. Start by auditing your top-of-funnel hooks and establishing a minimum testing cadence. Getting these basics right is a prerequisite for everything else to work.`
  }

  return { score, verdict, verdictCopy, analysis }
}
