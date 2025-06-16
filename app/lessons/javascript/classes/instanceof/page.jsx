import React from "react";
import LessonLayout from "@/components/LessonLayout";
import CodeExample from "@/components/CodeExample";

const page = () => {
  return (
    <LessonLayout
      title='JavaScript Проверка класса: "instanceof"'
      page="javascript/classes/instanceof"
    >
      <section className="mb-3">
        <p>
          Оператор <code>instanceof</code> позволяет проверить, принадлежит ли
          объект указанному классу, с учётом наследования.
        </p>
        <p>
          Такая проверка может потребоваться во многих случаях. Здесь мы
          используем её для создания <strong>полиморфной</strong> функции,
          которая интерпретирует аргументы по-разному в зависимости от их типа.
        </p>
      </section>
      <section className="mb-3">
        <h2 className="text-2xl font-bold mb-2">Оператор instanceof</h2>
        <p>Синтаксис:</p>
        <CodeExample code={`obj instanceof Class`} />
        <p>
          Оператор вернёт <code>true</code>, если <code>obj</code> принадлежит
          классу <code>Class</code> или наследующему от него.
        </p>
        <p>Например:</p>
        <CodeExample
          code={`class Rabbit {}
let rabbit = new Rabbit();

// это объект класса Rabbit?
console.log(rabbit instanceof Rabbit);`}
          output={`true`}
        />
        <p>Также это работает с функциями-конструкторами:</p>
        <CodeExample
          code={`// вместо класса
function Rabbit() {}

console.log(new Rabbit() instanceof Rabbit);`}
          output={`true`}
        />
        <p>
          …И для встроенных классов, таких как <code>Array</code>:
        </p>
        <CodeExample
          code={`let arr = [1, 2, 3];
console.log(arr instanceof Array);
console.log(arr instanceof Object);`}
          output={`true
true`}
        />
        <p>
          Пожалуйста, обратите внимание, что <code>arr</code> также принадлежит
          классу <code>Object</code>, потому что <code>Array</code> наследует от{" "}
          <code>Object</code>.
        </p>
        <p>
          Обычно оператор <code>instanceof</code> просматривает для проверки
          цепочку прототипов.
        </p>
      </section>
    </LessonLayout>
  );
};

export default page;
