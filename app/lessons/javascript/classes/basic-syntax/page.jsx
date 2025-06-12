import React from "react";
import LessonLayout from "@/components/LessonLayout";
import CodeExample from "@/components/CodeExample";
import InfoSection from "@/components/InfoSection";
import WarningSection from "@/components/WarningSection";

const page = () => {
  return (
    <LessonLayout
      title="JavaScript Class: базовый синтаксис"
      page="javascript/classes/basic-syntax"
    >
      <section className="mb-3">
        <h2 className="text-2xl font-bold mb-2">Класс: базовый синтаксис</h2>
        <InfoSection title={`Википедия`}>
          <p>
            В объектно-ориентированном программировании класс – это расширяемый
            шаблон кода для создания объектов, который устанавливает в них
            начальные значения <strong>(свойства)</strong> и реализацию
            поведения <strong>(методы)</strong>.
          </p>
        </InfoSection>
        <p>
          На практике нам часто надо создавать много объектов одного вида,
          например пользователей, товары или что-то ещё.
        </p>
        <p>
          Как мы уже знаем с этим может помочь <code>new function</code>.
        </p>
        <p>
          Но в современном JavaScript есть и более продвинутая конструкция
          <strong>«class»</strong>, которая предоставляет новые возможности,
          полезные для объектно-ориентированного программирования.
        </p>
      </section>
      <section className="mb-3">
        <h2 className="text-2xl font-bold mb-2">Синтаксис «class»</h2>
        <p>Базовый синтаксис выглядит так:</p>
        <CodeExample
          code={`class MyClass {
  // методы класса
  constructor() { ... }
  method1() { ... }
  method2() { ... }
  method3() { ... }
  ...
}`}
        />
        <p>
          Затем используйте вызов <code>new MyClass()</code> для создания нового
          объекта со всеми перечисленными методами.
        </p>
        <p>
          При этом автоматически вызывается метод <code>constructor()</code>, в
          нём мы можем инициализировать объект.
        </p>
        <p>Например:</p>
        <CodeExample
          code={`class User {
  constructor(name) {
    this.name = name;
  }

  sayHi() {
    console.log(this.name);
  }
}

// Использование:
let user = new User('Иван');
user.sayHi();`}
          output={`Иван`}
        />
        <p>
          Когда вызывается <code>new User("Иван")</code>:
        </p>
        <ul className="list-decimal ms-4">
          <li>
            <p>Создаётся новый объект.</p>
          </li>
          <li>
            <p>
              <code>constructor</code> запускается с заданным аргументом и
              сохраняет его в this.name.
            </p>
          </li>
        </ul>
        <p>…Затем можно вызывать на объекте методы, такие как user.sayHi().</p>
        <WarningSection title={`Методы в классе не разделяются запятой`}>
          <p>
            Частая ошибка начинающих разработчиков – ставить запятую между
            методами класса, что приводит к синтаксической ошибке.
          </p>
          <p>
            Синтаксис классов отличается от литералов объектов, не путайте их.
            Внутри классов запятые не требуются.
          </p>
        </WarningSection>
      </section>
      <section className="mb-3">
        <h2 className="text-2xl font-bold mb-2">Что такое класс?</h2>
        <p>
          Итак, что же такое <code>class</code>? Это не полностью новая языковая
          сущность, как может показаться на первый взгляд.
        </p>
        <p>
          Давайте развеем всю магию и посмотрим, что такое класс на самом деле.
          Это поможет в понимании многих сложных аспектов.
        </p>
        <p>В JavaScript класс – это разновидность функции.</p>
        <p>Взгляните:</p>
        <CodeExample
          code={`class User {
  constructor(name) { this.name = name; }
  sayHi() { console.log(this.name); }
}

// доказательство: User - это функция
console.log(typeof User);`}
          output={`function`}
        />
        <p>
          Вот что на самом деле делает конструкция{" "}
          <code>class User {`{...}`}</code>:
        </p>
        <ul className="list-decimal ms-4">
          <li>
            <p>
              Создаёт функцию с именем <code>User</code>, которая становится
              результатом объявления класса. Код функции берётся из метода{" "}
              <code>constructor</code> (она будет пустой, если такого метода
              нет).
            </p>
          </li>
          <li>
            <p>
              Сохраняет все методы, такие как <code>sayHi</code>, в{" "}
              <code>User.prototype</code>.
            </p>
          </li>
        </ul>
        <p>
          При вызове метода объекта <code>new User</code> он будет взят из
          прототипа, как описано в главе <strong>Function prototype</strong>.
          Таким образом, объекты <code>new User</code> имеют доступ к методам
          класса.
        </p>
        <p>
          На картинке показан результат объявления <code>class User</code>:
        </p>
        <img
          src="/images/lessons/javascript/class-user.svg"
          alt="Class: базовый синтаксис"
          className="mb-4 w-full max-w-md"
        />
        <p>Можно проверить вышесказанное и при помощи кода:</p>
        <CodeExample
          code={`class User {
  constructor(name) { this.name = name; }
  sayHi() { alert(this.name); }
}

// класс - это функция
console.log(typeof User); // function

// ...или, если точнее, это метод constructor
console.log(User === User.prototype.constructor); // true

// Методы находятся в User.prototype, например:
console.log(User.prototype.sayHi); // sayHi() { alert(this.name); }

// в прототипе ровно 2 метода
console.log(Object.getOwnPropertyNames(User.prototype)); // constructor, sayHi`}
          output={`function
true
ƒ sayHi()
["constructor", "sayHi"]`}
        />
      </section>
      <section className="mb-3">
        <h2 className="text-2xl font-bold mb-2">
          Не просто синтаксический сахар
        </h2>
        <p>
          Иногда говорят, что <code>class</code> – это просто «синтаксический
          сахар» в JavaScript (синтаксис для улучшения читаемости кода, но не
          делающий ничего принципиально нового), потому что мы можем сделать всё
          то же самое без конструкции <code>class</code>:
        </p>
        <CodeExample
          code={`// перепишем класс User на чистых функциях

// 1. Создаём функцию constructor
function User(name) {
  this.name = name;
}
// каждый прототип функции имеет свойство constructor по умолчанию,
// поэтому нам нет необходимости его создавать

// 2. Добавляем метод в прототип
User.prototype.sayHi = function() {
  console.log(this.name);
};

// Использование:
let user = new User("Иван");
user.sayHi();`}
          output={`Иван`}
        />
        <p>
          Результат этого кода очень похож. Поэтому, действительно, есть
          причины, по которым class можно считать синтаксическим сахаром для
          определения конструктора вместе с методами прототипа.
        </p>
        <p>
          <strong>Однако есть важные отличия:</strong>
        </p>
        <ul className="list-decimal ms-4">
          <li>
            <p>
              Во-первых, функция, созданная с помощью <code>class</code>,
              помечена специальным внутренним свойством{" "}
              <code>[[IsClassConstructor]]: true</code>. Поэтому это не совсем
              то же самое, что создавать её вручную.
            </p>
            <p>
              В отличие от обычных функций, конструктор класса не может быть
              вызван без <code>new</code>:
            </p>
            <CodeExample
              code={`class User {
  constructor() {}
}

console.log(typeof User);
User(); `}
              output={`function
Error: Class constructor User cannot be invoked without 'new'`}
            />
            <p>
              Кроме того, строковое представление конструктора класса в
              большинстве движков JavaScript начинается с «class …»
            </p>
            <CodeExample
              code={`class User {
  constructor() {}
}

console.log(User);`}
              output={`class User {
  constructor() {}
}`}
            />
          </li>
          <li>
            <p>
              Методы класса являются неперечислимыми. Определение класса
              устанавливает флаг <code>enumerable</code> в <code>false</code>{" "}
              для всех методов в <code>"prototype"</code>.
            </p>
            <p>
              И это хорошо, так как если мы проходимся циклом{" "}
              <code>for..in</code> по объекту, то обычно мы не хотим при этом
              получать методы класса.
            </p>
            <CodeExample
              code={`class Person {
  constructor(name) {
    this.name = name;
  }

  sayHello() {
    console.log(\`Привет, я \${this.name}\`);
  }
}

const p = new Person("Анна");

for (let key in p) {
  console.log(key);
}`}
              output={`name`}
            />
            <p>
              Когда ты создается метод в классе, JavaScript за кулисами
              добавляет его в прототип следующим образом:
            </p>
            <CodeExample
              code={`Object.defineProperty(Person.prototype, 'sayHello', {
  value: ...,           // функция метода
  enumerable: false,    // ❗ НЕперечислимый
  writable: true,
  configurable: true
});`}
            />
          </li>
          <li>
            Классы всегда используют <code>use strict</code>. Весь код внутри
            класса автоматически находится в строгом режиме.
          </li>
        </ul>
      </section>
      <section className="mb-3">
        <h2 className="text-2xl font-bold mb-2">Class Expression</h2>
        <p>
          Как и функции, классы можно определять внутри другого выражения,
          передавать, возвращать, присваивать и т.д.
        </p>
        <p>Пример Class Expression (по аналогии с Function Expression):</p>
        <CodeExample
          code={`let User = class {
  sayHi() {
    alert("Привет");
  }
};`}
        />
        <p>
          Аналогично <strong>Named Function Expression</strong>,{" "}
          <strong>Class Expression</strong> может иметь имя.
        </p>
        <p>
          Если у Class Expression есть имя, то оно видно только внутри класса:
        </p>
        <CodeExample
          code={`// "Named Class Expression"
// (в спецификации нет такого термина, но происходящее похоже на Named Function Expression)
let User = class MyClass {
  sayHi() {
    console.log(MyClass); // имя MyClass видно только внутри класса
  }
};

new User().sayHi(); // работает, выводит определение MyClass

console.log(MyClass); // ошибка, имя MyClass не видно за пределами класса`}
          output={`class MyClass {
  sayHi() {
    console.log(MyClass); // имя MyClass видно только внутри класса
  }
};
ReferenceError: MyClass is not defined`}
        />
        <p>Мы даже можем динамически создавать классы «по запросу»:</p>
        <CodeExample
          code={`function makeClass(phrase) {
  // объявляем класс и возвращаем его
  return class {
    sayHi() {
      console.log(phrase);
    };
  };
}

// Создаём новый класс
let User = makeClass("Привет");

new User().sayHi(); `}
          output={`Привет`}
        />
      </section>
      <section className="mb-3">
        <h2 className="text-2xl font-bold mb-2">
          Геттеры/сеттеры, другие сокращения
        </h2>
        <p>
          Как и в литеральных объектах, в классах можно объявлять вычисляемые
          свойства, геттеры/сеттеры и т.д.
        </p>
        <p>
          Вот пример <code>user.name</code>, реализованного с использованием{" "}
          <code>get/set</code>:
        </p>
        <CodeExample
          code={`class User {
  constructor(name) {
    // вызывает сеттер
    this.name = name;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (value.length < 4) {
      console.log('Имя слишком короткое.');
      return;
    }
    this._name = value;
  }
}

let user = new User('Иван');
console.log(user.name); // Иван

user = new User(''); // Имя слишком короткое.
`}
          output={`Иван
Имя слишком короткое.`}
        />
        <p>
          При объявлении класса геттеры/сеттеры создаются на{" "}
          <code>User.prototype</code>, вот так:
        </p>
        <CodeExample
          code={`Object.defineProperties(User.prototype, {
  name: {
    get() {
      return this._name
    },
    set(name) {
      // ...
    }
  }
});`}
        />
      </section>
      <section className="mb-3">
        <h2 className="text-2xl font-bold mb-2">Свойства классов</h2>
        <WarningSection title={`Старым браузерам может понадобиться полифил`}>
          Свойства классов добавлены в язык недавно.
        </WarningSection>
        <p>
          В приведённом выше примере у класса <code>User</code> были только
          методы. Давайте добавим свойство:
        </p>
        <CodeExample
          code={`class User {
  name = "Аноним";

  sayHi() {
    console.log(\`Привет, \${this.name}!\`);
  }
}

new User().sayHi();`}
          output={`Привет, Аноним!`}
        />
        <p>
          Свойство <code>name</code> не устанавливается в{" "}
          <code>User.prototype</code>. Вместо этого оно создаётся оператором{" "}
          <code>new</code> перед запуском конструктора, это именно свойство
          объекта.
        </p>
      </section>
      <section className="mb-3">
        <h2 className="text-2xl font-bold mb-2">Итого</h2>
        <p>Базовый синтаксис для классов выглядит так:</p>
        <CodeExample
          code={`class MyClass {
  prop = value; // свойство
  constructor(...) { // конструктор
    // ...
  }
  method(...) {} // метод
  get something(...) {} // геттер
  set something(...) {} // сеттер
  [Symbol.iterator]() {} // метод с вычисляемым именем (здесь - символом)
  // ...
}`}
        />
        <p>
          cide MyClass технически является функцией (той, которую мы определяем
          как cide constructor), в то время как методы, геттеры и сеттеры
          записываются в cide MyClass.prototype.
        </p>
      </section>
    </LessonLayout>
  );
};

export default page;
