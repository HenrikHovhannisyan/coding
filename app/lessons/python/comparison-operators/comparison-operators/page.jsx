import React from "react";
import LessonLayout from "@/components/LessonLayout";
import CodeExample from "@/components/CodeExample";

const ComparisonOperatorsLesson = () => {
    return (
        <LessonLayout
            title="Операторы сравнения"
            page="python/comparison-operators/comparison-operators"
        >
            <section className="mb-6">
                <p className="mb-4">
                    В этой лекции мы рассмотрим операторы сравнения в Python. Эти операторы сравнивают значения и возвращают результат в виде Boolean (True или False).
                </p>

                <p className="mb-4">
                    Если у Вас есть некоторые знания математики, то эти операторы очень просты.
                </p>

                <p className="mb-4">
                    Давайте рассмотрим таблицу с операторами сравнения, а затем посмотрим на несколько примеров:
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-bold mb-4">Таблица операторов сравнения</h2>

                <p className="mb-4">В таблице ниже, a=3 и b=4.</p>

                <div className="overflow-x-auto mb-6">
                    <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600">
                        <thead>
                            <tr className="bg-gray-50 dark:bg-gray-700">
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider border-b border-gray-300 dark:border-gray-600 w-20">
                                    Оператор
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider border-b border-gray-300 dark:border-gray-600">
                                    Описание
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider border-b border-gray-300 dark:border-gray-600">
                                    Пример
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b border-gray-200 dark:border-gray-600">
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900 dark:text-gray-100">
                                    ==
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">
                                    Если значения двух операндов равны, то условие становится true.
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">
                                    (a == b) не равно true.
                                </td>
                            </tr>
                            <tr className="border-b border-gray-200 dark:border-gray-600">
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900 dark:text-gray-100">
                                    !=
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">
                                    Если значения двух операндов не равны, то условие становится true.
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">
                                    (a != b) равно true.
                                </td>
                            </tr>
                            <tr className="border-b border-gray-200 dark:border-gray-600">
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900 dark:text-gray-100">
                                    &gt;
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">
                                    Если значение левого операнда больше значения правого операнда, то условие становится true.
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">
                                    (a &gt; b) не равно true.
                                </td>
                            </tr>
                            <tr className="border-b border-gray-200 dark:border-gray-600">
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900 dark:text-gray-100">
                                    &lt;
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">
                                    Если значение левого операнда меньше значения правого операнда, то условие становится true.
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">
                                    (a &lt; b) равно true.
                                </td>
                            </tr>
                            <tr className="border-b border-gray-200 dark:border-gray-600">
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900 dark:text-gray-100">
                                    &gt;=
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">
                                    Если значение левого операнда больше или равно значению правого операнда, то условие становится true.
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">
                                    (a &gt;= b) не равно true.
                                </td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900 dark:text-gray-100">
                                    &lt;=
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">
                                    Если значение левого операнда меньше или равно значению правого операнда, то условие становится true.
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">
                                    (a &lt;= b) равно true.
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <p className="mb-4">
                    Теперь давайте посмотрим несколько примеров для каждого из них.
                </p>
            </section>

            <section className="mb-6">
                <h3 className="text-xl font-bold mb-4">Равенство</h3>

                <CodeExample
                    code={`2 == 2`}
                    output={`True`}
                />

                <CodeExample
                    code={`1 == 0`}
                    output={`False`}
                />

                <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 p-4 mb-4">
                    <p className="text-yellow-800 dark:text-yellow-200">
                        Обратите внимание, что <code>==</code> это оператор <em>сравнения</em>, а <code>=</code> это оператор <em>присваивания</em>.
                    </p>
                </div>
            </section>

            <section className="mb-6">
                <h3 className="text-xl font-bold mb-4">Не равно</h3>

                <CodeExample
                    code={`2 != 1`}
                    output={`True`}
                />

                <CodeExample
                    code={`2 != 2`}
                    output={`False`}
                />
            </section>

            <section className="mb-6">
                <h3 className="text-xl font-bold mb-4">Больше чем</h3>

                <CodeExample
                    code={`2 > 1`}
                    output={`True`}
                />

                <CodeExample
                    code={`2 > 4`}
                    output={`False`}
                />
            </section>

            <section className="mb-6">
                <h3 className="text-xl font-bold mb-4">Меньше чем</h3>

                <CodeExample
                    code={`2 < 4`}
                    output={`True`}
                />

                <CodeExample
                    code={`2 < 1`}
                    output={`False`}
                />
            </section>

            <section className="mb-6">
                <h3 className="text-xl font-bold mb-4">Больше или равно</h3>

                <CodeExample
                    code={`2 >= 2`}
                    output={`True`}
                />

                <CodeExample
                    code={`2 >= 1`}
                    output={`True`}
                />
            </section>

            <section className="mb-6">
                <h3 className="text-xl font-bold mb-4">Меньше или равно</h3>

                <CodeExample
                    code={`2 <= 2`}
                    output={`True`}
                />

                <CodeExample
                    code={`2 <= 4`}
                    output={`True`}
                />
            </section>
        </LessonLayout>
    );
};

export default ComparisonOperatorsLesson;