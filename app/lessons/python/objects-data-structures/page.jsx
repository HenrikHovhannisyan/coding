import React from "react";

const links = [
  {
    href: "objects-data-structures/numbers",
    title: "Числа",
    description:
      "Работа с числами в Python: целые, вещественные, арифметические операции",
  },
  {
    href: "objects-data-structures/variable-assignment",
    title: "Присвоение переменных",
    description:
      "Правила именования переменных, динамические типы данных, переопределение переменных",
  },
  {
    href: "objects-data-structures/strings",
    title: "Строки",
    description:
      "Работа со строками: создание, индексирование, методы строк, неизменность",
  },
  {
    href: "objects-data-structures/print-formatting",
    title: "Форматирование строк",
    description:
      "Форматирование строк: %, .format(), f-strings - все способы форматирования",
  },
  {
    href: "objects-data-structures/lists",
    title: "Списки",
    description:
      "Списки в Python: создание, индексирование, методы, вложенные списки",
  },
  {
    href: "objects-data-structures/dictionaries",
    title: "Словари",
    description:
      "Словари: создание, доступ по ключам, вложенные словари, основные методы",
  },
  {
    href: "objects-data-structures/tuples",
    title: "Кортежи",
    description:
      "Кортежи: неизменяемые последовательности, методы, когда использовать",
  },
  {
    href: "objects-data-structures/sets-and-booleans",
    title: "Множества и Boolean",
    description:
      "Множества для уникальных элементов и логический тип Boolean с True/False",
  },
  {
    href: "objects-data-structures/files",
    title: "Файлы",
    description:
      "Работа с файлами: открытие, чтение, запись, добавление данных, проход по файлу",
  },
];

const Page = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h2 className="mb-8 text-3xl font-extrabold text-center">
        Объекты и Структуры Данных Python
      </h2>

      <nav className="space-y-6">
        {links.map(({ href, title, description }) => (
          <a
            key={href}
            href={href}
            className="block p-6 rounded-xl shadow-md bg-teal-50 dark:bg-teal-900 hover:bg-teal-100 dark:hover:bg-teal-800 transition-colors duration-300"
          >
            <h3 className="text-xl font-semibold">{title}</h3>
            {description && (
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                {description}
              </p>
            )}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default Page;
