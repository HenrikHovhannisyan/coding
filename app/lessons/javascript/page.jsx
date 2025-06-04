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
    <div>
      <h1 className="text-xl font-bold mb-4 flex items-center">
        <FontAwesomeIcon icon={faJs} className="text-yellow-400 mr-2" />
        JavaScript
      </h1>
      <ul className="list-decimal list-inside space-y-2">
        {lessons.map((lesson, index) => (
          <li key={index}>
            <Link
              href={lesson.path}
              className="hover:bg-teal-600 text-white font-bold py-2 px-4 rounded inline-block"
            >
              {lesson.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Page;
