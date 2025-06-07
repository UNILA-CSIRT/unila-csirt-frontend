'use client';

import { useState } from 'react';

export default function ChatInput({ onSendMessage }) {
  const [inputMessage, setInputMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputMessage.trim()) {
      onSendMessage(inputMessage);
      setInputMessage('');
    }
  };

  return (
    <form
      className="flex items-center w-full px-4 py-2 rounded-full shadow-xl
                 bg-[#1A202C] border border-white border-opacity-30"
    >
      <input
        type="text"
        value={inputMessage}
        onChange={(e) => setInputMessage(e.target.value)}
        placeholder="Ajukan pertanyaan"
        className="flex-1 bg-transparent text-white placeholder-gray-400 focus:outline-none text-base sm:text-lg"
      />
      <button
        type="submit"
        className="ml-3 p-1 rounded-full focus:outline-none focus:ring-2 focus:ring-white/50"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-white"
        >
          <path
            d="M22 2L11 13"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M22 2L15 22L11 13L2 9L22 2Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </form>
  );
}