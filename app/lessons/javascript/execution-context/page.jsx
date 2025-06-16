"use client";

import React from "react";
import LessonLayout from "@/components/LessonLayout";
import CodeExample from "@/components/CodeExample";

const page = () => {
  return (
    <LessonLayout
      title="JavaScript Execution Context"
      page="javascript/execution-context"
    >
      <section className="mb-3">
        <strong>Execution Context</strong> — это окружение, в котором
        выполняется код. Оно определяет:
        <ul className="list-disc pl-6">
          <li>
            <p>Какие переменные доступны.</p>
          </li>
          <li>
            <p>
              Как работает <code>this</code>.
            </p>
          </li>
          <li>
            <p>Где и как искать функции и объекты.</p>
          </li>
        </ul>
      </section>
      <section className="mb-3">
        <h2 className="text-2xl font-bold mb-2">Виды Execution Context:</h2>
        <ul className="list-decimal pl-6">
          <li>
            <p>
              <strong>Global Execution Context (GEC)</strong>
            </p>
            <p>
              Создаётся при запуске скрипта. Это{" "}
              <strong>самый первый контекст</strong>, в котором:
            </p>
            <ul className="list-disc pl-6">
              <li>
                <p>
                  <code>this</code> указывает на глобальный объект (
                  <code>window</code> в браузере).
                </p>
              </li>
              <li>
                <p>объявленные глобальные переменные и функции хранятся.</p>
              </li>
            </ul>
          </li>
          <li>
            <p>
              <strong>Function Execution Context (FEC)</strong>
            </p>
            <p>Создаётся каждый раз при вызове функции. В нём:</p>
            <ul className="list-disc pl-6">
              <li>
                <p>
                  Создаются переменные, параметры и <code>arguments</code>.
                </p>
              </li>
              <li>
                <p>
                  Определяется <code>this</code> (в зависимости от вызова).
                </p>
              </li>
              <li>
                <p>Создаётся собственный "объём" видимости (scope).</p>
              </li>
            </ul>
          </li>
          <li>
            <p>
              <strong>Eval Execution Context (редко используется)</strong>
            </p>
            <p>
              Создаётся, если используется eval() — динамическое выполнение
              строки как кода. <strong>Использовать не рекомендуется</strong>.
            </p>
          </li>
        </ul>
      </section>
      <section className="mb-3">
        <h2 className="text-2xl font-bold mb-2">Как работает?</h2>
        <p>Когда запускается JavaScript-файл:</p>
        <ul className="list-disc pl-6">
          <li>
            <p>
              Создаётся <strong>Global Execution Context</strong>.
            </p>
          </li>
          <li>
            <p>
              движок сначала делает <strong>создание (Creation Phase)</strong>,
              потом —<strong>выполнение (Execution Phase)</strong>.
            </p>
          </li>
        </ul>
      </section>
      <section className="mb-3">
        <h2 className="text-2xl font-bold mb-2">Stack (Call Stack)</h2>
        <p>Контексты выполнения хранятся в стеке вызовов (Call Stack):</p>
        <CodeExample
          code={`function one() {
  two();
}

function two() {
  console.log('Hello');
}

one();
`}
          output={`Hello`}
        />
        <p>Что происходит по шагам:</p>
        <ul className="list-decimal pl-6">
          <li>
            <p>GEC добавляется в стек.</p>
          </li>
          <li>
            <p>
              <code>one()</code> → создаётся <code>one Execution Context</code>,
              добавляется в стек.
            </p>
          </li>
          <li>
            <p>
              <code>two()</code> → создаётся <code>two Execution Context</code>,
              добавляется в стек.
            </p>
          </li>
          <li>
            <p>
              <code>console.log()</code> выполняется.
            </p>
          </li>
          <li>
            <p>
              <code>two()</code> завершена → удаляется из стека.
            </p>
          </li>
          <li>
            <p>
              <code>one()</code> завершена → удаляется из стека.
            </p>
          </li>
          <li>
            <p>Остался только GEC.</p>
          </li>
        </ul>
      </section>
      <section className="mb-3">
        <h2 className="text-2xl font-bold mb-2">
          Что входит в Execution Context?
        </h2>
        <p>Каждый контекст состоит из трёх частей:</p>
        <ul className="list-decimal pl-6">
          <li>
            <p>
              <strong>Variable Environment</strong> — переменные, функции,
              параметры.
            </p>
          </li>
          <li>
            <p>
              <strong>Scope Chain</strong> — доступ к внешним переменным.
            </p>
          </li>
          <li>
            <p>
              <code>this</code> <strong>binding</strong> — значение ключевого
              слова <code>this</code>.
            </p>
          </li>
        </ul>
        <CodeExample
          code={`let name = 'Tom';

function greet() {
  let message = 'Hello ' + name;
  console.log(message);
}

greet();`}
          output={`Hello Tom
`}
        />
        <p>Порядок:</p>
        <ul className="list-decimal pl-6">
          <li>
            <p>
              Global Execution Context (переменная <code>name</code>, функция{" "}
              <code>greet</code>)
            </p>
          </li>
          <li>
            <p>
              Вызов <code>greet()</code> → Function Execution Context
            </p>
          </li>
          <li>
            <p>
              Внутри функции создаётся <code>message</code> → выводится в
              консоль.
            </p>
          </li>
        </ul>
      </section>
    </LessonLayout>
  );
};

export default page;
