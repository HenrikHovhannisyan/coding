"use client";

import React from "react";
import LessonLayout from "@/components/LessonLayout";
import CodeExample from "@/components/CodeExample";

const page = () => {
  return (
    <LessonLayout title="JavaScript Hoisting" page="javascript/hosting">
      <section className="mb-3">
        <p>
          Поднятие предполагает, что объявления переменных <code>var</code> и
          функций <code>function</code>
          физически перемещаются в начало кода, но, на самом деле это не так.
        </p>
        <p>
          По сути, когда Javascript компилирует весь код, все объявления
          переменных, использующие <code>var</code>, поднимаются/hoisted в
          верхнюю часть их функциональной/локальной области видимости (если
          объявляется внутри функции) или в глобальную область видимости (если
          объявляется вне функции) независимо от того, где была сделана
          фактическая декларация.
        </p>
        <p>
          Объявления переменных и функций помещаются в память на этапе
          компиляции, но они остаются именно там, где мы ввели их в свой код.
        </p>
        <p>
          Итак, под капотом происходит следующее: на этапе создания, движок
          JavaScript просматривает код и, как только он видит ключевое слово{" "}
          <code>var</code> или ключевое слово <code>function</code>, он выделяет
          некоторую память для них.
        </p>
      </section>
      <section className="mb-3">
        <h2 className="text-2xl font-bold mb-2">Поднятие функций</h2>
        <p>
          Одним из преимуществ JavaScript является помещение{" "}
          <strong>объявления функций</strong> в память, перед выполнением любого
          сегмента кода. Объявления функций поднимаются, но они идут на самый
          верх, поэтому они будут находиться над всеми объявлениями переменных.
          Это позволяет нам использовать <strong>функцию</strong> до того, как
          мы объявим её в своем коде. Например:
        </p>
        <CodeExample
          code={`function printName(name) {
  console.log("Hello, my name is " + name);
}

printName("Alex");`}
          output={"Hello, my name is Alex"}
        />
        <p>
          Теперь, давайте посмотрим, что произойдёт, когда мы вызовем функцию{" "}
          <code>printName</code>, прежде чем напишем её:
        </p>
        <CodeExample
          code={`printName("Alex");

function printName(name) {
  console.log("Hello, my name is " + name);
}`}
          output={"Hello, my name is Alex"}
        />
        <p>
          Несмотря на то, что мы вызвали функцию <code>printName</code>, перед
          тем, как написать её, код всё ещё работает. Это происходит из-за того,
          как контекстное выполнение работает в JavaScript.
        </p>
        <p>
          <strong>Поднятие</strong> хорошо сотрудничает с другими типами данных.
          Переменные можно инициализировать и использовать до их объявления.
        </p>
        <p>
          JavaScript поднимает только <strong>объявления</strong>, а не
          инициализации. Если переменная объявлена и инициализирована после её
          использования, значение будет неопределенным (undefined). Например:
        </p>
        <CodeExample
          code={`console.log(name);
var name;
name = "Alex";`}
          output={"undefined"}
        />
        <p>
          Если мы объявляем переменную после её использования, но предварительно
          инициализируем её, она вернет значение:
        </p>
        <CodeExample
          code={`name = "Alex";
console.log(name);
var name;`}
          output={"Alex"}
        />
        <p>
          Таким образом переменные <strong>частично подняты</strong>. Поднимая
          переменную, но не правую сторону (не фактическое значение), мы просто
          присваиваем ему <code>undefined</code>.
        </p>
        <p>
          <strong>Функции полностью подняты</strong>. Означает, что объявлению
          функции, на этапе создания, было назначено место в памяти.
        </p>
      </section>
      <section className="mb-3">
        <h2 className="text-2xl font-bold mb-2">Поднятие const, let и var</h2>
        <code>var</code> - это традиционный способ объявления переменных в
        JavaScript.
        <p>
          ES6 (ECMAScript 6) представил два новых способа объявления переменных:
          <code>const</code> и <code>let</code>, и, как правило, они
          рекомендуются во избежание неожиданных осложнений при подъеме.
        </p>
      </section>
      <section className="mb-3">
        <h2 className="text-2xl font-bold mb-2">Ключевое слово var</h2>
        <ul className="list-disc pl-6">
          <li>
            <p>
              <code>var</code> имеет область действия функции;
            </p>
          </li>
          <li>
            <p>
              объявления <code>var</code> поднимаются, но не инициализируются.
            </p>
          </li>
        </ul>
        <CodeExample
          code={`console.log(name);
var name = "Alex";`}
          output={"undefined"}
        />
        <p>
          Приведенный выше код, из-за поднятия эквивалентен приведенному коду
          ниже.
        </p>
        <CodeExample
          code={`var name;
console.log(name); // undefined
name = "Alex";`}
        />
      </section>
      <section className="mb-3">
        <h2 className="text-2xl font-bold mb-2">Ключевые слова const / let</h2>
        <ul className="list-disc pl-6">
          <li>
            <p>
              <code>const</code> и <code>let</code> имеют область видимости
              блока.
            </p>
          </li>
        </ul>
        <p>
          На самом деле объявления <code>var</code>, <code>let</code>,{" "}
          <code>const</code>, <code>function</code> и <code>class</code>{" "}
          поднимаются; но, мы должны помнить, что концепция поднятия не является
          буквальным процессом (т. е. сами объявления не перемещаются в начало
          файла - это просто процесс компилятора JavaScript, который сначала
          читает их, чтобы освободить для них место в памяти).
        </p>
        <p>
          Разница между объявлениями <code>var / function</code> и объявлениями{" "}
          <code>let / const / class</code> заключается в инициализации. Первые
          инициализируются с неопределенным значением <code>undefined</code>.
          Однако, вторые, лексически объявленные переменные, остаются не
          инициализированными. Это означает, что <code>ReferenceError</code>{" "}
          выбрасывается при попытке доступа к ним. Они будут инициализированы
          только после того, как операторы <code>let / const / class</code>
          будут определены. Всё что до, называется{" "}
          <strong>временной мертвой зоной</strong>.
        </p>
        <p>
          <strong>Временная мертвая зона</strong> - это не синтаксическое
          местоположение, а <strong>время</strong>
          между созданием переменной (области) и инициализацией. Ссылка на
          переменную в коде над объявлением не является ошибкой, если этот код
          не выполняется (например, тело функции или просто мертвый код), но
          ошибка будет выдана, если мы запросим доступ к переменной до её
          инициализации.
        </p>
        <p>
          Разница между объявлениями <code>var</code>, <code>let</code> и{" "}
          <code>const</code> заключается в их инициализации.
        </p>
        <p>
          Экземпляры <code>var</code> и <code>let</code> могут быть
          инициализированы без значения, в то время как <code>const</code>{" "}
          выдаст ошибку <code>ReferenceError</code>, если ты попытаешься
          объявить её без одновременного присвоения ей значения. Так что{" "}
          <code>const myName = 'Alex'</code> будет работать, но{" "}
          <code>const myName; myName = 'Alex';</code> не будет. С помощью{" "}
          <code>var</code> и <code>let</code> ты можешь попробовать использовать
          значение
          <code>var</code> до того, как оно будет присвоено, и оно вернет{" "}
          <code>undefined</code>. Однако, если ты сделаешь то же самое с{" "}
          <code>let</code> - получишь <code>ReferenceError</code>.
        </p>
        <CodeExample
          code={`console.log(a); // undefined
var a = 1;

console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 2;

console.log(c); // ReferenceError: Cannot access 'c' before initialization
const c = 5;`}
        />
        <p>
          Также, если ты создашь <code>var</code> на верхнем уровне (глобальный
          уровень), создастся свойство для глобального объекта; в случае с
          браузером - это объект <code>window</code>. Поэтому на создание{" "}
          <code>var myName = 'Alex';</code> можно ссылаться также путем вызова{" "}
          <code>window.myName</code>.
        </p>
        <p>
          Однако, если ты напишешь <code>let newName = 'Alex';</code> это не
          будет доступно в глобальном объекте <code>window</code> -
          следовательно, ты не сможешь использовать
          <code>window.newName</code> в качестве ссылки на <code>'Alex'</code> ,
        </p>
        <p>
          К объявлениям, сделанным с помощью <code>var</code>, можно получить
          доступ за пределами их первоначальной области видимости, тогда как к
          объявлениям, сделанным с помощью <code>let</code> и <code>const</code>
          , нельзя.
        </p>
        <CodeExample
          code={`console.log('1 myName1', myName1); // undefined
if (1) {
 console.log('2 myName1', myName1); // undefined
 var myName1 = 'Alex';
}

console.log('1 myName2', myName2); // ReferenceError: myName2 is not defined
if (1) {
  console.log('1 myName2', myName2); // ReferenceError: Cannot access 'myName2' before initialization
  let myName2 = 'Alex';
}

console.log('1 myName3', myName3); // ReferenceError: myName3 is not defined
if (1) {
  console.log('2 myName3', myName3); // ReferenceError: Cannot access 'myName3' before initialization
  const myName3 = 'Alex';
}`}
        />
      </section>
    </LessonLayout>
  );
};

export default page;
