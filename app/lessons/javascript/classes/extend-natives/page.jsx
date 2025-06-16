import React from "react";
import LessonLayout from "@/components/LessonLayout";
import CodeExample from "@/components/CodeExample";
import WarningSection from "@/components/WarningSection";
import InfoSection from "@/components/InfoSection";

const page = () => {
  return (
    <LessonLayout
      title="JavaScript Расширение встроенных классов"
      page="javascript/classes/extend-natives"
    >
      <section className="mb-3">
        <p>
          От встроенных классов, таких как <code>Array</code>, <code>Map</code>{" "}
          и других, тоже можно наследовать.
        </p>
        <p>
          Например, в этом примере <code>PowerArray</code> наследуется от
          встроенного <code>Array</code>:
        </p>
        <CodeExample
          code={`// добавим один метод (можно более одного)
class PowerArray extends Array {
  isEmpty() {
    return this.length === 0;
  }
}

let arr = new PowerArray(1, 2, 5, 10, 50);
console.log(arr.isEmpty()); // false

let filteredArr = arr.filter(item => item >= 10);
console.log(filteredArr); // 10, 50
console.log(filteredArr.isEmpty()); // false`}
          output={`false
[10, 50]
false`}
        />
        <p>
          Обратите внимание на интересный момент: встроенные методы, такие как{" "}
          <code>filter</code>, <code>map</code> и другие возвращают новые
          объекты унаследованного класса <code>PowerArray</code>. Их внутренняя
          реализация такова, что для этого они используют свойство объекта{" "}
          <code>constructor</code>.
        </p>
        <p>В примере выше,</p>
        <CodeExample code={`arr.constructor === PowerArray`} />
        <p>
          Поэтому при вызове метода <code>arr.filter()</code> он внутри создаёт
          массив результатов, именно используя <code>arr.constructor</code>, а
          не обычный массив. Это замечательно, поскольку можно продолжать
          использовать методы <code>PowerArray</code> далее на результатах.
        </p>
        <p>
          Более того, мы можем настроить это поведение. Например, если мы хотим,
          чтобы <code>arr.filter()</code> возвращал обычный массив, а не
          <code>PowerArray</code>, мы можем переопределить
          <code>Symbol.species</code>.
        </p>
        <p>
          При помощи специального статического геттера
          <code>Symbol.species</code> можно вернуть конструктор, который
          JavaScript будет использовать в <code>filter</code>, <code>map</code>{" "}
          и других методах для создания новых объектов.
        </p>
        <p>
          Если бы мы хотели, чтобы методы <code>map</code>, <code>filter</code>{" "}
          и т. д. возвращали обычные массивы, мы могли бы вернуть{" "}
          <code>Array</code> в <code>Symbol.species</code>, вот так:
        </p>
        <CodeExample
          code={`class PowerArray extends Array {
  isEmpty() {
    return this.length === 0;
  }

  // встроенные методы массива будут использовать этот метод как конструктор
  static get [Symbol.species]() {
    return Array;
  }
}

let arr = new PowerArray(1, 2, 5, 10, 50);
console.log(arr.isEmpty()); // false

// filter создаст новый массив, используя arr.constructor[Symbol.species] как конструктор
let filteredArr = arr.filter(item => item >= 10);

// filteredArr не является PowerArray, это Array
console.log(filteredArr.isEmpty()); // Error: filteredArr.isEmpty is not a function
`}
          output={`false
TypeError: filteredArr.isEmpty is not a function`}
        />
        <p>
          Как вы видите, теперь <code>.filter</code> возвращает{" "}
          <code>Array.</code> Расширенная функциональность не будет передаваться
          далее.
        </p>
        <InfoSection title={`Аналогично работают другие коллекции`}>
          <p>
            Другие коллекции, такие как <code>Map</code>, <code>Set</code>,
            работают аналогично. Они также используют{" "}
            <code>Symbol.species</code>.
          </p>
        </InfoSection>
      </section>
      <section className="mb-3">
        <h2 className="text-2xl font-bold mb-2">
          Отсутствие статического наследования встроенных классов
        </h2>
        <p>
          У встроенных объектов есть собственные статические методы, например{" "}
          <code>Object.keys</code>, <code>Array.isArray</code> и т. д.
        </p>
        <p>Как мы уже знаем, встроенные классы расширяют друг друга.</p>
        <p>
          Обычно, когда один класс наследует другой, то наследуются и
          статические методы. Они наследуются как свойства, так и методы.
        </p>
        <p>
          Но встроенные классы – исключение. Они не наследуют статические методы
          друг друга.
        </p>
        <p>
          Например, и <code>Array</code>, и <code>Date</code> наследуют от{" "}
          <code>Object</code>, так что в их экземплярах доступны методы из{" "}
          <code>Object.prototype</code>. Но <code>Array.[[Prototype]]</code> не
          ссылается на <code>Object</code>, поэтому нет методов{" "}
          <code>Array.keys()</code> или <code>Date.keys()</code>.
        </p>
        <p>
          Ниже вы видите структуру <code>Date</code> и <code>Object</code>:
        </p>
        <img
          src="/images/lessons/javascript/object-date-inheritance.svg"
          alt="Расширение встроенных классов"
          className="mb-4 w-full max-w-md"
        />
        <p>
          Как видите, нет связи между <code>Date</code> и <code>Object</code>.
          Они независимы, только <code>Date.prototype</code> наследует от{" "}
          <code>Object.prototype</code>.
        </p>
        <p>
          В этом важное отличие наследования встроенных объектов от того, что мы
          получаем с использованием <code>extends</code>.
        </p>
      </section>
    </LessonLayout>
  );
};

export default page;
