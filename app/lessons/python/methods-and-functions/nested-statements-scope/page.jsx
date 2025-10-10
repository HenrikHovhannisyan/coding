import React from "react";
import LessonLayout from "@/components/LessonLayout";
import CodeExample from "@/components/CodeExample";

const NestedStatementsScopeLesson = () => {
    return (
        <LessonLayout
            title="Вложенные команды и область видимости"
            page="python/methods-and-functions/nested-statements-scope"
        >
            <section className="mb-6">
                <p className="mb-4">
                    Когда мы создаем наши собственные функции, важно понимать, как Python работает с названиями переменных.
                    Когда Вы создаёте переменную в Python, её название сохраняется в пространстве имен (<em>name-space</em>).
                    Названия переменных имеют область видимости (<em>scope</em>), которая определяет доступность переменной
                    в других частях кода.
                </p>

                <p className="mb-4">В этой лекции Вы изучите следующие темы:</p>
                <ol className="list-decimal list-inside mb-6 space-y-1">
                    <li>Понятие области видимости переменных</li>
                    <li>Правило LEGB для поиска переменных</li>
                    <li>Локальные и глобальные переменные</li>
                    <li>Команда global</li>
                    <li>Вложенные функции и их область видимости</li>
                </ol>

                <p className="mb-4">
                    Давайте начнём с простого эксперимента "на подумать". Представьте следующий код:
                </p>
            </section>

            <section className="mb-6">
                <CodeExample
                    code={`x = 25

def printer():
    x = 50
    return x

# print(x)
# print(printer())`}
                    output={``}
                />

                <p className="mb-4">
                    Как Вы думаете, какой результат вернёт функция printer()? 25 или 50? Какое значение вернёт команда print x? 25 или 50?
                </p>

                <CodeExample
                    code={`print(x)`}
                    output={`25`}
                />

                <CodeExample
                    code={`print(printer())`}
                    output={`50`}
                />

                <p className="mb-4">
                    Интересно! А как Python знает, какой x Вы имеете ввиду в Вашем коде? Вот здесь как раз и нужна область видимости.
                    В Python есть набор правил, которые определяют, какие переменные (в нашем случае x) следует использовать.
                    Давайте рассмотрим эти правила:
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-bold mb-4">Правила области видимости</h2>
                <p className="mb-4">
                    Область видимости важна для того, чтобы правильно создавать переменные и обращаться к ним.
                </p>
                <p className="mb-4">
                    В простых словах, область видимости можно описать тремя общими правилами:
                </p>

                <ol className="list-decimal list-inside mb-6 space-y-2">
                    <li>Присваивая имени значение, по умолчанию мы создаём или меняем локальную переменную.</li>
                    <li>При поиске названия переменной выполняется поиск в четырех областях видимости:
                        <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                            <li>локально (local)</li>
                            <li>внутри функции (enclosing function)</li>
                            <li>глобально (global)</li>
                            <li>встроенные названия (built-in)</li>
                        </ul>
                    </li>
                    <li>Названия, объявленные в глобальных и не-локальных командах, соответствуют области видимости того модуля или функции, внутри которых это было выполнено.</li>
                </ol>

                <p className="mb-4">
                    Пункт #2 в списке выше можно описать как правило LEGB.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-bold mb-4">Правило LEGB</h2>

                <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-400 p-4 mb-6">
                    <h3 className="font-bold text-blue-800 dark:text-blue-200 mb-3">Правило LEGB:</h3>
                    <div className="text-blue-700 dark:text-blue-300 space-y-2">
                        <p><strong>L: Local (локально)</strong> — Названия, созданные любым способом внутри функции (def или lambda), и не объявленные как global внутри этой функции.</p>
                        <p><strong>E: Enclosing function locals (локальные переменные содержащих функций)</strong> — Названия, которые являются локальными в любой из функций (def или lambda), внутри которых содержится рассматриваемое название, от ближних по уровню вложенности функций к дальним.</p>
                        <p><strong>G: Global (глобально - на уровне модуля)</strong> — Названия, присвоенные на верхнем уровне в файле модуля, или объявленные как глобальные в определении def внутри файла.</p>
                        <p><strong>B: Built-in (встроенные названия Python)</strong> — встроенные названия: open, range, SyntaxError,...</p>
                    </div>
                </div>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-bold mb-4">Примеры LEGB</h2>

                <h3 className="text-xl font-bold mb-3">Local (локально)</h3>
                <p className="mb-2 font-semibold">Здесь x является локальной переменной:</p>
                <CodeExample
                    code={`f = lambda x: x**2`}
                    output={``}
                />

                <h3 className="text-xl font-bold mb-3 mt-6">Enclosing function locals (локальные переменные содержащих функций)</h3>
                <p className="mb-4">
                    Это происходит, когда у нас есть функция внутри функции (вложенные функции)
                </p>
                <CodeExample
                    code={`name = 'Это глобальное название'

def greet():
    # Enclosing function
    name = 'Sammy'
    
    def hello():
        print('Hello '+name)
    
    hello()

greet()`}
                    output={`Hello Sammy`}
                />
                <p className="mb-4">
                    Обратите внимание, что здесь использовалось значение Sammy, поскольку функция hello() содержится внутри функции greet!
                </p>

                <h3 className="text-xl font-bold mb-3 mt-6">Global (глобально)</h3>
                <p className="mb-4">
                    К счастью, в Jupyter есть простой способ проверить наличие глобальной переменной - можно в отдельной ячейке посмотреть, распознаётся ли эта переменная!
                </p>
                <CodeExample
                    code={`print(name)`}
                    output={`Это глобальное название`}
                />

                <h3 className="text-xl font-bold mb-3 mt-6">Built-in (встроенные названия)</h3>
                <p className="mb-4">
                    Это встроенные названия функций в Python (не переопределяйте их!)
                </p>
                <CodeExample
                    code={`len`}
                    output={`<function len>`}
                />
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-bold mb-4">Локальные переменные</h2>
                <p className="mb-4">
                    Когда Вы объявляете переменные внутри функции, то они никак не связаны с такими же названиями переменных
                    вне функции - эти названия переменных являются локальными для функции. Это называется областью видимости
                    для переменной (scope). Все переменные видны в том блоке, где они объявлены, начиная с той точки,
                    где объявлена та или иная переменная.
                </p>
                <p className="mb-4">Пример:</p>
                <CodeExample
                    code={`x = 50

def func(x):
    print('x равно', x)
    x = 2
    print('Назначаем локальную переменную x в значение', x)

func(x)
print('x всё еще равно', x)`}
                    output={`x равно 50
Назначаем локальную переменную x в значение 2
x всё еще равно 50`}
                />
                <p className="mb-4">
                    Когда мы первый раз выводим значение переменной <strong>x</strong> в первой строке внутри функции,
                    Python использует значение параметра, объявленное в основном блоке, перед началом объявления функции.
                </p>
                <p className="mb-4">
                    Далее мы присвоиваем <strong>x</strong> значение 2. Название <strong>x</strong> локально для нашей функции.
                    Поэтому, когда мы меняем значение <strong>x</strong> внутри функции, тот <strong>x</strong>, который был
                    определен в основном блоке, остаётся без изменений.
                </p>
                <p className="mb-4">
                    В последней команде print мы выводим значение <strong>x</strong>, определённое в основном блоке,
                    таким образом подтверждая, что это значение осталось без изменений после действий, выполненных внутри функции.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-bold mb-4">Команда global</h2>
                <p className="mb-4">
                    Если Вы хотите указать значение для переменной, указанной на верхнем уровне программы
                    (т.е. не внутри какой-либо области видимости, например внутри функции или класса), то мы должны
                    сказать Python, что это название является не локальным, а глобальным. Мы можем сделать это с помощью
                    команды <code>global</code>. Без этой команды нельзя присвоить значение для переменной, определенной вне функции.
                </p>
                <p className="mb-4">
                    Вы вполне можете использовать значения таких переменных, определённых вне функции (если нет переменных
                    с таким же названием внутри функции). Однако, лучше стараться так не делать, поскольку для того,
                    кто будет читать программу, будет непонятно, где находится объявление этой переменной. Использование
                    команды <code>global</code> ясно говорит о том, что переменная была определена в самом внешнем блоке.
                </p>
                <p className="mb-4">Пример:</p>
                <CodeExample
                    code={`x = 50

def func():
    global x
    print('Теперь эта функция использует глобальную переменную x!')
    print('Глобальная переменная x равна: ', x)
    x = 2
    print('Выполняем func(), поменяли глобальной переменной x в значение', x)

print('Перед выполнением func(), x равно: ', x)
func()
print('Значение x (вне функции func()) равно: ', x)`}
                    output={`Перед выполнением func(), x равно:  50
Теперь эта функция использует глобальную переменную x!
Глобальная переменная x равна:  50
Выполняем func(), поменяли глобальной переменной x в значение 2
Значение x (вне функции func()) равно:  2`}
                />
                <p className="mb-4">
                    Команда <code>global</code> говорит о том, что <strong>x</strong> это глобальная переменная - поэтому,
                    когда мы присваиваем значение для <strong>x</strong> внутри функции, это изменение видно, когда мы
                    используем значение <strong>x</strong> в основном блоке.
                </p>
                <p className="mb-4">
                    Вы можете указать несколько глобальных переменных в одной команде global, например: <code>global x, y, z</code>.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-bold mb-4">Практические примеры</h2>

                <p className="mb-2 font-semibold">Пример с вложенными функциями и различными областями видимости:</p>
                <CodeExample
                    code={`def outer_function():
    x = "outer"
    
    def middle_function():
        x = "middle"
        
        def inner_function():
            x = "inner"
            print(f"Внутри inner_function: x = {x}")
        
        inner_function()
        print(f"Внутри middle_function: x = {x}")
    
    middle_function()
    print(f"Внутри outer_function: x = {x}")

x = "global"
outer_function()
print(f"В глобальной области: x = {x}")`}
                    output={`Внутри inner_function: x = inner
Внутри middle_function: x = middle
Внутри outer_function: x = outer
В глобальной области: x = global`}
                />

                <p className="mb-2 font-semibold">Пример с использованием nonlocal:</p>
                <CodeExample
                    code={`def outer():
    x = "outer x"
    
    def inner():
        nonlocal x
        x = "inner x"
        print(f"Внутри inner: x = {x}")
    
    print(f"Перед вызовом inner: x = {x}")
    inner()
    print(f"После вызова inner: x = {x}")

outer()`}
                    output={`Перед вызовом inner: x = outer x
Внутри inner: x = inner x
После вызова inner: x = inner x`}
                />
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-bold mb-4">Полезные функции</h2>
                <p className="mb-4">
                    Python предоставляет функции <strong>globals()</strong> и <strong>locals()</strong>, чтобы вывести
                    текущие локальные и глобальные переменные:
                </p>

                <CodeExample
                    code={`def example_function():
    local_var = "Я локальная переменная"
    print("Локальные переменные:")
    print(locals())
    print("\\nГлобальные переменные (частично):")
    global_vars = globals()
    print(f"Количество глобальных переменных: {len(global_vars)}")

example_function()`}
                    output={`Локальные переменные:
{'local_var': 'Я локальная переменная'}

Глобальные переменные (частично):
Количество глобальных переменных: 156`}
                />
            </section>
        </LessonLayout>
    );
};

export default NestedStatementsScopeLesson;