import React from "react";
import LessonLayout from "@/components/LessonLayout";
import CodeExample from "@/components/CodeExample";
import InfoSection from "@/components/InfoSection";

const page = () => {
  return (
    <LessonLayout
      title="JavaScript Function prototype (F.prototype)"
      page="javascript/prototypes/function-prototype"
    >
      <section className="mb-3">
        <p>
          Как мы помним, новые объекты могут быть созданы с помощью
          функции-конструктора <code>new F()</code>.
        </p>
        <p>
          Если в <code>F.prototype</code> содержится объект, оператор{" "}
          <code>new</code> устанавливает его в качестве{" "}
          <code>[[Prototype]]</code> для нового объекта.
        </p>
        <p>
          Обратите внимание, что <code>F.prototype</code> означает обычное
          свойство с именем
          <code>"prototype"</code> для <code>F</code>. Это ещё не «прототип
          объекта», а обычное свойство <code>F</code>с таким именем.
        </p>
        <p>Приведём пример:</p>
        <CodeExample
          code={`let animal = {
  eats: true
};

function Rabbit(name) {
  this.name = name;
}

Rabbit.prototype = animal;

let rabbit = new Rabbit("White Rabbit"); //  rabbit.__proto__ == animal

console.log( rabbit.eats );`}
          output={`true`}
        />
        <p>
          Установка <code>Rabbit.prototype = animal</code> буквально говорит
          интерпретатору следующее: «При создании объекта через new{" "}
          <code>Rabbit()</code> запиши ему <code>animal</code>в{" "}
          <code>[[Prototype]]</code>».
        </p>
        <img
          src="/images/lessons/javascript/proto-constructor-animal-rabbit.svg"
          alt="Function prototype"
          className="mb-4 w-full max-w-md"
        />
        <p>
          На изображении: <code>"prototype"</code> – горизонтальная стрелка,
          обозначающая обычное свойство для <code>"F"</code>, а{" "}
          <code>[[Prototype]]</code> – вертикальная, обозначающая наследование{" "}
          <code>rabbit</code> от <code>animal</code>.
        </p>
        <InfoSection title="<code>F.prototype</code> используется только в момент вызова <code>new F</code>">
          <p>
            <code>F.prototype</code> используется только при вызове{" "}
            <code>new F</code> и присваивается в качестве свойства{" "}
            <code>[[Prototype]]</code> нового объекта.
          </p>
          <p>
            Если после создания свойство <code>F.prototype</code> изменится (
            <code>{"F.prototype = <другой объект>"}</code>), то новые объекты,
            созданные с помощью <code>new F</code>, будут иметь в качестве{" "}
            <code>[[Prototype]]</code> другой объект, а уже существующие объекты
            сохранят старый.
          </p>
        </InfoSection>
      </section>
      <section className="mb-3">
        <h2 className="text-2xl font-bold mb-2">
          F.prototype по умолчанию, свойство constructor
        </h2>
        <p>
          У каждой функции (за исключением стрелочных) по умолчанию уже есть
          свойство <code>"prototype"</code>.
        </p>
        <p>
          По умолчанию <code>"prototype"</code> – объект с единственным
          свойством
          <code>constructor</code>, которое ссылается на функцию-конструктор.
        </p>
        <CodeExample
          code={`function Rabbit() {}

/* прототип по умолчанию
Rabbit.prototype = { constructor: Rabbit };
*/`}
        />
        <img
          src="/images/lessons/javascript/function-prototype-constructor.svg"
          alt="Object prototype diagram"
          className="mb-4 w-full max-w-md"
        />
        <p>Проверим это:</p>
        <CodeExample
          code={`function Rabbit() {}
// по умолчанию:
// Rabbit.prototype = { constructor: Rabbit }

console.log( Rabbit.prototype.constructor == Rabbit );`}
          output={`true`}
        />
        <p>
          Соответственно, если мы ничего не меняем, то свойство{" "}
          <code>constructor</code>
          будет доступно всем кроликам через <code>[[Prototype]]</code>:
        </p>
        <CodeExample
          code={`function Rabbit() {}
// по умолчанию:
// Rabbit.prototype = { constructor: Rabbit }

let rabbit = new Rabbit(); // наследует от {constructor: Rabbit}

console.log(rabbit.constructor == Rabbit); // true (свойство получено из прототипа)`}
          output={`true`}
        />
        <img
          src="/images/lessons/javascript/rabbit-prototype-constructor.svg"
          alt="Function prototype"
          className="mb-4 w-full max-w-md"
        />
        <p>
          Мы можем использовать свойство <code>constructor</code> существующего
          объекта для создания нового.
        </p>
        <p>Пример:</p>
        <CodeExample
          code={`function Rabbit(name) {
  this.name = name;
  console.log(name);
}

let rabbit = new Rabbit('White Rabbit');

let rabbit2 = new rabbit.constructor('Black Rabbit');`}
          output={`White Rabbit
Black Rabbit`}
        />
        <p>
          Это удобно, когда у нас есть объект, но мы не знаем, какой конструктор
          использовался для его создания (например, он мог быть взят из
          сторонней библиотеки), а нам необходимо создать ещё один такой объект.
        </p>
        <p>
          Но, пожалуй, самое важное о свойстве <code>"constructor"</code> это
          то, что…
        </p>
        <p>
          <strong>
            …JavaScript сам по себе не гарантирует правильное значение свойства
            <code>"constructor"</code>.
          </strong>
        </p>
        <p>
          Да, оно является свойством по умолчанию в <code>"prototype"</code> у
          функций, но что случится с ним позже – зависит только от нас.
        </p>
        <p>
          В частности, если мы заменим прототип по умолчанию на другой объект,
          то свойства <code>"constructor"</code> в нём не будет
        </p>
        <CodeExample
          code={`function Rabbit() {}
Rabbit.prototype = {
  jumps: true
};

let rabbit = new Rabbit();
console.log(rabbit.constructor === Rabbit);`}
          output={`false`}
        />
        <p>
          Таким образом, чтобы сохранить верное свойство{" "}
          <code>"constructor"</code>, мы должны добавлять/удалять/изменять
          свойства у прототипа по умолчанию вместо того, чтобы перезаписывать
          его целиком:
        </p>
        <CodeExample
          code={`function Rabbit() {}

// Не перезаписываем Rabbit.prototype полностью,
// а добавляем к нему свойство
Rabbit.prototype.jumps = true
// Прототип по умолчанию сохраняется, и мы всё ещё имеем доступ к Rabbit.prototype.constructor`}
        />
        <p>
          Или мы можем заново создать свойство <code>constructor</code>:
        </p>
        <CodeExample
          code={`Rabbit.prototype = {
  jumps: true,
  constructor: Rabbit
};

// теперь свойство constructor снова корректное, так как мы добавили его явно`}
        />
      </section>
      <section className="mb-3">
        <h2 className="text-2xl font-bold mb-2">Итого</h2>
        <p>
          В этой главе мы кратко описали способ задания{" "}
          <code>[[Prototype]]</code> для объектов, создаваемых с помощью
          функции-конструктора. Позже мы рассмотрим, как можно использовать эту
          возможность.
        </p>
        <p>Всё достаточно просто. Выделим основные моменты:</p>
        <ul className="list-disc pl-6">
          <li>
            <p>
              Свойство<code> F.prototype</code> (не путать с{" "}
              <code>[[Prototype]]</code>) устанавливает
              <code>[[Prototype]]</code> для новых объектов при вызове new{" "}
              <code>F()</code>.
            </p>
          </li>
          <li>
            <p>
              Значение <code>F.prototype</code> должно быть либо объектом, либо{" "}
              <code>null</code>. Другие значения не будут работать.
            </p>
          </li>
          <li>
            <p>
              Свойство <code>"prototype"</code> является особым, только когда
              оно назначено функции-конструктору, которая вызывается оператором{" "}
              <code>new</code>.
            </p>
          </li>
        </ul>
        <p>
          В обычных объектах <code>prototype</code> не является чем-то
          особенным:
        </p>
        <CodeExample
          code={`let user = {
  name: "John",
  prototype: "Bla-bla" // никакой магии нет - обычное свойство
};`}
        />
        <p>
          По умолчанию все функции имеют{" "}
          <code>F.prototype = {`{ constructor: F }`}</code>, поэтому мы можем
          получить конструктор объекта через свойство
          <code>"constructor"</code>.
        </p>
      </section>
    </LessonLayout>
  );
};

export default page;
