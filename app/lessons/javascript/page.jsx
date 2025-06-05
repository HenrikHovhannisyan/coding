"use client";

import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJs } from "@fortawesome/free-brands-svg-icons";

const lessons = [
  { title: "Hoisting", path: "/lessons/javascript/hosting" },
  // { title: "Array.map()", path: "/lessons/javascript/array/map" },
];

const Page = () => {
  return (
    <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 dark:bg-gray-800 dark:border-gray-700">
      <h5 className="mb-3 text-base font-semibold text-gray-900 md:text-xl dark:text-white">
        <FontAwesomeIcon icon={faJs} className="text-yellow-400 mr-2" />
        JavaScript
      </h5>
      <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
        Connect with one of our available wallet providers or create a new one.
      </p>
      <ul className="my-4 space-y-3">
        {lessons.map((lesson, index) => (
          <li key={index}>
            <Link
              href={lesson.path}
              className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
            >
              {index + 1}
              <span className="flex-1 ms-3 whitespace-nowrap">
                {lesson.title}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Page;
