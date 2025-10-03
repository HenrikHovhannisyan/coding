import React from "react";
import LessonLayout from "@/components/LessonLayout";
import CodeExample from "@/components/CodeExample";

const ListsLesson = () => {
    return (
        <LessonLayout
            title="Списки (Lists)"
            page="python/objects-data-structures/lists"
        >
            <section className="mb-6">
                <p className="mb-4">
                    Когда мы обсуждали ранее строки, мы рассмотрели такое понятие, как последовательность (<em>sequence</em>) в Python. Списки - это наиболее общая версия последовательностей в Python. В отличие от строк, списки можно менять - элементы внутри списка можно менять!
                </p>

                <p className="mb-4">В этой лекции мы изучим следующие темы:</p>
                <ol className="list-decimal list-inside mb-6 space-y-1">
                    <li>Создание списков</li>
                    <li>Индексирование списков и разбиение их на части</li>
                    <li>Основные методы для списков</li>
                    <li>Вложенные списки</li>
                    <li>Введение в генераторы списков (List Comprehensions)</li>
                </ol>

                <p className="mb-4">
                    Списки создаются с помощью скобок [ ], элементы списка отделяются друг от друга запятыми.
                </p>

                <p className="mb-4">Давайте посмотрим, как можно создавать списки!</p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-bold mb-4">Создание списков</h2>

                <p className="mb-2 font-semibold">Присвоить переменной my_list список</p>
                <CodeExample
                    code={`my_list = [1,2,3]`}
                    output={``}
                />

                <p className="mb-4">
                    Мы создали список целых чисел, но на самом деле списки могут содержать элементы разных типов. Например:
                </p>

                <CodeExample
                    code={`my_list = ['A string',23,100.232,'o']`}
                    output={``}
                />

                <p className="mb-4">
                    Как и для строк, узнать количество элементов в списке можно с помощью функции len().
                </p>

                <CodeExample
                    code={`len(my_list)`}
                    output={`4`}
                />
            </section>

            <section className="mb-6">
                <h3 className="text-xl font-bold mb-4">Индексирование и разбиение на части</h3>

                <p className="mb-4">
                    Индексирование и разбиение на части работает точно так же, как и для строк. Давайте создадим новый список и напомним себе, как это работает:
                </p>

                <CodeExample
                    code={`my_list = ['one','two','three',4,5]`}
                    output={``}
                />

                <p className="mb-2 font-semibold">Берём элемент на позиции 0</p>
                <CodeExample
                    code={`my_list[0]`}
                    output={`'one'`}
                />

                <p className="mb-2 font-semibold">Берём позицию 1 и всё что после нее</p>
                <CodeExample
                    code={`my_list[1:]`}
                    output={`['two', 'three', 4, 5]`}
                />

                <p className="mb-2 font-semibold">Берём всё ДО позиции 3</p>
                <CodeExample
                    code={`my_list[:3]`}
                    output={`['one', 'two', 'three']`}
                />

                <p className="mb-4">Как и для строк, для списков можно использовать + для конкатенации списков.</p>

                <CodeExample
                    code={`my_list + ['new item']`}
                    output={`['one', 'two', 'three', 4, 5, 'new item']`}
                />

                <p className="mb-4">Обратите внимание: сам список my_list при этом не поменялся!</p>

                <CodeExample
                    code={`my_list`}
                    output={`['one', 'two', 'three', 4, 5]`}
                />

                <p className="mb-4">Если нужно поменять изначальный список, то можно переопределить список.</p>

                <p className="mb-2 font-semibold">Указываем новое значение</p>
                <CodeExample
                    code={`my_list = my_list + ['add new item permanently']`}
                    output={``}
                />

                <CodeExample
                    code={`my_list`}
                    output={`['one', 'two', 'three', 4, 5, 'add new item permanently']`}
                />

                <p className="mb-4">Также можно использовать * для дублирования, как и для строк:</p>

                <p className="mb-2 font-semibold">Make the list double</p>
                <CodeExample
                    code={`my_list * 2`}
                    output={`['one', 'two', 'three', 4, 5, 'add new item permanently', 'one', 'two', 'three', 4, 5, 'add new item permanently']`}
                />

                <p className="mb-2 font-semibold">Опять же, это не затрагивает изначальный список</p>
                <CodeExample
                    code={`my_list`}
                    output={`['one', 'two', 'three', 4, 5, 'add new item permanently']`}
                />
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-bold mb-4">Основные методы для списков</h2>

                <p className="mb-4">
                    Если Вы знаете другие языки программирования, то можете провести параллели между массивами в других языках и списками в Python. Однако списки в Python более гибкие, чем массивы в других языках, по двум причинам: у них нет фиксированного размера (то есть нам не нужно указывать, насколько большим будет список), и они не ограничивают типы объектов (как мы видели выше).
                </p>

                <p className="mb-4">Давайте посмотрим некоторые методы, специфичные для списков:</p>

                <p className="mb-2 font-semibold">Создаем новый список</p>
                <CodeExample
                    code={`list1 = [1,2,3]`}
                    output={``}
                />

                <p className="mb-4">Метод <strong>append</strong> добавляет новый элемент в конец списка:</p>

                <p className="mb-2 font-semibold">Append</p>
                <CodeExample
                    code={`list1.append('append me!')`}
                    output={``}
                />

                <p className="mb-2 font-semibold">Проверка</p>
                <CodeExample
                    code={`list1`}
                    output={`[1, 2, 3, 'append me!']`}
                />

                <p className="mb-4">
                    Метод <strong>pop</strong> "вынимает" элемент из списка. По умолчанию вынимается последний элемент, но Вы также можете указать позицию, с которой нужно вынуть элемент. Рассмотрим пример:
                </p>

                <p className="mb-2 font-semibold">Вынимаем элемент на позиции 0</p>
                <CodeExample
                    code={`list1.pop(0)`}
                    output={`1`}
                />

                <p className="mb-2 font-semibold">Проверка</p>
                <CodeExample
                    code={`list1`}
                    output={`[2, 3, 'append me!']`}
                />

                <p className="mb-2 font-semibold">Сохраняем вынимаемый элемент в отдельной переменной.</p>
                <p className="mb-2 text-sm text-gray-600 dark:text-gray-400">
                    Помните, по умолчанию вынимаем последний элемент в списке (индекс -1)
                </p>
                <CodeExample
                    code={`popped_item = list1.pop()`}
                    output={``}
                />

                <CodeExample
                    code={`popped_item`}
                    output={`'append me!'`}
                />

                <p className="mb-2 font-semibold">Проверка</p>
                <CodeExample
                    code={`list1`}
                    output={`[2, 3]`}
                />

                <p className="mb-4">
                    Также следует сказать, что обращение по несуществующему номеру индекса выдаст ошибку, если такого элемента нет. Например:
                </p>

                <CodeExample
                    code={`list1[100]`}
                    output={`IndexError: list index out of range`}
                />

                <p className="mb-4">
                    Мы также можем использовать методы <strong>sort</strong> и <strong>reverse</strong> для сортировки списков:
                </p>

                <CodeExample
                    code={`new_list = ['a','e','x','b','c']`}
                    output={``}
                />

                <p className="mb-2 font-semibold">проверка</p>
                <CodeExample
                    code={`new_list`}
                    output={`['a', 'e', 'x', 'b', 'c']`}
                />

                <p className="mb-2 font-semibold">Используем reverse для обратной сортировки (изменения сохраняются в списке!)</p>
                <CodeExample
                    code={`new_list.reverse()`}
                    output={``}
                />

                <CodeExample
                    code={`new_list`}
                    output={`['c', 'b', 'x', 'e', 'a']`}
                />

                <p className="mb-2 font-semibold">Используем sort для сортировки списка (в этом случае по алфавиту, а для чисел было бы по возрастанию)</p>
                <CodeExample
                    code={`new_list.sort()`}
                    output={``}
                />

                <CodeExample
                    code={`new_list`}
                    output={`['a', 'b', 'c', 'e', 'x']`}
                />
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-bold mb-4">Вложенные списки</h2>

                <p className="mb-4">
                    Прекрасная особенность структур данных в Python состоит в том, что они могут быть вложенными (<em>nested</em>). Это значит, что мы можем создавать структуры данных внутри структур данных. Например: список внутри списка.
                </p>

                <p className="mb-4">Давайте посмотрим, как это работает!</p>

                <p className="mb-2 font-semibold">Создадим три списка</p>
                <CodeExample
                    code={`lst_1=[1,2,3]
lst_2=[4,5,6]
lst_3=[7,8,9]

# Создадим список списков, получаем матрицу
matrix = [lst_1,lst_2,lst_3]`}
                    output={``}
                />

                <p className="mb-2 font-semibold">Проверка</p>
                <CodeExample
                    code={`matrix`}
                    output={`[[1, 2, 3], [4, 5, 6], [7, 8, 9]]`}
                />

                <p className="mb-4">
                    Мы можем использовать индексы, чтобы получить элементы - но теперь у нас два уровня индексирования. Сначала элементы в списке matrix, а затем элементы внутри выбранного списка!
                </p>

                <p className="mb-2 font-semibold">Берем первый элемент в объекте matrix</p>
                <CodeExample
                    code={`matrix[0]`}
                    output={`[1, 2, 3]`}
                />

                <p className="mb-2 font-semibold">Берем первый элемент внутри первого элемента в объекте matrix</p>
                <CodeExample
                    code={`matrix[0][0]`}
                    output={`1`}
                />
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-bold mb-4">Генераторы списков (List Comprehensions)</h2>

                <p className="mb-4">
                    В Python есть возможность создавать списки с помощью генераторов списков (List Comprehensions). Этот термин трудно перевести на русский язык, иногда его ещё переводят как "абстракция списков" или "списковое включение". Генераторы списков позволяют быстро создавать списки. Чтобы понять их, нам нужно понять работу циклов for. Не волнуйтесь, если этот раздел пока будет выглядеть не вполне понятно - просто пропустите его, мы вернемся к этой теме позже.
                </p>

                <p className="mb-4">Но если Вы хотите знать уже сейчас, то вот пример:</p>

                <p className="mb-2 font-semibold">Создаем список с помощью цикла for внутри []</p>
                <CodeExample
                    code={`first_col = [row[0] for row in matrix]`}
                    output={``}
                />

                <CodeExample
                    code={`first_col`}
                    output={`[1, 4, 7]`}
                />

                <p className="mb-4">
                    Мы использовали генератор списков, чтобы взять первый элемент в каждой строке объекта matrix. Мы рассмотрим это более подробно далее в курсе!
                </p>
            </section>
        </LessonLayout>
    );
};

export default ListsLesson;