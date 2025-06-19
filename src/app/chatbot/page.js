"use client";

import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Image from "next/image";
// import { FaPaperPlane } from 'react-icons/fa';

const ChatPage = () => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    console.log("Pesan terkirim:", input);

    setInput("");
  };

  return (
    <div className="bg-primary-dark text-white flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow flex flex-col items-center justify-center p-6 text-center">
        <div className="mb-4">
          <Image
            src="/images/chatai.png"
            alt="Asisten CSIRT AI"
            width={100}
            height={100}
            priority
          />
        </div>

        <h1 className="text-2xl md:text-3xl font-bold mb-6 max-w-md">
          Apa yang bisa asisten CSIRT AI bantu sekarang?
        </h1>

        <form onSubmit={handleSubmit} className="w-full max-w-2xl">
          <div className="relative">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ajukan pertanyaan"
              className="w-full bg-[#0E212E] border border-gray-600 rounded-lg py-4 pl-5 pr-14 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-teal transition-all"
            />
            <button
              type="submit"
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-primary-teal transition-colors"
              aria-label="Kirim pertanyaan"
            >
              {/* <FaPaperPlane size={20} /> */}
              Kirim
            </button>
          </div>
        </form>
      </main>

      <div
        className="relative h-20 bg-primary-dark"
        style={{ marginTop: "-1px" }}
      >
        <div
          className="absolute bottom-0 right-0 w-full h-full bg-gray-50"
          style={{
            clipPath: "polygon(100% 0, 100% 100%, 0 100%)",
          }}
        ></div>
        <div className="absolute bottom-0 left-0 w-full h-full">
          <div className="container mx-auto h-full relative">
            <div
              className="absolute h-2 w-48 bg-[#13686D]"
              style={{
                top: "29%",
                left: "20%",
                transform: "rotate(-3deg)",
              }}
            ></div>
            <div
              className="absolute h-2 w-48 bg-primary-teal"
              style={{
                top: "59%",
                left: "55%",
                transform: "rotate(-3deg)",
              }}
            ></div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ChatPage;
