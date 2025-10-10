import React from "react";
import LessonLayout from "@/components/LessonLayout";
import CodeExample from "@/components/CodeExample";

const LambdaMapFilterLesson = () => {
    return (
        <LessonLayout
            title="Lambda-выражения, функции Map и Filter"
            page="python/methods-and-functions/lambda-map-filter"
        >
            <section className="mb-6">
                <p className="mb-4">
                    Теперь пришло время изучить две встроенные функции, filter и map. После этого мы сможем
                    изучить выражения lambda, которые пригодятся нам в дальнейшей работе!
                </p>

                <p className="mb-4">В этой лекции Вы изучите следующие темы:</p>
                <ol className="list-decimal list-inside mb-6 space-y-1">
                    <li>Функция map для применения функции к каждому элементу</li>
                    <li>Функция filter для фильтрации элементов</li>
                    <li>Lambda-выражения для создания анонимных функций</li>
                    <li>Практические примеры использования</li>
                </ol>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-bold mb-4">Функция map</h2>
                <p className="mb-4">
                    Функция <strong>map</strong> позволяет Вам сделать "маппинг" между функцией и итерируемым объектом.
                    То есть, Вы можете запустить одну и ту же функцию для любого элемента в итерируемом объекте,
                    например в списке. Например:
                </p>

                <CodeExample
                    code={`def square(num):
    return num**2`}
                    output={``}
                />

                <CodeExample
                    code={`my_nums = [1,2,3,4,5]`}
                    output={``}
                />

                <CodeExample
                    code={`map(square,my_nums)`}
                    output={`<map at 0x205baec21d0>`}
                />

                <p className="mb-2 font-semibold">Чтобы получить результаты, либо выполняйте итерации с помощью map() либо просто сделайте приведение к списку</p>
                <CodeExample
                    code={`list(map(square,my_nums))`}
                    output={`[1, 4, 9, 16, 25]`}
                />

                <p className="mb-4">Функции могут быть и более сложными:</p>

                <CodeExample
                    code={`def splicer(mystring):
    if len(mystring) % 2 == 0:
        return 'even'
    else:
        return mystring[0]`}
                    output={``}
                />

                <CodeExample
                    code={`mynames = ['John','Cindy','Sarah','Kelly','Mike']`}
                    output={``}
                />

                <CodeExample
                    code={`list(map(splicer,mynames))`}
                    output={`['even', 'C', 'S', 'K', 'even']`}
                />
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-bold mb-4">Функция filter</h2>
                <p className="mb-4">
                    Функция filter возвращает итератор, который передаёт только те элементы итерируемого объекта,
                    для которых function(item) равно true. То есть, мы отфильтровываем элементы с помощью функции,
                    которая возвращает либо True, либо False. Эта функция и итерируемый объект передаются в функцию
                    filter, и Вы получаете только те результаты, которые вернут True, если их передать в указанную функцию.
                </p>

                <CodeExample
                    code={`def check_even(num):
    return num % 2 == 0`}
                    output={``}
                />

                <CodeExample
                    code={`nums = [0,1,2,3,4,5,6,7,8,9,10]`}
                    output={``}
                />

                <CodeExample
                    code={`filter(check_even,nums)`}
                    output={`<filter at 0x205baed4710>`}
                />

                <CodeExample
                    code={`list(filter(check_even,nums))`}
                    output={`[0, 2, 4, 6, 8, 10]`}
                />
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-bold mb-4">Выражения lambda</h2>
                <p className="mb-4">
                    Один из наиболее полезных (и непростых для новичков) инструментов в Python - это выражения lambda.
                    Выражения lambda позволяют нам создавать "анонимные" функции. По сути это означает, что мы можем
                    создавать функции на лету, без необходимости создавать функцию обычным способом с помощью def.
                </p>
                <p className="mb-4">
                    Объекты-функции, которые возвращают выражения lambda, работают точно так же, как и функции,
                    созданные с помощью def. И есть ключевое отличие, которое делает lambda полезными в определенных случаях:
                </p>

                <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-400 p-4 mb-4">
                    <p className="text-blue-800 dark:text-blue-200 font-bold">
                        Содержимое lambda - это единое выражение, а не набор команд.
                    </p>
                    <p className="text-blue-700 dark:text-blue-300 mt-2">
                        Содержимое lambda похоже на то, что мы можем поместить в команде return для def.
                        Мы можем указать результат в виде выражения, вместо того чтобы явно вернуть результат.
                        Поскольку мы ограничены выражением, lambda обладает меньшими возможностями, чем def.
                    </p>
                </div>

                <p className="mb-4">
                    Давайте постепенно построим выражение lambda, разобрав на части следующую функцию:
                </p>

                <CodeExample
                    code={`def square(num):
    result = num**2
    return result`}
                    output={``}
                />

                <CodeExample
                    code={`square(2)`}
                    output={`4`}
                />

                <p className="mb-2 font-semibold">Мы можем упростить её:</p>
                <CodeExample
                    code={`def square(num):
    return num**2`}
                    output={``}
                />

                <CodeExample
                    code={`square(2)`}
                    output={`4`}
                />

                <p className="mb-2 font-semibold">Мы даже можем написать это всё в одной строке:</p>
                <CodeExample
                    code={`def square(num): return num**2`}
                    output={``}
                />

                <CodeExample
                    code={`square(2)`}
                    output={`4`}
                />

                <p className="mb-4">
                    Вот такие функции и можно заменить с помощью выражений lambda. Выражение lambda может быть написано вот так:
                </p>

                <CodeExample
                    code={`lambda num: num ** 2`}
                    output={`<function __main__.<lambda>>`}
                />

                <p className="mb-2 font-semibold">На самом деле Вы можете не указывать имя для выражения lambda, это только для демонстрации!</p>
                <CodeExample
                    code={`square = lambda num: num **2`}
                    output={``}
                />

                <CodeExample
                    code={`square(2)`}
                    output={`4`}
                />
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-bold mb-4">Использование lambda с map и filter</h2>
                <p className="mb-4">
                    Так зачем же это использовать? Некоторые функции могут понадобится только один раз - например,
                    чтобы передать их в качестве параметра в функции, такие как map и filter. Для этого достаточно
                    просто использовать выражение lambda, без необходимости создавать функцию. Давайте повторим
                    некоторые примеры выше с помощью выражений lambda.
                </p>

                <p className="mb-2 font-semibold">Использование lambda с map:</p>
                <CodeExample
                    code={`list(map(lambda num: num ** 2, my_nums))`}
                    output={`[1, 4, 9, 16, 25]`}
                />

                <p className="mb-2 font-semibold">Использование lambda с filter:</p>
                <CodeExample
                    code={`list(filter(lambda n: n % 2 == 0, nums))`}
                    output={`[0, 2, 4, 6, 8, 10]`}
                />
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-bold mb-4">Дополнительные примеры lambda</h2>
                <p className="mb-4">
                    Приведём еще несколько примеров. Имейте ввиду, что чем сложнее функция, тем сложнее её перевести
                    в выражение lambda. Иногда проще (и иногда это единственный путь) определить функцию с помощью def.
                </p>

                <p className="mb-2 font-semibold">Выражение Lambda, чтобы получить первый символ строки:</p>
                <CodeExample
                    code={`lambda s: s[0]`}
                    output={`<function __main__.<lambda>>`}
                />

                <p className="mb-2 font-semibold">Пример использования:</p>
                <CodeExample
                    code={`names = ['Alice', 'Bob', 'Charlie']
list(map(lambda s: s[0], names))`}
                    output={`['A', 'B', 'C']`}
                />

                <p className="mb-2 font-semibold">Выражение Lambda для инверсии строки:</p>
                <CodeExample
                    code={`lambda s: s[::-1]`}
                    output={`<function __main__.<lambda>>`}
                />

                <p className="mb-2 font-semibold">Пример использования:</p>
                <CodeExample
                    code={`words = ['hello', 'world', 'python']
list(map(lambda s: s[::-1], words))`}
                    output={`['olleh', 'dlrow', 'nohtyp']`}
                />

                <p className="mb-4">
                    Вы можете даже передавать несколько параметров в выражение lambda. Опять же, имейте ввиду,
                    что не каждую функцию можно переписать в виде выражения lambda.
                </p>

                <p className="mb-2 font-semibold">Lambda с несколькими параметрами:</p>
                <CodeExample
                    code={`lambda x,y : x + y`}
                    output={`<function __main__.<lambda>>`}
                />

                <p className="mb-2 font-semibold">Пример использования:</p>
                <CodeExample
                    code={`add = lambda x,y : x + y
add(5, 3)`}
                    output={`8`}
                />
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-bold mb-4">Практические примеры</h2>

                <p className="mb-2 font-semibold">Фильтрация строк по длине:</p>
                <CodeExample
                    code={`words = ['cat', 'elephant', 'dog', 'hippopotamus', 'bird']
# Оставляем только слова длиннее 4 символов
long_words = list(filter(lambda word: len(word) > 4, words))
print(long_words)`}
                    output={`['elephant', 'hippopotamus']`}
                />

                <p className="mb-2 font-semibold">Преобразование температур:</p>
                <CodeExample
                    code={`celsius = [0, 20, 30, 40]
# Конвертируем Цельсии в Фаренгейты
fahrenheit = list(map(lambda c: (c * 9/5) + 32, celsius))
print(fahrenheit)`}
                    output={`[32.0, 68.0, 86.0, 104.0]`}
                />

                <p className="mb-2 font-semibold">Работа со словарями:</p>
                <CodeExample
                    code={`students = [
    {'name': 'Alice', 'grade': 85},
    {'name': 'Bob', 'grade': 92},
    {'name': 'Charlie', 'grade': 78},
    {'name': 'Diana', 'grade': 96}
]

# Получаем имена студентов с оценкой выше 80
good_students = list(filter(lambda student: student['grade'] > 80, students))
names = list(map(lambda student: student['name'], good_students))
print(names)`}
                    output={`['Alice', 'Bob', 'Diana']`}
                />
            </section>

            <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-400 p-4 mt-8">
                <p className="text-green-700 dark:text-green-300 mb-2">
                    <strong>Заключение:</strong>
                </p>
                <p className="text-green-700 dark:text-green-300">
                    Выражения lambda можно использовать с различными библиотеками. Например, библиотека pandas
                    для анализа данных очень хорошо работает с выражениями lambda. Они особенно полезны для
                    коротких, простых функций, которые используются только один раз.
                </p>
            </div>
        </LessonLayout>
    );
};

export default LambdaMapFilterLesson;