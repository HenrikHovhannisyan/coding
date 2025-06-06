"use client";

import React from "react";
import LessonLayout from "@/components/LessonLayout";
import CodeExample from "@/components/CodeExample";

const page = () => {
  return (
    <LessonLayout title="JavaScript Scope">
      <ul className="mb-8 max-w-max space-y-3">
        <li>
          <a
            href="#global-scope"
            className="block p-4 bg-cyan-800 rounded-lg text-white hover:bg-cyan-950 transition"
          >
            Global Scope - Глобальная область видимости
          </a>
        </li>
        <li>
          <a
            href="#local-scope"
            className="block p-4 bg-cyan-800 rounded-lg text-white hover:bg-cyan-950 transition"
          >
            Local Scope - Локальная область видимости
          </a>
        </li>
        <li>
          <a
            href="#function-scope"
            className="block p-4 bg-cyan-800 rounded-lg text-white hover:bg-cyan-950 transition"
          >
            Function Scope - Область видимости функции
          </a>
        </li>
        <li>
          <a
            href="#block-scope"
            className="block p-4 bg-cyan-800 rounded-lg text-white hover:bg-cyan-950 transition"
          >
            Block Scope - Область видимости блока
          </a>
        </li>
        <li>
          <a
            href="#lexical-scope"
            className="block p-4 bg-cyan-800 rounded-lg text-white hover:bg-cyan-950 transition"
          >
            Lexical Scope - Лексическая область видимости
          </a>
        </li>
      </ul>

      <h2 id="global-scope" className="text-2xl font-bold mb-2">
        Глобальная область видимости или Global Scope
      </h2>
      <p>
        В JavaScript есть только одна глобальная область. Область за пределами
        всех функций считается глобальной областью, и переменные, определенные в
        глобальной области, могут быть доступны и изменены в любых других
        областях.
      </p>
      <CodeExample
        code={`var num = 5;
console.log(num);

function getNum() {
  console.log(num);
  num = 15;
  console.log(num);
}

getNum();`}
        output={`5
5
15`}
      />

      <h2 id="local-scope" className="text-2xl font-bold mb-2">
        Локальная область видимости или Local Scope
      </h2>
      <p>
        Переменные, объявленные внутри функций, становятся{" "}
        <strong>локальными</strong> для функции и рассматриваются в
        соответствующей <strong>локальной области</strong>.
      </p>
      <CodeExample
        code={`// Глобальная область

function foo1(){
  // Локальная область 1
  function foo2(){
    // Локальная область 2
  }
}

// Глобальная область
function foo3(){
  // Локальная область 3
}

// Глобальная область`}
      />
      <p>
        <strong>Локальная область видимости</strong> может быть разделена на{" "}
        <strong>область видимости функции</strong> и{" "}
        <strong>область видимости блока</strong>. Концепция{" "}
        <strong>область видимости блока</strong> была представлена в ES6 с{" "}
        <code>const</code> и <code>let</code>.
      </p>

      <h2 id="function-scope" className="text-2xl font-bold mb-2">
        Область видимости функции или Function Scope
      </h2>
      <p>
        Если переменная объявлена внутри функции с ключевым словом{" "}
        <code>var</code>, она доступна только внутри этой функции.
      </p>
      <CodeExample
        code={`function foo(){
  var num = 10;
  console.log('inside function: ', num);
}

foo();                
console.log(num); `}
        output={`inside function: 10
ReferenceError: num is not defined`}
      />

      <h2 id="block-scope" className="text-2xl font-bold mb-2">
        Область видимости блока или Block Scope
      </h2>
      <p>
        <strong>Область видимости блока</strong> возникает в конструкциях{" "}
        <code>if</code>, <code>switch</code>, <code>for</code>,{" "}
        <code>while</code>, и т.д. С помощью <code>let</code> и{" "}
        <code>const</code> переменные ограничены внутри блока.
      </p>
      <CodeExample
        code={`function foo(){
  if (true) {
    var num1 = 5;        // доступна в функции
    const num2 = 10;     // доступна только в блоке
    let num3 = 23;       // доступна только в блоке
  }
  console.log(num1);
  console.log(num2);
  console.log(num3);
}

foo();`}
        output={`5
ReferenceError: num2 is not defined
ReferenceError: num3 is not defined`}
      />

      <h2 id="lexical-scope" className="text-2xl font-bold mb-2">
        Лексическая область видимости или Lexical Scope
      </h2>
      <p>
        <strong>Лексическая область</strong> означает, что вложенные функции
        имеют доступ к переменным из внешней (родительской) функции.
      </p>
      <CodeExample
        code={`function foo1(){
  var num1 = 5;
  const num2 = 10;
  let num3 = 23;
  function foo2(){
    console.log(num1);
    console.log(num2);
    console.log(num3);
  }
  foo2();
}

foo1();`}
        output={`5
10
23`}
      />
    </LessonLayout>
  );
};

export default page;
