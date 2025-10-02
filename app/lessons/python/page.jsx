"use client";

import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPython } from "@fortawesome/free-brands-svg-icons";

import lessonsStructure from "@/data/lessons/python";
import LessonsList from "@/components/LessonsList";

const Page = () => {
  const [selectedPath, setSelectedPath] = useState("basics/introduction");
  const [LessonComponent, setLessonComponent] = useState(null);
  const [openDropdowns, setOpenDropdowns] = useState({});

  useEffect(() => {
    const loadComponent = async () => {
      try {
        const mod = await import(`./${selectedPath}/page`);
        setLessonComponent(() => mod.default);
      } catch (err) {
        console.error("Error loading lesson:", err);
        setLessonComponent(null);
      }
    };
    loadComponent();
  }, [selectedPath]);

  const toggleDropdown = (key) => {
    setOpenDropdowns((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen gap-4">
      <aside className="w-full md:w-1/3 lg:w-1/4 border border-gray-200 dark:border-gray-700 p-2 sm:p-3 lg:p-4 rounded-lg bg-gray-50 dark:bg-gray-900 shadow">
        <h5 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white flex items-center">
          <FontAwesomeIcon icon={faPython} className="text-blue-600 mr-2" />
          Python Lessons
        </h5>
        <LessonsList
          lessonsStructure={lessonsStructure}
          selectedPath={selectedPath}
          setSelectedPath={setSelectedPath}
          openDropdowns={openDropdowns}
          toggleDropdown={toggleDropdown}
        />
      </aside>

      <main className="flex-1 p-2 sm:p-3 lg:p-4 rounded-lg bg-white dark:bg-gray-900 shadow overflow-auto border border-gray-200 dark:border-gray-700">
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
