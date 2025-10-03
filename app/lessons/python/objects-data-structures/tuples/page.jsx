import React from "react";
import LessonLayout from "@/components/LessonLayout";
import CodeExample from "@/components/CodeExample";

const TuplesLesson = () => {
    return (
        <LessonLayout
            title="Кортежи (Tuples)"
            page="python/objects-data-structures/tuples"
        >
            <section className="mb-6">
                <p className="mb-4">
                    В Python кортежи (tuples) очень похожи на списки. Однако, в отличие от списков, они неизменяемы (<em>immutable</em>), то есть их нельзя поменять. Кортежи удобно использовать для элементов, которые не должны меняться, например дни недели и даты в календаре.
                </p>

                <p className="mb-4">В этой лекции мы сделаем обзор следующих тем:</p>
                <ol className="list-decimal list-inside mb-6 space-y-1">
                    <li>Создание кортежей</li>
                    <li>Основные методы для кортежей</li>
                    <li>Неизменность (Immutability)</li>
                    <li>Когда использовать кортежи</li>
                </ol>

                <p className="mb-4">
                    Можно использовать интуицию для работы с кортежами, используя знания о работе со списками. Кортежи ведут себя очень похожим образом, и основное отличие в том, что они неизменяемы.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-bold mb-4">Создание кортежей</h2>

                <p className="mb-4">
                    Для создания кортежа используются круглые скобки (), внутри которых элементы отделяются друг от друга запятыми. Например:
                </p>

                <p className="mb-2 font-semibold">Создаем кортеж</p>
                <CodeExample
                    code={`t = (1,2,3)`}
                    output={``}
                />

                <p className="mb-2 font-semibold">Проверяем длину с помощью len, как и для списков</p>
                <CodeExample
                    code={`len(t)`}
                    output={`3`}
                />

                <p className="mb-2 font-semibold">Также можно смешивать различные типы объектов</p>
                <CodeExample
                    code={`t = ('one',2)

# Проверка
t`}
                    output={`('one', 2)`}
                />

                <p className="mb-2 font-semibold">Используем индексы так же, как и в списках</p>
                <CodeExample
                    code={`t[0]`}
                    output={`'one'`}
                />

                <p className="mb-2 font-semibold">Аналогично спискам</p>
                <CodeExample
                    code={`t[-1]`}
                    output={`2`}
                />
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-bold mb-4">Основные методы для кортежей</h2>

                <p className="mb-4">
                    Кортежи имеют встроенные методы, но их меньше, чем для списков. Посмотрим на два из них:
                </p>

                <p className="mb-2 font-semibold">Используйте .index, чтобы указать значение и узнать его позицию (индекс) в кортеже</p>
                <p className="mb-2 text-sm text-gray-600 dark:text-gray-400">
                    Помните, что индексация начинается с нуля
                </p>
                <CodeExample
                    code={`t.index('one')`}
                    output={`0`}
                />

                <p className="mb-2 font-semibold">Используйте .count, чтобы посчитать, сколько раз встречается значение</p>
                <CodeExample
                    code={`t.count('one')`}
                    output={`1`}
                />
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-bold mb-4">Неизменность (Immutability)</h2>

                <p className="mb-4">
                    Еще раз повторимся, что кортежи являются неизменными. Давайте это проверим:
                </p>

                <CodeExample
                    code={`t[0]= 'change'`}
                    output={`TypeError: 'tuple' object does not support item assignment`}
                />

                <p className="mb-4">
                    Благодаря неизменности, кортежи не могут увеличиваться. Как только кортеж создан, в него нельзя добавить элементы.
                </p>

                <CodeExample
                    code={`t.append('nope')`}
                    output={`AttributeError: 'tuple' object has no attribute 'append'`}
                />
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-bold mb-4">Когда использовать кортежи</h2>

                <p className="mb-4">
                    Вы можете спросить: "Зачем вообще нужны кортежи, если они содержат меньше методов, чем списки? Не проще ли всегда использовать списки?" Честно говоря, кортежи используются не так часто, как списки. Но они используются в тех случаях, когда неизменность важна.
                </p>

                <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-400 p-4 mb-4">
                    <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Примеры использования кортежей:</h3>
                    <ul className="list-disc list-inside text-blue-700 dark:text-blue-300 space-y-1">
                        <li>Координаты точки (x, y)</li>
                        <li>Дни недели</li>
                        <li>Даты в календаре</li>
                        <li>Конфигурационные параметры</li>
                        <li>Данные, которые не должны изменяться</li>
                    </ul>
                </div>

                <p className="mb-4">
                    Например, если Ваша программа передаёт куда-то объект, и Вам нужно быть уверенным, что объект не поменяется, то кортежи - это подходящее решение для этой задачи. Они предоставляют удобный способ обеспечить целостность данных.
                </p>

                <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 p-4 mb-4">
                    <h3 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">Преимущества кортежей:</h3>
                    <ul className="list-disc list-inside text-yellow-700 dark:text-yellow-300 space-y-1">
                        <li><strong>Безопасность данных</strong> - нельзя случайно изменить</li>
                        <li><strong>Производительность</strong> - быстрее списков для некоторых операций</li>
                        <li><strong>Хешируемость</strong> - можно использовать как ключи в словарях</li>
                        <li><strong>Ясность кода</strong> - показывает намерение не изменять данные</li>
                    </ul>
                </div>
            </section>

            <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-400 p-4 mt-8">
                <p className="text-green-700 dark:text-green-300">
                    Итак, теперь Вы можете создавать и использовать кортежи, и понимаете их свойство неизменности.
                </p>
            </div>
        </LessonLayout>
    );
};

export default TuplesLesson;