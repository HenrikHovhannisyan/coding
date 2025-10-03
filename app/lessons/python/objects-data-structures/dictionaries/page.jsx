import React from "react";
import LessonLayout from "@/components/LessonLayout";
import CodeExample from "@/components/CodeExample";

const DictionariesLesson = () => {
    return (
        <LessonLayout
            title="Словарь (Dictionaries)"
            page="python/objects-data-structures/dictionaries"
        >
            <section className="mb-6">
                <p className="mb-4">
                    Если раньше мы говорили о последовательностях (<em>sequences</em>) в Python, то теперь давайте поговорим о маппингах (<em>mappings</em>) в Python. Если Вы знакомы с другими языками программирования, то словари можно представить себе как хэш-таблицы.
                </p>

                <p className="mb-4">Эта лекция служит введением в словари, и состоит из следующих тем:</p>
                <ol className="list-decimal list-inside mb-6 space-y-1">
                    <li>Создание словаря</li>
                    <li>Доступ к объектам в словаре</li>
                    <li>Вложенные словари</li>
                    <li>Основные методы для словарей</li>
                </ol>

                <p className="mb-4">
                    Что такое маппинги? Маппинги - это набор объектов, которые можно получить по ключу (<em>key</em>). Это отличается от последовательностей, где объекты хранятся в определенном порядке относительно друг друга. Это важное отличие, потому что маппинги не имеют порядка элементов. В маппингах элементы определены с помощью ключей.
                </p>

                <p className="mb-4">
                    Словарь в Python состоит из ключа и связанного с ним значения. Значение может быть практически любым объектом Python.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-bold mb-4">Создание словаря</h2>

                <p className="mb-4">
                    Давайте посмотрим, как можно создавать словари - так мы лучше поймём, как они работают!
                </p>

                <p className="mb-2 font-semibold">Словари создаются с помощью {"{}"} и : , чтобы указать ключи и значения</p>
                <CodeExample
                    code={`my_dict = {'key1':'value1','key2':'value2'}`}
                    output={``}
                />

                <p className="mb-2 font-semibold">Получаем значение по его ключу</p>
                <CodeExample
                    code={`my_dict['key2']`}
                    output={`'value2'`}
                />

                <p className="mb-4">Словари очень гибки в отношении того, какие типы данных они могут хранить. Например:</p>

                <CodeExample
                    code={`my_dict = {'key1':123,'key2':[12,23,33],'key3':['item0','item1','item2']}`}
                    output={``}
                />

                <p className="mb-2 font-semibold">Возьмём из словаря элементы items</p>
                <CodeExample
                    code={`my_dict['key3']`}
                    output={`['item0', 'item1', 'item2']`}
                />

                <p className="mb-2 font-semibold">Здесь можно использовать индекс для этого значения</p>
                <CodeExample
                    code={`my_dict['key3'][0]`}
                    output={`'item0'`}
                />

                <p className="mb-2 font-semibold">И далее мы даже можем использовать методы для этого значения</p>
                <CodeExample
                    code={`my_dict['key3'][0].upper()`}
                    output={`'ITEM0'`}
                />

                <p className="mb-4">Также мы можем менять значения ключа. Например:</p>

                <CodeExample
                    code={`my_dict['key1']`}
                    output={`123`}
                />

                <p className="mb-2 font-semibold">Вычитаем 123 из значения</p>
                <CodeExample
                    code={`my_dict['key1'] = my_dict['key1'] - 123`}
                    output={``}
                />

                <p className="mb-2 font-semibold">Проверка</p>
                <CodeExample
                    code={`my_dict['key1']`}
                    output={`0`}
                />

                <p className="mb-4">
                    Небольшое замечание: Python содержит встроенные методы для сложения (прибавления), вычитания, умножения и деления. В примере выше можно было использовать += или -=. Например:
                </p>

                <p className="mb-2 font-semibold">Присвоить объект равным его текущему значению минус 123</p>
                <CodeExample
                    code={`my_dict['key1'] -= 123
my_dict['key1']`}
                    output={`-123`}
                />

                <p className="mb-4">
                    Мы также можем создавать ключи, присваивая значения. Например, мы можем создать пустой словарь, и затем постепенно добавлять в него элементы:
                </p>

                <p className="mb-2 font-semibold">Создаем новый словарь</p>
                <CodeExample
                    code={`d = {}`}
                    output={``}
                />

                <p className="mb-2 font-semibold">Создаем новый ключ, присваивая ему значение</p>
                <CodeExample
                    code={`d['animal'] = 'Dog'`}
                    output={``}
                />

                <p className="mb-2 font-semibold">Мы можем сделать это для любого объекта</p>
                <CodeExample
                    code={`d['answer'] = 42`}
                    output={``}
                />

                <p className="mb-2 font-semibold">Проверка</p>
                <CodeExample
                    code={`d`}
                    output={`{'animal': 'Dog', 'answer': 42}`}
                />
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-bold mb-4">Вложенные словари</h2>

                <p className="mb-4">
                    Надеюсь, что Вы уже начинаете видеть, насколько Python мощный и гибкий в плане вложенности объектов и запуска методов. Давайте рассмотрим словарь внутри словаря:
                </p>

                <p className="mb-2 font-semibold">Словарь внутри словаря внутри словаря</p>
                <CodeExample
                    code={`d = {'key1':{'nestkey':{'subnestkey':'value'}}}`}
                    output={``}
                />

                <p className="mb-4">
                    Вау! Вот это вложенность словарей! Давайте посмотрим, как добраться до значения 'value':
                </p>

                <p className="mb-2 font-semibold">Последовательно указываем ключи</p>
                <CodeExample
                    code={`d['key1']['nestkey']['subnestkey']`}
                    output={`'value'`}
                />
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-bold mb-4">Некоторые методы для словарей</h2>

                <p className="mb-4">Для словарей можно вызывать различные методы. Вот некоторые из них:</p>

                <p className="mb-2 font-semibold">Создаем обычный словарь</p>
                <CodeExample
                    code={`d = {'key1':1,'key2':2,'key3':3}`}
                    output={``}
                />

                <p className="mb-2 font-semibold">Метод, который возвращает список всех ключей</p>
                <CodeExample
                    code={`d.keys()`}
                    output={`dict_keys(['key1', 'key2', 'key3'])`}
                />

                <p className="mb-2 font-semibold">Метод, возвращающий все значения</p>
                <CodeExample
                    code={`d.values()`}
                    output={`dict_values([1, 2, 3])`}
                />

                <p className="mb-2 font-semibold">Метод, возвращающий кортежи (tuples) для всех элементов (мы рассмотрим кортежи tuples чуть позже)</p>
                <CodeExample
                    code={`d.items()`}
                    output={`dict_items([('key1', 1), ('key2', 2), ('key3', 3)])`}
                />
            </section>
        </LessonLayout>
    );
};

export default DictionariesLesson;