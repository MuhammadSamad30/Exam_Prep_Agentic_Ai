"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Download } from "lucide-react";
import Link from "next/link";

const advancedPdfs = [
  {
    name: "Dynamic_Instructions.pdf",
    url: "/pdfs/advanced/Dynamic_Instructions.pdf",
  },
  { name: "Output_Types.pdf", url: "/pdfs/advanced/Output_Types.pdf" },
  { name: "Cloning.pdf", url: "/pdfs/advanced/Cloning.pdf" },
  {
    name: "Tool_Use_Behaviour.pdf",
    url: "/pdfs/advanced/Tool_Use_Behaviour.pdf",
  },
  {
    name: "Reset_Tool_Choice.pdf",
    url: "/pdfs/advanced/Reset_Tool_Choice.pdf",
  },
  { name: "Handoff_Details.pdf", url: "/pdfs/advanced/Handoff_Details.pdf" },
  { name: "Tools_Advanced.pdf", url: "/pdfs/advanced/Tools_Advanced.pdf" },
  { name: "Agent_as_Tools.pdf", url: "/pdfs/advanced/Agent_as_Tools.pdf" },
];

export default function AdvancedDownloads() {
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
        🔹 Advanced Section Downloads
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {advancedPdfs.map((pdf, index) => (
          <motion.a
            key={index}
            href={pdf.url}
            download
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, rotateX: 5, rotateY: -5 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gray-800/80 border border-gray-700 rounded-2xl shadow-xl p-6 flex items-center justify-between hover:border-blue-400 hover:shadow-blue-400/30 transition-all backdrop-blur-md"
          >
            <span className="text-base sm:text-lg font-medium text-gray-200 truncate">
              {pdf.name}
            </span>
            <Download className="text-blue-400 w-6 h-6 flex-shrink-0" />
          </motion.a>
        ))}
      </div>
    </div>
  );
}
