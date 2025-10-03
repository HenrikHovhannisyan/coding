import React from "react";

const links = [
  {
    href: "python-statements/introduction-to-python-statements",
    title: "Введение в операторы Python",
    description:
      "Основы синтаксиса Python: отступы, двоеточия, отличия от других языков программирования",
  },
  {
    href: "python-statements/if-elif-else-statements",
    title: "Операторы if, elif, else",
    description:
      "Условные операторы в Python: принятие решений в коде, множественные условия",
  },
  {
    href: "python-statements/for-loops",
    title: "Циклы for",
    description:
      "Итерации в Python: циклы по спискам, строкам, словарям, распаковка кортежей",
  },
  {
    href: "python-statements/while-loops",
    title: "Циклы while",
    description:
      "Циклы с условием: while, break, continue, pass, предотвращение бесконечных циклов",
  },
  {
    href: "python-statements/useful-operators",
    title: "Полезные операторы",
    description:
      "Встроенные функции Python: range, enumerate, zip, in, min/max, random, input",
  },
  {
    href: "python-statements/list-comprehension",
    title: "Генераторы списков",
    description:
      "List Comprehensions: создание списков с помощью компактного синтаксиса, условия и вложенные генераторы",
  },
];

const Page = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h2 className="mb-8 text-3xl font-extrabold text-center">
        Операторы Python
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