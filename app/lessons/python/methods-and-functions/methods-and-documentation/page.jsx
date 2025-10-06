import React from "react";
import LessonLayout from "@/components/LessonLayout";
import CodeExample from "@/components/CodeExample";

const MethodsAndDocumentationLesson = () => {
    return (
        <LessonLayout
            title="Методы и Документация"
            page="python/methods-and-functions/methods-and-documentation"
        >
            <section className="mb-6">
                <p className="mb-4">
                    Мы уже видели некоторые методы, когда изучали объекты и структуры данных в Python.
                    Методы - это по сути функции, встроенные в объекты. Позже в этом курсе мы узнаем,
                    как создавать свои собственные объекты и методы, используя Объектно-Ориентированное
                    Программирование (ООП) и классы.
                </p>
                <p className="mb-4">
                    Методы выполняют определённые действия для объекта, и они могут принимать на вход
                    параметры, так же, как и функции. В этой лекции мы ознакомимся с основами методов
                    и обсудим основные подходы в проектированию методов. Позже мы вернёмся к ним,
                    когда перейдем к Объектно-Ориентированному Программированию.
                </p>
                <p className="mb-4">
                    Методы пишутся так:
                </p>
                <CodeExample
                    code={`object.method(arg1,arg2,etc...)`}
                />
                <p className="mb-4">
                    Позже мы увидим, что можно предоставить себе что методы содержат параметр 'self',
                    который ссылается на сам объект. Этот параметр нельзя увидеть, но мы будем
                    использовать его позднее в лекциях про Объектно-Ориентированное Программирование.
                </p>
                <p className="mb-4">
                    В качестве примера давайте посмотрим на различные методы, которые имеет список:
                </p>
            </section>

            <section className="mb-6">
                <p className="mb-2 font-semibold">Создаем список</p>
                <CodeExample
                    code={`lst = [1,2,3,4,5]`}
                    output={``}
                />
            </section>

            <section className="mb-6">
                <p className="mb-4">
                    К счастью, в iPython и Jupyter Notebook Вы можете быстро увидеть все возможные
                    методы, используя клавишу tab. Методы для списка:
                </p>
                <ul className="list-disc list-inside mb-4 space-y-1">
                    <li>append</li>
                    <li>count</li>
                    <li>extend</li>
                    <li>insert</li>
                    <li>pop</li>
                    <li>remove</li>
                    <li>reverse</li>
                    <li>sort</li>
                </ul>
                <p className="mb-4">
                    Попробуем выполнить некоторые из них:
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-bold mb-4">Метод append()</h2>
                <p className="mb-4">
                    append() добавляет элементы в конец списка:
                </p>
                <CodeExample
                    code={`lst.append(6)`}
                    output={``}
                />
                <CodeExample
                    code={`lst`}
                    output={`[1, 2, 3, 4, 5, 6]`}
                />
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-bold mb-4">Метод count()</h2>
                <p className="mb-4">
                    Отлично! Как насчёт count()? Метод count() подсчитывает, сколько раз элемент
                    встречается в списке.
                </p>
                <p className="mb-2 font-semibold">Показать, сколько раз в списке встречается элемент 2</p>
                <CodeExample
                    code={`lst.count(2)`}
                    output={`1`}
                />
                <p className="mb-2 font-semibold">Добавим еще несколько элементов для демонстрации</p>
                <CodeExample
                    code={`lst.append(2)
lst.append(2)
print(lst)
lst.count(2)`}
                    output={`[1, 2, 3, 4, 5, 6, 2, 2]
3`}
                />
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-bold mb-4">Метод extend()</h2>
                <p className="mb-4">
                    extend() добавляет все элементы из другого списка в конец текущего списка:
                </p>
                <p className="mb-2 font-semibold">Создаем новый список для демонстрации</p>
                <CodeExample
                    code={`new_list = [1, 2, 3]
new_list.extend([4, 5, 6])
print(new_list)`}
                    output={`[1, 2, 3, 4, 5, 6]`}
                />
                <p className="mb-2 font-semibold">Можно добавить любую последовательность</p>
                <CodeExample
                    code={`new_list.extend('abc')
print(new_list)`}
                    output={`[1, 2, 3, 4, 5, 6, 'a', 'b', 'c']`}
                />
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-bold mb-4">Метод insert()</h2>
                <p className="mb-4">
                    insert() вставляет элемент в определенную позицию в списке:
                </p>
                <p className="mb-2 font-semibold">Создаем список для демонстрации</p>
                <CodeExample
                    code={`demo_list = [1, 2, 4, 5]
print("До вставки:", demo_list)

# Вставляем 3 в позицию с индексом 2
demo_list.insert(2, 3)
print("После вставки:", demo_list)`}
                    output={`До вставки: [1, 2, 4, 5]
После вставки: [1, 2, 3, 4, 5]`}
                />
                <p className="mb-2 font-semibold">Вставляем в начало списка</p>
                <CodeExample
                    code={`demo_list.insert(0, 0)
print(demo_list)`}
                    output={`[0, 1, 2, 3, 4, 5]`}
                />
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-bold mb-4">Метод pop()</h2>
                <p className="mb-4">
                    pop() удаляет и возвращает элемент из списка. По умолчанию удаляет последний элемент:
                </p>
                <p className="mb-2 font-semibold">Создаем список для демонстрации</p>
                <CodeExample
                    code={`pop_list = [1, 2, 3, 4, 5]
print("Исходный список:", pop_list)

# Удаляем последний элемент
removed_element = pop_list.pop()
print("Удаленный элемент:", removed_element)
print("Список после pop():", pop_list)`}
                    output={`Исходный список: [1, 2, 3, 4, 5]
Удаленный элемент: 5
Список после pop(): [1, 2, 3, 4]`}
                />
                <p className="mb-2 font-semibold">Удаляем элемент по индексу</p>
                <CodeExample
                    code={`removed_element = pop_list.pop(1)
print("Удаленный элемент по индексу 1:", removed_element)
print("Список после pop(1):", pop_list)`}
                    output={`Удаленный элемент по индексу 1: 2
Список после pop(1): [1, 3, 4]`}
                />
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-bold mb-4">Метод remove()</h2>
                <p className="mb-4">
                    remove() удаляет первое вхождение указанного элемента из списка:
                </p>
                <p className="mb-2 font-semibold">Создаем список с повторяющимися элементами</p>
                <CodeExample
                    code={`remove_list = [1, 2, 3, 2, 4, 2, 5]
print("До удаления:", remove_list)

# Удаляем первое вхождение элемента 2
remove_list.remove(2)
print("После remove(2):", remove_list)`}
                    output={`До удаления: [1, 2, 3, 2, 4, 2, 5]
После remove(2): [1, 3, 2, 4, 2, 5]`}
                />
                <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 p-4 mb-4">
                    <p className="text-yellow-800 dark:text-yellow-200">
                        <strong>Внимание!</strong> Попытка удалить несуществующий элемент вызовет ошибку ValueError.
                    </p>
                </div>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-bold mb-4">Метод reverse()</h2>
                <p className="mb-4">
                    reverse() переворачивает порядок элементов в списке:
                </p>
                <p className="mb-2 font-semibold">Создаем список для демонстрации</p>
                <CodeExample
                    code={`reverse_list = [1, 2, 3, 4, 5]
print("До переворота:", reverse_list)

reverse_list.reverse()
print("После reverse():", reverse_list)`}
                    output={`До переворота: [1, 2, 3, 4, 5]
После reverse(): [5, 4, 3, 2, 1]`}
                />
                <p className="mb-2 font-semibold">Работает с любыми элементами</p>
                <CodeExample
                    code={`word_list = ['apple', 'banana', 'cherry']
word_list.reverse()
print(word_list)`}
                    output={`['cherry', 'banana', 'apple']`}
                />
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-bold mb-4">Метод sort()</h2>
                <p className="mb-4">
                    sort() сортирует элементы списка по возрастанию. Можно использовать параметры для настройки сортировки:
                </p>
                <p className="mb-2 font-semibold">Сортировка чисел</p>
                <CodeExample
                    code={`numbers = [3, 1, 4, 1, 5, 9, 2, 6]
print("До сортировки:", numbers)

numbers.sort()
print("После sort():", numbers)`}
                    output={`До сортировки: [3, 1, 4, 1, 5, 9, 2, 6]
После sort(): [1, 1, 2, 3, 4, 5, 6, 9]`}
                />
                <p className="mb-2 font-semibold">Сортировка по убыванию</p>
                <CodeExample
                    code={`numbers.sort(reverse=True)
print("Сортировка по убыванию:", numbers)`}
                    output={`Сортировка по убыванию: [9, 6, 5, 4, 3, 2, 1, 1]`}
                />
                <p className="mb-2 font-semibold">Сортировка строк</p>
                <CodeExample
                    code={`fruits = ['banana', 'apple', 'cherry', 'date']
fruits.sort()
print("Сортировка строк:", fruits)

# Сортировка по длине строки
fruits.sort(key=len)
print("Сортировка по длине:", fruits)`}
                    output={`Сортировка строк: ['apple', 'banana', 'cherry', 'date']
Сортировка по длине: ['date', 'apple', 'banana', 'cherry']`}
                />
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-bold mb-4">Получение справки о методах</h2>
                <p className="mb-4">
                    В Jupyter Notebook можно использовать Shift+Tab, чтобы получить описание метода.
                    В обычном Python можно использовать функцию help():
                </p>
                <CodeExample
                    code={`help(lst.count)`}
                    output={`Help on built-in function count:

count(...) method of builtins.list instance
    L.count(value) -> integer -- return number of occurrences of value`}
                />
            </section>
        </LessonLayout>
    );
};

export default MethodsAndDocumentationLesson;