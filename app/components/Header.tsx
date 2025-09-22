"use client";

import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const hideHeader = /^\/topic\/\d+$/.test(pathname);

  if (hideHeader) return null;

  return (
    <header className="bg-black/70 backdrop-blur-md text-white py-4 shadow-lg sticky top-0 z-20 border-b border-purple-700/40">
      <div className="container mx-auto px-3 flex flex-col items-center">
        <h1 className="text-2xl sm:text-3xl font-bold tracking-wide drop-shadow-[0_2px_4px_rgba(168,85,247,0.6)]">
          🎓 Exam Prep Agentic
        </h1>
        <p className="text-sm sm:text-base text-purple-300/80 mt-1 text-center">
          Study smarter, level up faster
        </p>
      </div>
    </header>
  );
}
