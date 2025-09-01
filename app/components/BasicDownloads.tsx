"use client";

import { motion } from "framer-motion";
import { Download, ArrowLeft } from "lucide-react";
import Link from "next/link";

const basicPdfs = [
  { name: "Agents.pdf", url: "/pdfs/basic/Agents.pdf" },
  { name: "Agent_Configuration.pdf", url: "/pdfs/basic/Agent_Configuration.pdf" },
  { name: "Tools.pdf", url: "/pdfs/basic/Tools.pdf" },
  { name: "Context.pdf", url: "/pdfs/basic/Context.pdf" },
  { name: "Model_Settings.pdf", url: "/pdfs/basic/Model_Settings.pdf" },
  { name: "Handoff.pdf", url: "/pdfs/basic/Handoff.pdf" },
  { name: "Runner.pdf", url: "/pdfs/basic/Runner.pdf" },
];

export default function BasicDownloads() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 flex flex-col items-center justify-center p-4 sm:p-6">
      {/* Back Icon */}
      <div className="w-full max-w-6xl mb-4 flex items-center">
        <Link href="/" className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors">
          <ArrowLeft className="w-6 h-6" />
          <span className="hidden sm:inline text-base font-medium">Back</span>
        </Link>
      </div>

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-8 sm:mb-10 drop-shadow-lg text-center"
      >
        📘 Basic Section Downloads
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 w-full max-w-6xl">
        {basicPdfs.map((pdf, index) => (
          <motion.a
            key={index}
            href={pdf.url}
            download
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, rotateX: 5, rotateY: -5 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gray-800/80 border border-gray-700 rounded-2xl shadow-xl p-4 sm:p-6 flex items-center justify-between hover:border-blue-500 hover:shadow-blue-500/30 transition-all backdrop-blur-md"
          >
            <span className="text-sm sm:text-base md:text-lg font-medium text-gray-200 truncate">
              {pdf.name}
            </span>
            <Download className="text-blue-400 w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
          </motion.a>
        ))}
      </div>
    </div>
  );
}
