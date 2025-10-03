import React from "react";
import LessonLayout from "@/components/LessonLayout";
import CodeExample from "@/components/CodeExample";

const PrintFormattingLesson = () => {
    return (
        <LessonLayout
            title="Форматирование строк"
            page="python/objects-data-structures/print-formatting"
        >
            <section className="mb-6">
                <p className="mb-4">
                    Форматирование строк позволяет Вам добавлять элементы внутрь строки вместо того, чтобы соединять строки вместе с помощью запятых или конкатенации. В качестве примера, сравните:
                </p>

                <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-4 font-mono text-sm">
                    <div className="mb-2">player = 'Thomas'</div>
                    <div className="mb-2">points = 33</div>
                    <div className="mb-4"></div>
                    <div className="mb-2 text-gray-600 dark:text-gray-400"># конкатенация</div>
                    <div className="mb-2">'Last night, '+player+' scored '+str(points)+' points.'</div>
                    <div className="mb-4"></div>
                    <div className="mb-2 text-gray-600 dark:text-gray-400"># форматирование строк</div>
                    <div>f'Last night, {"{player}"} scored {"{points}"} points.'</div>
                </div>

                <p className="mb-4">Форматирование строк можно выполнить тремя способами.</p>
                <ul className="list-disc list-inside space-y-2 mb-6">
                    <li>Старый способ - это использование %s, которые потом заменяются на значения.</li>
                    <li>Улучшенный способ использует метод <code>.format()</code>.</li>
                    <li>Новый способ, появившийся в Python 3.6: f-строки (<em>f-strings</em>).</li>
                </ul>

                <p className="mb-4">
                    Поскольку Вы можете встретить все три варианта в коде, который пишут другие люди, то давайте разберём все три варианта.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-bold mb-4">Форматирование с помощью замены %s</h2>

                <p className="mb-4">
                    Можно использовать <code>%s</code>, чтобы вставить строку внутрь операции print. Символ <code>%</code> в этом случае называется оператором форматирования строки ("string formatting operator").
                </p>

                <CodeExample
                    code={`print("I'm going to inject %s here." %'something')`}
                    output={`I'm going to inject something here.`}
                />

                <p className="mb-4">
                    Вы можете передать несколько значений, для этого нужно поместить их после оператора <code>%</code> в виде кортежа (tuple). Очень скоро у нас будет лекция про кортежи, но в двух словах - это несколько значений, указанные в круглых скобках через запятую.
                </p>

                <CodeExample
                    code={`print("I'm going to inject %s text here, and %s text here." %('some','more'))`}
                    output={`I'm going to inject some text here, and more text here.`}
                />

                <p className="mb-4">Вы также можете указывать имена переменных:</p>

                <CodeExample
                    code={`x, y = 'some', 'more'
print("I'm going to inject %s text here, and %s text here."%(x,y))`}
                    output={`I'm going to inject some text here, and more text here.`}
                />

                <h3 className="text-xl font-bold mb-3 mt-6">Методы конвертации</h3>

                <p className="mb-4">
                    Два метода - <code>%s</code> и <code>%r</code> - могут конвертировать любой объект python в строку, используя два различных метода: <code>str()</code> and <code>repr()</code>. Мы изучим эти функции более подобно позднее, но сразу скажем, что <code>%r</code> и <code>repr()</code> представляют строковое представление объекта (<em>string representation</em>), включая кавычки и любые символы экранирования.
                </p>

                <CodeExample
                    code={`print('He said his name was %s.' %'Fred')
print('He said his name was %r.' %'Fred')`}
                    output={`He said his name was Fred.
He said his name was 'Fred'.`}
                />

                <p className="mb-4">Ещё один пример: <code>\\t</code> добавляет табуляцию.</p>

                <CodeExample
                    code={`print('I once caught a fish %s.' %'this \\tbig')
print('I once caught a fish %r.' %'this \\tbig')`}
                    output={`I once caught a fish this 	big.
I once caught a fish 'this \\tbig'.`}
                />

                <p className="mb-4">
                    Оператор <code>%s</code> преобразует всё, что он видит, в строку, включая целые и дробные числа. Оператор <code>%d</code> сначала преобразует числа в целые числа integer, без округления. Обратите внимание на разницу:
                </p>

                <CodeExample
                    code={`print('I wrote %s programs today.' %3.75)
print('I wrote %d programs today.' %3.75)`}
                    output={`I wrote 3.75 programs today.
I wrote 3 programs today.`}
                />

                <h3 className="text-xl font-bold mb-3 mt-6">Числа с плавающей точкой: точность и добавление пробелов</h3>

                <p className="mb-4">
                    Числа с плавающей точкой (Floating point numbers) используют следующий формат: <code>%5.2f</code>. Здесь <code>5</code> - это минимальное количество символов, которое будет содержаться в строке; если всё число не содержит достаточно цифр, то строка будет дополнена пробелами. Далее, <code>.2f</code> указывает, сколько цифр показать после разделителя дробной части. Давайте посмотрим несколько примеров:
                </p>

                <CodeExample
                    code={`print('Floating point numbers: %5.2f' %(13.144))`}
                    output={`Floating point numbers: 13.14`}
                />

                <CodeExample
                    code={`print('Floating point numbers: %1.0f' %(13.144))`}
                    output={`Floating point numbers: 13`}
                />

                <CodeExample
                    code={`print('Floating point numbers: %1.5f' %(13.144))`}
                    output={`Floating point numbers: 13.14400`}
                />

                <CodeExample
                    code={`print('Floating point numbers: %10.2f' %(13.144))`}
                    output={`Floating point numbers:      13.14`}
                />

                <CodeExample
                    code={`print('Floating point numbers: %25.2f' %(13.144))`}
                    output={`Floating point numbers:                     13.14`}
                />

                <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-400 p-4 mb-4">
                    <p className="text-blue-700 dark:text-blue-300">
                        Более подробно про форматирование строк с использованием % можно почитать в документации:
                        <a href="https://docs.python.org/3/library/stdtypes.html#old-string-formatting" className="underline hover:text-blue-800" target="_blank" rel="noopener noreferrer">
                            https://docs.python.org/3/library/stdtypes.html#old-string-formatting
                        </a>
                    </p>
                </div>

                <h3 className="text-xl font-bold mb-3 mt-6">Сочетание различных видов форматирования</h3>

                <p className="mb-4">В одной команде вполне можно использовать более одного способа форматирования:</p>

                <CodeExample
                    code={`print('First: %s, Second: %5.2f, Third: %r' %('hi!',3.1415,'bye!'))`}
                    output={`First: hi!, Second:  3.14, Third: 'bye!'`}
                />
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-bold mb-4">Форматирование с помощью метода <code>.format()</code></h2>

                <p className="mb-4">
                    Чтобы выполнить форматирование объектов в строки для команды print, лучше использовать метод <code>.format()</code>. Синтаксис следующий:
                </p>

                <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-4 font-mono text-center">
                    'String here {"{"}{"{}"} then also {"{"}{"{}"}'.format('something1','something2')
                </div>

                <p className="mb-4">Например:</p>

                <CodeExample
                    code={`print('This is a string with an {}'.format('insert'))`}
                    output={`This is a string with an insert`}
                />

                <h3 className="text-xl font-bold mb-3 mt-6">Метод .format() имеет несколько преимуществ по сравнению с методом %s:</h3>

                <h4 className="text-lg font-semibold mb-2">1. Добавляемые объекты можно указать по их номеру:</h4>

                <CodeExample
                    code={`print('The {2} {1} {0}'.format('fox','brown','quick'))`}
                    output={`The quick brown fox`}
                />

                <h4 className="text-lg font-semibold mb-2">2. Добавляемым объектам можно присвоить названия:</h4>

                <CodeExample
                    code={`print('First Object: {a}, Second Object: {b}, Third Object: {c}'.format(a=1,b='Two',c=12.3))`}
                    output={`First Object: 1, Second Object: Two, Third Object: 12.3`}
                />

                <h4 className="text-lg font-semibold mb-2">3. Добавляемые объекты можно переиспользовать, без дублирования:</h4>

                <CodeExample
                    code={`print('A %s saved is a %s earned.' %('penny','penny'))
# vs.
print('A {p} saved is a {p} earned.'.format(p='penny'))`}
                    output={`A penny saved is a penny earned.
A penny saved is a penny earned.`}
                />

                <h3 className="text-xl font-bold mb-3 mt-6">Выравнивание, добавление пробелов и точность для <code>.format()</code></h3>

                <p className="mb-4">
                    Внутри фигурных скобок можно указать длину полей, выравнивание влево/вправо, параметры округления и т.д.
                </p>

                <CodeExample
                    code={`print('{0:8} | {1:9}'.format('Fruit', 'Quantity'))
print('{0:8} | {1:9}'.format('Apples', 3.))
print('{0:8} | {1:9}'.format('Oranges', 10))`}
                    output={`Fruit    | Quantity 
Apples   |       3.0
Oranges  |        10`}
                />

                <p className="mb-4">
                    По умолчанию, <code>.format()</code> выравнивает текст влево, а числа вправо. Вы можете указать опциональные символы <code>&lt;</code>, <code>^</code> или <code>&gt;</code>, чтобы установить выравнивание влево, по центру или вправо:
                </p>

                <CodeExample
                    code={`print('{0:<8} | {1:^8} | {2:>8}'.format('Left','Center','Right'))
print('{0:<8} | {1:^8} | {2:>8}'.format(11,22,33))`}
                    output={`Left     |  Center  |    Right
11       |    22    |       33`}
                />

                <p className="mb-4">
                    Перед оператором выравнивания можно указать символ, с помощью которого строка будет дополняться до нужной длины.
                </p>

                <CodeExample
                    code={`print('{0:=<8} | {1:-^8} | {2:.>8}'.format('Left','Center','Right'))
print('{0:=<8} | {1:-^8} | {2:.>8}'.format(11,22,33))`}
                    output={`Left==== | -Center- | ...Right
11====== | ---22--- | ......33`}
                />

                <p className="mb-4">
                    Ширина полей и точность дробных чисел указываются похоже на синтаксис %. Следующие две команды print эквивалентны:
                </p>

                <CodeExample
                    code={`print('This is my ten-character, two-decimal number:%10.2f' %13.579)
print('This is my ten-character, two-decimal number:{0:10.2f}'.format(13.579))`}
                    output={`This is my ten-character, two-decimal number:     13.58
This is my ten-character, two-decimal number:     13.58`}
                />

                <p className="mb-4">
                    Обратите внимание, что после двоеточия идут 5 пробелов, и 5 символов занимает число 13.58 - всего получается 10 символов.
                </p>

                <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-400 p-4 mb-4">
                    <p className="text-blue-700 dark:text-blue-300">
                        Более подробно о форматировании строк с помощью метода <code>.format()</code> можно почитать в документации:
                        <a href="https://docs.python.org/3/library/string.html#formatstrings" className="underline hover:text-blue-800" target="_blank" rel="noopener noreferrer">
                            https://docs.python.org/3/library/string.html#formatstrings
                        </a>
                    </p>
                </div>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-bold mb-4">f-строки (f-strings)</h2>

                <p className="mb-4">
                    Добавленные в Python 3.6, f-строки имеют несколько преимуществ по сравнению с методом <code>.format()</code>, который мы рассмотрели выше. Одно из преимуществ - Вы можете указать внешние переменные напрямую в строке, а не передавать их как параметры через <code>.format(var)</code>.
                </p>

                <CodeExample
                    code={`name = 'Fred'

print(f"He said his name is {name}.")`}
                    output={`He said his name is Fred.`}
                />

                <p className="mb-4">Укажите <code>!r</code>, чтобы получить строковое представление:</p>

                <CodeExample
                    code={`print(f"He said his name is {name!r}")`}
                    output={`He said his name is 'Fred'`}
                />

                <h4 className="text-lg font-semibold mb-2 mt-6">Формат для дробных чисел следующий: <code>"result: {"{value:{width}.{precision}}"}"</code></h4>

                <p className="mb-4">
                    Если для метода <code>.format()</code> Вы можете увидеть <code>{"{value:10.4f}"}</code>, то для f-строк этот формат становится вот таким: <code>{"{value:{10}.{6}}"}</code>
                </p>

                <CodeExample
                    code={`num = 23.45678
print("My 10 character, four decimal number is:{0:10.4f}".format(num))
print(f"My 10 character, four decimal number is:{num:{10}.{6}}")`}
                    output={`My 10 character, four decimal number is:   23.4568
My 10 character, four decimal number is:   23.4568`}
                />

                <p className="mb-4">
                    Обратите внимание, что для f-строк точность <em>precision</em> означает общее количество цифр, а не только цифры после разделителя дробной части. Это лучше соответствует научной нотации и статистическому анализу. К сожалению, f-строки не дополняются нулями справа от дробной части, даже если точность это позволяет:
                </p>

                <CodeExample
                    code={`num = 23.45
print("My 10 character, four decimal number is:{0:10.4f}".format(num))
print(f"My 10 character, four decimal number is:{num:{10}.{6}}")`}
                    output={`My 10 character, four decimal number is:   23.4500
My 10 character, four decimal number is:     23.45`}
                />

                <p className="mb-4">
                    Если это для Вас будет важно, Вы всегда можете использовать метод <code>.format()</code> внутри f-string:
                </p>

                <CodeExample
                    code={`num = 23.45
print("My 10 character, four decimal number is:{0:10.4f}".format(num))
print(f"My 10 character, four decimal number is:{num:10.4f}")`}
                    output={`My 10 character, four decimal number is:   23.4500
My 10 character, four decimal number is:   23.4500`}
                />

                <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-400 p-4 mb-4">
                    <p className="text-blue-700 dark:text-blue-300">
                        Более подробно о форматированных строковых литералах можно почитать в документации:
                        <a href="https://docs.python.org/3/reference/lexical_analysis.html#f-strings" className="underline hover:text-blue-800" target="_blank" rel="noopener noreferrer">
                            https://docs.python.org/3/reference/lexical_analysis.html#f-strings
                        </a>
                    </p>
                </div>
            </section>

            <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-400 p-4 mt-8">
                <p className="text-green-700 dark:text-green-300 text-lg font-semibold">
                    Это были основы форматирования строк!
                </p>
            </div>
        </LessonLayout>
    );
};

export default PrintFormattingLesson;