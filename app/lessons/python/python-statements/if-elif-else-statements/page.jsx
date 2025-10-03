import React from "react";
import LessonLayout from "@/components/LessonLayout";
import CodeExample from "@/components/CodeExample";

const IfElifElseStatementsLesson = () => {
    return (
        <LessonLayout
            title="Операторы if, elif, else"
            page="python/python-statements/if-elif-else-statements"
        >
            <section className="mb-6">
                <p className="mb-4">
                    Операторы <code>if</code> в Python позволяют компьютеру выполнять разные действия в зависимости от условий.
                </p>

                <p className="mb-4">
                    Представьте, что мы говорим компьютеру:
                </p>

                <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-400 p-4 mb-4">
                    <p className="text-blue-800 dark:text-blue-200 italic">
                        "Если случится вот это, то выполни такое-то действие"
                    </p>
                </div>

                <p className="mb-4">
                    Мы также можем развить эту идею с помощью операторов <code>elif</code> и <code>else</code>, которые позволяют нам сказать компьютеру следующее:
                </p>

                <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-400 p-4 mb-4">
                    <p className="text-green-800 dark:text-green-200 italic">
                        "Если выполняется такое-то условие, то выполни такое-то действие. Иначе, если выполняется другое условие, то выполни другое действие. Иначе, если <em>никакие</em> из условий выше не выполнены, то выполни третье действие."
                    </p>
                </div>

                <p className="mb-4">
                    Давайте посмотрим на синтаксис оператора <code>if</code>, чтобы увидеть это в действии:
                </p>

                <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-6">
                    <pre className="text-sm font-mono">
                        {`if условие1:
    выполнить действие1
elif условие2:
    выполнить действие2
else: 
    выполнить действие3`}
                    </pre>
                </div>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-bold mb-4">Первый пример</h2>

                <p className="mb-4">Рассмотрим пример:</p>

                <CodeExample
                    code={`if True:
    print('It was true!')`}
                    output={`It was true!`}
                />

                <p className="mb-4">Добавим else:</p>

                <CodeExample
                    code={`x = False

if x:
    print('x равен True!')
else:
    print('Это предложение будет напечатано во всех случаях, когда x не равен true')`}
                    output={`Это предложение будет напечатано во всех случаях, когда x не равен true`}
                />
            </section>

            <section className="mb-6">
                <h3 className="text-xl font-bold mb-4">Несколько условий</h3>

                <p className="mb-4">
                    Посмотрим более полную картину для операторов <code>if</code>, <code>elif</code>, и <code>else</code>!
                </p>

                <p className="mb-4">
                    Мы напишем это в виде вложенной структуры. Обратите внимание, как в этом коде расположены <code>if</code>, <code>elif</code> и <code>else</code>. Это позволяет увидеть, какой <code>if</code> относится к какому <code>elif</code> или <code>else</code>.
                </p>

                <p className="mb-4">
                    Также мы вспомним синтаксис сравнения значений в Python.
                </p>

                <CodeExample
                    code={`loc = 'Bank'

if loc == 'Auto Shop':
    print('Welcome to the Auto Shop!')
elif loc == 'Bank':
    print('Welcome to the bank!')
else:
    print('Where are you?')`}
                    output={`Welcome to the bank!`}
                />

                <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 p-4 mb-4">
                    <p className="text-yellow-800 dark:text-yellow-200">
                        <strong>Важно:</strong> Обратите внимание на вложенные операторы <code>if</code> - они проверяются до тех пор, пока не встретится условие, которое принимает значение True. И тогда выполняется код, расположенный после этого условия. Вы можете поместить сколько угодно операторов <code>elif</code>, прежде чем указать завершающий <code>else</code>.
                    </p>
                </div>

                <p className="mb-4">
                    Рассмотрим еще два простых примера для операторов <code>if</code>, <code>elif</code> и <code>else</code>:
                </p>

                <CodeExample
                    code={`person = 'Sammy'

if person == 'Sammy':
    print('Welcome Sammy!')
else:
    print("Welcome, what's your name?")`}
                    output={`Welcome Sammy!`}
                />

                <CodeExample
                    code={`person = 'George'

if person == 'Sammy':
    print('Welcome Sammy!')
elif person =='George':
    print('Welcome George!')
else:
    print("Welcome, what's your name?")`}
                    output={`Welcome George!`}
                />
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-bold mb-4">Практические примеры</h2>

                <h3 className="text-lg font-semibold mb-3">Проверка возраста</h3>
                <CodeExample
                    code={`age = 20

if age < 18:
    print("Вы несовершеннолетний")
elif age < 65:
    print("Вы взрослый")
else:
    print("Вы пенсионер")
    
print("Ваш возраст:", age)`}
                    output={`Вы взрослый
Ваш возраст: 20`}
                />

                <h3 className="text-lg font-semibold mb-3">Оценка студента</h3>
                <CodeExample
                    code={`score = 85

if score >= 90:
    grade = "A"
elif score >= 80:
    grade = "B"
elif score >= 70:
    grade = "C"
elif score >= 60:
    grade = "D"
else:
    grade = "F"

print(f"Ваша оценка: {grade} (баллы: {score})")`}
                    output={`Ваша оценка: B (баллы: 85)`}
                />

                <h3 className="text-lg font-semibold mb-3">Сложные условия</h3>
                <CodeExample
                    code={`temperature = 25
is_sunny = True

if temperature > 30:
    print("Очень жарко!")
elif temperature > 20 and is_sunny:
    print("Отличная погода для прогулки!")
elif temperature > 10:
    print("Прохладно, но терпимо")
else:
    print("Холодно, лучше остаться дома")

print(f"Температура: {temperature}°C, Солнечно: {is_sunny}")`}
                    output={`Отличная погода для прогулки!
Температура: 25°C, Солнечно: True`}
                />
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-bold mb-4">Отступы</h2>

                <p className="mb-4">
                    Очень важно помнить, как в Python используются отступы для структурирования кода. Мы ещё затронем эту тему, когда будем создавать функции!
                </p>

                <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-400 p-4 mb-4">
                    <h3 className="font-semibold text-red-800 dark:text-red-200 mb-2">Правила отступов для if-операторов:</h3>
                    <ul className="list-disc list-inside text-red-700 dark:text-red-300 space-y-1">
                        <li>После <code>if</code>, <code>elif</code>, <code>else</code> всегда ставится двоеточие</li>
                        <li>Код внутри блока должен быть с отступом (4 пробела)</li>
                        <li>Все строки на одном уровне должны иметь одинаковый отступ</li>
                        <li>Неправильные отступы приведут к ошибке IndentationError</li>
                    </ul>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
                        <h3 className="font-bold text-red-800 dark:text-red-200 mb-3">❌ Неправильно</h3>
                        <pre className="bg-red-100 dark:bg-red-800 p-3 rounded text-sm font-mono overflow-x-auto">
                            {`if x > 5:
print("Больше 5")  # Нет отступа!
    elif x > 0:
  print("Больше 0")  # Неправильный отступ!`}
                        </pre>
                    </div>

                    <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                        <h3 className="font-bold text-green-800 dark:text-green-200 mb-3">✅ Правильно</h3>
                        <pre className="bg-green-100 dark:bg-green-800 p-3 rounded text-sm font-mono overflow-x-auto">
                            {`if x > 5:
    print("Больше 5")
elif x > 0:
    print("Больше 0")
else:
    print("Меньше или равно 0")`}
                        </pre>
                    </div>
                </div>
            </section>

            <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-400 p-4 mt-8">
                <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2">Что мы изучили:</h3>
                <ul className="list-disc list-inside text-green-700 dark:text-green-300 space-y-1">
                    <li>Оператор <code>if</code> для проверки условий</li>
                    <li>Оператор <code>elif</code> для множественных условий</li>
                    <li>Оператор <code>else</code> для случая "иначе"</li>
                    <li>Важность правильных отступов в Python</li>
                    <li>Практические примеры использования условных операторов</li>
                </ul>
            </div>
        </LessonLayout>
    );
};

export default IfElifElseStatementsLesson;