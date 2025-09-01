import Link from "next/link";
import { notFound } from "next/navigation";
import { categories, getCategoryByName } from "../../../data";
import { FileDown } from "lucide-react";

export async function generateStaticParams() {
  return categories.map((category) => ({
    categoryName: category.name.toLowerCase(),
  }));
}

type CategoryPageProps = {
  params: Promise<{
    categoryName: string;
  }>;
};

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { categoryName } = await params;
  const category = getCategoryByName(categoryName);

  if (!category) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-950 py-10 px-4 sm:px-6">
      <div className="mb-10 max-w-3xl mx-auto text-center">
        <div className="flex justify-start mb-8">
          <Link
            href="/"
            className="group text-purple-400 hover:text-purple-300 font-semibold inline-flex items-center transition-all duration-200"
          >
            <span className="relative flex items-center">
              <svg
                className="w-6 h-6 mr-2 group-hover:-translate-x-2 transition-transform duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-purple-300 bg-clip-text text-transparent">
                Back to Categories
              </span>
            </span>
          </Link>
        </div>

        <h2 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-blue-300 to-purple-400 drop-shadow-lg mb-3">
          {category.name} Level
        </h2>
        <p className="text-gray-400 text-sm sm:text-base">
          {category.description}
        </p>
      </div>

      <div className="bg-gradient-to-br from-gray-900/80 via-gray-800/80 to-gray-900/80 rounded-2xl shadow-[0_8px_30px_rgba(139,92,246,0.3)] overflow-hidden max-w-3xl mx-auto border border-purple-800/30 backdrop-blur-md">
        <div className="bg-gray-950/80 px-6 py-4 border-b border-purple-800/30 flex justify-between items-center">
          <h3 className="text-xl sm:text-2xl font-semibold text-purple-300 drop-shadow-md">
            {category.name} Topics
          </h3>
          <Link
            href={category.url}
            className="text-sm text-purple-300 hover:underline"
          >
          <FileDown />
          </Link>
        </div>

        <ul className="divide-y divide-gray-800">
          {category.topics.map((topic) => (
            <li
              key={topic.id}
              className="group transition duration-300 hover:bg-gradient-to-r hover:from-purple-900/30 hover:to-blue-900/30"
            >
              <Link
                href={`/topic/${topic.id}`}
                className="flex justify-between items-center px-6 py-5 sm:py-6"
              >
                <div>
                  <h4 className="text-lg font-medium text-gray-100 group-hover:text-purple-200 transition-colors">
                    {topic.name}
                  </h4>
                  <p className="text-sm text-gray-400">
                    {topic.description}
                  </p>
                </div>
                <div className="flex items-center">
                  <span className="text-sm text-gray-400 mr-2">
                    {topic.mcqs.length} question
                    {topic.mcqs.length !== 1 ? "s" : ""}
                  </span>
                  <svg
                    className="w-6 h-6 text-purple-400 group-hover:translate-x-1 transition-transform duration-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
