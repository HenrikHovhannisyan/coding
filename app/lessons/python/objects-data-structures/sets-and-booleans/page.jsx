import React from "react";
import LessonLayout from "@/components/LessonLayout";
import CodeExample from "@/components/CodeExample";

const SetsAndBooleansLesson = () => {
    return (
        <LessonLayout
            title="Множества (Sets) и логический тип Boolean"
            page="python/objects-data-structures/sets-and-booleans"
        >
            <section className="mb-6">
                <p className="mb-4">
                    В Python есть еще два важных типа данных: множества (Sets) и логический тип (Boolean).
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-bold mb-4">Множества (Sets)</h2>
                
                <p className="mb-4">
                    Множества это неупорядоченный набор <em>уникальных</em> элементов. Мы можем создать их с помощью функции set(). Давайте создадим множество и посмотрим, как они работают:
                </p>

                <CodeExample
                    code={`x = set()`}
                    output={``}
                />

                <p className="mb-2 font-semibold">Мы добавляем элементы в множество с помощью метода add()</p>
                <CodeExample
                    code={`x.add(1)`}
                    output={``}
                />

                <p className="mb-2 font-semibold">Проверка</p>
                <CodeExample
                    code={`x`}
                    output={`{1}`}
                />

                <p className="mb-4">
                    Обратите внимание на фигурные скобки. Здесь это не означает словарь! Хотя некоторую аналогию провести можно, представив себе множество как словарь, состоящий только из ключей.
                </p>

                <p className="mb-4">
                    Как мы знаем, множество содержит только уникальные элементы. Что будет, если мы добавим в множество элемент, который там уже есть?
                </p>

                <p className="mb-2 font-semibold">Добавляем второй элемент</p>
                <CodeExample
                    code={`x.add(2)`}
                    output={``}
                />

                <p className="mb-2 font-semibold">Проверка</p>
                <CodeExample
                    code={`x`}
                    output={`{1, 2}`}
                />

                <p className="mb-2 font-semibold">Попытаемся добавить первый элемент еще раз</p>
                <CodeExample
                    code={`x.add(1)`}
                    output={``}
                />

                <p className="mb-2 font-semibold">Проверка</p>
                <CodeExample
                    code={`x`}
                    output={`{1, 2}`}
                />

                <p className="mb-4">
                    Обратите внимание, что ещё одна единица не была добавлена. Это потому, что множество содержит только уникальные элементы! Так что мы можем, например, взять список и привести его к множеству, чтобы получить уникальные элементы:
                </p>

                <p className="mb-2 font-semibold">Создаем список с повторяющимися значениями</p>
                <CodeExample
                    code={`list1 = [1,1,2,2,3,4,5,6,1,1]`}
                    output={``}
                />

                <p className="mb-2 font-semibold">Приводим это к множеству, чтобы получить уникальные значения</p>
                <CodeExample
                    code={`set(list1)`}
                    output={`{1, 2, 3, 4, 5, 6}`}
                />

                <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-400 p-4 mb-4">
                    <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Основные свойства множеств:</h3>
                    <ul className="list-disc list-inside text-blue-700 dark:text-blue-300 space-y-1">
                        <li><strong>Уникальность</strong> - каждый элемент встречается только один раз</li>
                        <li><strong>Неупорядоченность</strong> - элементы не имеют определенного порядка</li>
                        <li><strong>Изменяемость</strong> - можно добавлять и удалять элементы</li>
                        <li><strong>Быстрый поиск</strong> - проверка принадлежности элемента очень быстрая</li>
                    </ul>
                </div>

                <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 p-4 mb-4">
                    <h3 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">Практические применения множеств:</h3>
                    <ul className="list-disc list-inside text-yellow-700 dark:text-yellow-300 space-y-1">
                        <li>Удаление дубликатов из списка</li>
                        <li>Проверка пересечений между коллекциями</li>
                        <li>Математические операции (объединение, пересечение, разность)</li>
                        <li>Быстрая проверка принадлежности элемента</li>
                    </ul>
                </div>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-bold mb-4">Логический тип (Boolean)</h2>
                
                <p className="mb-4">
                    В Python есть логический тип Boolean, со значениями True (истинно) и False (ложно), которые по сути хранятся как числа 1 и 0. Также есть значение-placeholder под названием None. Давайте посмотрим несколько примеров для Boolean (мы ещё рассмотрим их более подробно позднее в этом курсе).
                </p>

                <p className="mb-2 font-semibold">Устанавливаем объект в значение с типом boolean</p>
                <CodeExample
                    code={`a = True`}
                    output={``}
                />

                <p className="mb-2 font-semibold">Проверка</p>
                <CodeExample
                    code={`a`}
                    output={`True`}
                />

                <p className="mb-4">
                    Мы можем также использовать операторы сравнения, чтобы создавать объекты boolean. Мы изучим операторы сравнения позднее в этом курсе.
                </p>

                <p className="mb-2 font-semibold">Результат это boolean</p>
                <CodeExample
                    code={`1 > 2`}
                    output={`False`}
                />

                <p className="mb-4">
                    Мы можем указать значение None для объекта, которому мы пока не будем присваивать новое значение:
                </p>

                <p className="mb-2 font-semibold">None placeholder</p>
                <CodeExample
                    code={`b = None`}
                    output={``}
                />

                <p className="mb-2 font-semibold">Проверка</p>
                <CodeExample
                    code={`print(b)`}
                    output={`None`}
                />

                <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-400 p-4 mb-4">
                    <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2">Логические значения в Python:</h3>
                    <div className="text-green-700 dark:text-green-300">
                        <div className="mb-3">
                            <strong>True</strong> - истинное значение (эквивалентно числу 1)
                        </div>
                        <div className="mb-3">
                            <strong>False</strong> - ложное значение (эквивалентно числу 0)
                        </div>
                        <div>
                            <strong>None</strong> - специальное значение, обозначающее "ничего" или "пустота"
                        </div>
                    </div>
                </div>

                <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-400 p-4 mb-4">
                    <h3 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">Дополнительные примеры Boolean:</h3>
                    <div className="text-purple-700 dark:text-purple-300 space-y-2">
                        <div><code>bool(1)</code> → <code>True</code></div>
                        <div><code>bool(0)</code> → <code>False</code></div>
                        <div><code>bool("")</code> → <code>False</code> (пустая строка)</div>
                        <div><code>bool("Hello")</code> → <code>True</code> (непустая строка)</div>
                        <div><code>bool([])</code> → <code>False</code> (пустой список)</div>
                        <div><code>bool([1, 2, 3])</code> → <code>True</code> (непустой список)</div>
                    </div>
                </div>
            </section>

            <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-400 p-4 mt-8">
                <p className="text-green-700 dark:text-green-300 text-lg font-semibold">
                    Вот и всё! Теперь Вы знаете базовые объекты и типы данных Python.
                </p>
            </div>
        </LessonLayout>
    );
};

export default SetsAndBooleansLesson;