import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

export const getResponseFromAi = async (prompt: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: prompt,
    });

    console.log("response from ai", response);

    return response.text;
  } catch (error) {
    console.log("error in ai", error);
  }
};
