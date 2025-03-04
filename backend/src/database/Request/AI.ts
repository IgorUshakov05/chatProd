import { GoogleGenerativeAI } from "@google/generative-ai";

// Создаем объект чата перед функцией (можно хранить глобально или передавать из хранилища)
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
const chatSession = model.startChat({ history: [] });
interface History {
  role: "user" | "model";
  parts: any;
}
export default async function get_answer_ai(
  request: string,
  chatID?: string
): Promise<{ success: boolean; message: string }> {
  try {
    let history = await chatSession.getHistory();
    console.log(history[history.length - 1]);
    const prompt =
      request +
      ", using the markdown response and respond in the user's language";

    const result = await chatSession.sendMessage(prompt);

    const responseText = result.response.text();
    console.log(responseText);

    return { success: true, message: responseText };
  } catch (e) {
    console.error("Error:", e);
    return { success: false, message: "Ошибка сервера!" };
  }
}
