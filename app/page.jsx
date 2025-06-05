import Link from "next/link";

export default function Home() {
  return (
    <main className="flex justify-center px-4">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 dark:text-white mb-6">
          Добро пожаловать на обучающую платформу
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-xl mx-auto">
          Изучай JavaScript, React, HTML, CSS, PHP, Laravel и SQL в удобной и
          современной среде.
        </p>
        <Link
          href="/lessons"
          className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-6 rounded-lg shadow-md transition duration-300 dark:bg-yellow-500 dark:hover:bg-yellow-600"
        >
          Перейти к урокам
        </Link>
      </div>
    </main>
  );
}
