import React from "react";
import LessonLayout from "@/components/LessonLayout";
import CodeExample from "@/components/CodeExample";

const WhileLoopsLesson = () => {
    return (
        <LessonLayout
            title="Циклы while"
            page="python/python-statements/while-loops"
        >
            <section className="mb-6">
                <p className="mb-4">
                    Цикл <code>while</code> в Python - это один из общих способов выполнения итераций. Цикл <code>while</code> будет повторять выполнение команды или набора команд, пока указанное условие равно true. Причина, почему это называется циклом, заключается в том, что операции выполняются снова и снова до тех пор, пока условие не перестанет выполняться.
                </p>

                <p className="mb-4">Общий синтаксис цикла while выглядит так:</p>

                <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-6">
                    <pre className="text-sm font-mono">
                        {`while test:
    code statements
else:
    final code statements`}
                    </pre>
                </div>

                <p className="mb-4">Давайте посмотрим на несколько примеров цикла <code>while</code>.</p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-bold mb-4">Основной пример цикла while</h2>

                <CodeExample
                    code={`x = 0

while x < 10:
    print('x равен: ',x)
    print(' x всё еще меньше 10, добавляем 1 к x')
    x+=1`}
                    output={`x равен:  0
 x всё еще меньше 10, добавляем 1 к x
x равен:  1
 x всё еще меньше 10, добавляем 1 к x
x равен:  2
 x всё еще меньше 10, добавляем 1 к x
x равен:  3
 x всё еще меньше 10, добавляем 1 к x
x равен:  4
 x всё еще меньше 10, добавляем 1 к x
x равен:  5
 x всё еще меньше 10, добавляем 1 к x
x равен:  6
 x всё еще меньше 10, добавляем 1 к x
x равен:  7
 x всё еще меньше 10, добавляем 1 к x
x равен:  8
 x всё еще меньше 10, добавляем 1 к x
x равен:  9
 x всё еще меньше 10, добавляем 1 к x`}
                />

                <p className="mb-4">
                    Обратите внимание, сколько раз была вызвана команда print. Цикл <code>while</code> продолжался до тех пор, пока условие цикла не перестало выполняться - это случилось, когда x стало равным 10. Важно отметить, что как только это случилось, цикл остановился. Посмотрим, как мы могли бы добавить оператор <code>else</code>:
                </p>

                <CodeExample
                    code={`x = 0

while x < 10:
    print('x равен: ',x)
    print(' x всё еще меньше 10, добавляем 1 к x')
    x+=1
    
else:
    print('Всё сделано!')`}
                    output={`x равен:  0
 x всё еще меньше 10, добавляем 1 к x
x равен:  1
 x всё еще меньше 10, добавляем 1 к x
x равен:  2
 x всё еще меньше 10, добавляем 1 к x
x равен:  3
 x всё еще меньше 10, добавляем 1 к x
x равен:  4
 x всё еще меньше 10, добавляем 1 к x
x равен:  5
 x всё еще меньше 10, добавляем 1 к x
x равен:  6
 x всё еще меньше 10, добавляем 1 к x
x равен:  7
 x всё еще меньше 10, добавляем 1 к x
x равен:  8
 x всё еще меньше 10, добавляем 1 к x
x равен:  9
 x всё еще меньше 10, добавляем 1 к x
Всё сделано!`}
                />
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-bold mb-4">break, continue, pass</h2>

                <p className="mb-4">
                    Также мы можем использовать в циклах операторы <code>break</code>, <code>continue</code> и <code>pass</code> для того, чтобы добавить дополнительную логику. Эти три оператора выполняют следующее:
                </p>

                <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-400 p-4 mb-6">
                    <ul className="list-disc list-inside text-blue-800 dark:text-blue-200 space-y-2">
                        <li><strong>break:</strong> выходит из текущего ближайшего цикла, который содержит эту команду.</li>
                        <li><strong>continue:</strong> переходит к началу ближайшего цикла, который содержит эту команду.</li>
                        <li><strong>pass:</strong> ничего не делает.</li>
                    </ul>
                </div>

                <p className="mb-4">
                    Учитывая операторы <code>break</code> и <code>continue</code>, общий формат цикла <code>while</code> выглядит так:
                </p>

                <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-6">
                    <pre className="text-sm font-mono">
                        {`while test: 
    code statement
    if test: 
        break
    if test: 
        continue 
else:`}
                    </pre>
                </div>

                <p className="mb-4">
                    Операторы <code>break</code> и <code>continue</code> могут встречаться в любом месте внутри цикла, но обычно их используют в сочетании с оператором <code>if</code>, чтобы выполнить действие при определенном условии.
                </p>

                <p className="mb-4">Давайте рассмотрим несколько примеров!</p>

                <h3 className="text-xl font-bold mb-3">Пример с continue</h3>

                <CodeExample
                    code={`x = 0

while x < 10:
    print('x равен: ',x)
    print(' x всё еще меньше 10, добавляем 1 к x')
    x+=1
    if x==3:
        print('x==3')
    else:
        print('продолжаем...')
        continue
else:
    print("Завершено!")`}
                    output={`x равен:  0
 x всё еще меньше 10, добавляем 1 к x
продолжаем...
x равен:  1
 x всё еще меньше 10, добавляем 1 к x
продолжаем...
x равен:  2
 x всё еще меньше 10, добавляем 1 к x
x==3
x равен:  3
 x всё еще меньше 10, добавляем 1 к x
продолжаем...
x равен:  4
 x всё еще меньше 10, добавляем 1 к x
продолжаем...
x равен:  5
 x всё еще меньше 10, добавляем 1 к x
продолжаем...
x равен:  6
 x всё еще меньше 10, добавляем 1 к x
продолжаем...
x равен:  7
 x всё еще меньше 10, добавляем 1 к x
продолжаем...
x равен:  8
 x всё еще меньше 10, добавляем 1 к x
продолжаем...
x равен:  9
 x всё еще меньше 10, добавляем 1 к x
продолжаем...
Завершено!`}
                />

                <p className="mb-4">
                    Обратите внимание, что во время выполнения цикла мы напечатали "x==3" когда x равен 3, и напечатали "продолжаем" в других случаях. Давайте в случае x ==3 сделаем break и посмотрим на результат:
                </p>

                <h3 className="text-xl font-bold mb-3">Пример с break</h3>

                <CodeExample
                    code={`x = 0

while x < 10:
    print('x равен: ',x)
    print(' x всё еще меньше 10, добавляем 1 к x')
    x+=1
    if x==3:
        print('Выходим из цикла (break), потому что x==3')
        break
    else:
        print('продолжаем...')
        continue
else:
    print("Завершено!")`}
                    output={`x равен:  0
 x всё еще меньше 10, добавляем 1 к x
продолжаем...
x равен:  1
 x всё еще меньше 10, добавляем 1 к x
продолжаем...
x равен:  2
 x всё еще меньше 10, добавляем 1 к x
Выходим из цикла (break), потому что x==3`}
                />

                <p className="mb-4">
                    Обратите внимание, что мы не добрались до второго оператора <code>else</code>, и фраза "Завершено!" не была распечатана!
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-bold mb-4">Практические примеры</h2>

                <h3 className="text-lg font-semibold mb-3">Поиск числа в списке</h3>
                <CodeExample
                    code={`numbers = [1, 3, 5, 7, 9, 11, 13, 15]
target = 7
index = 0
found = False

while index < len(numbers):
    if numbers[index] == target:
        print(f"Число {target} найдено на позиции {index}")
        found = True
        break
    index += 1

if not found:
    print(f"Число {target} не найдено в списке")`}
                    output={`Число 7 найдено на позиции 3`}
                />

                <h3 className="text-lg font-semibold mb-3">Простой калькулятор</h3>
                <CodeExample
                    code={`# Имитация простого калькулятора
operations = ['+', '-', '*', '/']
numbers = [(10, 5), (20, 4), (15, 3), (8, 2)]
i = 0

while i < len(operations):
    a, b = numbers[i]
    op = operations[i]
    
    if op == '+':
        result = a + b
    elif op == '-':
        result = a - b
    elif op == '*':
        result = a * b
    elif op == '/':
        result = a / b
    
    print(f"{a} {op} {b} = {result}")
    i += 1

print("Все операции выполнены!")`}
                    output={`10 + 5 = 15
20 - 4 = 16
15 * 3 = 45
8 / 2 = 4.0
Все операции выполнены!`}
                />

                <h3 className="text-lg font-semibold mb-3">Подсчет цифр в числе</h3>
                <CodeExample
                    code={`number = 12345
count = 0
temp = number

while temp > 0:
    temp = temp // 10  # Целочисленное деление
    count += 1

print(f"В числе {number} содержится {count} цифр")`}
                    output={`В числе 12345 содержится 5 цифр`}
                />

                <h3 className="text-lg font-semibold mb-3">Игра "Угадай число"</h3>
                <CodeExample
                    code={`# Имитация игры "Угадай число"
secret_number = 42
guesses = [30, 50, 40, 45, 42]  # Предполагаемые попытки пользователя
attempt = 0
max_attempts = 5

print("Игра 'Угадай число'! Загадано число от 1 до 100.")

while attempt < max_attempts:
    guess = guesses[attempt]  # Имитируем ввод пользователя
    attempt += 1
    
    print(f"Попытка {attempt}: {guess}")
    
    if guess == secret_number:
        print(f"Поздравляем! Вы угадали число {secret_number} за {attempt} попыток!")
        break
    elif guess < secret_number:
        print("Загаданное число больше")
    else:
        print("Загаданное число меньше")
else:
    print(f"Игра окончена! Загаданное число было {secret_number}")`}
                    output={`Игра 'Угадай число'! Загадано число от 1 до 100.
Попытка 1: 30
Загаданное число больше
Попытка 2: 50
Загаданное число меньше
Попытка 3: 40
Загаданное число больше
Попытка 4: 45
Загаданное число меньше
Попытка 5: 42
Поздравляем! Вы угадали число 42 за 5 попыток!`}
                />
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-bold mb-4">Предостережение: Бесконечные циклы</h2>

                <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-400 p-4 mb-6">
                    <p className="text-red-800 dark:text-red-200 font-bold mb-2">
                        Одно предостережение! Оператор <code>while</code> может создать бесконечный цикл.
                    </p>
                    <p className="text-red-700 dark:text-red-300">
                        Например, следующий код создаст бесконечный цикл:
                    </p>
                </div>

                <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-6">
                    <pre className="text-sm font-mono text-red-600 dark:text-red-400">
                        {`# НЕ ЗАПУСКАЙТЕ ЭТОТ КОД!!!! 
while True:
    print("I'm stuck in an infinite loop!")`}
                    </pre>
                </div>

                <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 p-4 mb-6">
                    <h3 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">Как избежать бесконечных циклов:</h3>
                    <ul className="list-disc list-inside text-yellow-700 dark:text-yellow-300 space-y-1">
                        <li>Всегда убедитесь, что условие цикла может стать False</li>
                        <li>Проверьте, что переменные в условии изменяются внутри цикла</li>
                        <li>Используйте счетчики или ограничения для предотвращения зацикливания</li>
                        <li>Тестируйте циклы с небольшими значениями</li>
                    </ul>
                </div>

                <h3 className="text-lg font-semibold mb-3">Безопасный цикл с ограничением</h3>
                <CodeExample
                    code={`# Безопасный способ создания цикла с ограничением
counter = 0
max_iterations = 1000

while True:  # Потенциально бесконечный цикл
    counter += 1
    print(f"Итерация {counter}")
    
    # Условие выхода
    if counter >= 5:
        print("Достигнуто условие выхода")
        break
    
    # Защита от бесконечного цикла
    if counter > max_iterations:
        print("Превышено максимальное количество итераций!")
        break

print("Цикл завершен безопасно")`}
                    output={`Итерация 1
Итерация 2
Итерация 3
Итерация 4
Итерация 5
Достигнуто условие выхода
Цикл завершен безопасно`}
                />
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-bold mb-4">Сравнение for и while</h2>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                        <h3 className="font-bold text-blue-800 dark:text-blue-200 mb-3">Цикл for</h3>
                        <ul className="list-disc list-inside text-blue-700 dark:text-blue-300 space-y-1 text-sm">
                            <li>Используется для итераций по последовательностям</li>
                            <li>Количество итераций обычно известно заранее</li>
                            <li>Автоматически управляет счетчиком</li>
                            <li>Меньше риска бесконечных циклов</li>
                        </ul>
                    </div>

                    <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                        <h3 className="font-bold text-green-800 dark:text-green-200 mb-3">Цикл while</h3>
                        <ul className="list-disc list-inside text-green-700 dark:text-green-300 space-y-1 text-sm">
                            <li>Используется когда условие выхода сложное</li>
                            <li>Количество итераций может быть неизвестно</li>
                            <li>Требует ручного управления условием</li>
                            <li>Больше гибкости в управлении циклом</li>
                        </ul>
                    </div>
                </div>
            </section>

            <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-400 p-4 mt-8">
                <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2">Что мы изучили:</h3>
                <ul className="list-disc list-inside text-green-700 dark:text-green-300 space-y-1">
                    <li>Основной синтаксис цикла <code>while</code></li>
                    <li>Использование <code>else</code> с циклами while</li>
                    <li>Операторы управления циклом: <code>break</code>, <code>continue</code>, <code>pass</code></li>
                    <li>Практические примеры использования while</li>
                    <li>Предотвращение бесконечных циклов</li>
                    <li>Сравнение циклов for и while</li>
                </ul>
                <p className="text-green-700 dark:text-green-300 mt-3">
                    После рассмотрения этих примеров, Вы можете использовать циклы <code>while</code> в Вашем коде.
                </p>
            </div>
        </LessonLayout>
    );
};

export default WhileLoopsLesson;