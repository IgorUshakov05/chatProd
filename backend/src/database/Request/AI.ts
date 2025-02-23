const { GoogleGenerativeAI } = require("@google/generative-ai");

export default async function get_answer_ai(
  request: string
): Promise<{ success: boolean; message?: string; error?: string }> {
  try {
    console.log("Запрос отправлен");
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const prompt = request + ", using an answer in markdown";
    const result = await model.generateContent(prompt);
    console.log(result.response.text());
    return { success: true, message: result.response.text() };
  } catch (e) {
    return { success: false, error: "Ошибка сервера!" };
  }
}
