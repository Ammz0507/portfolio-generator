"use client";
import { useState } from "react";
import MarkdownInput from "@/components/MarkdownInput";
import MarkdownPreview from "@/components/MarkdownPreview";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import Navbar from "@/components/Navbar";
import "../styles/globals.css";

export default function HomePage() {
  const [md, setMd] = useState("");

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-indigo-900 via-purple-900 to-sky-900 flex flex-col">
      <Navbar />
      <main className="mx-auto w-full max-w-4xl bg-white/5 rounded-2xl shadow-2xl backdrop-blur-xl p-10 mt-14 border border-indigo-200/30">
        <div className="flex flex-col items-center md:flex-row md:justify-between mb-10 gap-4">
          <h1 className="text-5xl md:text-6xl font-extrabold text-center md:text-left text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 drop-shadow">
            Portfolio Generator
          </h1>
          <div className="relative">
            <ThemeSwitcher />
            {/* Add any extra button or icon here */}
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <label className="block mb-3 text-lg font-semibold text-indigo-200 select-none">Paste your Markdown</label>
            <div className="rounded-xl ring-2 ring-pink-400/40 shadow-xl bg-slate-900/60">
              <MarkdownInput
                value={md}
                onChange={setMd}
              />
            </div>
          </div>
          <div>
            <label className="block mb-3 text-lg font-semibold text-cyan-300 select-none">Live Preview</label>
            <div className="bg-slate-800/90 rounded-xl p-4 min-h-[180px] border border-cyan-400/40 shadow-inner overflow-x-auto">
              <MarkdownPreview content={md} />
            </div>
          </div>
        </div>
      </main>
      <footer className="text-center mt-12 mb-3 text-indigo-200/60 text-sm">
        Made using <span className="text-pink-400 font-semibold">Next.js</span> & <span className="text-cyan-300 font-semibold">Tailwind CSS</span>
      </footer>
    </div>
  );
}
