import React from "react";
import LessonLayout from "@/components/LessonLayout";
import CodeExample from "@/components/CodeExample";
import InfoSection from "@/components/InfoSection";

const Page = () => {
  return (
    <LessonLayout
      title="Переменные и типы данных в Python"
      page="python/basics/variables-and-data-types"
    >
      <section className="mb-3">
        <h2 className="text-2xl font-bold mb-2">Переменные в Python</h2>
        <p>
          В Python переменные создаются в момент присваивания им значения. В отличие от многих
          других языков программирования, в Python не нужно объявлять тип переменной заранее.
        </p>
        <p className="mt-2">
          Имена переменных могут содержать буквы, цифры и символ подчеркивания, но не могут
          начинаться с цифры. Python чувствителен к регистру, поэтому переменные <code>name</code> и <code>Name</code> будут разными.
        </p>
        <CodeExample
          code={`# Создание переменных\nname = "Иван"\nage = 25\nheight = 1.75\nis_student = True\n\n# Вывод значений переменных\nprint(name)\nprint(age)\nprint(height)\nprint(is_student)`}
          output={`Иван\n25\n1.75\nTrue`}
        />
      </section>

      <section className="mb-3">
        <h2 className="text-2xl font-bold mb-2">Основные типы данных</h2>
        <p>
          Python имеет несколько встроенных типов данных:
        </p>
        <ul className="list-disc pl-6 mt-2">
          <li><strong>Числа</strong>: целые числа (int), числа с плавающей точкой (float), комплексные числа (complex)</li>
          <li><strong>Строки</strong>: последовательности символов (str)</li>
          <li><strong>Логические значения</strong>: True или False (bool)</li>
          <li><strong>Последовательности</strong>: списки (list), кортежи (tuple), диапазоны (range)</li>
          <li><strong>Отображения</strong>: словари (dict)</li>
          <li><strong>Множества</strong>: множества (set), неизменяемые множества (frozenset)</li>
          <li><strong>None</strong>: специальный тип, обозначающий отсутствие значения</li>
        </ul>
      </section>

      <section className="mb-3">
        <h2 className="text-2xl font-bold mb-2">Определение типа переменной</h2>
        <p>
          Для определения типа переменной можно использовать функцию <code>type()</code>:
        </p>
        <CodeExample
          code={`name = "Иван"\nage = 25\nheight = 1.75\nis_student = True\n\nprint(type(name))\nprint(type(age))\nprint(type(height))\nprint(type(is_student))`}
          output={`<class 'str'>\n<class 'int'>\n<class 'float'>\n<class 'bool'>`}
        />
      </section>

      <section className="mb-3">
        <h2 className="text-2xl font-bold mb-2">Преобразование типов</h2>
        <p>
          Python позволяет преобразовывать данные из одного типа в другой с помощью функций преобразования:
        </p>
        <ul className="list-disc pl-6 mt-2">
          <li><code>int()</code> - преобразует в целое число</li>
          <li><code>float()</code> - преобразует в число с плавающей точкой</li>
          <li><code>str()</code> - преобразует в строку</li>
          <li><code>bool()</code> - преобразует в логическое значение</li>
        </ul>
        <CodeExample
          code={`# Преобразование типов\nx = 10\ny = "20"\nz = 3.14\n\nprint(float(x))    # int в float\nprint(int(z))      # float в int (отбрасывает дробную часть)\nprint(int(y))      # строку в int\nprint(str(x))      # int в строку\nprint(bool(x))     # int в bool\nprint(bool(0))     # 0 в bool`}
          output={`10.0\n3\n20\n10\nTrue\nFalse`}
        />
      </section>

      <InfoSection title="Динамическая типизация">
        <p>
          Python использует динамическую типизацию, что означает, что тип переменной может меняться
          во время выполнения программы. Одна и та же переменная может сначала содержать число,
          а затем строку.
        </p>
        <CodeExample
          code={`x = 10       # x теперь int\nprint(type(x))\n\nx = "hello"   # x теперь str\nprint(type(x))\n\nx = [1, 2, 3]  # x теперь list\nprint(type(x))`}
          output={`<class 'int'>\n<class 'str'>\n<class 'list'>`}
        />
      </InfoSection>
    </LessonLayout>
  );
};

export default Page;