import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const LessonsList = ({
  lessonsStructure,
  selectedPath,
  setSelectedPath,
  openDropdowns,
  toggleDropdown,
}) => {
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
                    className={`w-full flex items-center p-2 text-sm rounded-lg text-left transition-colors cursor-pointer ${
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

  return <ul className="space-y-3">{renderLessons(lessonsStructure)}</ul>;
};

export default LessonsList;
