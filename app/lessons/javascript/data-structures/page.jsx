"use client";

import React from "react";
import LessonLayout from "@/components/LessonLayout";
import CodeExample from "@/components/CodeExample";
import InfoSection from "@/components/InfoSection";

const page = () => {
  return (
    <LessonLayout
      title="JavaScript Data Structures"
      page="javascript/data-structures"
    >
      <section className="mb-3">
        <ul className="mb-8 max-w-max space-y-3 list-none text-white">
          <li>
            <a
              href="#stack"
              className="text-teal-400 hover:underline transition"
            >
              <strong>Stack</strong> - Стек (вызовов)
            </a>
          </li>
          <li>
            <a
              href="#queue"
              className="text-teal-400 hover:underline transition"
            >
              <strong>Queue</strong> - Очередь (кью)
            </a>
          </li>
          <li>
            <a href="#map" className="text-teal-400 hover:underline transition">
              <strong>Map</strong>
            </a>
          </li>
          <li>
            <a href="#set" className="text-teal-400 hover:underline transition">
              <strong>Set</strong>
            </a>
          </li>
        </ul>
      </section>
      <section className="mb-3">
        <h2 id="stack" className="text-2xl font-bold mb-2">
          Стек (вызовов) (Stack)
        </h2>
        <img
          src="/images/lessons/javascript/data-structures.png"
          alt="Data Structures"
          className="mb-4 w-full max-w-md"
        />
        <p>
          Стек следует принципу <strong className="text-rose-500">LIFO</strong>{" "}
          (<strong>Last In First Out</strong> — последним вошел, первым вышел).
          Если вы сложили книги друг на друга, и захотели взять самую нижнюю
          книгу, то сначала возьмете верхнюю, затем следующую и т.д.
        </p>
        <p>Стек имеет следующие методы:</p>
        <ul className="list-disc pl-6">
          <li>
            <p>
              <strong className="text-rose-500">push</strong>: добавить новый
              элемент
            </p>
          </li>
          <li>
            <p>
              <strong className="text-rose-500">pop</strong>: удалить верхний
              элемент, вернуть его
            </p>
          </li>
          <li>
            <p>
              <strong className="text-rose-500">peek</strong>: вернуть верхний
              элемент
            </p>
          </li>
          <li>
            <p>
              <strong className="text-rose-500">length</strong>: вернуть
              количество элементов в стеке
            </p>
          </li>
        </ul>
        <p>
          Массив в JS имеет атрибуты стека, но мы построим его с нуля с помощью
          function <code>Stack()</code>:
        </p>
        <CodeExample
          code={`function Stack() {
  this.count = 0;
  this.storage = {};

  this.push = function (value) {
    this.storage[this.count] = value;
    this.count++;
  };

  this.pop = function () {
    if (this.count === 0) return undefined;
    this.count--;
    let result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  };

  this.peek = function () {
    return this.storage[this.count - 1];
  };

  this.size = function () {
    return this.count;
  };
}

const myStack = new Stack();

myStack.push('Первый элемент');
myStack.push('Второй элемент');
myStack.push('Третий элемент');

console.log('Размер стека:', myStack.size()); // 3
console.log('Верхний элемент:', myStack.peek()); // 'Третий элемент'

console.log('Удаляем элемент:', myStack.pop()); // 'Третий элемент'
console.log('Теперь верхний элемент:', myStack.peek()); // 'Второй элемент'
console.log('Размер стека после удаления:', myStack.size()); // 2`}
          output={`Размер стека: 3
Верхний элемент: Третий элемент
Удаляем элемент: Третий элемент
Теперь верхний элемент: Второй элемент
Размер стека после удаления: 2`}
        />
      </section>
      <section className="mb-3">
        <h2 id="queue" className="text-2xl font-bold mb-2">
          Очередь (кью) (Queue)
        </h2>
        <img
          src="/images/lessons/javascript/data-structures1.png"
          alt="Data Structures"
          className="mb-4 w-full max-w-md"
        />
        <p>
          Очередь напоминает стек. Разница состоит в том, что очередь следует
          принципу <strong className="text-rose-500">FIFO</strong> (
          <strong>First In First Out</strong> — первым вошел, первым вышел).
          Когда вы стоите в очереди, первый в ней всегда будет первым.
        </p>
        <p>Очередь имеет следующие методы:</p>
        <ul className="list-disc pl-6">
          <li>
            <p>
              <strong className="text-rose-500">enqueue</strong>: войти в
              очередь, добавить элемент в конец
            </p>
          </li>
          <li>
            <p>
              <strong className="text-rose-500">dequeue</strong>: покинуть
              очередь, удалить первый элемент и вернуть его
            </p>
          </li>
          <li>
            <p>
              <strong className="text-rose-500">front</strong>: получить первый
              элемент
            </p>
          </li>
          <li>
            <p>
              <strong className="text-rose-500">isEmpty</strong>: проверить,
              пуста ли очередь
            </p>
          </li>
          <li>
            <p>
              <strong className="text-rose-500">size</strong>: получить
              количество элементов в очереди
            </p>
          </li>
        </ul>
        <p>
          Массив в JS имеет некоторые атрибуты очереди, поэтому мы можем
          использовать его для демонстрации:
        </p>
        <CodeExample
          code={`function Queue() {
    let collection = [];

    this.print = function() {
        console.log(collection);
    }

    this.enqueue = function(element) {
        collection.push(element);
    }

    this.dequeue = function() {
        return collection.shift();
    }

    this.front = function() {
        return collection[0];
    }

    this.isEmpty = function() {
        return collection.length === 0;
    }

    this.size = function() {
        return collection.length;
    }
}

const myQueue = new Queue();

myQueue.enqueue('Первый');
myQueue.enqueue('Второй');
myQueue.enqueue('Третий');

myQueue.print(); // ['Первый', 'Второй', 'Третий']

console.log('Первый в очереди:', myQueue.front()); // 'Первый'
console.log('Удалён из очереди:', myQueue.dequeue()); // 'Первый'
myQueue.print(); // ['Второй', 'Третий']

console.log('Очередь пуста?', myQueue.isEmpty()); // false
console.log('Размер очереди:', myQueue.size()); // 2`}
          output={`(3) ["Первый", "Второй", "Третий"]
Первый в очереди: Первый
Удалён из очереди: Первый
(2) ["Второй", "Третий"]
Очередь пуста? false
Размер очереди: 2`}
        />
        <p>
          <strong>
            Сейчас мы знаем о следующих сложных структурах данных:
          </strong>
        </p>
        <ul className="list-disc pl-6">
          <li>
            <p>
              <strong className="text-rose-500">Объекты</strong>: для хранения
              именованных коллекций.
            </p>
          </li>
          <li>
            <p>
              <strong className="text-rose-500">Массивы</strong>: для хранения
              упорядоченных коллекций.
            </p>
          </li>
        </ul>
        <p>
          Но этого не всегда достаточно для решения повседневных задач. Поэтому
          также существуют <strong className="text-rose-500">Map</strong> и{" "}
          <strong className="text-rose-500">Set</strong>.
        </p>
      </section>
      <section className="mb-3">
        <h2 id="map" className="text-2xl font-bold mb-2">
          Map
        </h2>
        <p>
          <code>Map</code> – это коллекция ключ/значение, как и{" "}
          <code>Object</code>. Но основное отличие в том, что <code>Map</code>{" "}
          позволяет использовать ключи любого типа.
        </p>
        <p>
          Методы и свойства <code>Map</code>:
        </p>
        <ul className="list-disc pl-6">
          <li>
            <p>
              <strong className="text-rose-500">new Map()</strong>: создать
              коллекцию
            </p>
          </li>
          <li>
            <p>
              <strong className="text-rose-500">map.set(key, value)</strong>:
              записывает по ключу <strong className="text-rose-500">key</strong>{" "}
              значение <strong className="text-rose-500">value</strong>.
            </p>
          </li>
          <li>
            <p>
              <strong className="text-rose-500">map.get(key)</strong>:
              возвращает значение по ключу или{" "}
              <strong className="text-rose-500">undefined</strong>, если ключ{" "}
              <strong className="text-rose-500">key</strong> отсутствует.
            </p>
          </li>
          <li>
            <p>
              <strong className="text-rose-500">map.has(key)</strong>:
              возвращает <strong className="text-rose-500">true</strong>, если
              ключ <strong className="text-rose-500">key</strong> присутствует в
              коллекции, иначе <strong className="text-rose-500">false</strong>.
            </p>
          </li>
          <li>
            <p>
              <strong className="text-rose-500">map.delete(key)</strong>:
              удаляет элемент (пару «ключ/значение») по ключу{" "}
              <strong className="text-rose-500">key</strong>.
            </p>
          </li>
          <li>
            <p>
              <strong className="text-rose-500">map.clear()</strong>: очищает
              коллекцию от всех элементов.
            </p>
          </li>
          <li>
            <p>
              <strong className="text-rose-500">map.size</strong>: возвращает
              текущее количество элементов.
            </p>
          </li>
        </ul>
        <p>Например:</p>
        <CodeExample
          code={`let map = new Map();

map.set('1', 'str1'); // строка в качестве ключа
map.set(1, 'num1'); // цифра как ключ
map.set(true, 'bool1'); // булево значение как ключ

// помните, обычный объект Object приводит ключи к строкам?
// Map сохраняет тип ключей, так что в этом случае сохранится 2 разных значения:
console.log(map.get(1)); // "num1"
console.log(map.get('1')); // "str1"
console.log(map.get(true)); // "bool1"

console.log(map.size); // 3`}
          output={`num1
str1
bool1
3`}
        />
        <p>
          Как мы видим, в отличие от объектов, ключи не были приведены к
          строкам. Можно использовать любые типы данных для ключей.
        </p>
        <InfoSection
          title={`<code>map[key]</code> это не совсем правильный способ использования <code>Map</code>`}
        >
          <p>
            Хотя <code>map[key]</code> также работает, например, мы можем
            установить <code>map[key] = 2</code>, в этом случае <code>map</code>{" "}
            рассматривался бы как обычный JavaScript объект, таким образом это
            ведёт ко всем соответствующим ограничениям (только строки/символьные
            ключи и так далее).
          </p>
          <p>
            Поэтому нам следует использовать методы <code>map</code>:{" "}
            <code>set</code>, <code>get</code> и так далее.
          </p>
        </InfoSection>
        <p>
          <strong>Map может использовать объекты в качестве ключей.</strong>
        </p>
        <p>Например:</p>
        <CodeExample
          code={`let john = { name: "John" };

// давайте сохраним количество посещений для каждого пользователя
let visitsCountMap = new Map();

// объект john - это ключ для значения в объекте Map
visitsCountMap.set(john, 123);

console.log(visitsCountMap.get(john));`}
          output={`123`}
        />
        <p>
          Использование объектов в качестве ключей – одна из наиболее заметных и
          важных функций <code>Map</code>. Это то что невозможно для{" "}
          <code>Object</code>. Строка в качестве ключа в <code>Object</code> –
          это нормально, но мы не можем использовать другой <code>Object</code>{" "}
          в качестве ключа в <code>Object</code>.
        </p>
        <p>
          Давайте попробуем заменить <code>Map</code> на <code>Object</code>:
        </p>
        <CodeExample
          code={`let john = { name: "John" };
let ben = { name: "Ben" };

let visitsCountObj = {}; // попробуем использовать объект

visitsCountObj[ben] = 234; // пробуем использовать объект ben в качестве ключа
visitsCountObj[john] = 123; // пробуем использовать объект john в качестве ключа, при этом объект ben будет замещён

// Вот что там было записано!
console.log( visitsCountObj["[object Object]"] );`}
          output={`123`}
        />
        <p>
          Так как <code>visitsCountObj</code> является объектом, он преобразует
          все ключи
          <code>Object</code>, такие как <code>john</code> и <code>ben</code>, в
          одну и ту же строку <code>"[object Object]"</code>. Это определенно не
          то, чего мы хотим.
        </p>
        <InfoSection title={`Как объект <code>Map</code> сравнивает ключи`}>
          Чтобы сравнивать ключи, объект <code>Map</code> использует алгоритм
          <strong>SameValueZero</strong>. Это почти такое же сравнение, что и{" "}
          <code>===,</code> с той лишь разницей, что <code>NaN</code>
          считается равным <code>NaN</code>. Так что <code>NaN</code> также
          может использоваться в качестве ключа.
          <p>Этот алгоритм не может быть заменён или модифицирован.</p>
        </InfoSection>
        <InfoSection title={`Цепочка вызовов`}>
          <p>
            Каждый вызов <code>map.set</code> возвращает объект map, так что мы
            можем объединить вызовы в цепочку:
          </p>
          <CodeExample
            code={`map.set("1", "str1")
  .set(1, "num1")
  .set(true, "bool1");`}
          />
        </InfoSection>
        <p>
          <strong>Перебор Map</strong>
        </p>
        <p>
          Для перебора коллекции <code>Map</code> есть 3 метода:
        </p>
        <ul className="list-disc pl-6">
          <li>
            <p>
              <strong className="text-rose-500">map.keys()</strong>: возвращает
              итерируемый объект по ключам,
            </p>
          </li>
          <li>
            <p>
              <strong className="text-rose-500">map.values()</strong>:
              возвращает итерируемый объект по значениям,
            </p>
          </li>
          <li>
            <p>
              <strong className="text-rose-500">map.entries()</strong>:
              возвращает итерируемый объект по парам вида{" "}
              <code>[ключ, значение]</code>, используемый по умолчанию в циклах{" "}
              <code>for..of</code>.
            </p>
          </li>
        </ul>
        <p>Например:</p>
        <CodeExample
          code={`let recipeMap = new Map([
  ['огурец', 500],
  ['помидор', 350],
  ['лук', 50],
]);

// перебор по ключам (овощи)
for (let vegetable of recipeMap.keys()) {
  console.log(vegetable); // огурец, помидор, лук
}

// перебор по значениям (числа)
for (let amount of recipeMap.values()) {
  console.log(amount); // 500, 350, 50
}

// перебор по элементам в формате [ключ, значение]
for (let entry of recipeMap) {
  // то же самое, что и recipeMap.entries()
  console.log(entry); // огурец,500 (и так далее)
}`}
          output={`огурец
помидор
лук
500
350
50
(2) ["огурец", 500]
(2) ["помидор", 350]
(2) ["лук", 50]`}
        />
        <InfoSection title={`Используется порядок вставки`}>
          <p>
            В отличие от обычных объектов <code>Object</code>, в{" "}
            <code>Map</code> перебор происходит в том же порядке, в каком
            происходило добавление элементов.
          </p>
        </InfoSection>
        <p>
          Кроме этого, <code>Map</code> имеет встроенный метод{" "}
          <code>forEach</code>, схожий со встроенным методом массивов{" "}
          <code>Array</code>:
        </p>
        <CodeExample
          code={`let recipeMap = new Map([
  ['огурец', 500],
  ['помидор', 350],
  ['лук', 50],
]);

// выполняем функцию для каждой пары (ключ, значение)
recipeMap.forEach((value, key, map) => {
  console.log(\`\${key}: \${value}\`); // огурец: 500 и так далее
});`}
          output={`огурец: 500
помидор: 350
лук: 50`}
        />
        <p>
          <strong>Object.entries: Map из Object</strong>
        </p>
        <p>
          При создании <code>Map</code> мы можем указать массив (или другой
          итерируемый объект) с парами ключ-значение для инициализации, как
          здесь:
        </p>
        <CodeExample
          code={`// массив пар [ключ, значение]
let map = new Map([
  ['1',  'str1'],
  [1,    'num1'],
  [true, 'bool1']
]);

console.log( map.get('1') );`}
          output={`str1`}
        />
        <p>
          Если у нас уже есть обычный объект, и мы хотели бы создать{" "}
          <code>Map</code> из него, то поможет встроенный метод{" "}
          <strong className="text-rose-500">Object.entries(obj)</strong>,
          который получает объект и возвращает массив пар ключ-значение для
          него, как раз в этом формате.
        </p>
        <p>
          Так что мы можем создать <code>Map</code> из обычного объекта
          следующим образом:
        </p>
        <CodeExample
          code={`let obj = {
  name: 'John',
  age: 30,
};

let map = new Map(Object.entries(obj));

console.log(map.get('name'));`}
          output={`John`}
        />
        <p>
          Здесь <code>Object.entries</code> возвращает массив пар ключ-значение:{" "}
          <code>[ ["name","John"], ["age", 30] ]</code>. Это именно то, что
          нужно для создания <code>Map</code>.
        </p>
        <p>
          <strong>Object.fromEntries: Object из Map</strong>
        </p>
        <p>
          Мы только что видели, как создать <code>Map</code> из обычного объекта
          при помощи <code>Object.entries(obj)</code>.
        </p>
        <p>
          Есть метод <code>Object.fromEntries</code>, который делает
          противоположное: получив массив пар вида <code>[ключ, значение]</code>
          , он создаёт из них объект:
        </p>
        <CodeExample
          code={`let prices = Object.fromEntries([
  ['banana', 1],
  ['orange', 2],
  ['meat', 4]
]);

// prices = { banana: 1, orange: 2, meat: 4 }

console.log(prices.orange);`}
          output={`2`}
        />
        <p>
          Мы можем использовать <code>Object.fromEntries</code>, чтобы получить
          обычный объект из <code>Map</code>.
        </p>
        <p>
          К примеру, у нас данные в <code>Map</code>, но их нужно передать в
          сторонний код, который ожидает обычный объект.
        </p>
        <p>Вот как это сделать:</p>
        <CodeExample
          code={`let map = new Map();
map.set('banana', 1);
map.set('orange', 2);
map.set('meat', 4);

let obj = Object.fromEntries(map.entries()); // создаём обычный объект (*)

// готово!
// obj = { banana: 1, orange: 2, meat: 4 }

console.log(obj.orange);`}
          output={`2`}
        />
        <p>
          Вызов <code>map.entries()</code> возвращает итерируемый объект пар
          ключ/значение, как раз в нужном формате для{" "}
          <code>Object.fromEntries</code>.
        </p>
        <p>
          Мы могли бы написать строку <code>(*)</code> ещё короче:
        </p>
        <CodeExample
          code={`let obj = Object.fromEntries(map); // убрать .entries()`}
        />
        <p>
          Это то же самое, так как <code>Object.fromEntries</code> ожидает
          перебираемый объект в качестве аргумента, не обязательно массив. А
          перебор <code>map</code> как раз возвращает пары ключ/значение, так
          же, как и <code>map.entries()</code>. Так что в итоге у нас будет
          обычный объект с теми же ключами/значениями, что и в <code>map</code>.
        </p>
      </section>
      <section className="mb-3">
        <h2 id="set" className="text-2xl font-bold mb-2">
          Set
        </h2>
        <p>
          Объект <code>Set</code> – это особый вид коллекции: «множество»
          значений (без ключей), где каждое значение может появляться только
          один раз.
        </p>
        <p>Его основные методы это:</p>
        <ul className="list-disc pl-6">
          <li>
            <p>
              <strong className="text-rose-500">new Set(iterable)</strong>:
              создаёт <code>Set</code>, и если в качестве аргумента был
              предоставлен итерируемый объект (обычно это массив), то копирует
              его значения в новый <code>Set</code>.
            </p>
          </li>
          <li>
            <p>
              <strong className="text-rose-500">set.add(value)</strong>:
              добавляет значение (если оно уже есть, то ничего не делает),
              возвращает тот же объект <code>set</code>.
            </p>
          </li>
          <li>
            <p>
              <strong className="text-rose-500">set.delete(value)</strong>:
              удаляет значение, возвращает <code>true</code>, если{" "}
              <code>value</code> было в множестве на момент вызова, иначе{" "}
              <code>false</code>.
            </p>
          </li>
          <li>
            <p>
              <strong className="text-rose-500">set.has(value)</strong>:
              возвращает <code>true</code>, если значение присутствует в
              множестве, иначе <code>false</code>.
            </p>
          </li>
          <li>
            <p>
              <strong className="text-rose-500">set.clear()</strong>: удаляет
              все имеющиеся значения.
            </p>
          </li>
          <li>
            <p>
              <strong className="text-rose-500">set.size</strong>: возвращает
              количество элементов в множестве.
            </p>
          </li>
        </ul>
        <p>
          Основная «изюминка» – это то, что при повторных вызовах{" "}
          <code>set.add()</code> с одним и тем же значением ничего не
          происходит, за счёт этого как раз и получается, что каждое значение
          появляется один раз.
        </p>
        <p>
          Например, мы ожидаем посетителей, и нам необходимо составить их
          список. Но повторные визиты не должны приводить к дубликатам. Каждый
          посетитель должен появиться в списке только один раз.
        </p>
        <p>
          Множество <code>Set</code> – как раз то, что нужно для этого:
        </p>
        <CodeExample
          code={`let set = new Set();

let john = { name: 'John' };
let pete = { name: 'Pete' };
let mary = { name: 'Mary' };

// считаем гостей, некоторые приходят несколько раз
set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);

// set хранит только 3 уникальных значения
console.log(set.size); // 3

for (let user of set) {
  console.log(user.name); // John (потом Pete и Mary)
}`}
          output={`3
John
Pete
Mary`}
        />
        <p>
          Альтернативой множеству <code>Set</code> может выступать массив для
          хранения гостей и дополнительный код для проверки уже имеющегося
          элемента с помощью
          <code>arr.find</code>. Но в этом случае будет хуже производительность,
          потому что <code>arr.find</code> проходит весь массив для проверки
          наличия элемента. Множество
          <code>Set</code> лучше оптимизировано для добавлений, оно
          автоматически проверяет на уникальность.
        </p>
        <p>
          <strong>Перебор объекта Set</strong>
        </p>
        <p>
          Мы можем перебрать содержимое объекта <strong>set</strong> как с
          помощью метода
          <code>for..of</code>, так и используя <code>forEach</code>:
        </p>
        <CodeExample
          code={`let set = new Set(["апельсин", "яблоко", "банан"]);

for (let value of set) console.log(value);

// то же самое с forEach:
set.forEach((value, valueAgain, set) => {
  console.log(value);
});`}
          output={`апельсин
яблоко
банан
апельсин
яблоко
банан`}
        />
        <p>
          Заметим забавную вещь. Функция в <code>forEach</code> у{" "}
          <code>Set</code> имеет 3 аргумента: значение <code>value</code>, потом
          <i>снова то же самое значение</i> <code>valueAgain</code>, и только
          потом целевой объект. Это действительно так, значение появляется в
          списке аргументов дважды.
        </p>
        <p>
          Это сделано для совместимости с объектом <code>Map</code>, в котором
          колбэк <code>forEach</code>
          имеет 3 аргумента. Выглядит немного странно, но в некоторых случаях
          может помочь легко заменить <code>Map</code> на <code>Set</code> и
          наоборот.
        </p>
        <p>
          <code>Set</code> имеет те же встроенные методы, что и Map:
        </p>
        <ul className="list-disc pl-6">
          <li>
            <p>
              <strong className="text-rose-500">set.values()</strong>:
              возвращает перебираемый объект для значений,
            </p>
          </li>
          <li>
            <p>
              <strong className="text-rose-500">set.keys()</strong>: то же
              самое, что и <code>set.values()</code>, присутствует для обратной
              совместимости с <code>Map</code>,
            </p>
          </li>
          <li>
            <p>
              <strong className="text-rose-500">set.entries()</strong>:
              возвращает перебираемый объект для пар вида{" "}
              <code>[значение, значение]</code>, присутствует для обратной
              совместимости с <code>Map</code>.
            </p>
          </li>
        </ul>
      </section>
      <section className="mb-3">
        <h2 className="text-2xl font-bold mb-2">Итого</h2>
        <p>
          <code>Map</code> – коллекция пар ключ-значение.
        </p>
        <p>Методы и свойства:</p>
        <ul className="list-disc pl-6">
          <li>
            <p>
              <strong className="text-rose-500">new Map([iterable])</strong> –
              создаёт коллекцию, можно указать перебираемый объект (обычно
              массив) из пар <code>[ключ,значение]</code> для инициализации.
            </p>
          </li>
          <li>
            <p>
              <strong className="text-rose-500">map.set(key, value)</strong> –
              записывает по ключу <code>key</code> значение <code>value</code>.
            </p>
          </li>
          <li>
            <p>
              <strong className="text-rose-500">map.get(key)</strong> –
              возвращает значение по ключу или <code>undefined</code>, если ключ{" "}
              <code>key</code> отсутствует.
            </p>
          </li>
          <li>
            <p>
              <strong className="text-rose-500">map.has(key)</strong> –
              возвращает <code>true</code>, если ключ <code>key</code>{" "}
              присутствует в коллекции, иначе <code>false</code>.
            </p>
          </li>
          <li>
            <p>
              <strong className="text-rose-500">map.delete(key)</strong> –
              удаляет элемент по ключу <code>key</code>.
            </p>
          </li>
          <li>
            <p>
              <strong className="text-rose-500">map.clear()</strong> – очищает
              коллекцию от всех элементов.
            </p>
          </li>
          <li>
            <p>
              <strong className="text-rose-500">map.size</strong> – возвращает
              текущее количество элементов.
            </p>
          </li>
        </ul>
        <p>
          Отличия от обычного объекта <code>Object</code>:
        </p>
        <ul className="list-disc pl-6">
          <li>
            <p>Что угодно может быть ключом, в том числе и объекты.</p>
          </li>
          <li>
            <p>
              Есть дополнительные методы, свойство <code>size</code>.
            </p>
          </li>
        </ul>
        <p>
          <code>Set</code> – коллекция уникальных значений, так называемое
          <strong>«множество»</strong>.
        </p>
        <p>Методы и свойства:</p>
        <ul className="list-disc pl-6">
          <li>
            <p>
              <strong className="text-rose-500">new Set(iterable)</strong> –
              создаёт <code>Set</code>, можно указать перебираемый объект со
              значениями для инициализации.
            </p>
          </li>
          <li>
            <p>
              <strong className="text-rose-500">set.add(value)</strong> –
              добавляет значение (если оно уже есть, то ничего не делает),
              возвращает тот же объект <code>set</code>.
            </p>
          </li>
          <li>
            <p>
              <strong className="text-rose-500">set.delete(value)</strong> –
              удаляет значение, возвращает <code>true</code> если{" "}
              <code>value</code> было в множестве на момент вызова, иначе{" "}
              <code>false</code>.
            </p>
          </li>
          <li>
            <p>
              <strong className="text-rose-500">set.has(value)</strong> –
              возвращает <code>true</code>, если значение присутствует в
              множестве, иначе <code>false</code>.
            </p>
          </li>
          <li>
            <p>
              <strong className="text-rose-500">set.clear()</strong> – удаляет
              все имеющиеся значения.
            </p>
          </li>
          <li>
            <p>
              <strong className="text-rose-500">set.size</strong> – возвращает
              количество элементов в множестве.
            </p>
          </li>
        </ul>
        <p>
          Перебор <code>Map</code> и <code>Set</code> всегда осуществляется в
          порядке добавления элементов, так что нельзя сказать, что это –
          неупорядоченные коллекции, но поменять порядок элементов или получить
          элемент напрямую по его номеру нельзя.
        </p>
      </section>
    </LessonLayout>
  );
};

export default page;
