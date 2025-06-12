import React from "react";
import LessonLayout from "@/components/LessonLayout";
import CodeExample from "@/components/CodeExample";
import InfoSection from "@/components/InfoSection";

const page = () => {
  return (
    <LessonLayout
      title="JavaScript Наследование классов"
      page="javascript/classes/class-inheritance"
    >
      <section className="mb-3">
        <p>
          Наследование классов – это способ расширения одного класса другим
          классом.
        </p>
        <p>
          Таким образом, мы можем добавить новый функционал к уже существующему.
        </p>
      </section>
      <section className="mb-3">
        <h2 className="text-2xl font-bold mb-2">Ключевое слово «extends»</h2>
        <p>
          Допустим, у нас есть класс <code>Animal</code>:
        </p>
        <CodeExample
          code={`class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }
  run(speed) {
    this.speed = speed;
    console.log(\`\${this.name} бежит со скоростью \${this.speed}.\`);
  }
  stop() {
    this.speed = 0;
    console.log(\`\${this.name} стоит неподвижно.\`);
  }
}

let animal = new Animal('Мой питомец');`}
        />
        <p>
          Вот как мы можем представить объект <code>animal</code> и класс{" "}
          <code>Animal</code> графически:
        </p>
        <img
          src="/images/lessons/javascript/rabbit-animal-independent-animal.svg"
          alt="Наследование классов"
          className="mb-4 w-full max-w-md"
        />
        <p>
          …И мы хотели бы создать ещё один <code>class Rabbit</code>.
        </p>
        <p>
          Поскольку кролики – это животные, класс <code>Rabbit</code> должен
          быть основан на <code>Animal</code>, и иметь доступ к методам
          животных, так чтобы кролики могли делать то, что могут делать «общие»
          животные.
        </p>
        <p>
          Синтаксис для расширения другого класса следующий:{" "}
          <code>class Child extends Parent</code>.
        </p>
        <p>
          Давайте создадим class <code>Rabbit</code>, который наследуется от{" "}
          <code>Animal</code>:
        </p>
        <CodeExample
          code={`class Rabbit extends Animal {
  hide() {
    alert(\`\${this.name} прячется!\`);
  }
}

let rabbit = new Rabbit("Белый кролик");

rabbit.run(5); // Белый кролик бежит со скоростью 5.
rabbit.hide(); // Белый кролик прячется!`}
        />
        <p>
          Объект класса <code>Rabbit</code> имеет доступ как к методам{" "}
          <code>Rabbit</code>, таким как
          <code>rabbit.hide()</code>, так и к методам Animal, таким как{" "}
          <code>rabbit.run()</code>.
        </p>
        <p>
          Внутри ключевое слово <code>extends</code> работает по старой доброй
          механике прототипов. Оно устанавливает{" "}
          <code>Rabbit.prototype.[[Prototype]]</code> в
          <code>Animal.prototype</code>. Таким образом, если метода не оказалось
          в<code>Rabbit.prototype</code>, JavaScript берет его из{" "}
          <code>Animal.prototype</code>.
        </p>
        <img
          src="/images/lessons/javascript/animal-rabbit-extends.svg"
          alt="Наследование классов"
          className="mb-4 w-full max-w-4xl"
        />
        <p>
          Например, чтобы найти метод <code>rabbit.run</code>, движок проверяет
          (снизу вверх на картинке):
        </p>
        <ul className="list-decimal ms-4">
          <li>
            <p>
              Объект <code>rabbit</code> (не имеет <code>run</code>).
            </p>
          </li>
          <li>
            <p>
              Его прототип, то есть <code>Rabbit.prototype</code> (имеет{" "}
              <code>hide</code>, но не имеет <code>run</code>).
            </p>
          </li>
          <li>
            <p>
              Его прототип, то есть (вследствие <code>extends</code>){" "}
              <code>Animal.prototype</code>, в котором, наконец, есть метод{" "}
              <code>run</code>.
            </p>
          </li>
        </ul>
        <p>
          Сам JavaScript использует наследование на прототипах для встроенных
          объектов. Например,
          <code>Date.prototype.[[Prototype]]</code> является{" "}
          <code>Object.prototype</code>, поэтому у дат есть универсальные методы
          объекта.
        </p>
        <InfoSection
          title={`После <code>extends</code> разрешены любые выражения`}
        >
          <p>
            Синтаксис создания класса допускает указывать после extends не
            только класс, но и любое выражение.
          </p>
          <p>Пример вызова функции, которая генерирует родительский класс:</p>
          <CodeExample
            code={`function f(phrase) {
  return class {
    sayHi() {
      console.log(phrase);
    }
  };
}

class User extends f('Привет') {}

new User().sayHi();`}
            output={`Привет`}
          />
          <p>
            Здесь class <code>User</code> наследует от результата вызова{" "}
            <code>f("Привет")</code>.
          </p>
          <p>
            Это может быть полезно для продвинутых приёмов проектирования, где
            мы можем использовать функции для генерации классов в зависимости от
            многих условий и затем наследовать их.
          </p>
        </InfoSection>
      </section>
      <section className="mb-3">
        <h2 className="text-2xl font-bold mb-2">Переопределение методов</h2>
        <p>
          Теперь давайте продвинемся дальше и переопределим метод. По умолчанию
          все методы, не указанные в классе Rabbit, берутся непосредственно «как
          есть» из класса Animal.
        </p>
        <p>
          Но если мы укажем в <code>Rabbit</code> собственный метод, например{" "}
          <code>stop()</code>, то он будет использован вместо него:
        </p>
        <CodeExample
          code={`class Rabbit extends Animal {
  stop() {
    // ...теперь это будет использоваться для rabbit.stop()
    // вместо stop() из класса Animal
  }
}`}
        />
        <p>
          Впрочем, обычно мы не хотим полностью заменить родительский метод, а
          скорее хотим сделать новый на его основе, изменяя или расширяя его
          функциональность. Мы делаем что-то в нашем методе и вызываем
          родительский метод до/после или в процессе.
        </p>
        <p>
          У классов есть ключевое слово <code>"super"</code> для таких случаев.
        </p>
        <ul className="list-disc ms-4">
          <li>
            <p>
              <code>super.method(...)</code> вызывает родительский метод.
            </p>
          </li>
          <li>
            <p>
              <code>super(...) </code> для вызова родительского конструктора
              (работает только внутри нашего конструктора).
            </p>
          </li>
        </ul>
        <p>Пусть наш кролик автоматически прячется при остановке:</p>
        <CodeExample
          code={`class Animal {

  constructor(name) {
    this.speed = 0;
    this.name = name;
  }

  run(speed) {
    this.speed = speed;
    console.log(\`\${this.name} бежит со скоростью \${this.speed}.\`);
  }

  stop() {
    this.speed = 0;
    console.log(\`\${this.name} стоит.\`);
  }

}

class Rabbit extends Animal {
  hide() {
    console.log(\`\${this.name} прячется!\`);
  }

  stop() {
    super.stop(); // вызываем родительский метод stop
    this.hide(); // и затем hide
  }
}

let rabbit = new Rabbit("Белый кролик");

rabbit.run(5); // Белый кролик бежит со скоростью 5.
rabbit.stop(); // Белый кролик стоит. Белый кролик прячется!`}
          output={`Белый кролик бежит со скоростью 5.
Белый кролик стоит.
Белый кролик прячется!`}
        />
        <p>
          Теперь у класса <code>Rabbit</code> есть метод stop, который вызывает
          родительский <code>super.stop()</code> в процессе выполнения.
        </p>
        <InfoSection title={`У стрелочных функций нет super`}>
          <p>
            При обращении к super стрелочной функции он берётся из внешней
            функции:
          </p>
          <CodeExample
            code={`class Rabbit extends Animal {
  stop() {
    setTimeout(() => super.stop(), 1000); // вызывает родительский stop после 1 секунды
  }
}`}
          />
          <p>
            В примере <code>super</code> в стрелочной функции тот же самый, что
            и в <code>stop()</code>, поэтому метод отрабатывает как и ожидается.
            Если бы мы указали здесь «обычную» функцию, была бы ошибка:
          </p>
          <CodeExample
            code={`// Unexpected super
setTimeout(function() { super.stop() }, 1000);`}
          />
        </InfoSection>
      </section>
      <section className="mb-3">
        <h2 className="text-2xl font-bold mb-2">
          Переопределение конструктора
        </h2>
        <p>С конструкторами немного сложнее.</p>
        <p>
          До сих пор у <code>Rabbit</code> не было своего конструктора.
        </p>
        <p>
          Согласно <strong>спецификации</strong>, если класс расширяет другой
          класс и не имеет конструктора, то автоматически создаётся такой
          «пустой» конструктор:
        </p>
        <CodeExample
          code={`class Rabbit extends Animal {
  // генерируется для классов-потомков, у которых нет своего конструктора
  constructor(...args) {
    super(...args);
  }
}`}
        />
        <p>
          Как мы видим, он просто вызывает конструктор родительского класса. Так
          будет происходить, пока мы не создадим собственный конструктор.
        </p>
        <p>
          Давайте добавим конструктор для <code>Rabbit</code>. Он будет
          устанавливать
          <code>earLength</code> в дополнение к <code>name</code>:
        </p>
        <CodeExample
          code={`class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }
  // ...
}

class Rabbit extends Animal {

  constructor(name, earLength) {
    this.speed = 0;
    this.name = name;
    this.earLength = earLength;
  }

  // ...
}

// Не работает!
let rabbit = new Rabbit("Белый кролик", 10);`}
          output={`Error: this is not defined.`}
        />
        <p>Упс! При создании кролика – ошибка! Что не так?</p>
        <p>Если коротко, то:</p>
        <ul className="list-disc ms-4">
          <li>
            <p>
              <strong>
                Конструкторы в наследуемых классах должны обязательно вызывать
                <code>super(...)</code>, и (!) делать это перед использованием{" "}
                <code>this</code>.
              </strong>
            </p>
          </li>
        </ul>
        <p>
          …Но почему? Что происходит? Это требование кажется довольно странным.
        </p>
        <p>
          Конечно, всему есть своё объяснение. Давайте углубимся в детали, чтобы
          вы действительно поняли, что происходит.
        </p>
        <p>
          В JavaScript существует различие между «функцией-конструктором
          наследующего класса» и всеми остальными. В наследующем классе
          соответствующая функция-конструктор помечена специальным внутренним
          свойством <code>[[ConstructorKind]]:"derived"</code>.
        </p>
        <p>Разница в следующем:</p>
        <ul className="list-disc ms-4">
          <li>
            <p>
              Когда выполняется обычный конструктор, он создаёт пустой объект и
              присваивает его <code>this</code> .
            </p>
          </li>
          <li>
            <p>
              Когда запускается конструктор унаследованного класса, он этого не
              делает. Вместо этого он ждёт, что это сделает конструктор
              родительского класса.
            </p>
          </li>
        </ul>
        <p>
          Поэтому, если мы создаём собственный конструктор, мы должны вызвать{" "}
          <code>super</code>, в противном случае объект для <code>this</code> не
          будет создан, и мы получим ошибку.
        </p>
        <p>
          Чтобы конструктор <code>Rabbit</code> работал, он должен вызвать{" "}
          <code>super()</code> до того, как использовать <code>this</code>,
          чтобы не было ошибки:
        </p>
        <CodeExample
          code={`class Animal {

  constructor(name) {
    this.speed = 0;
    this.name = name;
  }

  // ...
}

class Rabbit extends Animal {

  constructor(name, earLength) {
    super(name);
    this.earLength = earLength;
  }

  // ...
}

// теперь работает
let rabbit = new Rabbit("Белый кролик", 10);
console.log(rabbit.name);
console.log(rabbit.earLength);`}
          output={`Белый кролик
10`}
        />
      </section>
      <section className="mb-3">
        <h2 className="text-2xl font-bold mb-2">
          Переопределение полей класса: тонкое замечание
        </h2>
        <p>Мы можем переопределять не только методы, но и поля класса.</p>
        <p>
          Однако, когда мы получаем доступ к переопределенному полю в
          родительском конструкторе, это поведение отличается от большинства
          других языков программирования.
        </p>
        <p>Рассмотрим этот пример:</p>
        <CodeExample
          code={`class Animal {
  name = 'animal';

  constructor() {
    console.log(this.name); // (*)
  }
}

class Rabbit extends Animal {
  name = 'rabbit';
}

new Animal(); 
new Rabbit();`}
          output={`animal
animal`}
        />
        <p>
          Здесь, класс <code>Rabbit</code> расширяет <code>Animal</code> и
          переопределяет поле <code>name</code> своим собственным значением.
        </p>
        <p>
          В <code>Rabbit</code> нет собственного конструктора, поэтому
          вызывается конструктор
          <code>Animal</code>.
        </p>
        <p>
          Что интересно, в обоих случаях: <code>new Animal()</code> и{" "}
          <code>new Rabbit()</code>, <code>console.log</code> в строке{" "}
          <code>(*)</code> показывает <code>animal</code>.
        </p>
        <p>
          <strong>
            Другими словами, родительский конструктор всегда использует своё
            собственное значение поля, а не переопределённое.
          </strong>
        </p>
        <p>Что же в этом странного?</p>
        <p>Если это ещё не ясно, сравните с методами.</p>
        <p>
          Вот тот же код, но вместо поля <code>this.name</code>, мы вызываем
          метод
          <code>this.showName()</code>:
        </p>
        <CodeExample
          code={`class Animal {
  showName() {
    // вместо this.name = 'animal'
    console.log('animal');
  }

  constructor() {
    this.showName(); // вместо alert(this.name);
  }
}

class Rabbit extends Animal {
  showName() {
    console.log('rabbit');
  }
}

new Animal();
new Rabbit();`}
          output={`animal
rabbit`}
        />
        <p>Обратите внимание: теперь результат другой.</p>
        <p>
          И это то, чего мы, естественно, ожидаем. Когда родительский
          конструктор вызывается в производном классе, он использует
          переопределённый метод.
        </p>
        <p>
          …Но для полей класса это не так. Как уже было сказано, родительский
          конструктор всегда использует родительское поле.
        </p>
        <p>Почему же наблюдается разница?</p>
        <p>
          Что ж, причина заключается в порядке инициализации полей. Поле класса
          инициализируется:
        </p>
        <ul className="list-disc ms-4">
          <li>
            <p>
              Перед конструктором для базового класса (который ничего не
              расширяет),
            </p>
          </li>
          <li>
            <p>
              Сразу после <code>super()</code> для производного класса.
            </p>
          </li>
        </ul>
        <p>
          В нашем случае <code>Rabbit</code> – это производный класс. В нем нет
          конструктора <code>constructor()</code>. Как было сказано ранее, это
          то же самое, как если бы был пустой конструктор, содержащий только{" "}
          <code>super(...args)</code>.
        </p>
        <p>
          Итак, <code>new Rabbit()</code> вызывает <code>super()</code>, таким
          образом, выполняя родительский конструктор, и (согласно правилу для
          производных классов) только после этого инициализируются поля его
          класса. На момент выполнения родительского конструктора ещё нет полей
          класса <code>Rabbit</code>, поэтому используются поля{" "}
          <code>Animal</code>.
        </p>
        <p>
          Это тонкое различие между полями и методами характерно для JavaScript.
        </p>
      </section>
      <section className="mb-3">
        <h2 className="text-2xl font-bold mb-2">Итого</h2>
        <p>Чтобы унаследовать от класса: class Child extends Parent:</p>
        <ul className="list-disc ms-4">
          <li>
            <p>
              При этом <code>Child.prototype.__proto__</code> будет равен{" "}
              <code>Parent.prototype</code>, так что методы будут унаследованы.
            </p>
          </li>
        </ul>
        <p>При переопределении конструктора:</p>
        <ul className="list-disc ms-4">
          <li>
            <p>
              Обязателен вызов конструктора родителя <code>super()</code> в
              конструкторе <code>Child</code> до обращения к <code>this</code>.
            </p>
          </li>
        </ul>
        <p>При переопределении другого метода:</p>
        <ul className="list-disc ms-4">
          <li>
            <p>
              Мы можем вызвать <code>super.method()</code> в методе{" "}
              <code>Child</code> для обращения к методу родителя{" "}
              <code>Parent</code>.
            </p>
          </li>
        </ul>
        <p>
          У <strong>стрелочных функций</strong> нет своего <code>this</code> и{" "}
          <code>super</code>, поэтому они «прозрачно» встраиваются во внешний
          контекст.
        </p>
      </section>
    </LessonLayout>
  );
};

export default page;
