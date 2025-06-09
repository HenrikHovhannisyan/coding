"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import javascriptLessons from "../data/lessons/javascript";
// import reactLessons from "../data/lessons/react";
// import htmlLessons from "../data/lessons/html";

const lessonsByTopic = {
  javascript: javascriptLessons,
  // react: reactLessons,
  // html: htmlLessons,
};

function flattenLessons(obj, topic, prefix = "") {
  let result = [];
  for (const key in obj) {
    if (typeof obj[key] === "string") {
      result.push({
        title: prefix + key,
        path: obj[key],
        topic,
      });
    } else if (typeof obj[key] === "object") {
      result = result.concat(
        flattenLessons(obj[key], topic, prefix + key + " > ")
      );
    }
  }
  return result;
}

export default function Home() {
  const [query, setQuery] = useState("");

  const allLessons = useMemo(() => {
    let all = [];
    for (const topic in lessonsByTopic) {
      all.push(...flattenLessons(lessonsByTopic[topic], topic));
    }
    return all;
  }, []);

  const filteredLessons = allLessons.filter(({ title }) =>
    title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <main className="min-h-[calc(100vh-10rem)] flex flex-col items-center justify-center px-4">
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
          className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-6 rounded-lg shadow-md transition duration-300 dark:bg-yellow-500 dark:hover:bg-yellow-600 mb-10"
        >
          Перейти к урокам
        </Link>
      </div>

      <div className="w-full max-w-md relative">
        <div className="relative">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <FontAwesomeIcon icon={faSearch} className="h-5 w-5" />
          </div>
          <input
            type="text"
            placeholder="Поиск уроков..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-500 shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 dark:focus:ring-yellow-500 dark:focus:border-yellow-500 transition"
          />
        </div>

        {query && (
          <ul className="bg-white dark:bg-gray-800 rounded-lg shadow-lg max-h-64 overflow-auto mt-2 scrollbar-thin scrollbar-thumb-yellow-400 scrollbar-track-gray-100 dark:scrollbar-track-gray-700 dark:scrollbar-thumb-yellow-600">
            {filteredLessons.length > 0 ? (
              filteredLessons.map(({ title, path, topic }) => (
                <li
                  key={`${topic}/${path}`}
                  className="border-b last:border-b-0"
                >
                  <Link
                    href={`/lessons/${topic}/${path}`}
                    className="block px-4 py-3 hover:bg-yellow-100 dark:hover:bg-yellow-700 transition rounded-lg"
                    onClick={() => setQuery("")}
                  >
                    {title}
                  </Link>
                </li>
              ))
            ) : (
              <li className="px-4 py-3 text-gray-500 dark:text-gray-400">
                Ничего не найдено
              </li>
            )}
          </ul>
        )}
      </div>
    </main>
  );
}
