import type { Metadata } from "next";
import { Orbitron } from "next/font/google";
import "./globals.css";
import Header from "./components/Header"; // 👈 import

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
});

export const metadata: Metadata = {
  title: "Exam Prep Agentic",
  description: "Smart 3D study companion",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${orbitron.variable}`}>
      <body className="antialiased bg-black min-h-screen text-gray-100 font-sans flex flex-col">
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute top-10 left-10 w-40 h-40 bg-purple-600/20 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-blue-600/20 rounded-full blur-2xl animate-ping"></div>
        </div>

        <Header />

        <main className="flex-grow container mx-auto px-4 py-6 sm:py-8">
          <div className="rounded-xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 backdrop-blur-md border border-purple-700/30 shadow-[0_4px_20px_rgba(139,92,246,0.25)] p-4 sm:p-6 hover:shadow-[0_8px_30px_rgba(139,92,246,0.4)]">
            {children}
          </div>
        </main>

        <footer className="bg-black/70 text-gray-400 py-4 border-t border-purple-700/40 text-center">
          <p className="text-xs sm:text-sm tracking-wide">
            &copy; {new Date().getFullYear()} Exam Prep Agentic | Success in
            style 🚀
          </p>
        </footer>
      </body>
    </html>
  );
}
