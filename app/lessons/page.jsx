import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { lessons } from "@/data/lessons/list";

const page = () => {
  return (
    <>
      <h1 className="text-2xl font-bold mb-6 text-center">Уроки</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {lessons.map((lesson, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 p-5 flex flex-col"
          >
            <div className="flex items-center mb-2">
              <FontAwesomeIcon
                icon={lesson.icon}
                className={`w-10 h-10 mr-2 ${lesson.color}`}
                fixedWidth
              />
              <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                {lesson.title}
              </h5>
            </div>
            <p className="mb-4 text-gray-700 dark:text-gray-400 flex-grow">
              {lesson.description}
            </p>
            <Link
              href={lesson.href}
              className="mt-auto inline-block bg-teal-400 hover:bg-teal-500 text-white font-bold py-2 px-4 rounded text-center"
            >
              Начать урок
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default page;
