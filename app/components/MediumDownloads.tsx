"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Download } from "lucide-react";
import Link from "next/link";

const mediumPdfs = [
  { name: "Streaming.pdf", url: "/pdfs/medium/Streaming.pdf" },
  { name: "Guardrails.pdf", url: "/pdfs/medium/Guardrails.pdf" },
  { name: "Hooks.pdf", url: "/pdfs/medium/Hooks.pdf" },
  { name: "Structured_Output.pdf", url: "/pdfs/medium/Structured_Output.pdf" },
  { name: "Tracing.pdf", url: "/pdfs/medium/Tracing.pdf" },
  {
    name: "Orchestrating_Multiple_Agents.pdf",
    url: "/pdfs/medium/Orchestrating_Multiple_Agents.pdf",
  },
];

export default function MediumDownloads() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-6xl mb-4 flex items-center">
        <Link
          href="/"
          className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors"
        >
          <ArrowLeft className="w-6 h-6" />
          <span className="hidden sm:inline text-base font-medium">Back</span>
        </Link>
      </div>

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-2xl md:text-4xl font-bold text-white mb-10 drop-shadow-lg text-center"
      >
        🟡 Medium Section Downloads
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {mediumPdfs.map((pdf, index) => (
          <motion.a
            key={index}
            href={pdf.url}
            download
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, rotateX: 5, rotateY: -5 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gray-800/80 border border-gray-700 rounded-2xl shadow-xl p-6 flex items-center justify-between hover:border-yellow-400 hover:shadow-yellow-400/30 transition-all backdrop-blur-md"
          >
            <span className="text-base sm:text-lg font-medium text-gray-200 truncate">
              {pdf.name}
            </span>
            <Download className="text-yellow-400 w-6 h-6 flex-shrink-0" />
          </motion.a>
        ))}
      </div>
    </div>
  );
}
