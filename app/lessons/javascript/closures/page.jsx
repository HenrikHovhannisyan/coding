import React from "react";
import LessonLayout from "@/components/LessonLayout";
import CodeExample from "@/components/CodeExample";

const page = () => {
  return (
    <LessonLayout title="JavaScript Closures" page="javascript/closures">
      <section className="mb-3">
        <p>
          <strong>Замыкание</strong> — это комбинация функции и лексического
          окружения, в котором эта функция была определена. Другими словами,
          замыкание даёт вам доступ к <strong>Scope</strong> внешней функции из
          внутренней функции. В JavaScript замыкания создаются каждый раз при
          создании функции, во время её создания.
        </p>
        <CodeExample
          code={`function urlGenerator(domain) {
  return function (url) {
    return \`https://\${url}.\${domain}\`;
  };
}

const comUrl = urlGenerator('com');
const ruUrl = urlGenerator('ru');

console.log(comUrl('google'));
console.log(comUrl('netflix'));
console.log(ruUrl('yandex'));
console.log(ruUrl('vkontakte'));
console.log(comUrl('vkontakte'));
`}
          output={`https://google.com
https://netflix.com
https://yandex.ru
https://vkontakte.ru
https://vkontakte.com`}
        />
      </section>
      <section className="mb-3">
        <h2 className="text-2xl font-bold mb-2">
          Лексическая область видимости
        </h2>

        <p>
          <code>init()</code> создаёт локальную переменную <code>name</code> и
          определяет функцию
          <code>displayName()</code>. <code>displayName()</code> — это
          внутренняя функция — она определена внутри <code>init()</code> и
          доступна только внутри тела функции <code>init()</code>. Обратите
          внимание, что функция <code>displayName()</code> не имеет никаких
          собственных локальных переменных. Однако, поскольку внутренние функции
          имеют доступ к переменным внешних функций, <code>displayName()</code>{" "}
          может иметь доступ к переменной <code>name</code>, объявленной в
          родительской функции <code>init()</code>.
        </p>
        <CodeExample
          code={`function init() {
var name = "Mozilla"; // name - локальная переменная, созданная в init
function displayName() {
// displayName() - внутренняя функция, замыкание
console.log(name); // displayName() использует переменную, объявленную в родительской функции
}
displayName();
}
init();`}
          output={`Mozilla`}
        />
        <p>
          Обратите внимание, что команда <code>console.log()</code> внутри
          <code>displayName()</code> благополучно выводит на экран содержимое
          переменной <code>name</code>
          объявленной в родительской функции. Это пример так называемой
          лексической области видимости (lexical scoping): в JavaScript область
          действия переменной определяется по её расположению в коде (это
          очевидно лексически), и вложенные функции имеют доступ к переменным,
          объявленным вовне. Этот механизм и называется Lexical scoping (область
          действия, ограниченная лексически).
        </p>
      </section>
      <section className="mb-3">
        <h2 className="text-2xl font-bold mb-2">Замыкания</h2>
        <CodeExample
          code={`function makeFunc() {
  var name = "Mozilla";

  function displayName() {
    console.log(name);
  }

  return displayName;
}

var myFunc = makeFunc();
myFunc();`}
          output={`Mozilla`}
        />
        <p>
          Если выполнить этот код, то результат будет такой же, как и выполнение
          <code>init()</code> из предыдущего примера: строка "Mozilla" будет
          показана в JavaScript console.log диалоге. Что отличает этот код и
          представляет для нас интерес, так это то, что внутренняя функция{" "}
          <code>displayName()</code> была возвращена из внешней до того, как
          была выполнена.
        </p>
        <p>
          На первый взгляд, кажется неочевидным, что этот код правильный, но он
          работает. В некоторых языках программирования локальные
          переменные-функции существуют только во время выполнения этой функции.
          После завершения выполнения <code>makeFunc()</code> можно ожидать, что
          переменная name больше не будет доступна. Однако, поскольку код
          продолжает нормально работать, очевидно, что это не так в случае
          JavaScript.
        </p>
        <p>
          Причина в том, что функции в JavaScript формируют так называемые{" "}
          <em>замыкания</em>. <code>Замыкание</code> — это комбинация функции и
          лексического окружения, в котором эта функция была объявлена. Это
          окружение состоит из произвольного количества локальных переменных,
          которые были в области действия функции во время создания замыкания. В
          рассмотренном примере
          <code>myFunc</code> — это ссылка на экземпляр функции{" "}
          <code>displayName</code>, созданной в результате выполнения{" "}
          <code>makeFunc</code>. Экземпляр функции <code>displayName</code> в
          свою очередь сохраняет ссылку на своё лексическое окружение, в котором
          есть переменная <code>name</code>. По этой причине, когда происходит
          вызов функции <code>myFunc</code>, переменная <code>name</code>{" "}
          остаётся доступной для использования и сохранённый в ней текст
          "Mozilla" передаётся в <code>console.log</code>.
        </p>
        <p>
          А вот немного более интересный пример — функция <code>makeAdder</code>
          :
        </p>
        <CodeExample
          code={`function makeAdder(x) {
  return function (y) {
    return x + y;
  };
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);

console.log(add5(2)); 
console.log(add10(2));`}
          output={`7
12`}
        />
        <p>
          Здесь мы определили функцию <code>makeAdder(x)</code>, которая
          получает единственный аргумент <code>x</code> и возвращает новую
          функцию. Эта функция получает единственный аргумент <code>y</code> и
          возвращает сумму <code>x</code> и <code>y</code>.
        </p>
        <p>
          По существу <code>makeAdder</code> — это фабрика функций: она создаёт
          функции, которые могут прибавлять определённое значение к своему
          аргументу. В примере выше мы используем нашу фабричную функцию для
          создания двух новых функций — одна прибавляет 5 к своему аргументу,
          вторая прибавляет 10.
        </p>
        <p>
          <code>add5</code> и <code>add10</code> — это примеры замыканий. Эти
          функции делят одно определение тела функции, но при этом они сохраняют
          различные окружения. В окружении функции <code>add5</code>{" "}
          <code>x</code> — это 5, в то время как в окружении <code>add10</code>{" "}
          <code>x</code> — это 10.
        </p>
      </section>
    </LessonLayout>
  );
};

export default page;
