import React from "react";
import LessonLayout from "@/components/LessonLayout";
import CodeExample from "@/components/CodeExample";

const page = () => {
  return (
    <LessonLayout title="JavaScript Recursion" page="javascript/recursion">
      <section className="mb-3">
        <p>
          <strong>Рекурсия</strong> — это процесс вызова функцией самой себя.
          Функция, которая в своем теле вызывает сама себя, называется{" "}
          <i>рекурсивной функцией</i>.
        </p>
        <CodeExample
          code={`function recurse() {
    // код функции
    recurse(); // функция вызывает сама себя
    // код функции 
}

recurse();`}
        />
        <p>
          Здесь функция <code>recurse()</code> — рекурсивная функция, поскольку
          вызывает сама себя в своем теле.
        </p>
        <img
          src="/images/lessons/javascript/recursion.png"
          alt="Recursion"
          className="max-w-auto rounded-lg mt-4"
        />
        <p>
          Внутри рекурсивной функции обязательно должно находится{" "}
          <strong>условие выхода из рекурсии</strong>. Иначе функция будет
          вызывать саму себя бесконечно.
        </p>
        <p>
          Как только условие выхода выполняется, функция перестает вызывать
          себя.
        </p>
        <p>
          Чтобы предотвратить бесконечную рекурсию, можно использовать оператор
          <code>if...else</code> (или аналогичный подход), в котором одна ветвь
          выполняет рекурсивный вызов, а другая — нет.
        </p>
        <CodeExample
          code={`function recurse() {
    if(условие) {
        recurse();
    }
    else {
        // остановить вызов recurse()
    }
}

recurse();`}
        />
      </section>
      <section className="mb-3">
        <h2 className="text-2xl font-bold mb-2">Пример рекурсии</h2>
        <CodeExample
          code={`function countDown(number) {

    // вывод в консоль
    console.log(number);

    // уменьшаем значение на один
    const newNumber = number - 1;

    // условие выхода
    if (newNumber > 0) {
        countDown(newNumber);
    }
}

countDown(4);`}
          output={`4
3
2
1`}
        />
        <h3 className="text-xl mt-8 mb-4">Как это работает</h3>
        <ul className="list-disc pl-6">
          <li>
            <p>
              Пользователь передает число в качестве аргумента при вызове
              функции. В нашем случае — 4.
            </p>
          </li>
          <li>
            <p>На каждой итерации значение числа уменьшается на 1.</p>
          </li>
          <li>
            <p>
              Функция countDown() вызывается до тех пор, пока число не станет
              положительным. <code>{`newNumber > 0`}</code> — условие выхода из
              рекурсии.
            </p>
          </li>
        </ul>
        <h3 className="text-xl mt-8 mb-4">
          Вот, как выглядят рекурсивные вызовы по шагам:
        </h3>
        <ul className="list-decimal pl-6">
          <li>
            <p>countDown(4) выводит 4 и вызывает countDown(3)</p>
          </li>
          <li>
            <p>countDown(3) выводит 3 и вызывает countDown(2)</p>
          </li>
          <li>
            <p>countDown(2) выводит 2 и вызывает countDown(1)</p>
          </li>
          <li>
            <p>countDown(1) выводит 1 и вызывает countDown(0)</p>
          </li>
          <li>
            <p>
              Текущее число — 0, поэтому {`newNumber > 0`} = false. Выходим из
              рекусии.
            </p>
          </li>
        </ul>
      </section>
      <section className="mb-3">
        <h2 className="text-2xl font-bold mb-2">
          Пример 2. Факториал с помощью рекурсии
        </h2>
        <CodeExample
          code={`function factorial(x) {
    // если число — ноль
    if (x === 0) {
        return 1;
    }
    // если число положительное
    else {
        return x * factorial(x - 1);
    }
}

const num = 3;

// вызов factorial(), если число неотрицательное 
if (num >= 0) {
    let result = factorial(num);
    console.log(\`Факториал \${num} равен \${result}\`);
} else {
    console.log("Число должно быть неотрицательным");
}`}
          output={`Факториал 3 равен 6`}
        />
        <h3 className="text-xl mt-8 mb-4">Как это работает</h3>
        <ul className="list-disc pl-6">
          <li>
            <p>
              Когда функция factorial() вызывается с целым положительным
              аргументов, она рекурсивно вызывает саму себя, уменьшая число на
              1.
            </p>
          </li>
          <li>
            <p>
              Этот процесс продолжается до тех пор, пока число не станет равным
              1. Когда функция в очередной раз уменьшит число на 1, оно станет
              равно 0. Факториал нуля — 1 → вернется единица.{" "}
            </p>
          </li>
        </ul>
        <img
          src="/images/lessons/javascript/factorial.png"
          className="w-full max-w-2xl rounded-lg mt-4"
          alt="Factorial"
        />
        <h3 className="text-xl mt-8 mb-4">
          Вот, как выглядят рекурсивные вызовы по шагам:
        </h3>
        <ul className="list-decimal pl-6">
          <li>
            <p>factorial(3) возвращает 3 * factorial(2)</p>
          </li>
          <li>
            <p>factorial(2) возвращает 3 * 2 * factorial(1)</p>
          </li>
          <li>
            <p>factorial(1) возвращает 3 * 2 * 1 * factorial(0)</p>
          </li>
          <li>
            <p>factorial(0) возвращает 3 * 2 * 1 * 1</p>
          </li>
        </ul>
      </section>
    </LessonLayout>
  );
};

export default page;
