import React from "react";
import LessonLayout from "@/components/LessonLayout";
import CodeExample from "@/components/CodeExample";

const ListComprehensionLesson = () => {
    return (
        <LessonLayout
            title="Генераторы списков (List Comprehensions)"
            page="python/python-statements/list-comprehension"
        >
            <section className="mb-6">
                <p className="mb-4">
                    В дополнение к операциям для последовательностей и методам для списков, в Python есть более продвинутая операция, которая называется генератор списков (этот термин сложно перевести на русский язык, по-английски это list comprehension).
                </p>

                <p className="mb-4">
                    Генераторы списков позволяют создавать списки, используя другой синтаксис. Его можно представить себе как цикл <code>for</code>, написанный внутри квадратных скобок. Например:
                </p>

                <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-400 p-4 mb-6">
                    <p className="text-blue-800 dark:text-blue-200">
                        <strong>Основная идея:</strong> Если Вы знакомы с математической нотацией, то этот формат выглядит похоже, например: x² : x ∈ {"{0,1,2...10}"}
                    </p>
                </div>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-bold mb-4">Пример 1: Основы</h2>

                <p className="mb-2 font-semibold">Получить все буквы в строке</p>
                <CodeExample
                    code={`lst = [x for x in 'word']`}
                    output={``}
                />

                <p className="mb-2 font-semibold">Проверка</p>
                <CodeExample
                    code={`lst`}
                    output={`['w', 'o', 'r', 'd']`}
                />

                <p className="mb-4">
                    Это основная идея генератора списков. Рассмотрим ещё несколько примеров для генератора списков в Python:
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-bold mb-4">Пример 2: Математические операции</h2>

                <p className="mb-2 font-semibold">Взять диапазон чисел, возвести их в квадрат, и вернуть в виде списка</p>
                <CodeExample
                    code={`lst = [x**2 for x in range(0,11)]`}
                    output={``}
                />

                <CodeExample
                    code={`lst`}
                    output={`[0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100]`}
                />
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-bold mb-4">Пример 3: Добавление условий</h2>

                <p className="mb-4">Посмотрим как можно добавить оператор <code>if</code>:</p>

                <p className="mb-2 font-semibold">Взять чётные числа из диапазона</p>
                <CodeExample
                    code={`lst = [x for x in range(11) if x % 2 == 0]`}
                    output={``}
                />

                <CodeExample
                    code={`lst`}
                    output={`[0, 2, 4, 6, 8, 10]`}
                />
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-bold mb-4">Пример 4: Сложная арифметика</h2>

                <p className="mb-4">Мы также можем выполнить более сложную арифметику:</p>

                <p className="mb-2 font-semibold">Сконвертировать градусы Цельсия в градусы Фаренгейта</p>
                <CodeExample
                    code={`celsius = [0,10,20.1,34.5]

fahrenheit = [((9/5)*temp + 32) for temp in celsius ]

fahrenheit`}
                    output={`[32.0, 50.0, 68.18, 94.1]`}
                />
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-bold mb-4">Пример 5: Вложенные генераторы</h2>

                <p className="mb-4">Мы также можем создавать вложенные генераторы списков, например:</p>

                <CodeExample
                    code={`lst = [ x**2 for x in [x**2 for x in range(11)]]
lst`}
                    output={`[0, 1, 16, 81, 256, 625, 1296, 2401, 4096, 6561, 10000]`}
                />
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-bold mb-4">Практические примеры</h2>

                <h3 className="text-lg font-semibold mb-3">Фильтрация и преобразование строк</h3>
                <CodeExample
                    code={`words = ["hello", "world", "python", "programming"]

# Получить только слова длиннее 5 символов в верхнем регистре
long_words = [word.upper() for word in words if len(word) > 5]
print(long_words)

# Получить первую букву каждого слова
first_letters = [word[0] for word in words]
print(first_letters)`}
                    output={`['PYTHON', 'PROGRAMMING']
['h', 'w', 'p', 'p']`}
                />

                <h3 className="text-lg font-semibold mb-3">Работа с числами</h3>
                <CodeExample
                    code={`numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# Квадраты четных чисел
even_squares = [x**2 for x in numbers if x % 2 == 0]
print("Квадраты четных чисел:", even_squares)

# Числа, деленные на 3, если они больше 5
divided = [x/3 for x in numbers if x > 5]
print("Числа > 5, деленные на 3:", divided)`}
                    output={`Квадраты четных чисел: [4, 16, 36, 64, 100]
Числа > 5, деленные на 3: [2.0, 2.3333333333333335, 2.6666666666666665, 3.0, 3.3333333333333335]`}
                />

                <h3 className="text-lg font-semibold mb-3">Создание матрицы</h3>
                <CodeExample
                    code={`# Создание матрицы 3x3
matrix = [[i*j for j in range(1, 4)] for i in range(1, 4)]

for row in matrix:
    print(row)

# Получение всех элементов матрицы в одном списке
flat_list = [item for row in matrix for item in row]
print("Плоский список:", flat_list)`}
                    output={`[1, 2, 3]
[2, 4, 6]
[3, 6, 9]
Плоский список: [1, 2, 3, 2, 4, 6, 3, 6, 9]`}
                />

                <h3 className="text-lg font-semibold mb-3">Условные выражения в генераторах</h3>
                <CodeExample
                    code={`# Использование тернарного оператора
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# "четное" или "нечетное" для каждого числа
parity = ["четное" if x % 2 == 0 else "нечетное" for x in numbers]
print(parity[:5])  # Показываем первые 5

# Положительные числа остаются, отрицательные становятся 0
mixed_numbers = [-3, -1, 0, 2, 5, -8, 10]
positive_or_zero = [x if x > 0 else 0 for x in mixed_numbers]
print("Положительные или 0:", positive_or_zero)`}
                    output={`['нечетное', 'четное', 'нечетное', 'четное', 'нечетное']
Положительные или 0: [0, 0, 0, 2, 5, 0, 10]`}
                />
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-bold mb-4">Сравнение с обычными циклами</h2>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                        <h3 className="font-bold text-gray-800 dark:text-gray-200 mb-3">Обычный цикл for</h3>
                        <pre className="bg-gray-100 dark:bg-gray-700 p-3 rounded text-sm font-mono overflow-x-auto">
                            {`squares = []
for x in range(10):
    if x % 2 == 0:
        squares.append(x**2)`}
                        </pre>
                    </div>

                    <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                        <h3 className="font-bold text-green-800 dark:text-green-200 mb-3">List Comprehension</h3>
                        <pre className="bg-green-100 dark:bg-green-800 p-3 rounded text-sm font-mono overflow-x-auto">
                            {`squares = [x**2 for x in range(10) 
           if x % 2 == 0]`}
                        </pre>
                    </div>
                </div>

                <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 p-4 mb-4">
                    <h3 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">Преимущества List Comprehensions:</h3>
                    <ul className="list-disc list-inside text-yellow-700 dark:text-yellow-300 space-y-1">
                        <li><strong>Компактность</strong> - меньше строк кода</li>
                        <li><strong>Читаемость</strong> - логика видна сразу</li>
                        <li><strong>Производительность</strong> - часто работают быстрее</li>
                        <li><strong>Функциональный стиль</strong> - более декларативный подход</li>
                    </ul>
                </div>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-bold mb-4">Синтаксис генераторов списков</h2>

                <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-6">
                    <h3 className="font-bold mb-3">Общий синтаксис:</h3>
                    <pre className="text-sm font-mono">
                        {`[выражение for элемент in итерируемый_объект if условие]`}
                    </pre>
                </div>

                <div className="space-y-4">
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Базовая форма:</h4>
                        <code className="text-blue-700 dark:text-blue-300">[x for x in range(5)]</code>
                        <p className="text-sm text-blue-600 dark:text-blue-400 mt-1">Результат: [0, 1, 2, 3, 4]</p>
                    </div>

                    <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                        <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">С преобразованием:</h4>
                        <code className="text-green-700 dark:text-green-300">[x*2 for x in range(5)]</code>
                        <p className="text-sm text-green-600 dark:text-green-400 mt-1">Результат: [0, 2, 4, 6, 8]</p>
                    </div>

                    <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                        <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">С условием:</h4>
                        <code className="text-purple-700 dark:text-purple-300">[x for x in range(10) if x % 2 == 0]</code>
                        <p className="text-sm text-purple-600 dark:text-purple-400 mt-1">Результат: [0, 2, 4, 6, 8]</p>
                    </div>

                    <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
                        <h4 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">С условным выражением:</h4>
                        <code className="text-orange-700 dark:text-orange-300">[x if x &gt; 0 else 0 for x in [-1, 2, -3, 4]]</code>
                        <p className="text-sm text-orange-600 dark:text-orange-400 mt-1">Результат: [0, 2, 0, 4]</p>
                    </div>
                </div>
            </section>

            <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-400 p-4 mt-8">
                <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2">Что мы изучили:</h3>
                <ul className="list-disc list-inside text-green-700 dark:text-green-300 space-y-1">
                    <li>Основы синтаксиса генераторов списков</li>
                    <li>Использование условий в генераторах</li>
                    <li>Математические операции и преобразования</li>
                    <li>Вложенные генераторы списков</li>
                    <li>Практические примеры применения</li>
                    <li>Сравнение с обычными циклами</li>
                    <li>Преимущества использования list comprehensions</li>
                </ul>
                <p className="text-green-700 dark:text-green-300 mt-3">
                    После этой лекции Вы можете читать и создавать базовые генераторы списков.
                </p>
            </div>
        </LessonLayout>
    );
};

export default ListComprehensionLesson;