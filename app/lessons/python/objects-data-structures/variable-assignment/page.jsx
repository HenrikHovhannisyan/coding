import React from "react";
import LessonLayout from "@/components/LessonLayout";
import CodeExample from "@/components/CodeExample";

const VariableAssignmentLesson = () => {
    return (
        <LessonLayout
            title="Переменные"
            page="python/objects-data-structures/variable-assignment"
        >
            <section className="mb-6">
                <h2 className="text-2xl font-bold mb-4">Правила для имен переменных</h2>
                <ul className="list-disc list-inside space-y-2 mb-6">
                    <li>Имя не может начинаться с числа.</li>
                    <li>В имени не может быть пробелов, вместо этого используйте нижнее подчёркивание: "_".</li>
                    <li>Имя не может содержать следующие символы:</li>
                </ul>

                <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-4 font-mono text-center">
                    :'",.&lt;&gt;/?|\!@#%^&*~-+
                </div>

                <ul className="list-disc list-inside space-y-2 mb-6">
                    <li>Считается хорошей практикой писать имена в нижнем регистре - см. <a href="https://www.python.org/dev/peps/pep-0008/#function-and-variable-names" className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener noreferrer">PEP8</a></li>
                    <li>Не используйте в качестве названий переменных ключевые слова Python, такие как <code>list</code> и <code>str</code></li>
                    <li>Не используйте следующие имена из одной буквы: 'l' (нижний регистр буквы L), 'O' (Верхний регистр буквы о), и 'I' (верхний регистр буквы i), потому что их можно спутать с единицей '1' и нулем '0'.</li>
                </ul>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-bold mb-4">Динамические типы данных</h2>

                <p className="mb-4">
                    Python использует динамические типы данных (<em>dynamic typing</em>), то есть Вы можете присваивать переменным значения сначала одного, а затем другого типа. Благодаря этому Python очень гибко работает с типами данных; это отличает его от тех языков программирования, в которых типы данных <em>статичные</em>.
                </p>

                <CodeExample
                    code={`my_dogs = 2`}
                    output={``}
                />

                <CodeExample
                    code={`my_dogs`}
                    output={`2`}
                />

                <CodeExample
                    code={`my_dogs = ['Sammy', 'Frankie']`}
                    output={``}
                />

                <CodeExample
                    code={`my_dogs`}
                    output={`['Sammy', 'Frankie']`}
                />

                <h3 className="text-xl font-bold mb-3 mt-6">Плюсы и минусы динамических типов данных</h3>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-400 p-4">
                        <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">Плюсы</h4>
                        <ul className="list-disc list-inside text-green-700 dark:text-green-300">
                            <li>легче работать</li>
                            <li>быстрее время разработки</li>
                        </ul>
                    </div>

                    <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-400 p-4">
                        <h4 className="font-bold text-red-800 dark:text-red-200 mb-2">Минусы</h4>
                        <ul className="list-disc list-inside text-red-700 dark:text-red-300">
                            <li>можно получить неожиданные ошибки!</li>
                            <li>нужно следить за типами данных - <code>type()</code></li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-bold mb-4">Присвоение переменных</h2>

                <p className="mb-4">
                    Присвоение переменных пишется вот так: <code>name = object</code>, где оператор <code>=</code> это оператор присвоения (<em>assignment operator</em>)
                </p>

                <CodeExample
                    code={`a = 5`}
                    output={``}
                />

                <CodeExample
                    code={`a`}
                    output={`5`}
                />

                <p className="mb-4">
                    Мы присвоили переменной с именем 'a' числовой объект <code>5</code>.<br />
                    Давайте присвоим <code>a</code> другое значение:
                </p>

                <CodeExample
                    code={`a = 10`}
                    output={``}
                />

                <CodeExample
                    code={`a`}
                    output={`10`}
                />

                <p className="mb-4">Теперь можно использовать <code>a</code> вместо числа <code>10</code>:</p>

                <CodeExample
                    code={`a + a`}
                    output={`20`}
                />
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-bold mb-4">Переопределение переменных</h2>

                <p className="mb-4">
                    Python позволяет переопределять переменные, ссылаясь на тот же самый объект.
                </p>

                <CodeExample
                    code={`a = a + 10`}
                    output={``}
                />

                <CodeExample
                    code={`a`}
                    output={`20`}
                />

                <p className="mb-4">
                    И это можно написать в короткой форме. Python позволяет складывать, вычитать, умножать и делить числа с помощью <code>+=</code>, <code>-=</code>, <code>*=</code> и <code>/=</code>.
                </p>

                <CodeExample
                    code={`a += 10 # это означает:  a = a + 10`}
                    output={``}
                />

                <CodeExample
                    code={`a`}
                    output={`30`}
                />

                <CodeExample
                    code={`a *= 2  # это означает:  a = a * 2`}
                    output={``}
                />

                <CodeExample
                    code={`a`}
                    output={`60`}
                />
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-bold mb-4">Определение типа переменной с помощью <code>type()</code></h2>

                <p className="mb-4">
                    Вы можете узнать тип объекта, который был присвоен переменной, с помощью встроенной функции <code>type()</code>. Часто используемые типы данных:
                </p>

                <ul className="list-disc list-inside space-y-1 mb-6">
                    <li><strong>int</strong> (для integer)</li>
                    <li><strong>float</strong></li>
                    <li><strong>str</strong> (для string)</li>
                    <li><strong>list</strong></li>
                    <li><strong>tuple</strong></li>
                    <li><strong>dict</strong> (для dictionary)</li>
                    <li><strong>set</strong></li>
                    <li><strong>bool</strong> (для Boolean True/False)</li>
                </ul>

                <CodeExample
                    code={`type(a)`}
                    output={`int`}
                />

                <CodeExample
                    code={`a = (1,2)`}
                    output={``}
                />

                <CodeExample
                    code={`type(a)`}
                    output={`tuple`}
                />
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-bold mb-4">Простой пример</h2>

                <p className="mb-4">
                    Здесь показано, как осмысленные названия переменных могут сделать ваш код более читаемым.
                </p>

                <CodeExample
                    code={`my_income = 100
tax_rate = 0.1
my_taxes = my_income * tax_rate`}
                    output={``}
                />

                <CodeExample
                    code={`my_taxes`}
                    output={`10.0`}
                />
            </section>

            <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-400 p-4 mt-8">
                <p className="text-green-700 dark:text-green-300">
                    Отлично! Теперь Вы знаете основы определения и переопределения переменных в Python.
                </p>
            </div>
        </LessonLayout>
    );
};

export default VariableAssignmentLesson;