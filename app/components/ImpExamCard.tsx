import Link from "next/link"; 

const ImpExamCard = () => {
  return (
    <div className="mt-12 max-w-xl mx-auto">
      <div className="bg-gradient-to-r from-gray-900/90 to-gray-800/80 
                      backdrop-blur-md rounded-2xl shadow-2xl border border-gray-700/40 
                      p-6 mb-8 transform transition duration-300 hover:scale-105 hover:shadow-purple-700/50">
        <h4 className="text-2xl font-bold text-purple-400 mb-4 text-center">
          Important Topics
        </h4>
        <ul className="list-disc list-inside text-gray-300 text-lg space-y-2 mb-6">
          <li>Handoffs</li>
          <li>Markdown Syntax</li>
          <li>Pydantic</li>
          <li>@function_Tool</li>
          <li>Agent as Tool</li>
        </ul>
        <Link href="/exam-topics">
          <button className="w-full py-3 bg-purple-800 hover:bg-purple-700 
                             text-white font-semibold rounded-xl transition 
                             duration-300 shadow-md hover:shadow-purple-600/50">
            Take Quiz
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ImpExamCard;
