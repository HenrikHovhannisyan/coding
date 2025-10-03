import React from "react";
import LessonLayout from "@/components/LessonLayout";
import CodeExample from "@/components/CodeExample";

const ForLoopsLesson = () => {
    return (
        <LessonLayout
            title="Циклы for"
            page="python/python-statements/for-loops"
        >
            <section className="mb-6">
                <p className="mb-4">
                    Циклы <code>for</code> позволяют выполнять итерации в Python; с помощью цикла можно пройти по набору элементов, которые находятся в <em>последовательности</em>, или в любом итерируемом наборе объектов. Объекты, которые мы изучали и по которым можно пройтись в цикле - это строки, списки, кортежи, и даже встроенные итерации для словарей, такие как ключи (keys) и значения (values).
                </p>

                <p className="mb-4">
                    Мы уже видели небольшой пример оператора <code>for</code> в предыдущих лекциях, но теперь давайте его формализуем.
                </p>

                <p className="mb-4">
                    Общий формат цикла <code>for</code> в Python выглядит так:
                </p>

                <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-6">
                    <pre className="text-sm font-mono">
                        {`for item in object:
    команды для выполнения`}
                    </pre>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-400 p-4 mb-6">
                    <p className="text-blue-800 dark:text-blue-200">
                        <strong>Важно:</strong> Название переменной <code>item</code> для очередного элемента может быть любым, каким Вы хотите. Так что используйте название, которое имеет смысл и которое будет понятно, когда Вы будете позднее читать этот код. Это название переменной можно использовать внутри цикла, например для выполнения проверок <code>if</code>.
                    </p>
                </div>

                <p className="mb-4">
                    Давайте рассмотрим несколько примеров для цикла <code>for</code>, используя различные типы объектов. Мы начнем с простых вещей, и постепенно перейдём к более сложным.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-bold mb-4">Пример 1: Итерации по списку</h2>

                <p className="mb-2 font-semibold">Мы узнаем в следующей лекции, как автоматизировать такой вид списка</p>
                <CodeExample
                    code={`list1 = [1,2,3,4,5,6,7,8,9,10]`}
                    output={``}
                />

                <CodeExample
                    code={`for num in list1:
    print(num)`}
                    output={`1
2
3
4
5
6
7
8
9
10`}
                />

                <p className="mb-4">
                    Отлично! Надеюсь, это выглядит разумно. Теперь добавим оператор <code>if</code>, чтобы проверить чётные числа. Для этого сначала рассмотрим остаток от деления.
                </p>

                <h3 className="text-xl font-bold mb-3">Остаток от деления</h3>
                <p className="mb-4">Остаток от деления пишется с помощью символа %. Например:</p>

                <CodeExample
                    code={`17 % 5`}
                    output={`2`}
                />

                <p className="mb-4">Такой результат получился так: 17 разделить на 5 равно 3, и остаток 2. Рассмотрим еще несколько примеров:</p>

                <CodeExample
                    code={`# 10 разделить на 3 равно 3 и остаток 1
10 % 3`}
                    output={`1`}
                />

                <CodeExample
                    code={`# 18 разделить на 7 равно 2 и остаток  4
18 % 7`}
                    output={`4`}
                />

                <CodeExample
                    code={`# 4 разделить на 2 равно 2 без остатка (остаток равен 0) 
4 % 2`}
                    output={`0`}
                />

                <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-400 p-4 mb-4">
                    <p className="text-green-800 dark:text-green-200">
                        <strong>Полезно знать:</strong> Если число делится нацело без остатка, то результат функции % равен 0. Мы можем использовать это для проверки чётных чисел: если остаток от деления на 2 равен 0, то значит число чётное!
                    </p>
                </div>

                <p className="mb-4">Вернемся к циклам <code>for</code>!</p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-bold mb-4">Пример 2: Вывод только чётных чисел</h2>

                <CodeExample
                    code={`for num in list1:
    if num % 2 == 0:
        print(num)`}
                    output={`2
4
6
8
10`}
                />

                <p className="mb-4">Мы также можем написать оператор <code>else</code>:</p>

                <CodeExample
                    code={`for num in list1:
    if num % 2 == 0:
        print(num)
    else:
        print('Нечётное число')`}
                    output={`Нечётное число
2
Нечётное число
4
Нечётное число
6
Нечётное число
8
Нечётное число
10`}
                />
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-bold mb-4">Пример 3: Суммирование элементов</h2>

                <p className="mb-4">
                    Еще один распространённый приём для циклов <code>for</code> - это нахождения суммы элементов. Например, давайте напишем цикл <code>for</code> для суммирования элементов списка:
                </p>

                <CodeExample
                    code={`# Начинаем сумму с нуля
list_sum = 0 

for num in list1:
    list_sum = list_sum + num

print(list_sum)`}
                    output={`55`}
                />

                <p className="mb-4">
                    Отлично! Убедитесь, что Вы понимаете, что здесь происходит. Также для этой цели можно использовать оператор <code>+=</code>, чтобы прибавить очередное значение к уже имеющемуся значению. Например:
                </p>

                <CodeExample
                    code={`# Начинаем сумму с нуля
list_sum = 0 

for num in list1:
    list_sum += num

print(list_sum)`}
                    output={`55`}
                />
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-bold mb-4">Пример 4: Итерации по строкам</h2>

                <p className="mb-4">
                    Мы использовали циклы <code>for</code> для списков, а как насчет строк? Помните, строки это последовательности, поэтому когда мы выполняем итерации, то получим каждый символ в строке.
                </p>

                <CodeExample
                    code={`for letter in 'This is a string.':
    print(letter)`}
                    output={`T
h
i
s
 
i
s
 
a
 
s
t
r
i
n
g
.`}
                />
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-bold mb-4">Пример 5: Итерации по кортежам</h2>

                <p className="mb-4">Теперь посмотрим, как пишется цикл <code>for</code> для кортежей (tuple):</p>

                <CodeExample
                    code={`tup = (1,2,3,4,5)

for t in tup:
    print(t)`}
                    output={`1
2
3
4
5`}
                />
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-bold mb-4">Пример 6: Распаковка кортежей</h2>

                <p className="mb-4">
                    Кортежи имеют особое свойство, когда речь заходит о циклах <code>for</code>. Если Вы выполняете итерации по последовательности, которая содержит кортежи, то выбираемый элемент тоже может быть кортежем. Это пример <em>распаковки кортежа</em> (<em>tuple unpacking</em>). В цикле <code>for</code> мы можем распаковывать кортежи внутри последовательности, и получать доступ к отдельным элементам внутри кортежа!
                </p>

                <CodeExample
                    code={`list2 = [(2,4),(6,8),(10,12)]`}
                    output={``}
                />

                <CodeExample
                    code={`for tup in list2:
    print(tup)`}
                    output={`(2, 4)
(6, 8)
(10, 12)`}
                />

                <p className="mb-2 font-semibold">А теперь с распаковкой!</p>
                <CodeExample
                    code={`for (t1,t2) in list2:
    print(t1)
    print(t2)
    print('---')`}
                    output={`2
4
---
6
8
---
10
12
---`}
                />

                <p className="mb-4">
                    Круто! Мы можем получить доступ к элементам внутри кортежей с помощью распаковки! Это важно по той причине, что многие объекты возвращают свои результаты в виде кортежей. Давайте посмотрим на итерации по словарю данных, чтобы рассмотреть это подробнее!
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-bold mb-4">Пример 7: Итерации по словарям</h2>

                <CodeExample
                    code={`d = {'k1':1,'k2':2,'k3':3}`}
                    output={``}
                />

                <CodeExample
                    code={`for item in d:
    print(item)`}
                    output={`k1
k2
k3`}
                />

                <p className="mb-4">
                    Обратите внимание, что мы получили только ключи. Как мы можем получить значения? Или получить и ключи, и значения?
                </p>

                <p className="mb-4">
                    Для этого рассмотрим три метода для словарей: <strong>.keys()</strong>, <strong>.values()</strong> and <strong>.items()</strong>
                </p>

                <p className="mb-4">
                    В Python каждый из этих методов возвращает объект <em>dictionary view object</em>. Он поддерживает такие операции, как проверка содержания элемента и итерации, но его содержание не является независимым от основного словаря – это всего лишь предоставление (view). Давайте посмотрим это в действии:
                </p>

                <p className="mb-2 font-semibold">Создаем объект "dictionary view object"</p>
                <CodeExample
                    code={`d.items()`}
                    output={`dict_items([('k1', 1), ('k2', 2), ('k3', 3)])`}
                />

                <p className="mb-4">
                    Поскольку метод .items() поддерживает итерации, мы можем выполнить <em>распаковку словаря</em>, чтобы разделить ключи и значения, как мы видели в предыдущих примерах.
                </p>

                <p className="mb-2 font-semibold">Распаковка словаря</p>
                <CodeExample
                    code={`for k,v in d.items():
    print(k)
    print(v)
    print('---')`}
                    output={`k1
1
---
k2
2
---
k3
3
---`}
                />

                <p className="mb-4">
                    Если Вы хотите получить сам список ключей, значений, или кортежей ключ/значение, то Вы можете сконвертировать представление в список:
                </p>

                <CodeExample
                    code={`list(d.keys())`}
                    output={`['k1', 'k2', 'k3']`}
                />

                <p className="mb-4">
                    Помните, что словари неупорядочены, поэтому ключи и значения возвращаются в любом порядке. Вы можете получить отсортированный список с помощью sorted():
                </p>

                <CodeExample
                    code={`sorted(d.values())`}
                    output={`[1, 2, 3]`}
                />
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-bold mb-4">Практические примеры</h2>

                <h3 className="text-lg font-semibold mb-3">Подсчет символов в строке</h3>
                <CodeExample
                    code={`text = "hello world"
char_count = {}

for char in text:
    if char in char_count:
        char_count[char] += 1
    else:
        char_count[char] = 1

for char, count in char_count.items():
    print(f"'{char}': {count}")`}
                    output={`'h': 1
'e': 1
'l': 3
'o': 2
' ': 1
'w': 1
'r': 1
'd': 1`}
                />

                <h3 className="text-lg font-semibold mb-3">Обработка списка покупок</h3>
                <CodeExample
                    code={`shopping_list = [
    ("яблоки", 5, 50),
    ("бананы", 3, 30),
    ("молоко", 2, 80)
]

total_cost = 0
print("Список покупок:")
print("-" * 30)

for item, quantity, price in shopping_list:
    cost = quantity * price
    total_cost += cost
    print(f"{item}: {quantity} шт. x {price} руб. = {cost} руб.")

print("-" * 30)
print(f"Общая стоимость: {total_cost} руб.")`}
                    output={`Список покупок:
------------------------------
яблоки: 5 шт. x 50 руб. = 250 руб.
бананы: 3 шт. x 30 руб. = 90 руб.
молоко: 2 шт. x 80 руб. = 160 руб.
------------------------------
Общая стоимость: 500 руб.`}
                />

                <h3 className="text-lg font-semibold mb-3">Фильтрация данных</h3>
                <CodeExample
                    code={`numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
even_numbers = []
odd_numbers = []

for num in numbers:
    if num % 2 == 0:
        even_numbers.append(num)
    else:
        odd_numbers.append(num)

print("Четные числа:", even_numbers)
print("Нечетные числа:", odd_numbers)`}
                    output={`Четные числа: [2, 4, 6, 8, 10]
Нечетные числа: [1, 3, 5, 7, 9]`}
                />
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-bold mb-4">Резюме</h2>

                <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-400 p-4 mb-4">
                    <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2">Что мы изучили:</h3>
                    <ul className="list-disc list-inside text-green-700 dark:text-green-300 space-y-1">
                        <li>Основной синтаксис цикла <code>for</code></li>
                        <li>Итерации по спискам, строкам, кортежам и словарям</li>
                        <li>Использование остатка от деления (%) для проверки четности</li>
                        <li>Суммирование элементов в цикле</li>
                        <li>Распаковка кортежей в циклах</li>
                        <li>Работа со словарями: .keys(), .values(), .items()</li>
                        <li>Практические применения циклов</li>
                    </ul>
                </div>
            </section>
        </LessonLayout>
    );
};

export default ForLoopsLesson;