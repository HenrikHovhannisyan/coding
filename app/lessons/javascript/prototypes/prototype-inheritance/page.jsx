import React from "react";
import LessonLayout from "@/components/LessonLayout";
import CodeExample from "@/components/CodeExample";
import InfoSection from "@/components/InfoSection";

const page = () => {
  return (
    <LessonLayout
      title="JavaScript Prototype inheritance"
      page="javascript/prototypes/prototype-inheritance"
    >
      <section className="mb-3">
        <h2 className="text-2xl font-bold mb-2">Прототипное наследование</h2>
        <p>В программировании мы часто хотим взять что-то и расширить.</p>
        <p>
          Например, у нас есть объект <code>user</code> со своими свойствами и
          методами, и мы хотим создать объекты <code>admin</code> и{" "}
          <code>guest</code> как его слегка изменённые варианты. Мы хотели бы
          повторно использовать то, что есть у объекта <code>user</code>, не
          копировать/переопределять его методы, а просто создать новый объект на
          его основе.
        </p>
        <p>
          <strong>Прототипное наследование</strong> — это возможность языка,
          которая помогает в этом.
        </p>
      </section>
      <section className="mb-3">
        <h2 className="text-2xl font-bold mb-2">[[Prototype]]</h2>
        <p>
          В JavaScript объекты имеют специальное скрытое свойство{" "}
          <code>[[Prototype]]</code>
          (так оно названо в спецификации), которое либо равно <code>null</code>
          , либо ссылается на другой объект. Этот объект называется «прототип»:
        </p>
        <img
          src="/images/lessons/javascript/object-prototype-empty.svg"
          alt="Object prototype diagram"
          className="mb-4 w-full max-w-md"
        />
        <p>
          Прототип даёт нам немного «магии». Когда мы хотим прочитать свойство
          из
          <code>object</code>, а оно отсутствует, JavaScript автоматически берёт
          его из прототипа. В программировании такой механизм называется
          «прототипным наследованием». Многие интересные возможности языка и
          техники программирования основываются на нём.
        </p>
        <p>
          Свойство <code>[[Prototype]]</code> является внутренним и скрытым, но
          есть много способов задать его.
        </p>
        <p>
          Одним из них является использование <code>__proto__</code>, например
          так:
        </p>
        <CodeExample
          code={`let animal = {
  eats: true
};

let rabbit = {
  jumps: true
};

rabbit.__proto__ = animal; // (*)`}
        />
        <p>
          Если мы ищем свойство в <code>rabbit</code>, а оно отсутствует,
          JavaScript автоматически берёт его из <code>animal</code>. Например:
        </p>
        <CodeExample
          code={`let animal = {
  eats: true,
};

let rabbit = {
  jumps: true,
};

rabbit.__proto__ = animal; // (*)

// теперь мы можем найти оба свойства в rabbit:
console.log(rabbit.eats); // true (**)
console.log(rabbit.jumps); // true`}
          output={`true
true`}
        />
        <p>
          Здесь строка <code>(*)</code> устанавливает <code>animal</code> как
          прототип для <code>rabbit</code>.
        </p>
        <p>
          Затем, когда <code>console.log</code> пытается прочитать свойство{" "}
          <code>rabbit.eats</code> <code>(**)</code>, его нет в{" "}
          <code>rabbit</code>, поэтому JavaScript следует по ссылке{" "}
          <code>[[Prototype]]</code> и находит его в <code>animal</code>{" "}
          (смотрите снизу вверх):
        </p>
        <img
          src="/images/lessons/javascript/proto-animal-rabbit.svg"
          alt="Object prototype diagram"
          className="mb-4 w-full max-w-md"
        />
        <p>
          Здесь мы можем сказать, что «<code>animal</code> является прототипом{" "}
          <code>rabbit</code>» или «<code>rabbit</code> прототипно наследует от{" "}
          <code>animal</code>».
        </p>
        <p>
          Так что если у <code>animal</code> много полезных свойств и методов,
          то они автоматически становятся доступными у <code>rabbit</code>.
          Такие свойства называются «унаследованными».
        </p>
        <p>
          Если у нас есть метод в <code>animal</code>, он может быть вызван на{" "}
          <code>rabbit</code>:
        </p>
        <CodeExample
          code={`let animal = {
  eats: true,
  walk() {
    console.log("Animal walk");
  }
};

let rabbit = {
  jumps: true,
  __proto__: animal
};

// walk взят из прототипа
rabbit.walk(); // Animal walk`}
          output={`Animal walk`}
        />
        <p>Метод автоматически берётся из прототипа:</p>
        <img
          src="/images/lessons/javascript/proto-animal-rabbit-walk.svg"
          alt="Object prototype diagram"
          className="mb-4 w-full max-w-md"
        />
        <p>Цепочка прототипов может быть длиннее:</p>
        <CodeExample
          code={`let animal = {
  eats: true,
  walk() {
    console.log('Animal walk');
  },
};

let rabbit = {
  jumps: true,
  __proto__: animal,
};

let longEar = {
  earLength: 10,
  __proto__: rabbit,
};

// walk взят из цепочки прототипов
longEar.walk(); // Animal walk
console.log(longEar.jumps); // true (из rabbit)`}
          output={`Animal walk
true`}
        />
        <img
          src="/images/lessons/javascript/proto-animal-rabbit-chain.svg"
          alt="Object prototype diagram"
          className="mb-4 w-full max-w-md"
        />
        <p>
          Теперь, если мы прочтём что-нибудь из <code>longEar</code>, и оно
          будет отсутствовать, JavaScript будет искать его в <code>rabbit</code>
          , а затем в <code>animal</code>.
        </p>
        <p>Есть только два ограничения:</p>
        <ul className="list-decimal ms-4">
          <li>
            <p>
              Ссылки не могут идти по кругу. JavaScript выдаст ошибку, если мы
              попытаемся назначить <code>__proto__</code> по кругу.
            </p>
          </li>
          <li>
            <p>
              Значение <code>__proto__</code> может быть объектом или{" "}
              <code>null</code>. Другие типы игнорируются.
            </p>
          </li>
        </ul>
        <p>
          Это вполне очевидно, но всё же: может быть только один{" "}
          <code>[[Prototype]]</code>. Объект не может наследоваться от двух
          других объектов.
        </p>
        <InfoSection
          title={
            "Свойство <code>__proto__</code> — исторически обусловленный геттер/сеттер для <code>[[Prototype]]</code>"
          }
        >
          <p>
            Это распространённая ошибка начинающих разработчиков – не знать
            разницы между этими двумя понятиями.
          </p>
          <p>
            Обратите внимание, что <code>__proto__</code> —{" "}
            <em>не то же самое</em>, что внутреннее свойство{" "}
            <code>[[Prototype]]</code>. Это геттер/сеттер для{" "}
            <code>[[Prototype]].</code> Позже мы увидим ситуации, когда это
            имеет значение, а пока давайте просто будем иметь это в виду,
            поскольку мы строим наше понимание языка JavaScript.
          </p>
          <p>
            Свойство <code>__proto__</code> немного устарело, оно существует по
            историческим причинам. Современный JavaScript предполагает, что мы
            должны использовать функции <code>Object.getPrototypeOf</code> / <code>Object.setPrototypeOf</code>
            вместо того, чтобы получать/устанавливать прототип. Мы также
            рассмотрим эти функции позже.
          </p>
          <p>
            По спецификации <code>__proto__</code> должен поддерживаться только
            браузерами, но по факту все среды, включая серверную, поддерживают
            его. Так что мы вполне безопасно его используем.
          </p>
          <p>
            Далее мы будем в примерах использовать <code>__proto__</code>, так
            как это самый короткий и интуитивно понятный способ установки и
            чтения прототипа.
          </p>
        </InfoSection>
      </section>
      <section className="mb-3">
        <h2 className="text-2xl font-bold mb-2">
          Операция записи не использует прототип
        </h2>
        <p>Прототип используется только для чтения свойств.</p>
        <p>Операции записи/удаления работают напрямую с объектом.</p>
        <p>
          В приведённом ниже примере мы присваиваем <code>rabbit</code>{" "}
          собственный метод <code>walk</code>:
        </p>
        <CodeExample
          code={`let animal = {
  eats: true,
  walk() {
    /* этот метод не будет использоваться в rabbit */
  },
};

let rabbit = {
  __proto__: animal,
};

rabbit.walk = function () {
  console.log('Rabbit! Bounce-bounce!');
};

rabbit.walk();`}
          output={`Rabbit! Bounce-bounce!`}
        />
        <p>
          Теперь вызов <code>rabbit.walk()</code> находит метод непосредственно
          в объекте и выполняет его, не используя прототип:
        </p>
        <img
          src="/images/lessons/javascript/proto-animal-rabbit-walk-2.svg"
          alt="Object prototype diagram"
          className="mb-4 w-full max-w-md"
        />
        <p>
          Свойства-аксессоры – исключение, так как запись в него обрабатывается
          функцией-сеттером. То есть это фактически вызов функции.
        </p>
        <p>
          По этой причине <code>admin.fullName</code> работает корректно в
          приведённом ниже коде:
        </p>
        <CodeExample
          code={`let user = {
  name: 'John',
  surname: 'Smith',

  set fullName(value) {
    [this.name, this.surname] = value.split(' ');
  },

  get fullName() {
    return \`\${this.name} \${this.surname}\`;
  },
};

let admin = {
  __proto__: user,
  isAdmin: true,
};

console.log(admin.fullName); // John Smith

// срабатывает сеттер!
admin.fullName = 'Alice Cooper';

console.log(admin.name); // Alice
console.log(admin.surname); // Cooper`}
          output={`John Smith
Alice
Cooper`}
        />
        <p>
          Здесь в строке <code>(*)</code> свойство <code>admin.fullName</code>{" "}
          имеет геттер в прототипе
          <code>user</code>, поэтому вызывается он. В строке <code>(**)</code>{" "}
          свойство также имеет сеттер в прототипе, который и будет вызван.
        </p>
      </section>
      <section className="mb-3">
        <h2 className="text-2xl font-bold mb-2">Значение «this»</h2>
        <p>
          В приведённом выше примере может возникнуть интересный вопрос: каково
          значение <code>this</code> внутри <code>set fullName(value)</code>?
          Куда записаны свойства
          <code>this.name</code> и <code>this.surname</code>: в{" "}
          <code>user</code> или в <code>admin</code>?
        </p>
        <p>
          Ответ прост: прототипы никак не влияют на <code>this</code>.
        </p>
        <p>
          <strong>
            Неважно, где находится метод: в объекте или его прототипе. При
            вызове метода this — всегда объект перед точкой.
          </strong>
        </p>
        <p>
          Таким образом, вызов сеттера <code>admin.fullName=</code> в качестве{" "}
          <code>this</code>
          использует <code>admin</code>, а не <code>user</code>.
        </p>
        <p>
          Это на самом деле очень важная деталь, потому что у нас может быть
          большой объект со множеством методов, от которого можно наследовать.
          Затем наследующие объекты могут вызывать его методы, но они будут
          изменять своё состояние, а не состояние объекта-родителя.
        </p>
        <p>
          Например, здесь <code>animal</code> представляет собой «хранилище
          методов», и<code>rabbit</code> использует его.
        </p>
        <p>
          Вызов <code>rabbit.sleep()</code> устанавливает{" "}
          <code>this.isSleeping</code> для объекта <code>rabbit</code>:
        </p>
        <CodeExample
          code={`// методы animal
let animal = {
  walk() {
    if (!this.isSleeping) {
      alert(\`I walk\`);
    }
  },
  sleep() {
    this.isSleeping = true;
  },
};

let rabbit = {
  name: 'White Rabbit',
  __proto__: animal,
};

// модифицирует rabbit.isSleeping
rabbit.sleep();

console.log(rabbit.isSleeping); // true
console.log(animal.isSleeping); // undefined (нет такого свойства в прототипе)`}
          output={`true
undefined`}
        />
        <img
          src="/images/lessons/javascript/proto-animal-rabbit-walk-3.svg"
          alt="Object prototype diagram"
          className="mb-4 w-full max-w-md"
        />
        <p>
          Если бы у нас были другие объекты, такие как <code>bird</code>,{" "}
          <code>snake</code> и т.д., унаследованные от <code>animal</code>, они
          также получили бы доступ к методам
          <code>animal</code>. Но <code>this</code> при вызове каждого метода
          будет соответствовать объекту (перед точкой), на котором происходит
          вызов, а не <code>animal</code>. Поэтому, когда мы записываем данные в{" "}
          <code>this</code>, они сохраняются в этих объектах.
        </p>
        <p>В результате методы являются общими, а состояние объекта — нет.</p>
      </section>
      <section className="mb-3">
        <h2 className="text-2xl font-bold mb-2">Цикл for…in</h2>
        <p>
          Цикл <code>for..in</code> проходит не только по собственным, но и по
          унаследованным свойствам объекта.
        </p>
        <p>Например:</p>
        <CodeExample
          code={`let animal = {
  eats: true
};

let rabbit = {
  jumps: true,
  __proto__: animal
};

// Object.keys возвращает только собственные ключи
console.log(Object.keys(rabbit)); // jumps

// for..in проходит и по своим, и по унаследованным ключам
for(let prop in rabbit) console.log(prop); // jumps, затем eats`}
          output={`jumps
jumps
eats`}
        />
        <p>
          Если унаследованные свойства нам не нужны, то мы можем отфильтровать
          их при помощи встроенного метода <code>obj.hasOwnProperty(key)</code>:
          он возвращает <code>true</code>, если у <code>obj</code> есть
          собственное, не унаследованное, свойство с именем <code>key</code>.
        </p>
        <p>Пример такой фильтрации:</p>
        <CodeExample
          code={`let animal = {
  eats: true,
};

let rabbit = {
  jumps: true,
  __proto__: animal,
};

for (let prop in rabbit) {
  let isOwn = rabbit.hasOwnProperty(prop);

  if (isOwn) {
    console.log(\`Our: \${prop}\`); // Our: jumps
  } else {
    console.log(\`Inherited: \${prop}\`); // Inherited: eats
  }
}`}
          output={`Our: jumps
Inherited: eats`}
        />
        <p>
          В этом примере цепочка наследования выглядит так: <code>rabbit</code>{" "}
          наследует от
          <code>animal</code>, который наследует от{" "}
          <code>Object.prototype</code> (так как animal – литеральный объект{" "}
          <code>{`{...}`}</code>, то это по умолчанию), а затем{" "}
          <code>null</code> на самом верху:
        </p>
        <img
          src="/images/lessons/javascript/rabbit-animal-object.svg"
          alt="Object prototype diagram"
          className="mb-4 w-full max-w-md"
        />
        <p>
          Заметим ещё одну деталь. Откуда взялся метод{" "}
          <code>rabbit.hasOwnProperty</code>? Мы его явно не определяли. Если
          посмотреть на цепочку прототипов, то видно, что он берётся из{" "}
          <code>Object.prototype.hasOwnProperty</code>. То есть он унаследован.
        </p>
        <p>
          …Но почему <code>hasOwnProperty</code> не появляется в цикле{" "}
          <code>for..in</code> в отличие от
          <code>eats</code> и <code>jumps</code>? Он ведь перечисляет все
          унаследованные свойства.
        </p>
        <p>
          Ответ простой: оно не перечислимо. То есть у него внутренний флаг
          <code>enumerable</code> стоит <code>false</code>, как и у других
          свойств <code>Object.prototype</code>. Поэтому оно и не появляется в
          цикле.
        </p>
        <InfoSection
          title={`Почти все остальные методы получения ключей/значений игнорируют унаследованные свойства`}
        >
          <p>
            Почти все остальные методы, получающие ключи/значения, такие как
            <code>Object.keys</code>, <code>Object.values</code> и другие –
            игнорируют унаследованные свойства.
          </p>
          <p>Они учитывают только свойства самого объекта, не его прототипа.</p>
        </InfoSection>
      </section>
      <section className="mb-3">
        <h2 className="text-2xl font-bold mb-2">Итого</h2>
        <ul className="list-disc ms-4">
          <li>
            <p>
              В JavaScript все объекты имеют скрытое свойство{" "}
              <code>[[Prototype]]</code>, которое является либо другим объектом,
              либо <code>null</code>.
            </p>
          </li>
          <li>
            <p>
              Мы можем использовать <code>obj.__proto__</code> для доступа к
              нему (исторически обусловленный геттер/сеттер, есть другие
              способы, которые скоро будут рассмотрены).
            </p>
          </li>
          <li>
            <p>
              Объект, на который ссылается <code>[[Prototype]]</code>,
              называется «прототипом».
            </p>
          </li>
          <li>
            <p>
              Если мы хотим прочитать свойство <code>obj</code> или вызвать
              метод, которого не существует у <code>obj</code>, тогда JavaScript
              попытается найти его в прототипе.
            </p>
          </li>
          <li>
            <p>
              Операции записи/удаления работают непосредственно с объектом, они
              не используют прототип (если это обычное свойство, а не сеттер).
            </p>
          </li>
          <li>
            <p>
              Если мы вызываем <code>obj.method()</code>, а метод при этом взят
              из прототипа, то <code>this</code> всё равно ссылается на{" "}
              <code>obj</code>. Таким образом, методы всегда работают с текущим
              объектом, даже если они наследуются.
            </p>
          </li>
          <li>
            <p>
              Цикл <code>for..in</code> перебирает как свои, так и
              унаследованные свойства. Остальные методы получения
              ключей/значений работают только с собственными свойствами объекта.
            </p>
          </li>
        </ul>
      </section>
    </LessonLayout>
  );
};

export default page;
