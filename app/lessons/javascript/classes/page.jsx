import React from "react";

const links = [
  {
    href: "classes/basic-syntax",
    title: "Class: базовый синтаксис",
    description: "Основы синтаксиса классов в JavaScript и их использование",
  },
  {
    href: "classes/class-inheritance",
    title: "Наследование классов",
    description: "Создание иерархии классов и расширение функциональности через наследование",
  },
  {
    href: "classes/static-properties-methods",
    title: "Статические свойства и методы",
    description: "Работа со свойствами и методами, принадлежащими классу, а не его экземплярам",
  },
  {
    href: "classes/private-protected-properties-methods",
    title: "Приватные и защищённые методы и свойства",
    description: "Инкапсуляция данных и контроль доступа к свойствам и методам класса",
  },
  {
    href: "classes/instanceof",
    title: 'Проверка класса: "instanceof"',
    description: "Определение принадлежности объекта к определенному классу или его наследникам",
  },
];

const Page = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h2 className="mb-8 text-3xl font-extrabold text-center">Class</h2>

      <nav className="space-y-6">
        {links.map(({ href, title, description }) => (
          <a
            key={href}
            href={href}
            className="block p-6 rounded-xl shadow-md bg-teal-50 dark:bg-teal-900 hover:bg-teal-100 dark:hover:bg-teal-800 transition-colors duration-300"
          >
            <h3 className="text-xl font-semibold">{title}</h3>
            {description && <p className="mt-2 text-gray-600 dark:text-gray-300">{description}</p>}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default Page;
