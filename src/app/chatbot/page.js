'use client';

import { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ChatInput from '../../components/chatbot/ChatInput'; 

export default function ChatbotPage() {
  const [messages, setMessages] = useState([]);

  const handleSendMessage = (message) => {
    if (!message.trim()) return;

    setMessages(prevMessages => [...prevMessages, { id: Date.now(), text: message, sender: 'user' }]);
  };

  return (
    <div className="min-h-screen flex flex-col relative text-white
                    bg-[#0A111E] 
                    bg-gradient-to-b from-transparent via-[#13686D]/20 to-[#1DBBB7]/30 
    ">
      <Navbar />

      <main className="flex-1 flex flex-col items-center justify-between py-8 px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col items-center justify-center flex-grow z-10 w-full max-w-2xl mx-auto">
          {messages.length === 0 && ( <>
              <img
                src="/images/chatai.png"
                alt="CSIRT AI Assistant"
                className="w-24 h-24 sm:w-32 sm:h-32 mb-0 animate-bounce-slow object-contain object-center"
              />
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-0">
                Apa yang bisa <span className="text-[#1DBBB7]">Asisten CSIRT AI</span> bantu sekarang?
              </h1>
            </>
          )}

          {messages.length > 0 && (
            <div className="w-full flex-grow overflow-y-auto space-y-4 mb-8 p-4 bg-gray-900 bg-opacity-50 rounded-lg shadow-inner max-h-[calc(100vh-250px)]">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[70%] p-3 rounded-lg ${
                      msg.sender === 'user'
                        ? 'bg-gray-800 text-white rounded-br-none'
                        : 'bg-gray-800 text-gray-300 rounded-bl-none'
                    }`}
                  >
                    <p className="text-sm sm:text-base">{msg.text}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="w-full max-w-2xl mx-auto z-10 sticky bottom-0 py-4">
          <ChatInput onSendMessage={handleSendMessage} />
        </div>
      </main>

      <Footer />
    </div>
  );
}