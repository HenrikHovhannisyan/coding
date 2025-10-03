import React from "react";
import LessonLayout from "@/components/LessonLayout";
import CodeExample from "@/components/CodeExample";

const FilesLesson = () => {
    return (
        <LessonLayout
            title="Файлы"
            page="python/objects-data-structures/files"
        >
            <section className="mb-6">
                <p className="mb-4">
                    Python использует объекты file для взаимодействия с файлами на Вашем компьютере. Эти объекты file могут быть любыми типами файлов - аудио файлы, текстовые файлы, emails, документы Excel и т.д. Обратите внимание: для работы с некоторыми типами файлов Вам может потребоваться установка определенных библиотек или модулей. Они легко доступны, мы обсудим как скачивать модули позднее в этом курсе.
                </p>

                <p className="mb-4">
                    Python имеет встроенную функцию open для открытия и работы с основными типами файлов. Но для начала нам нужен сам файл. Давайте используем небольшую магию IPython, чтобы создать файл!
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-bold mb-4">IPython - запись в файл</h2>

                <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 p-4 mb-4">
                    <p className="text-yellow-800 dark:text-yellow-200">
                        <strong>Указанная ниже команда работает только в блокноте Jupyter Notebook (точнее, в IPython)!</strong> Как альтернативный вариант, Вы можете просто создать файл .txt в любом текстовом редакторе, например в sublime text editor.
                    </p>
                </div>

                <CodeExample
                    code={`%%writefile test.txt
Hello, this is a quick test file.`}
                    output={`Overwriting test.txt`}
                />
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-bold mb-4">Открываем файл в Python</h2>

                <p className="mb-4">
                    Давайте откроем файл test.txt, который располагается в той же папке, что и этот блокнот. Мы будем работать с файлами в той же папке, что и блокнот Jupyter Notebook или скрипт .py, который Вы используете.
                </p>

                <p className="mb-4">На этом шаге можно легко получить ошибку, если Вы попытаетесь открыть файл, которого нет:</p>

                <CodeExample
                    code={`myfile = open('whoops.txt')`}
                    output={`FileNotFoundError: [Errno 2] No such file or directory: 'whoops.txt'`}
                />

                <p className="mb-4">
                    Чтобы избежать ошибки, убедитесь что Ваш файл .txt находится там же, где и notebook. Чтобы проверить папку, в которой находится notebook, используйте <strong>pwd</strong>:
                </p>

                <CodeExample
                    code={`pwd`}
                    output={`'C:\\Users\\Marcial\\Pierian-Data-Courses\\Complete-Python-3-Bootcamp\\00-Python Object and Data Structure Basics'`}
                />

                <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-400 p-4 mb-4">
                    <p className="text-blue-800 dark:text-blue-200 mb-2">
                        <strong>Как альтернативный вариант, Вы можете прочитать файлы из любой папки на Вашем компьютере, просто указав полный путь к файлу.</strong>
                    </p>
                    <div className="text-blue-700 dark:text-blue-300">
                        <p className="mb-2">В Windows нужно использовать двойные обратные слэши \\, чтобы python не воспринимал второй слэш как символ экранирования. Вот пример:</p>
                        <code className="block bg-blue-100 dark:bg-blue-800 p-2 rounded mb-2">
                            myfile = open("C:\\Users\\YourUserName\\Home\\Folder\\myfile.txt")
                        </code>
                        <p className="mb-2">В MacOS и Linux нужно использовать прямые слэши:</p>
                        <code className="block bg-blue-100 dark:bg-blue-800 p-2 rounded">
                            myfile = open("/Users/YouUserName/Folder/myfile.txt")
                        </code>
                    </div>
                </div>

                <p className="mb-2 font-semibold">Открываем файл text.txt, который мы создали ранее</p>
                <CodeExample
                    code={`my_file = open('test.txt')`}
                    output={``}
                />

                <p className="mb-2 font-semibold">Теперь мы можем прочитать данные из файла</p>
                <CodeExample
                    code={`my_file.read()`}
                    output={`'Hello, this is a quick test file.'`}
                />

                <p className="mb-2 font-semibold">А что если мы попытаемся прочитать данные снова?</p>
                <CodeExample
                    code={`my_file.read()`}
                    output={`''`}
                />

                <p className="mb-4">
                    Это произошло, потому что воображаемый "курсор" находится в конце файла после того, как чтение выполнено. Поэтому больше нечего прочитать. Мы можем сбросить "курсор" вот так:
                </p>

                <p className="mb-2 font-semibold">Перейти к началу файла (индекс 0)</p>
                <CodeExample
                    code={`my_file.seek(0)`}
                    output={`0`}
                />

                <p className="mb-2 font-semibold">Теперь снова читаем</p>
                <CodeExample
                    code={`my_file.read()`}
                    output={`'Hello, this is a quick test file.'`}
                />

                <p className="mb-4">
                    Вы также можете читать файл строка за строкой, используя метод readlines. Будьте осторожны с большими файлами, поскольку всё содержимое файла будет помещаться в память. Позднее мы узнаем, как выполнять последовательный проход по большим файлам, строка за строкой, без необходимости помещать весь файл в память.
                </p>

                <p className="mb-2 font-semibold">Readlines возвращает список строк в файле</p>
                <CodeExample
                    code={`my_file.seek(0)
my_file.readlines()`}
                    output={`['Hello, this is a quick test file.']`}
                />

                <p className="mb-4">Когда Вы закончили работу с файлом, хорошей практикой является закрыть его.</p>

                <CodeExample
                    code={`my_file.close()`}
                    output={``}
                />
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-bold mb-4">Запись в файл</h2>

                <p className="mb-4">
                    По умолчанию, функция <code>open()</code> позволяет только читать файл. Чтобы перезаписать файл, мы можем передать параметр <code>'w'</code>. Например:
                </p>

                <p className="mb-2 font-semibold">Добавляем второй параметр в функцию, 'w' означает write.</p>
                <p className="mb-2 text-sm text-gray-600 dark:text-gray-400">
                    Если передаём 'w+', то сможем выполнять и чтение, и запись.
                </p>
                <CodeExample
                    code={`my_file = open('test.txt','w+')`}
                    output={``}
                />

                <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-400 p-4 mb-4">
                    <p className="text-red-800 dark:text-red-200 font-bold">
                        Будьте осторожны!
                    </p>
                    <p className="text-red-700 dark:text-red-300 mt-2">
                        Открывая файл с помощью <code>'w'</code> или <code>'w+'</code>, существующий файл очищается, то есть всё что было в файле <strong>удаляется</strong>!
                    </p>
                </div>

                <p className="mb-2 font-semibold">Записываем строку в файл</p>
                <CodeExample
                    code={`my_file.write('This is a new line')`}
                    output={`18`}
                />

                <p className="mb-2 font-semibold">Читаем из файла</p>
                <CodeExample
                    code={`my_file.seek(0)
my_file.read()`}
                    output={`'This is a new line'`}
                />

                <p className="mb-2 font-semibold">всегда делайте close, когда закончили работу с файлом</p>
                <CodeExample
                    code={`my_file.close()`}
                    output={``}
                />
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-bold mb-4">Добавление данных в файл (append)</h2>

                <p className="mb-4">
                    Значение <code>'a'</code> открывает файл и ставит курсор в конец файла, поэтому всё, что будет записано - будет записано (добавлено) в конец файла. По аналогии с <code>'w+'</code>, <code>'a+'</code> позволяет читать файл и записывать в файл. Если файл не существует, то он будет создан.
                </p>

                <CodeExample
                    code={`my_file = open('test.txt','a+')
my_file.write('\\nThis is text being appended to test.txt')
my_file.write('\\nAnd another line here.')`}
                    output={`23`}
                />

                <CodeExample
                    code={`my_file.seek(0)
print(my_file.read())`}
                    output={`This is a new line
This is text being appended to test.txt
And another line here.`}
                />

                <CodeExample
                    code={`my_file.close()`}
                    output={``}
                />

                <h3 className="text-xl font-bold mb-3 mt-6">Добавление данных с помощью <code>%%writefile</code></h3>

                <p className="mb-4">Мы можем сделать то же самое с помощью магии IPython:</p>

                <CodeExample
                    code={`%%writefile -a test.txt

This is text being appended to test.txt
And another line here.`}
                    output={`Appending to test.txt`}
                />

                <p className="mb-4">
                    Если Вы хотите, чтобы первая строка начиналась с новой строки, то добавьте пробел, поскольку Jupyter не распознает символы экранирования, такие как <code>\\n</code>
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-bold mb-4">Проход по файлу</h2>

                <p className="mb-4">
                    Давайте рассмотрим цикл for для прохода по текстовому файлу. Сначала создадим новый текстовый файл с помощью магии IPython:
                </p>

                <CodeExample
                    code={`%%writefile test.txt
First Line
Second Line`}
                    output={`Overwriting test.txt`}
                />

                <p className="mb-4">Теперь мы можем создать цикл, который пройдет по файлу строка за строкой, и сделает что-то:</p>

                <CodeExample
                    code={`for line in open('test.txt'):
    print(line)`}
                    output={`First Line

Second Line`}
                />

                <p className="mb-4">
                    Не волнуйтесь, если это не вполне понятно - мы рассмотрим циклы for чуть позже. Но в двух словах, вот что мы сделали. Мы говорим, что для каждой строки файла, давайте распечатаем эту строку с помощью print. Здесь важно отметить следующие моменты:
                </p>

                <ol className="list-decimal list-inside mb-4 space-y-2">
                    <li>Мы могли назвать объект "line" как угодно (см. пример ниже).</li>
                    <li>Поскольку мы не вызывали <code>.read()</code>, весь файл не был сохранен в памяти.</li>
                    <li>Обратите внимание на отступ во второй строке кода, для print. Этот отступ требуется в Python.</li>
                </ol>

                <p className="mb-2 font-semibold">Другой вариант того же кода</p>
                <CodeExample
                    code={`for asdf in open('test.txt'):
    print(asdf)`}
                    output={`First Line

Second Line`}
                />

                <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-400 p-4 mb-4">
                    <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2">Режимы открытия файлов:</h3>
                    <div className="text-green-700 dark:text-green-300 space-y-1">
                        <div><code>'r'</code> - чтение (по умолчанию)</div>
                        <div><code>'w'</code> - запись (перезаписывает файл)</div>
                        <div><code>'a'</code> - добавление в конец файла</div>
                        <div><code>'r+'</code> - чтение и запись</div>
                        <div><code>'w+'</code> - запись и чтение (перезаписывает файл)</div>
                        <div><code>'a+'</code> - добавление и чтение</div>
                    </div>
                </div>
            </section>
        </LessonLayout>
    );
};

export default FilesLesson;