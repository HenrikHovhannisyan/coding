import React from "react";
import LessonLayout from "@/components/LessonLayout";
import CodeExample from "@/components/CodeExample";

const FunctionsLesson = () => {
    return (
        <LessonLayout
            title="Функции"
            page="python/methods-and-functions/functions"
        >
            <section className="mb-6">
                <p className="mb-4">
                    В этой лекции мы посмотрим, что такое функции в Python, и как создавать их. 
                    Функции - это основные строительные блоки, которые позволяют структурировать 
                    всё большие и большие объемы кода для решения задач.
                </p>
                
                <p className="mb-4">В этой лекции Вы изучите следующие темы:</p>
                <ol className="list-decimal list-inside mb-6 space-y-1">
                    <li>Что такое функция</li>
                    <li>Синтаксис создания функций с def</li>
                    <li>Простые примеры функций</li>
                    <li>Использование return</li>
                    <li>Практические примеры</li>
                </ol>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-bold mb-4">Что такое функция?</h2>
                <p className="mb-4">
                    Формально, функция - это способ группировки нескольких команд вместе, которые 
                    можно запускать много раз. Также функции позволяют указывать параметры, которые 
                    являются входными данными для функций.
                </p>
                <p className="mb-4">
                    На более фундаментальном уровне, функции позволяют нам не повторять один и тот же 
                    код много раз. Например, если вспомнить лекцию о строках и списках, то мы использовали 
                    функцию len() для определения длины строки. Поскольку проверка длины последовательности - 
                    это частая задача, то для этой задачи написана функция, которую можно вызывать много раз.
                </p>
                <p className="mb-4">
                    Функции - это один из основных уровней переиспользования кода в Python. И они также 
                    позволяют нам задуматься о проектировании программы - мы рассмотрим более подробно 
                    идеи проектирования позднее, когда будем изучать Объектно-Ориентированное Программирование.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-bold mb-4">Команды def</h2>
                <p className="mb-4">
                    Давайте посмотрим синтаксис функций в Python:
                </p>
                <CodeExample
                    code={`def name_of_function(arg1,arg2):
    '''
    Здесь указывается Document String (docstring)
    '''
    # Здесь выполняем действия
    # Возвращаем нужный результат`}
                    output={``}
                />
                <p className="mb-4">
                    Создание функции начинается с <code>def</code>, затем пробел и название функции. 
                    Постарайтесь выбирать названия функций осмысленными, например len() - это хорошее 
                    название для функции, вычисляющей длину (length). Также обратите внимание на то, 
                    чтобы не выбрать названия, уже зарезервированные для встроенных функций в Python 
                    (например, len).
                </p>
                <p className="mb-4">
                    Далее указываются скобки и несколько параметров (аргументов), через запятую. Эти 
                    параметры являются входными данными для функции. Их можно будет использовать внутри 
                    функции. Далее пишется двоеточие.
                </p>
                <p className="mb-4">
                    И затем важный шаг - Вы должны сделать отступы для кода, который содержится внутри 
                    функции. Python использует <em>пробелы</em> для организации кода. Многие языки 
                    программирования не применяют такой подход, так что обратите на этот момент особое внимание.
                </p>
                <p className="mb-4">
                    Далее идёт docstring - здесь Вы можете указать описание функции. В iPython и iPython 
                    Notebooks Вы можете прочитать эти описания docstrings, нажимая Shift+Tab после названия 
                    функции. Описания Docstrings не обязательны для простых функций, но в общем случае 
                    написать их - это хорошая практика, чтобы Вы или другие люди могли легче понимать Ваш код.
                </p>
                <p className="mb-4">
                    После этого мы пишем код, который нужно запускать.
                </p>
                <p className="mb-4">
                    Лучший способ изучить функции - разобрать несколько примеров:
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-bold mb-4">Пример 1: простая функция - напечатать 'hello'</h2>
                <CodeExample
                    code={`def say_hello():
    print('hello')`}
                    output={``}
                />
                <p className="mb-2 font-semibold">Запуск функции:</p>
                <CodeExample
                    code={`say_hello()`}
                    output={`hello`}
                />
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-bold mb-4">Пример 2: Простая функция приветствия</h2>
                <p className="mb-4">
                    Напишем функцию, которая приветствует людей по их имени.
                </p>
                <CodeExample
                    code={`def greeting(name):
    print('Hello %s' %(name))`}
                    output={``}
                />
                <CodeExample
                    code={`greeting('Vlad')`}
                    output={`Hello Vlad`}
                />
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-bold mb-4">Использование return</h2>
                <p className="mb-4">
                    Рассмотрим несколько примеров использования команды <code>return</code>. Эта команда 
                    позволяет функции <em>вернуть</em> результат, который затем можно сохранить в переменной, 
                    или использовать любым другим способом.
                </p>
                
                <h3 className="text-xl font-bold mb-3">Пример 3: Функция сложения</h3>
                <CodeExample
                    code={`def add_num(num1,num2):
    return num1+num2`}
                    output={``}
                />
                <CodeExample
                    code={`add_num(4,5)`}
                    output={`9`}
                />
                <p className="mb-2 font-semibold">Мы также можем сохранить результат, который возвращает функция, в переменную</p>
                <CodeExample
                    code={`result = add_num(4,5)
print(result)`}
                    output={`9`}
                />
                <p className="mb-4">Что произойдет, если мы укажем две строки?</p>
                <CodeExample
                    code={`add_num('one','two')`}
                    output={`'onetwo'`}
                />
                <p className="mb-4">
                    Обратите внимание, что поскольку мы не указываем типы переменных в Python, эта функция 
                    может использоваться для сложения как чисел, так и последовательностей! Позже мы посмотрим, 
                    как можно проверять корректность параметров для функции.
                </p>
                <p className="mb-4">
                    Также давайте начнём использовать команды <code>break</code>, <code>continue</code> и <code>pass</code>. 
                    Мы уже видели их в лекции про циклы <code>while</code>.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-bold mb-4">Практический пример: проверка простых чисел</h2>
                <p className="mb-4">
                    Давайте рассмотрим пример создания функции для проверки того, является ли число простым 
                    (это частое задание на собеседовании).
                </p>
                <p className="mb-4">
                    Число является простым, если оно делится нацело только на 1 и на само себя. Давайте 
                    напишем первую версию функции, в которой проверим все числа от 1 до N и проверим остаток от деления.
                </p>
                <CodeExample
                    code={`def is_prime(num):
    '''
    Наивный метод проверки простых чисел. 
    '''
    for n in range(2,num):
        if num % n == 0:
            print(num,'не является простым')
            break
    else: # Если остаток никогда не был равен нулю, то число простое
        print(num,'является простым!')`}
                    output={``}
                />
                <CodeExample
                    code={`is_prime(16)`}
                    output={`16 не является простым`}
                />
                <CodeExample
                    code={`is_prime(17)`}
                    output={`17 является простым!`}
                />
                <p className="mb-4">
                    Обратите внимание, что <code>else</code> расположен (выровнен отступами) под <code>for</code>, 
                    а не под <code>if</code>. Это потому что мы хотим, чтобы цикл <code>for</code> перебрал все 
                    возможные варианты в диапазоне перед тем, как сказать, что число простое.
                </p>
                <p className="mb-4">
                    Также обратите внимание, что мы выполняем команду break после первой команды print. То есть, 
                    как только мы поняли, что число не является простым, мы выходим из цикла <code>for</code>.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-bold mb-4">Улучшенная версия функции</h2>
                <p className="mb-4">
                    На самом деле мы можем улучшить эту функцию, проверяя числа только до квадратного корня 
                    от целевого числа, а также отбрасывая все чётные числа после проверки числа 2. Мы также 
                    перейдём на возврат значения boolean, чтобы посмотреть пример команды return:
                </p>
                <CodeExample
                    code={`import math

def is_prime2(num):
    '''
    Улучшенный метод проверки простых чисел. 
    '''
    if num % 2 == 0 and num > 2: 
        return False
    for i in range(3, int(math.sqrt(num)) + 1, 2):
        if num % i == 0:
            return False
    return True`}
                    output={``}
                />
                <CodeExample
                    code={`is_prime2(18)`}
                    output={`False`}
                />
                <p className="mb-4">
                    Почему здесь нет команды <code>break</code>? Дело в том, что как только функция 
                    <em>возвращает</em> что-то с помощью return, она завершает свою работу. Функция может 
                    выполнить несколько команд print, но только одну команду <code>return</code>.
                </p>
            </section>

            <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-400 p-4 mt-8">
                <p className="text-green-700 dark:text-green-300">
                    Отлично! Теперь Вы знаете, как создавать собственные функции, чтобы не повторять один и тот же код!
                </p>
            </div>
        </LessonLayout>
    );
};

export default FunctionsLesson;