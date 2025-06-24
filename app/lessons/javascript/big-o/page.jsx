 import React from "react";
import LessonLayout from "@/components/LessonLayout";
import CodeExample from "@/components/CodeExample";

const page = () => {
  return (
    <LessonLayout title="JavaScript Big O Notation" page="javascript/big-o">
      <section className="mb-3">
        <h2 className="text-2xl font-bold mb-2">Что такое Big O?</h2>
        <p>
          Big O показывает, <strong>насколько быстро (или медленно)</strong>{" "}
          работает алгоритм, в<strong>худшем случае</strong>, в зависимости от
          размера входных данных <code>n</code>.
        </p>
      </section>
      <section className="mb-3">
        <h2 className="text-2xl font-bold mb-2">
          Основные виды Big O (с примерами)
        </h2>
        <p>
          Big O показывает, <strong>насколько быстро (или медленно)</strong>{" "}
          работает алгоритм, в<strong>худшем случае</strong>, в зависимости от
          размера входных данных <code>n</code>.
        </p>
        <div className="overflow-x-auto max-w-4xl">
          <table className="min-w-full text-sm text-left text-gray-700 dark:text-gray-200 border border-gray-300 dark:border-gray-600">
            <thead className="text-xs uppercase bg-gray-100 dark:bg-gray-700">
              <tr>
                <th className="px-4 py-3 border border-gray-300 dark:border-gray-600">
                  Название
                </th>
                <th className="px-4 py-3 border border-gray-300 dark:border-gray-600">
                  Нотация
                </th>
                <th className="px-4 py-3 border border-gray-300 dark:border-gray-600">
                  Пример
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800">
              <tr>
                <td className="px-4 py-3 border border-gray-300 dark:border-gray-600">
                  Константное
                </td>
                <td className="px-4 py-3 border border-gray-300 dark:border-gray-600">
                  O(1)
                </td>
                <td className="px-4 py-3 border border-gray-300 dark:border-gray-600">
                  Доступ к элементу по индексу в массиве
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 border border-gray-300 dark:border-gray-600">
                  Линейное
                </td>
                <td className="px-4 py-3 border border-gray-300 dark:border-gray-600">
                  O(n)
                </td>
                <td className="px-4 py-3 border border-gray-300 dark:border-gray-600">
                  Один цикл по массиву
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 border border-gray-300 dark:border-gray-600">
                  Квадратичное
                </td>
                <td className="px-4 py-3 border border-gray-300 dark:border-gray-600">
                  O(n²)
                </td>
                <td className="px-4 py-3 border border-gray-300 dark:border-gray-600">
                  Вложенный цикл
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 border border-gray-300 dark:border-gray-600">
                  Логарифмическое
                </td>
                <td className="px-4 py-3 border border-gray-300 dark:border-gray-600">
                  O(log n)
                </td>
                <td className="px-4 py-3 border border-gray-300 dark:border-gray-600">
                  Бинарный поиск
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 border border-gray-300 dark:border-gray-600">
                  Линейно-логарифм.
                </td>
                <td className="px-4 py-3 border border-gray-300 dark:border-gray-600">
                  O(n log n)
                </td>
                <td className="px-4 py-3 border border-gray-300 dark:border-gray-600">
                  Быстрая сортировка
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 border border-gray-300 dark:border-gray-600">
                  Экспоненциальное
                </td>
                <td className="px-4 py-3 border border-gray-300 dark:border-gray-600">
                  O(2ⁿ)
                </td>
                <td className="px-4 py-3 border border-gray-300 dark:border-gray-600">
                  Рекурсия Фибоначчи (без кеша)
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <section className="mb-3">
        <h2 className="text-2xl font-bold mb-2">Примеры</h2>

        {/* O(1) */}
        <section className="border-b-2 border-solid mb-3">
          <p>
            <strong>
              <span className="text-rose-500">O(1)</span> — Константное время
            </strong>
          </p>
          <CodeExample
            code={`let arr = [10, 20, 30];
console.log(arr[1]); // O(1) — доступ по индексу всегда за одно действие`}
            output={`20`}
          />
          <p className="mt-2">
            <strong>Что происходит:</strong> доступ к элементу по индексу.
            <br />
            <strong>Почему O(1):</strong> всегда выполняется одно действие,
            независимо от длины массива.
          </p>
        </section>

        {/* O(n) */}
        <section className="border-b-2 border-solid mb-3">
          <p>
            <strong>
              <span className="text-rose-500">O(n)</span> — Линейное время
            </strong>
          </p>
          <CodeExample
            code={`function sum(arr) {
    let total = 0;
    for (let num of arr) {
        total += num;
    }
    return total;
}
// Пробегаем весь массив — время растёт пропорционально размеру`}
          />
          <p className="mt-2">
            <strong>Что происходит:</strong> функция проходит весь массив от
            начала до конца.
            <br />
            <strong>Почему O(n):</strong> для массива длиной <code>n</code>{" "}
            выполняется <code>n</code> операций.
            <br />
            <strong>Пример:</strong> <code>sum([1, 2, 3])</code> →{" "}
            <code>6</code>
          </p>
        </section>

        {/* O(n^2) */}
        <section className="border-b-2 border-solid mb-3">
          <p>
            <strong>
              <span className="text-rose-500">O(n^2)</span> — Квадратичное время
            </strong>
          </p>
          <CodeExample
            code={`function printPairs(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            console.log(arr[i], arr[j]);
        }
    }
}
// Вложенный цикл: если массив из 3-х элементов → 9 пар`}
          />
          <p className="mt-2">
            <strong>Что происходит:</strong> два вложенных цикла, каждый по{" "}
            <code>n</code> итераций.
            <br />
            <strong>Почему O(n²):</strong> <code>n × n = n²</code> операций.
            <br />
            <strong>Пример:</strong> <code>printPairs([1, 2])</code> →{" "}
            <code>1 1, 1 2, 2 1, 2 2</code>
          </p>
        </section>

        {/* O(log n) */}
        <section className="border-b-2 border-solid mb-3">
          <p>
            <strong>
              <span className="text-rose-500">O(log n)</span> — Логарифмическое
              время (например, бинарный поиск)
            </strong>
          </p>
          <CodeExample
            code={`function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) return mid;
        else if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }

    return -1;
}`}
          />
          <p>
            Бинарный поиск каждый раз делит массив пополам — очень быстро
            работает даже на больших данных.
          </p>
          <p className="mt-2">
            <strong>Что происходит:</strong> каждый шаг делит массив пополам.
            <br />
            <strong>Почему O(log n):</strong> делений до одного элемента — около{" "}
            <code>log₂(n)</code>.
            <br />
            <strong>Пример:</strong> <code>binarySearch([1,3,5,7,9], 7)</code> →
            найден за 2 шага.
          </p>
        </section>

        {/* O(2^n) */}
        <section className="border-b-2 border-solid mb-3">
          <p>
            <strong>
              <span className="text-rose-500">O(2^n)</span> — Экспоненциальное
              время
            </strong>
          </p>
          <CodeExample
            code={`function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}`}
          />
          <p>
            Очень медленно: fibonacci(40) может выполняться секунды, потому что
            вызывает себя по два раза на каждом уровне.
          </p>
          <p className="mt-2">
            <strong>Что происходит:</strong> каждый вызов вызывает ещё два,
            создавая дерево вызовов.
            <br />
            <strong>Почему O(2ⁿ):</strong> количество вызовов удваивается на
            каждом уровне.
            <br />
            <strong>Пример:</strong> <code>fibonacci(5)</code> делает 15
            вызовов.
          </p>
        </section>
      </section>
      <section className="mb-3">
        <h2 className="text-2xl font-bold mb-2">Таблица сравнения:</h2>
        <div className="overflow-x-auto max-w-4xl">
          <table className="min-w-full text-sm text-left text-gray-700 dark:text-gray-200 border border-gray-300 dark:border-gray-600">
            <thead className="text-xs uppercase bg-gray-100 dark:bg-gray-700">
              <tr>
                <th className="px-4 py-3 border border-gray-300 dark:border-gray-600">
                  Big O
                </th>
                <th className="px-4 py-3 border border-gray-300 dark:border-gray-600">
                  n = 10
                </th>
                <th className="px-4 py-3 border border-gray-300 dark:border-gray-600">
                  n = 100
                </th>
                <th className="px-4 py-3 border border-gray-300 dark:border-gray-600">
                  n = 1000
                </th>
                <th className="px-4 py-3 border border-gray-300 dark:border-gray-600">
                  Пример
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800">
              <tr>
                <td className="px-4 py-3 border border-gray-300 dark:border-gray-600">
                  O(1)
                </td>
                <td className="px-4 py-3 border border-gray-300 dark:border-gray-600">
                  1
                </td>
                <td className="px-4 py-3 border border-gray-300 dark:border-gray-600">
                  1
                </td>
                <td className="px-4 py-3 border border-gray-300 dark:border-gray-600">
                  1
                </td>
                <td className="px-4 py-3 border border-gray-300 dark:border-gray-600">
                  <code>arr[0]</code>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 border border-gray-300 dark:border-gray-600">
                  O(log n)
                </td>
                <td className="px-4 py-3 border border-gray-300 dark:border-gray-600">
                  4
                </td>
                <td className="px-4 py-3 border border-gray-300 dark:border-gray-600">
                  7
                </td>
                <td className="px-4 py-3 border border-gray-300 dark:border-gray-600">
                  10
                </td>
                <td className="px-4 py-3 border border-gray-300 dark:border-gray-600">
                  Бинарный поиск
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 border border-gray-300 dark:border-gray-600">
                  O(n)
                </td>
                <td className="px-4 py-3 border border-gray-300 dark:border-gray-600">
                  10
                </td>
                <td className="px-4 py-3 border border-gray-300 dark:border-gray-600">
                  100
                </td>
                <td className="px-4 py-3 border border-gray-300 dark:border-gray-600">
                  1000
                </td>
                <td className="px-4 py-3 border border-gray-300 dark:border-gray-600">
                  Один цикл
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 border border-gray-300 dark:border-gray-600">
                  O(n²)
                </td>
                <td className="px-4 py-3 border border-gray-300 dark:border-gray-600">
                  100
                </td>
                <td className="px-4 py-3 border border-gray-300 dark:border-gray-600">
                  10,000
                </td>
                <td className="px-4 py-3 border border-gray-300 dark:border-gray-600">
                  1,000,000
                </td>
                <td className="px-4 py-3 border border-gray-300 dark:border-gray-600">
                  Два вложенных цикла
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 border border-gray-300 dark:border-gray-600">
                  O(2ⁿ)
                </td>
                <td className="px-4 py-3 border border-gray-300 dark:border-gray-600">
                  1024
                </td>
                <td className="px-4 py-3 border border-gray-300 dark:border-gray-600">
                  ~10³⁰
                </td>
                <td className="px-4 py-3 border border-gray-300 dark:border-gray-600">
                  🔥
                </td>
                <td className="px-4 py-3 border border-gray-300 dark:border-gray-600">
                  Рекурсия без оптимизации
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <CodeExample
          code={`function bigOExamples(n) {
  console.log(\`Входной размер: n = \${n}\`);

  // O(1)
  console.log('O(1) — Константное');
  console.log('Первый элемент: ', n);

  // O(log n)
  console.log('O(log n) — Логарифмическое');
  let steps = 0;
  for (let i = n; i > 1; i = Math.floor(i / 2)) {
    steps++;
    console.log(\`Шаг \${steps}: i = \${i}\`);
  }
  console.log(\`Всего шагов: \${steps}\`);

  // O(n)
  console.log('O(n) — Линейное');
  for (let i = 0; i < n; i++) {
    console.log(\`i = \${i}\`);
  }

  // O(n²)
  console.log('O(n²) — Квадратичное');
  let count = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      count++;
    }
  }
  console.log(\`Итераций: \${count}\`);

  // O(2^n)
  console.log('O(2^n) — Экспоненциальное');
  let expCount = 0;
  function exp(n) {
    expCount++;
    if (n <= 1) return 1;
    return exp(n - 1) + exp(n - 1);
  }

  if (n <= 10) {
    exp(n);
    console.log(\`Вызовов функции: \${expCount}\`);
  } else {
    console.log(\`n слишком большое (\${n}) — экспоненциальный рост!\`);
  }
}

// Пример вызова:
bigOExamples(4);`}
          output={`Входной размер: n = 4

O(1) — Константное
Первый элемент: 4

O(log n) — Логарифмическое
Шаг 1: i = 4
Шаг 2: i = 2
Всего шагов: 2

O(n) — Линейное
i = 0
i = 1
i = 2
i = 3

O(n²) — Квадратичное
Итераций: 16

O(2^n) — Экспоненциальное
Вызовов функции: 15`}
        />
        <p>
          <strong>Что делает код:</strong>
        </p>
        <div className="overflow-x-auto max-w-4xl">
          <table className="min-w-full text-sm text-left text-gray-700 dark:text-gray-200 border border-gray-300 dark:border-gray-600">
            <thead className="text-xs uppercase bg-gray-100 dark:bg-gray-700">
              <tr>
                <th className="px-4 py-3 border border-gray-300 dark:border-gray-600">
                  Часть
                </th>
                <th className="px-4 py-3 border border-gray-300 dark:border-gray-600">
                  Поведение
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800">
              <tr>
                <td className="px-4 py-3 border border-gray-300 dark:border-gray-600">
                  <code>O(1)</code>
                </td>
                <td className="px-4 py-3 border border-gray-300 dark:border-gray-600">
                  Выводит одно значение
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 border border-gray-300 dark:border-gray-600">
                  <code>O(log n)</code>
                </td>
                <td className="px-4 py-3 border border-gray-300 dark:border-gray-600">
                  Делит число пополам в цикле до 1
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 border border-gray-300 dark:border-gray-600">
                  <code>O(n)</code>
                </td>
                <td className="px-4 py-3 border border-gray-300 dark:border-gray-600">
                  Просто считает от 0 до <code>n-1</code>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 border border-gray-300 dark:border-gray-600">
                  <code>O(n²)</code>
                </td>
                <td className="px-4 py-3 border border-gray-300 dark:border-gray-600">
                  Два вложенных цикла (i и j)
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 border border-gray-300 dark:border-gray-600">
                  <code>O(2ⁿ)</code>
                </td>
                <td className="px-4 py-3 border border-gray-300 dark:border-gray-600">
                  Рекурсивная функция, вызывает себя дважды
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </LessonLayout>
  );
};

export default page;
