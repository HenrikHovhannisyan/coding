"use client";

import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJs } from "@fortawesome/free-brands-svg-icons";
import {
  faChevronDown,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const lessonsStructure = {
  Hosting: "hosting",
  Array: {
    Map: "array/map",
    Sort: "array/sort",
  },
};

const Page = () => {
  const [selectedPath, setSelectedPath] = useState("hosting");
  const [LessonComponent, setLessonComponent] = useState(null);
  const [openDropdowns, setOpenDropdowns] = useState({});

  useEffect(() => {
    const loadComponent = async () => {
      try {
        const mod = await import(`./${selectedPath}/page`);
        setLessonComponent(() => mod.default);
      } catch (err) {
        console.error("Error loading lesson:", err);
      }
    };
    loadComponent();
  }, [selectedPath]);

  const toggleDropdown = (key) => {
    setOpenDropdowns((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const renderLessons = (structure) =>
    Object.entries(structure).map(([title, value]) => {
      const isDropdownOpen = openDropdowns[title];

      if (typeof value === "string") {
        return (
          <li
            key={title}
            className="rounded-lg overflow-hidden bg-white dark:bg-gray-800 shadow-sm"
          >
            <button
              onClick={() => setSelectedPath(value)}
              className={`w-full flex items-center p-3 text-sm font-medium transition-colors cursor-pointer ${
                selectedPath === value
                  ? "bg-cyan-200 text-cyan-800 dark:bg-cyan-700 dark:text-white"
                  : "text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              📄 <span className="ml-2">{title}</span>
            </button>
          </li>
        );
      }

      return (
        <li
          key={title}
          className="rounded-lg overflow-hidden bg-white dark:bg-gray-800 shadow-sm"
        >
          <button
            onClick={() => toggleDropdown(title)}
            className="w-full flex items-center justify-between p-3 text-sm font-medium text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 cursor-pointer"
          >
            <div className="flex items-center">
              📂 <span className="ml-2">{title}</span>
            </div>
            <FontAwesomeIcon
              icon={isDropdownOpen ? faChevronDown : faChevronRight}
              className="text-xs"
            />
          </button>
          {isDropdownOpen && (
            <ul className="ml-4 mt-1 mb-2 border-l border-gray-200 dark:border-gray-600 pl-3 space-y-1">
              {Object.entries(value).map(([subTitle, subPath]) => (
                <li key={subTitle}>
                  <button
                    onClick={() => setSelectedPath(subPath)}
                    className={`w-full flex items-center p-2 text-sm rounded-lg transition-colors cursor-pointer ${
                      selectedPath === subPath
                        ? "bg-cyan-200 text-cyan-800 dark:bg-cyan-700 dark:text-white"
                        : "text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600"
                    }`}
                  >
                    📄 <span className="ml-2">{subTitle}</span>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </li>
      );
    });

  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen bg-gray-100 dark:bg-gray-800 p-4 gap-4">
      {/* Левый список */}
      <aside className="w-full md:w-1/3 lg:w-1/4 border border-gray-200 dark:border-gray-700 p-4 rounded-lg bg-gray-50 dark:bg-gray-900 shadow">
        <h5 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white flex items-center">
          <FontAwesomeIcon icon={faJs} className="text-yellow-400 mr-2" />
          JavaScript Lessons
        </h5>
        <ul className="space-y-3">{renderLessons(lessonsStructure)}</ul>
      </aside>

      {/* Контент урока */}
      <main className="flex-1 p-6 rounded-lg bg-white dark:bg-gray-900 shadow overflow-auto border border-gray-200 dark:border-gray-700">
        {LessonComponent ? (
          <LessonComponent />
        ) : (
          <p className="text-gray-500 dark:text-gray-400">Выберите урок...</p>
        )}
      </main>
    </div>
  );
};

export default Page;
