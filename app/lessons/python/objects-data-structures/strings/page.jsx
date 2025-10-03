import React from "react";
import LessonLayout from "@/components/LessonLayout";
import CodeExample from "@/components/CodeExample";

const StringsLesson = () => {
    return (
        <LessonLayout
            title="Строки (Strings)"
            page="python/objects-data-structures/strings"
        >
            <section className="mb-6">
                <p className="mb-4">
                    Строки используются в Python для хранения текстовой информации. Строки в Python являются последовательностью (<em>sequence</em>), то есть Python хранит каждый элемент строки в определенном порядке. Например, строка "hello" - это последовательность символов в определенном порядке. Это значит, что мы можем использовать индексы, чтобы получить отдельные буквы (например, первую буквы или последнюю букву).
                </p>

                <p className="mb-4">
                    Идея последовательности важна в Python, и мы ещё не раз столкнемся с ней позже в этом курсе.
                </p>

                <p className="mb-4">В этой лекции Вы изучите следующие темы:</p>
                <ol className="list-decimal list-inside mb-6 space-y-1">
                    <li>Создание строк</li>
                    <li>Отображение строк</li>
                    <li>Индексирование и разбиение строк на части (slicing)</li>
                    <li>Свойства строк</li>
                    <li>Методы строк</li>
                    <li>Форматирование отображения</li>
                </ol>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-bold mb-4">Создание строки</h2>
                
                <p className="mb-4">
                    Чтобы создать строку в Python, можно использовать одинарные кавычки или двойные кавычки. Например:
                </p>

                <p className="mb-2 font-semibold">Одно слово</p>
                <CodeExample
                    code={`'hello'`}
                    output={`'hello'`}
                />

                <p className="mb-2 font-semibold">Целая фраза</p>
                <CodeExample
                    code={`'This is also a string'`}
                    output={`'This is also a string'`}
                />

                <p className="mb-2 font-semibold">Также можно использовать двойные кавычки</p>
                <CodeExample
                    code={`"String built with double quotes"`}
                    output={`'String built with double quotes'`}
                />

                <p className="mb-2 font-semibold">Будьте осторожны с кавычками!</p>
                <CodeExample
                    code={`' I'm using single quotes, but this will create an error'`}
                    output={`SyntaxError: invalid syntax`}
                />

                <p className="mb-4">
                    Причина этой ошибки - кавычка внутри вот этого фрагмента: <code>I'm</code>, который по сути завершил строку. Чтобы исправить это, можно использовать комбинацию одинарных и двойных кавычек.
                </p>

                <CodeExample
                    code={`"Now I'm ready to use the single quotes inside a string!"`}
                    output={`"Now I'm ready to use the single quotes inside a string!"`}
                />

                <p className="mb-4">Далее посмотрим, как можно отображать (распечатывать) строки!</p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-bold mb-4">Отображение (печать) строки</h2>
                
                <p className="mb-4">
                    Если в Jupyter notebook поместить строку в ячейке, то эта строка будет отображена на экране. Тем не менее, более корректный способ отображения строк - это использование функции print.
                </p>

                <p className="mb-2 font-semibold">Мы можем просто объявить строку</p>
                <CodeExample
                    code={`'Hello World'`}
                    output={`'Hello World'`}
                />

                <p className="mb-2 font-semibold">Обратите внимание, что таким способом нельзя вывести несколько строк</p>
                <CodeExample
                    code={`'Hello World 1'
'Hello World 2'`}
                    output={`'Hello World 2'`}
                />

                <p className="mb-4">Для отображения строки используется команда print.</p>

                <CodeExample
                    code={`print('Hello World 1')
print('Hello World 2')
print('Используйте \\n для перехода на новую строку')
print('\\n')
print('Видите?')`}
                    output={`Hello World 1
Hello World 2
Используйте 
 для перехода на новую строку


Видите?`}
                />
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-bold mb-4">Основы работы со строками</h2>
                
                <p className="mb-4">Мы можем использовать функцию len(), чтобы узнать длину строки!</p>

                <CodeExample
                    code={`len('Hello World')`}
                    output={`11`}
                />

                <p className="mb-4">
                    Встроенная функция len() считает все символы в строке, включая пробелы и пунктуацию.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-bold mb-4">Индексирование строк</h2>
                
                <p className="mb-4">
                    Как мы обсуждали, строки это последовательности, и Python может использовать индексы для получения части строки. Давайте посмотрим, как это работает.
                </p>

                <p className="mb-4">
                    В Python мы используем скобки <code>[]</code> после объекта, чтобы обратиться к нему по индексу. В Python индексирование начинается с 0. Давайте создадим новый объект под названием <code>s</code>, и посмотрим примеры индексирования.
                </p>

                <p className="mb-2 font-semibold">Присвоить строку переменной s</p>
                <CodeExample
                    code={`s = 'Hello World'`}
                    output={``}
                />

                <p className="mb-2 font-semibold">Проверка</p>
                <CodeExample
                    code={`s`}
                    output={`'Hello World'`}
                />

                <p className="mb-2 font-semibold">Отобразить (напечатать) объект</p>
                <CodeExample
                    code={`print(s)`}
                    output={`Hello World`}
                />

                <p className="mb-4">Теперь посмотрим индексирование!</p>

                <p className="mb-2 font-semibold">Показать первый элемент (в данном случае это буква)</p>
                <p className="mb-2 text-sm text-gray-600 dark:text-gray-400">
                    Помните, что индексирование начинается с нуля. Поэтому первая буква имеет индекс 0, вторая буква индекс 1 и т.д.
                </p>
                <CodeExample
                    code={`s[0]`}
                    output={`'H'`}
                />

                <CodeExample
                    code={`s[1]`}
                    output={`'e'`}
                />

                <CodeExample
                    code={`s[2]`}
                    output={`'l'`}
                />

                <p className="mb-4">
                    Мы можем использовать символ <code>:</code> для получения части строки - взять все символы до или после указанной позиции. Например:
                </p>

                <p className="mb-2 font-semibold">Взять всё, начиная с символа на первой позиции, и до конца строки s (равной len(s))</p>
                <CodeExample
                    code={`s[1:]`}
                    output={`'ello World'`}
                />

                <p className="mb-2 font-semibold">Обратите внимание, что сама s не поменялась</p>
                <CodeExample
                    code={`s`}
                    output={`'Hello World'`}
                />

                <p className="mb-2 font-semibold">Взять все символы ДО 3й позиции</p>
                <CodeExample
                    code={`s[:3]`}
                    output={`'Hel'`}
                />

                <p className="mb-4">
                    Обратите внимание на предыдущий пример. Мы говорим Python'у взять символы от 0 до 3. Но это не включает в себя 3ю позицию. Вы ещё не раз встретите такое поведение в Python, когда условие пишется как "до верхней границы, но не включая её".
                </p>

                <p className="mb-2 font-semibold">Всё</p>
                <CodeExample
                    code={`s[:]`}
                    output={`'Hello World'`}
                />

                <p className="mb-4">Также можно использовать отрицательные индексы, чтобы двигаться назад.</p>

                <p className="mb-2 font-semibold">Последняя буква (на одну позицию перед 0, то есть на самом деле мы переходим к концу строки)</p>
                <CodeExample
                    code={`s[-1]`}
                    output={`'d'`}
                />

                <p className="mb-2 font-semibold">Взять всё, кроме последней буквы</p>
                <CodeExample
                    code={`s[:-1]`}
                    output={`'Hello Worl'`}
                />

                <p className="mb-4">
                    Мы также можем использовать индексы, чтобы получить последовательность элементов с определенным шагом (по умолчанию шаг равен 1). Для этого пишем два двоеточия подряд, и затем число, с каким шагом мы берём элементы. Например:
                </p>

                <p className="mb-2 font-semibold">Взять всё, но идти с определенным шагом (размера 1)</p>
                <CodeExample
                    code={`s[::1]`}
                    output={`'Hello World'`}
                />

                <p className="mb-2 font-semibold">Взять всё, но идти с определенным шагом (размера 2)</p>
                <CodeExample
                    code={`s[::2]`}
                    output={`'HloWrd'`}
                />

                <p className="mb-2 font-semibold">Вот так можно отобразить строку, начиная с конца и двигаясь к началу строки:</p>
                <CodeExample
                    code={`s[::-1]`}
                    output={`'dlroW olleH'`}
                />
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-bold mb-4">Свойства строк</h2>
                
                <p className="mb-4">
                    Важно сказать, что строки обладают важным свойством неизменности (<em>immutability</em>). Это значит, что после того, как строка была создана, элементы внутри нее не могут быть изменены или удалены. Например:
                </p>

                <CodeExample
                    code={`s`}
                    output={`'Hello World'`}
                />

                <p className="mb-2 font-semibold">Попробуем поменять первую букву на 'x'</p>
                <CodeExample
                    code={`s[0] = 'x'`}
                    output={`TypeError: 'str' object does not support item assignment`}
                />

                <p className="mb-4">
                    Обратите внимание, что ошибка явно указывает, что нам нельзя делать!
                </p>

                <p className="mb-4">При этом мы <em>можем</em> соединять строки (выполнять конкатенацию строк)!</p>

                <CodeExample
                    code={`s`}
                    output={`'Hello World'`}
                />

                <p className="mb-2 font-semibold">Соединяем строки (конкатенация)!</p>
                <CodeExample
                    code={`s + ' concatenate me!'`}
                    output={`'Hello World concatenate me!'`}
                />

                <p className="mb-2 font-semibold">Или мы можем присвоить s новое значение!</p>
                <CodeExample
                    code={`s = s + ' concatenate me!'`}
                    output={``}
                />

                <CodeExample
                    code={`print(s)`}
                    output={`Hello World concatenate me!`}
                />

                <CodeExample
                    code={`s`}
                    output={`'Hello World concatenate me!'`}
                />

                <p className="mb-4">Мы можем использовать знак умножения, чтобы сделать повторения!</p>

                <CodeExample
                    code={`letter = 'z'`}
                    output={``}
                />

                <CodeExample
                    code={`letter*10`}
                    output={`'zzzzzzzzzz'`}
                />
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-bold mb-4">Основные встроенные методы для строк</h2>
                
                <p className="mb-4">
                    Обычно объекты в Python имеют встроенные методы. Методы - это функции внутри объекта (мы изучим их более подробно чуть позднее), которые могут выполнять действия или команды над этим объектом.
                </p>

                <p className="mb-4">
                    Чтобы вызвать метод, пишем точку после имени объекта, и дальше имя метода. Вот так:
                </p>

                <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-4 font-mono text-center">
                    object.method(parameters)
                </div>

                <p className="mb-4">
                    Параметры - это дополнительные аргументы, которые можно передать в метод. Не волнуйтесь, если сейчас это звучит расплывчато. Позже мы будем создавать свои объекты и функции!
                </p>

                <p className="mb-4">Вот несколько примеров встроенных методов для строк:</p>

                <CodeExample
                    code={`s`}
                    output={`'Hello World concatenate me!'`}
                />

                <p className="mb-2 font-semibold">Перевод строки в верхний регистр</p>
                <CodeExample
                    code={`s.upper()`}
                    output={`'HELLO WORLD CONCATENATE ME!'`}
                />

                <p className="mb-2 font-semibold">Перевод строки в нижний регистр</p>
                <CodeExample
                    code={`s.lower()`}
                    output={`'hello world concatenate me!'`}
                />

                <p className="mb-2 font-semibold">Разбиение строки на части, используя в качестве разделителя пробел (это разделитель по умолчанию)</p>
                <CodeExample
                    code={`s.split()`}
                    output={`['Hello', 'World', 'concatenate', 'me!']`}
                />

                <p className="mb-2 font-semibold">Разбиение по указанному элементу (не включает сам элемент, по которому выполнялось разбиение)</p>
                <CodeExample
                    code={`s.split('W')`}
                    output={`['Hello ', 'orld concatenate me!']`}
                />

                <p className="mb-4">
                    Есть также целый ряд других методов. Посмотрите также блокнот про строки в разделе "Продвинутые методы и структуры данных", чтобы найти их!
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-bold mb-4">Форматирование отображения</h2>
                
                <p className="mb-4">
                    Чтобы добавить объекты в определенном формате к строке, можно использовать метод .format().
                </p>

                <p className="mb-4">Это проще всего показать на примере:</p>

                <CodeExample
                    code={`'Добавить еще одну строку с помощью фигурных скобок: {}'.format('Добавляемая строка')`}
                    output={`'Добавить еще одну строку с помощью фигурных скобок: Добавляемая строка'`}
                />

                <p className="mb-4">Мы ещё вернемся к теме форматирования строк в следующих лекциях!</p>
            </section>
        </LessonLayout>
    );
};

export default StringsLesson;