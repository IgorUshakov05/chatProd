import { GoogleGenerativeAI } from "@google/generative-ai";

// Используем динамический импорт для модуля got
export default async function get_answer_ai(
  request: string
): Promise<{ success: boolean; message: string }> {
  try {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const prompt =
      request +
      ", using the markdown response and respond in the user's language";
    const result = await model.generateContent(prompt);

    console.log(result.response.text());
    return { success: true, message: result.response.text() };
  } catch (e) {
    console.error("Error:", e);
    return { success: false, message: "Ошибка сервера!" };
  }
}
