import React from "react";
import LessonLayout from "@/components/LessonLayout";
import CodeExample from "@/components/CodeExample";

const IntroductionToPythonStatementsLesson = () => {
    return (
        <LessonLayout
            title="Введение в операторы Python"
            page="python/python-statements/introduction-to-python-statements"
        >
            <section className="mb-6">
                <p className="mb-4">
                    В этой лекции мы сделаем обзор операторов Python, а также отметим основные отличия между Python и другими языками программирования, такими как C++.
                </p>

                <p className="mb-4">Для такого подхода есть две причины:</p>
                <ol className="list-decimal list-inside mb-6 space-y-2">
                    <li>Если Вы знаете другой язык программирования, то Вы быстро освоите основы Python.</li>
                    <li>Изучение операторов позволит Вам легче читать код на других языках программирования.</li>
                </ol>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-bold mb-4">Python и другие языки программирования</h2>

                <p className="mb-4">
                    Давайте напишем простое условие сравнения:<br />
                    "Если a больше b, то присвоит a значение 2, и b значение 4"
                </p>

                <p className="mb-4">
                    И посмотрим две версии, как можно написать оператор if (мы изучим оператор if более подробно чуть позже).
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                        <h3 className="font-bold text-gray-800 dark:text-gray-200 mb-3">Версия 1 (другие языки)</h3>
                        <pre className="bg-gray-100 dark:bg-gray-700 p-3 rounded text-sm font-mono overflow-x-auto">
                            {`if (a>b){
    a = 2;
    b = 4;
}`}
                        </pre>
                    </div>

                    <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                        <h3 className="font-bold text-green-800 dark:text-green-200 mb-3">Версия 2 (Python)</h3>
                        <pre className="bg-green-100 dark:bg-green-800 p-3 rounded text-sm font-mono overflow-x-auto">
                            {`if a>b:
    a = 2
    b = 4`}
                        </pre>
                    </div>
                </div>

                <p className="mb-4">
                    Можно заметить, что код в Python более компактный и лучше читается, по сравнению с первой версией. За счёт чего это происходит в Python?
                </p>

                <p className="mb-4">Давайте рассмотрим основные отличия:</p>

                <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-400 p-4 mb-6">
                    <p className="text-blue-800 dark:text-blue-200 mb-3">
                        <strong>Основные отличия Python:</strong>
                    </p>
                    <ul className="list-disc list-inside text-blue-700 dark:text-blue-300 space-y-2">
                        <li>Python не использует <code>( )</code> и <code>{"{ }"}</code>, вместо этого используются <em>двоеточие</em> и <em>пробелы</em></li>
                        <li>Оператор if завершается двоеточием</li>
                        <li>Используются пробелы (отступы) для кода, который должен быть выполнен</li>
                        <li>Отсутствие точек с запятой - конец строки означает окончание команды</li>
                    </ul>
                </div>

                <p className="mb-4">
                    Python не использует ( ) и {"{ }"}, вместо этого используются два элемента: <em>двоеточие</em> и <em>пробелы</em>. Оператор if завершается двоеточием, и далее используются пробелы (отступы) для кода, который должен быть выполнен в случае, если выполняется условие if.
                </p>

                <p className="mb-4">
                    Другое отличие - отсутствие точек с запятой в Python. Во многих других языках программирования, точки с запятой означают окончание команды. Однако в Python, конец строки это то же самое, что и окончание команды.
                </p>

                <p className="mb-4">
                    И чтобы завершить этот краткий обзор отличий, давайте взглянем подробнее на синтаксис отступов, сравнив Python с другими языками:
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-bold mb-4">Отступы</h2>

                <p className="mb-4">Псевдо-код ниже показывает использование пробелов и отступов в Python:</p>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                        <h3 className="font-bold text-gray-800 dark:text-gray-200 mb-3">другие языки</h3>
                        <pre className="bg-gray-100 dark:bg-gray-700 p-3 rounded text-sm font-mono overflow-x-auto">
                            {`if (x)
    if(y)
        code-statement;
else
    another-code-statement;`}
                        </pre>
                    </div>

                    <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                        <h3 className="font-bold text-green-800 dark:text-green-200 mb-3">Python</h3>
                        <pre className="bg-green-100 dark:bg-green-800 p-3 rounded text-sm font-mono overflow-x-auto">
                            {`if x:
    if y:
        code-statement
else:
    another-code-statement`}
                        </pre>
                    </div>
                </div>

                <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-400 p-4 mb-6">
                    <p className="text-red-800 dark:text-red-200 font-bold">
                        Важно!
                    </p>
                    <p className="text-red-700 dark:text-red-300 mt-2">
                        Обратите внимание, что в Python отступы ОЧЕНЬ важны. Это значит, что читаемость кода является ключевым элементом дизайна языка Python.
                    </p>
                </div>

                <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 p-4 mb-6">
                    <h3 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">Правила отступов в Python:</h3>
                    <ul className="list-disc list-inside text-yellow-700 dark:text-yellow-300 space-y-1">
                        <li>Используйте 4 пробела для каждого уровня отступа</li>
                        <li>Не смешивайте пробелы и табуляцию</li>
                        <li>Все строки на одном уровне должны иметь одинаковый отступ</li>
                        <li>Отступы определяют структуру программы</li>
                    </ul>
                </div>

                <h3 className="text-xl font-bold mb-3">Практический пример отступов</h3>

                <CodeExample
                    code={`# Пример правильных отступов в Python
x = 10
y = 5

if x > y:
    print("x больше y")
    if x > 8:
        print("x также больше 8")
        result = x * 2
    else:
        print("x меньше или равно 8")
        result = x + y
else:
    print("x меньше или равно y")
    result = y

print("Результат:", result)`}
                    output={`x больше y
x также больше 8
Результат: 20`}
                />
            </section>
        </LessonLayout>
    );
};

export default IntroductionToPythonStatementsLesson;