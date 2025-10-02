"use client";

import { useState, useMemo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

// Импорт уроков
import javascriptLessons from "../data/lessons/javascript";
import pythonLessons from "../data/lessons/python";
import webTechnologiesLessons from "../data/lessons/web-technologies";
// import reactLessons from "../data/lessons/react";
// import htmlLessons from "../data/lessons/html";

const lessonsByTopic = {
  javascript: javascriptLessons,
  python: pythonLessons,
  "web-technologies": webTechnologiesLessons,
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

export default function SearchInput() {
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
          className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-500 shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-teal-400 dark:focus:ring-teal-500 dark:focus:border-teal-500 transition"
        />
      </div>

      {query && (
        <ul className="bg-white dark:bg-gray-800 rounded-lg shadow-lg max-h-64 overflow-auto mt-2 scrollbar-thin scrollbar-thumb-teal-400 scrollbar-track-gray-100 dark:scrollbar-track-gray-700 dark:scrollbar-thumb-teal-600">
          {filteredLessons.length > 0 ? (
            filteredLessons.map(({ title, path, topic }) => (
              <li key={`${topic}/${path}`}>
                <Link
                  href={`/lessons/${topic}/${path}`}
                  className="block px-4 py-3 hover:bg-teal-100 dark:hover:bg-teal-700 transition rounded-lg"
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
  );
}
