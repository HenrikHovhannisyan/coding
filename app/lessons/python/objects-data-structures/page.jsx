import React from "react";

const links = [
  {
    href: "objects-data-structures/numbers",
    title: "Числа",
    description:
      "Работа с числами в Python: целые, вещественные, комплексные числа",
  },
  {
    href: "objects-data-structures/strings",
    title: "Строки",
    description:
      "Обработка строковых данных в Python: конкатенация, срезы, методы строк",
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
