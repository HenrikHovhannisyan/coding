import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faJs,
  faReact,
  faHtml5,
  faCss3Alt,
  faPhp,
  faLaravel,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

const lessons = [
  {
    title: "JavaScript",
    icon: faJs,
    href: "/lessons/javascript",
    color: "text-yellow-400",
    description:
      "JavaScript — мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили.",
  },
  {
    title: "React",
    icon: faReact,
    href: "/lessons/react",
    color: "text-blue-400",
    description:
      "React — это библиотека JavaScript для создания пользовательских интерфейсов. Подходит для создания одностраничных приложений.",
  },
  {
    title: "HTML",
    icon: faHtml5,
    href: "/lessons/html",
    color: "text-orange-500",
    description:
      "HTML — стандартный язык разметки документов для просмотра веб-страниц в браузере.",
  },
  {
    title: "CSS",
    icon: faCss3Alt,
    href: "/lessons/css",
    color: "text-blue-500",
    description:
      "CSS — язык таблиц стилей, используемый для описания внешнего вида документа, написанного на HTML.",
  },
  {
    title: "PHP",
    icon: faPhp,
    href: "/lessons/php",
    color: "text-indigo-600",
    description:
      "PHP — популярный язык сценариев общего назначения, особенно подходящий для веб-разработки.",
  },
  {
    title: "Laravel",
    icon: faLaravel,
    href: "/lessons/laravel",
    color: "text-red-500",
    description:
      "Laravel — популярный PHP-фреймворк для разработки веб-приложений с чистым и элегантным синтаксисом.",
  },
  {
    title: "SQL",
    icon: faDatabase,
    href: "/lessons/sql",
    color: "text-green-600",
    description:
      "SQL — язык структурированных запросов, предназначенный для управления данными в реляционных базах данных.",
  },
];

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
            <FontAwesomeIcon
              icon={lesson.icon}
              className={`text-4xl mb-4 ${lesson.color}`}
            />
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              {lesson.title}
            </h5>
            <p className="mb-4 text-gray-700 dark:text-gray-400 flex-grow">
              {lesson.description}
            </p>
            <Link
              href={lesson.href}
              className="mt-auto inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded text-center"
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
