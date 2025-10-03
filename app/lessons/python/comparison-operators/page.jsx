import React from "react";

const links = [
    {
        href: "comparison-operators/comparison-operators",
        title: "Операторы сравнения",
        description:
            "Изучение операторов сравнения: ==, !=, >, <, >=, <= и их применение",
    },
    {
        href: "comparison-operators/chained-comparison-operators",
        title: "Соединение операторов сравнения",
        description:
            "Объединение операторов сравнения и логические операторы and, or",
    },
];

const Page = () => {
    return (
        <div className="max-w-3xl mx-auto px-4 py-10">
            <h2 className="mb-8 text-3xl font-extrabold text-center">
                Операторы Сравнения в Python
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