"use client";

import React from "react";
import LessonLayout from "@/components/LessonLayout";
import CodeExample from "@/components/CodeExample";
import InfoSection from "@/components/InfoSection";

const page = () => {
  return (
    <LessonLayout
      title="JavaScript Constructor Functions"
      page="javascript/constructor-functions"
    >
      <section className="mb-3">
        <h2 className="text-2xl font-bold mb-2">Конструктор, оператор "new"</h2>
        <p>
          Обычный синтаксис <code>{`{...}`}</code> позволяет создать только один
          объект. Но зачастую нам нужно создать множество похожих, однотипных
          объектов, таких как пользователи, элементы меню и так далее.
        </p>
        <p>
          Это можно сделать при помощи функции-конструктора и оператора{" "}
          <code>"new"</code>.
        </p>
      </section>
      <section className="mb-3">
        <h2 className="text-2xl font-bold mb-2">Функция-конструктор</h2>
        <p>
          Функции-конструкторы технически являются обычными функциями. Но есть
          два соглашения:
        </p>
        <ul className="list-decimal ms-4">
          <li>
            <p>Имя функции-конструктора должно начинаться с большой буквы.</p>
          </li>
          <li>
            <p>
              Функция-конструктор должна выполняться только с помощью оператора
              <code>"new"</code>.
            </p>
          </li>
        </ul>
        <p>Например:</p>
        <CodeExample
          code={`function User(name) {
  this.name = name;
  this.isAdmin = false;
}

let user = new User('Jack');

console.log(user.name);
console.log(user.isAdmin);`}
          output={`Jack
false`}
        />
        <p>
          Когда функция вызывается как <code>new User(...)</code>, происходит
          следующее:
        </p>
        <ul className="list-decimal ms-4">
          <li>
            <p>
              Создаётся новый пустой объект, и он присваивается{" "}
              <code>this</code>.
            </p>
          </li>
          <li>
            <p>
              Выполняется тело функции. Обычно оно модифицирует{" "}
              <code>this</code>, добавляя туда новые свойства.
            </p>
          </li>
          <li>
            <p>
              Возвращается значение <code>this</code>.
            </p>
          </li>
        </ul>
        <p>
          Другими словами, <code>new User(...)</code> делает что-то вроде:
        </p>
        <CodeExample
          code={`function User(name) {
  // this = {};  (неявно)

  // добавляет свойства к this
  this.name = name;
  this.isAdmin = false;

  // return this;  (неявно)
}`}
        />
        <p>
          Таким образом, <code>let user = new User("Jack")</code> возвращает тот
          же результат, что и:
        </p>
        <CodeExample
          code={`let user = {
  name: "Jack",
  isAdmin: false
};`}
        />
        <p>
          Теперь, если нам будет необходимо создать других пользователей, мы
          можем просто вызвать <code>new User("Ann")</code>,{" "}
          <code>new User("Alice")</code> и так далее. Данная конструкция гораздо
          удобнее и читабельнее, чем многократное создание литерала объекта.
        </p>
        <p>
          Это и является основной целью конструкторов – реализовать код для
          многократного создания однотипных объектов.
        </p>
        <p>
          Давайте ещё раз отметим – технически любая функция (кроме стрелочных
          функций, поскольку у них нет <code>this</code>) может использоваться в
          качестве конструктора. Его можно запустить с помощью <code>new</code>,
          и он выполнит выше указанный алгоритм. Подобные функции должны
          начинаться с заглавной буквы – это общепринятое соглашение, чтобы было
          ясно, что функция должна вызываться с помощью <strong>«new»</strong>.
        </p>
        <InfoSection title={`new function() { … }`}>
          <p>
            Если в нашем коде присутствует большое количество строк, создающих
            один сложный объект, то мы можем обернуть их в функцию-конструктор,
            которая будет немедленно вызвана, вот так:
          </p>
          <CodeExample
            code={`// создаём функцию и сразу же вызываем её с помощью new
let user = new function() {
  this.name = "John";
  this.isAdmin = false;

  // ...другой код для создания пользователя
  // возможна любая сложная логика и инструкции
  // локальные переменные и так далее
};`}
          />
          <p>
            Такой конструктор не может быть вызван снова, так как он нигде не
            сохраняется, просто создаётся и тут же вызывается. Таким образом,
            этот трюк направлен на инкапсуляцию кода, который создаёт отдельный
            объект, без возможности повторного использования в будущем.
          </p>
        </InfoSection>
      </section>
      <section className="mb-3">
        <h2 className="text-2xl font-bold mb-2">
          Возврат значения из конструктора, return
        </h2>
        <p>
          Обычно конструкторы не имеют оператора <code>return</code>. Их задача
          – записать все необходимое в <code>this</code>, и это автоматически
          становится результатом.
        </p>
        <p>
          Но если <code>return</code> всё же есть, то применяется простое
          правило:
        </p>
        <ul className="list-disc ms-4">
          <li>
            <p>
              При вызове <code>return</code> с объектом, вместо{" "}
              <code>this</code> вернётся объект.
            </p>
          </li>
          <li>
            <p>
              При вызове <code>return</code> с примитивным значением, оно
              проигнорируется.
            </p>
          </li>
        </ul>
        <p>
          Другими словами, <code>return</code> с объектом возвращает этот
          объект, во всех остальных случаях возвращается <code>this</code>.
        </p>
        <p>
          К примеру, здесь <code>return</code> замещает <code>this</code>,
          возвращая объект:
        </p>
        <CodeExample
          code={`function BigUser() {

  this.name = "John";

  return { name: "Godzilla" };  // <-- возвращает этот объект
}

console.log( new BigUser().name );  // Godzilla, получили этот объект`}
          output={`Godzilla`}
        />
        <p>
          А вот пример с пустым <code>return</code> (или мы могли бы поставить
          примитив после
          <code>return</code>, неважно):
        </p>
        <CodeExample
          code={`function SmallUser() {
  this.name = 'John';

  return; // <-- возвращает this
}

console.log(new SmallUser().name);`}
          output={`John`}
        />
        <p>
          Обычно у конструкторов отсутствует <code>return</code>. Здесь мы
          упомянули особое поведение с возвращаемыми объектами в основном для
          полноты картины.
        </p>
        <InfoSection title={`Пропуск скобок`}>
          <p>
            Кстати, мы можем не ставить круглые скобки после <code>new</code>:
          </p>
          <CodeExample
            code={`let user = new User; // <-- без скобок
// то же, что и
let user = new User();`}
          />
          <p>
            Пропуск скобок считается плохой практикой, но просто чтобы вы знали,
            такой синтаксис разрешён спецификацией.
          </p>
        </InfoSection>
      </section>
      <section className="mb-3">
        <h2 className="text-2xl font-bold mb-2">
          Создание методов в конструкторе
        </h2>
        <p>
          Использование конструкторов для создания объектов даёт большую
          гибкость. Функции-конструкторы могут иметь параметры, определяющие,
          как создавать объект и что в него записывать.
        </p>
        <p>
          Конечно, мы можем добавить к <code>this</code> не только свойства, но
          и методы.
        </p>
        <p>
          Например, <code>new User(name)</code> ниже создаёт объект с заданным{" "}
          <code>name</code> и методом
          <code>sayHi</code>:
        </p>
        <CodeExample
          code={`function User(name) {
  this.name = name;

  this.sayHi = function () {
    console.log('Меня зовут: ' + this.name);
  };
}

let john = new User('John');

john.sayHi(); // Меня зовут: John

/*
john = {
   name: "John",
   sayHi: function() { ... }
}
*/
`}
          output={`Меня зовут: John`}
        />
        <p>
          Для создания сложных объектов есть и более продвинутый синтаксис –
          <strong>классы</strong>
        </p>
      </section>
      <section className="mb-3">
        <h2 className="text-2xl font-bold mb-2">Итого</h2>
        <ul className="list-disc ms-4">
          <li>
            <p>
              Функции-конструкторы или просто конструкторы, являются обычными
              функциями, но существует общепринятое соглашение именовать их с
              заглавной буквы.
            </p>
          </li>
          <li>
            <p>
              Функции-конструкторы следует вызывать только с помощью{" "}
              <code>new</code>. Такой вызов подразумевает создание пустого{" "}
              <code>this</code> в начале и возврат заполненного в конце
            </p>
          </li>
        </ul>
        <p>
          Мы можем использовать конструкторы для создания множества похожих
          объектов.
        </p>
        <p>
          JavaScript предоставляет функции-конструкторы для множества встроенных
          объектов языка: таких как <code>Date</code>, <code>Set</code>, и
          других.
        </p>
      </section>
    </LessonLayout>
  );
};

export default page;
