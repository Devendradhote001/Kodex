import { getResponseFromAi } from "@/lib/gemini";
import { GenerateSummaryBody } from "@/types/ai.types";
import { ApiResponse } from "@/types/api.types";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    let body: GenerateSummaryBody = await req.json();

    let { experienceLevel, jobTitle } = body;

    if (!experienceLevel || !jobTitle)
      return NextResponse.json<ApiResponse>(
        {
          success: false,
          message: "All fields are required",
        },
        {
          status: 400,
        },
      );

    const prompt = `
You are an expert professional resume writer and ATS optimization specialist.

Candidate Information:
- Experience Level: ${experienceLevel}
- Target Job Title: ${jobTitle}

Generate a professional resume summary for this candidate.

Instructions:
1. Keep the summary between 50 and 80 words.
2. Mention the target job title naturally.
3. Adjust the writing style and level of responsibility based on the experience level.
4. Include relevant keywords associated with the target job title.
5. Make the summary ATS-friendly and recruiter-friendly.
6. Focus on professional value, expertise, and career relevance.
7. Do not invent specific achievements, companies, technologies, certifications, education, or years of experience.
8. Do not use first-person pronouns.
9. Avoid unnecessary buzzwords and generic statements.
10. Do not use bullet points.
11. Return only the summary text with no headings, explanations, or quotation marks.
`;

    let result = await getResponseFromAi(prompt);

    return NextResponse.json<ApiResponse>(
      {
        success: true,
        message: "Summary generated",
        data: {
          summary: result,
        },
      },
      {
        status: 201,
      },
    );
  } catch (error) {
    return NextResponse.json<ApiResponse>(
      {
        success: false,
        message: "Internal server error",
      },
      {
        status: 500,
      },
    );
  }
}
