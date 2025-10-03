import React from "react";
import LessonLayout from "@/components/LessonLayout";
import CodeExample from "@/components/CodeExample";

const UsefulOperatorsLesson = () => {
    return (
        <LessonLayout
            title="Полезные операторы"
            page="python/python-statements/useful-operators"
        >
            <section className="mb-6">
                <p className="mb-4">
                    В Python есть несколько встроенных функций и операторов, которые не попадают ни в одну из категорий, так что мы рассмотрим их в этой лекции. Давайте начнём!
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-bold mb-4">range</h2>

                <p className="mb-4">
                    Функция range позволяет быстро <em>сгенерировать</em> список чисел. Это может пригодиться, так что посмотрите, как использовать эту функцию! В неё можно передать три параметра: начало, окончание, и размер шага. Рассмотрим несколько примеров:
                </p>

                <CodeExample
                    code={`range(0,11)`}
                    output={`range(0, 11)`}
                />

                <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-400 p-4 mb-4">
                    <p className="text-blue-800 dark:text-blue-200">
                        <strong>Важно:</strong> Обратите внимание, что range это функция-генератор (<strong>generator</strong>), и чтобы получить из неё список значений, нам нужно привести ее к списку с помощью <strong>list()</strong>. Что такое генератор? Это специальный тип функции, которая генерирует информацию и не сохраняет эту информацию целиком в памяти.
                    </p>
                </div>

                <p className="mb-2 font-semibold">Обратите внимание, что число 11 не включено - номера идут до 11, но не включая это число!</p>
                <CodeExample
                    code={`list(range(0,11))`}
                    output={`[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]`}
                />

                <CodeExample
                    code={`list(range(0,12))`}
                    output={`[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]`}
                />

                <p className="mb-2 font-semibold">Третий параметр это размер шага!</p>
                <p className="mb-2 text-sm text-gray-600 dark:text-gray-400">
                    Размер шага означает, с каким шагом двигаться вперёд, от одного числа к следующему.
                </p>
                <CodeExample
                    code={`list(range(0,11,2))`}
                    output={`[0, 2, 4, 6, 8, 10]`}
                />

                <CodeExample
                    code={`list(range(0,101,10))`}
                    output={`[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]`}
                />
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-bold mb-4">enumerate</h2>

                <p className="mb-4">
                    Функция enumerate очень полезна для использования в циклах for. Представим следующую ситуацию:
                </p>

                <CodeExample
                    code={`index_count = 0

for letter in 'abcde':
    print("На позиции {} находится буква {}".format(index_count,letter))
    index_count += 1`}
                    output={`На позиции 0 находится буква a
На позиции 1 находится буква b
На позиции 2 находится буква c
На позиции 3 находится буква d
На позиции 4 находится буква e`}
                />

                <p className="mb-4">
                    Чтобы отследить, сколько шагов цикла уже было выполнено, можно использовать функцию enumerate и не беспокоиться о создании и обновлении переменной index_count.
                </p>

                <p className="mb-2 font-semibold">Обратите внимание на распаковку кортежей!</p>
                <CodeExample
                    code={`for i,letter in enumerate('abcde'):
    print("На позиции {} находится буква {}".format(i,letter))`}
                    output={`На позиции 0 находится буква a
На позиции 1 находится буква b
На позиции 2 находится буква c
На позиции 3 находится буква d
На позиции 4 находится буква e`}
                />
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-bold mb-4">zip</h2>

                <p className="mb-4">
                    Обратите внимание на формат, который возвращает enumerate. Давайте посмотрим это, преобразовав результат в список:
                </p>

                <CodeExample
                    code={`list(enumerate('abcde'))`}
                    output={`[(0, 'a'), (1, 'b'), (2, 'c'), (3, 'd'), (4, 'e')]`}
                />

                <p className="mb-4">
                    Это список кортежей, то есть мы можем распаковать кортежи во время цикла for. Эта структура данных достаточно типична для Python, особенно при работе со сторонними библиотеками. Вы можете использовать функцию <strong>zip()</strong>, чтобы создать список кортежей, соединив вместе два списка.
                </p>

                <CodeExample
                    code={`mylist1 = [1,2,3,4,5]
mylist2 = ['a','b','c','d','e']`}
                    output={``}
                />

                <p className="mb-2 font-semibold">Это тоже генератор! Мы обсудим генераторы позже, а сейчас давайте в следующей ячейке преобразуем zip в список</p>
                <CodeExample
                    code={`zip(mylist1,mylist2)`}
                    output={`<zip at 0x54d1f88>`}
                />

                <CodeExample
                    code={`list(zip(mylist1,mylist2))`}
                    output={`[(1, 'a'), (2, 'b'), (3, 'c'), (4, 'd'), (5, 'e')]`}
                />

                <p className="mb-4">Чтобы использовать генератор, мы можем просто использовать цикл for</p>

                <CodeExample
                    code={`for item1, item2 in zip(mylist1,mylist2):
    print('Для этого кортежа первый элемент это {}, и второй элемент это {}'.format(item1,item2))`}
                    output={`Для этого кортежа первый элемент это 1, и второй элемент это a
Для этого кортежа первый элемент это 2, и второй элемент это b
Для этого кортежа первый элемент это 3, и второй элемент это c
Для этого кортежа первый элемент это 4, и второй элемент это d
Для этого кортежа первый элемент это 5, и второй элемент это e`}
                />
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-bold mb-4">Оператор in</h2>

                <p className="mb-4">
                    Мы уже видели ключевое слово <strong>in</strong> в цикле for, но мы также можем использовать его, чтобы проверить, содержится ли элемент в списке.
                </p>

                <CodeExample
                    code={`'x' in ['x','y','z']`}
                    output={`True`}
                />

                <CodeExample
                    code={`'x' in [1,2,3]`}
                    output={`False`}
                />
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-bold mb-4">min и max</h2>

                <p className="mb-4">
                    С помощью этих функций можно узнать минимальное и максимальное значение в списке.
                </p>

                <CodeExample
                    code={`mylist = [10,20,30,40,100]`}
                    output={``}
                />

                <CodeExample
                    code={`min(mylist)`}
                    output={`10`}
                />

                <CodeExample
                    code={`max(mylist)`}
                    output={`100`}
                />
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-bold mb-4">random</h2>

                <p className="mb-4">
                    В Python есть встроенная библиотека random. В этой библиотеке много функций, и сейчас мы посмотрим только две из них.
                </p>

                <CodeExample
                    code={`from random import shuffle`}
                    output={``}
                />

                <p className="mb-2 font-semibold">Перемешать список "на месте", то есть эта функция меняет список, но при этом ничего не возвращает</p>
                <CodeExample
                    code={`shuffle(mylist)
print(mylist)`}
                    output={`[40, 10, 100, 30, 20]`}
                />

                <CodeExample
                    code={`from random import randint`}
                    output={``}
                />

                <p className="mb-2 font-semibold">Возвращает случайное число integer в диапазоне [a, b], включая оба пограничных значения.</p>
                <CodeExample
                    code={`randint(0,100)`}
                    output={`25`}
                />

                <CodeExample
                    code={`randint(0,100)`}
                    output={`91`}
                />
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-bold mb-4">input</h2>

                <p className="mb-4">
                    Функция input позволяет получить ввод от пользователя. В интерактивных примерах мы покажем имитацию ввода:
                </p>

                <CodeExample
                    code={`# В реальной программе пользователь вводит текст
user_input = input('Введите что-нибудь в этом поле: ')
print(f"Вы ввели: {user_input}")`}
                    output={`Введите что-нибудь в этом поле: Привет!
Вы ввели: Привет!`}
                />
            </section>

            <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-400 p-4 mt-8">
                <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2">Что мы изучили:</h3>
                <ul className="list-disc list-inside text-green-700 dark:text-green-300 space-y-1">
                    <li><strong>range()</strong> - генерация последовательностей чисел</li>
                    <li><strong>enumerate()</strong> - получение индексов в циклах</li>
                    <li><strong>zip()</strong> - объединение нескольких последовательностей</li>
                    <li><strong>in</strong> - проверка принадлежности элемента</li>
                    <li><strong>min()/max()</strong> - поиск минимума и максимума</li>
                    <li><strong>random</strong> - работа со случайными числами</li>
                    <li><strong>input()</strong> - получение ввода от пользователя</li>
                </ul>
                <p className="text-green-700 dark:text-green-300 mt-3">
                    Эти функции значительно упрощают написание кода и делают его более читаемым!
                </p>
            </div>
        </LessonLayout>
    );
};

export default UsefulOperatorsLesson;