import React from "react";
import LessonLayout from "@/components/LessonLayout";
import CodeExample from "@/components/CodeExample";

const NumbersLesson = () => {
    return (
        <LessonLayout
            title="Числа в Python"
            page="python/objects-data-structures/numbers"
        >
            <section className="mb-6">
                <p className="text-lg mb-4">
                    В этой лекции Вы узнаете, как работать с числами в Python.
                </p>
                
                <p className="mb-4">Вы изучите следующие темы:</p>
                <ol className="list-decimal list-inside mb-6">
                    <li>Типы чисел в Python</li>
                    <li>Основные арифметические действия</li>
                    <li>Различие между классическим делением и целочисленным делением</li>
                </ol>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-bold mb-4">Типы чисел</h2>

                <p className="mb-4">
                    В Python есть различные "типы" чисел (числовых литералов). В основном мы будем работать с 
                    целыми числами (integers) и числами с плавающей точкой (floating point numbers).
                </p>

                <p className="mb-4">
                    Integers - это целые числа, положительные или отрицательные. 
                    Например: 2 и -2 это примеры целых чисел.
                </p>

                <p className="mb-4">
                    Числа с плавающей точкой в Python отличаются тем, что имеют разделитель целой и дробной части, 
                    или использует экспоненту (e) для определения числа. Например, 2.0 и -2.1 - это примеры чисел с плавающей точкой. 
                    Число 4E2 - это тоже пример числа с плавающей точкой в Python. 
                    Формат 4E2 означает следующее: 4 умножить на 10 в степени 2, то есть число 400.0
                </p>

                <p className="mb-4">
                    В этом курсе мы будем в основном работать с целыми числами или простыми типами чисел с плавающей точкой.
                </p>

                <p className="mb-4">Примеры чисел приведены в таблице ниже:</p>

                <div className="overflow-x-auto mb-6">
                    <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600">
                        <thead>
                            <tr className="bg-gray-50 dark:bg-gray-700">
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider border-b border-gray-300 dark:border-gray-600">
                                    Примеры
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider border-b border-gray-300 dark:border-gray-600">
                                    "Тип" числа
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b border-gray-200 dark:border-gray-600">
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">
                                    1,2,-5,1000
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">
                                    Целые числа<br/>(Integers)
                                </td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">
                                    1.2,-0.5,2e2,3E2
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">
                                    Числа с плавающей точкой<br/>(Floating-point numbers)
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <p className="mb-4">Далее давайте рассмотрим основные арифметические действия.</p>
            </section>

            <section className="mb-6">
                <h3 className="text-xl font-bold mb-4">Основные арифметические действия</h3>

                <p className="mb-2 font-semibold">Сложение</p>
                <CodeExample
                    code={`2+1`}
                    output={`3`}
                />

                <p className="mb-2 font-semibold">Вычитание</p>
                <CodeExample
                    code={`2-1`}
                    output={`1`}
                />

                <p className="mb-2 font-semibold">Умножение</p>
                <CodeExample
                    code={`2*2`}
                    output={`4`}
                />

                <p className="mb-2 font-semibold">Деление</p>
                <CodeExample
                    code={`3/2`}
                    output={`1.5`}
                />

                <p className="mb-2 font-semibold">Целочисленное деление (Floor Division)</p>
                <CodeExample
                    code={`7//4`}
                    output={`1`}
                />

                <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 p-4 my-4">
                    <p className="text-yellow-800 dark:text-yellow-200 font-bold">
                        Вот это да! Что случилось? Казалось бы, 7 разделить на 4 равно 1.75, а не 1!
                    </p>
                    <p className="text-yellow-700 dark:text-yellow-300 mt-2">
                        Дело в том, что здесь мы используем <em>"целочисленное"</em> деление. 
                        Оператор // (два прямых слеша) отбрасывает дробную часть без округления, 
                        и мы получаем целое число.
                    </p>
                </div>

                <p className="mb-2 font-semibold">Что если мы хотим узнать остаток от деления?</p>

                <p className="mb-2 font-semibold">Остаток</p>
                <CodeExample
                    code={`7%4`}
                    output={`3`}
                />

                <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
                    Число 4 содержится внутри числа 7 один раз, и оставшаяся часть равна 3. 
                    Оператор % возвращает остаток от деления.
                </p>
            </section>

            <section className="mb-6">
                <h3 className="text-xl font-bold mb-4">Арифметика - продолжение</h3>

                <p className="mb-2 font-semibold">Возведение в степень</p>
                <CodeExample
                    code={`2**3`}
                    output={`8`}
                />

                <p className="mb-2 font-semibold">Этим же способом можно извлекать корень</p>
                <CodeExample
                    code={`4**0.5`}
                    output={`2.0`}
                />

                <p className="mb-2">В Python соблюдается порядок операций - например, умножение выполняется раньше, чем сложение</p>
                <CodeExample
                    code={`2 + 10 * 10 + 3`}
                    output={`105`}
                />

                <p className="mb-2">Можно использовать скобки, чтобы указать нужный порядок выполнения операций</p>
                <CodeExample
                    code={`(2+10) * (10+3)`}
                    output={`156`}
                />
            </section>

            <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-400 p-4 mt-8">
                <p className="text-green-700 dark:text-green-300">
                    Итак, мы изучили основы работы с числами в Python. Мы посмотрели, как выполнять арифметические операции, 
                    и использовать Python в качестве калькулятора.
                </p>
            </div>
        </LessonLayout>
    );
};

export default NumbersLesson;