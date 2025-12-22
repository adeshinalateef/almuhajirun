
import { GoogleGenAI } from "@google/genai";
import { Message } from "../types";

const SYSTEM_INSTRUCTION = `
You are the Al-Muhaajirun Institute AI Assistant. 
The Institute is dedicated to teaching Islam upon the Qur’an and authentic Sunnah, according to the understanding of the Salaf aṣ-Ṣāliḥ.

Key Principles (Manhaj):
- Qur'an and authentic Sunnah as understood by the Companions.
- Giving precedence to ‘Aqeedah (belief) before other sciences.
- Gradual learning (At-Tadarruj).
- Knowledge leading to action.
- Avoiding innovations, extremism, and blind following.

Programs:
1. Student of Knowledge Program: Structured learning, memorization + explanation of classical texts (mutūn).
2. Regular Madrasah Program: For children and beginners, foundations of belief and worship.
3. Busy Mothers & Fathers Program: Focused, short lessons for working adults.
4. Da‘wah & Community Projects: Public lectures, mosque building, and resources.

Your tone: Humble, knowledgeable, professional, and respectful. 
Goal: Assist with enrollment inquiries, explain the methodology, and guide users to contact the human team for specific personal matters.
`;

export const getAIResponse = async (history: Message[]): Promise<string> => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });
    
    const contents = history.map(msg => ({
      role: msg.role === 'user' ? 'user' : 'model',
      parts: [{ text: msg.content }]
    }));

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: contents as any,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.5,
        topP: 0.9,
      },
    });

    return response.text || "I apologize, I could not process your request at this time. Please contact us directly.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I am currently experiencing technical difficulties. Please reach out to our administration team via the contact form.";
  }
};
