import { useState } from "react";
import { useSpeechSynthesis } from "react-speech-kit";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY
});

export default function ChatArea() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const { speak } = useSpeechSynthesis();

  const sendMessage = async () => {
    if (!input) return;
    const userMsg = { role: "user", content: input };
    setMessages([...messages, userMsg]);
    setInput("");

    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [...messages, userMsg]
    });

    const reply = response.choices[0].message;
    setMessages([...messages, userMsg, reply]);
    speak({ text: reply.content });
  };

  return (
    <div className="flex-1 p-6 overflow-y-auto flex flex-col">
      <div className="flex-1 space-y-4">
        {messages.map((msg, i) => (
          <div key={i} className={`p-4 rounded-lg w-fit ${msg.role === "user" ? "bg-blue-100 self-end" : "bg-gray-100 self-start"}`}>
            {msg.content}
          </div>
        ))}
      </div>
      <div className="mt-4 flex">
        <input
          type="text"
          placeholder="Écrire un message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 bg-white border px-3 py-2 rounded-l-lg outline-none"
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button onClick={sendMessage} className="ml-2 px-4 py-2 bg-blue-600 text-white rounded-r-lg">
          Envoyer
        </button>
      </div>
    </div>
  );
}
