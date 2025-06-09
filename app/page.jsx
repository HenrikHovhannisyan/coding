"use client";

import Link from "next/link";
import SearchInput from "@/components/SearchInput";

export default function Home() {
  return (
    <main className="min-h-[calc(100vh-10rem)] flex flex-col items-center justify-center">
      <div className="text-center mb-8 max-w-3xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 dark:text-white mb-6">
          Добро пожаловать на обучающую платформу
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-xl mx-auto">
          Изучай JavaScript, React, HTML, CSS, PHP, Laravel и SQL в удобной и
          современной среде.
        </p>
        <Link
          href="/lessons"
          className="inline-block bg-teal-400 hover:bg-teal-500 text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300 dark:bg-teal-500 dark:hover:bg-teal-600 mb-10"
        >
          Перейти к урокам
        </Link>
      </div>
      <SearchInput />
    </main>
  );
}
