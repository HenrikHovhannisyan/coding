import React from "react";
import LessonLayout from "@/components/LessonLayout";
import CodeExample from "@/components/CodeExample";
import InfoSection from "@/components/InfoSection";
import WarningSection from "@/components/WarningSection";

const page = () => {
  return (
    <LessonLayout
      title="JavaScript Приватные и защищённые методы и свойства"
      page="javascript/classes/private-protected-properties-methods"
    >
      <section className="mb-3">
        <p>
          Один из важнейших принципов объектно-ориентированного программирования
          – разделение внутреннего и внешнего интерфейсов.
        </p>
      </section>
      <section className="mb-3">
        <h2 className="text-2xl font-bold mb-2">
          Внутренний и внешний интерфейсы
        </h2>
        <p>
          В объектно-ориентированном программировании свойства и методы
          разделены на 2 группы:
        </p>
        <ul className="list-disc pl-6">
          <li>
            <p>
              <strong>Внутренний интерфейс</strong> – методы и свойства,
              доступные из других методов класса, но не снаружи класса.
            </p>
          </li>
          <li>
            <p>
              <strong>Внешний интерфейс</strong> – методы и свойства, доступные
              снаружи класса.
            </p>
          </li>
        </ul>
        <p>
          Если мы продолжаем аналогию с кофеваркой – то, что скрыто внутри:
          трубка кипятильника, нагревательный элемент и т.д. – это внутренний
          интерфейс.
        </p>
        <p>
          Внутренний интерфейс используется для работы объекта, его детали
          используют друг друга. Например, трубка кипятильника прикреплена к
          нагревательному элементу.
        </p>
        <p>
          Но снаружи кофеварка закрыта защитным кожухом, так что никто не может
          добраться до сложных частей. Детали скрыты и недоступны. Мы можем
          использовать их функции через внешний интерфейс.
        </p>
        <p>
          Итак, всё, что нам нужно для использования объекта, это знать его
          внешний интерфейс. Мы можем совершенно не знать, как это работает
          внутри, и это здорово.
        </p>
        <p>Это было общее введение.</p>
        <p>В JavaScript есть два типа полей (свойств и методов) объекта:</p>
        <ul className="list-disc pl-6">
          <li>
            <p>
              <strong>Публичные</strong>: доступны отовсюду. Они составляют
              внешний интерфейс. До этого момента мы использовали только
              публичные свойства и методы.
            </p>
          </li>
          <li>
            <p>
              <strong>Приватные</strong>: доступны только внутри класса. Они для
              внутреннего интерфейса.
            </p>
          </li>
        </ul>
        <p>
          Во многих других языках также существуют «защищённые» поля, доступные
          только внутри класса или для дочерних классов (то есть, как приватные,
          но разрешён доступ для наследующих классов) и также полезны для
          внутреннего интерфейса. В некотором смысле они более распространены,
          чем приватные, потому что мы обычно хотим, чтобы наследующие классы
          получали доступ к внутренним полям.
        </p>
        <p>
          Защищённые поля не реализованы в JavaScript на уровне языка, но на
          практике они очень удобны, поэтому их эмулируют.
        </p>
        <p>
          А теперь давайте сделаем кофеварку на JavaScript со всеми этими типами
          свойств. Кофеварка имеет множество деталей, мы не будем их
          моделировать для простоты примера (хотя могли бы).
        </p>
      </section>
      <section className="mb-3">
        <h2 className="text-2xl font-bold mb-2">
          Защищённое свойство «waterAmount»
        </h2>
        <p>Давайте для начала создадим простой класс для описания кофеварки:</p>
        <CodeExample
          code={`class CoffeeMachine {
  waterAmount = 0; // количество воды внутри

  constructor(power) {
    this.power = power;
    console.log(\`Создана кофеварка, мощность: \${power}\`);
  }
}

// создаём кофеварку
let coffeeMachine = new CoffeeMachine(100);

// добавляем воды
coffeeMachine.waterAmount = 200;
`}
          output={`Создана кофеварка, мощность: 100`}
        />
        <p>
          Прямо сейчас свойства waterAmount и power публичные. Мы можем легко
          получать и устанавливать им любое значение извне.
        </p>
        <p>
          Давайте изменим свойство <code>waterAmount</code> на защищённое, чтобы
          иметь больше контроля над ним. Например, мы не хотим, чтобы кто-либо
          устанавливал его ниже нуля.
        </p>
        <p>
          <strong>
            Защищённые свойства обычно начинаются с префикса <code>_</code>.
          </strong>
        </p>
        <p>
          Это не синтаксис языка: есть хорошо известное соглашение между
          программистами, что такие свойства и методы не должны быть доступны
          извне. Большинство программистов следуют этому соглашению.
        </p>
        <p>
          Так что наше свойство будет называться <code>_waterAmount</code>:
        </p>
        <CodeExample
          code={`class CoffeeMachine {
  _waterAmount = 0;

  set waterAmount(value) {
    if (value < 0) throw new Error("Отрицательное количество воды");
    this._waterAmount = value;
  }

  get waterAmount() {
    return this._waterAmount;
  }

  constructor(power) {
    this._power = power;
  }

}

// создаём новую кофеварку
let coffeeMachine = new CoffeeMachine(100);

// устанавливаем количество воды
coffeeMachine.waterAmount = -10;`}
          output={`Error: Отрицательное количество воды`}
        />
        <p>
          Теперь доступ под контролем, поэтому указать воду ниже нуля не
          удалось.
        </p>
      </section>
      <section className="mb-2">
        <h2 className="text-2xl font-bold">
          Свойство только для чтения «power»
        </h2>
        <p>
          Давайте сделаем свойство <code>power</code> доступным только для
          чтения. Иногда нужно, чтобы свойство устанавливалось только при
          создании объекта и после этого никогда не изменялось.
        </p>
        <p>
          Это как раз требуется для кофеварки: мощность никогда не меняется.
        </p>
        <p>Для этого нам нужно создать только геттер, но не сеттер:</p>
        <CodeExample
          code={`class CoffeeMachine {
  // ...

  constructor(power) {
    this._power = power;
  }

  get power() {
    return this._power;
  }

}

// создаём кофеварку
let coffeeMachine = new CoffeeMachine(100);

console.log(\`Мощность: \${coffeeMachine.power}W\`);

coffeeMachine.power = 25; // Error (no setter)`}
          output={`Мощность: 100W`}
        />
        <InfoSection title={`Геттеры/сеттеры`}>
          <p>Здесь мы использовали синтаксис геттеров/сеттеров.</p>
          <p>
            Но в большинстве случаев использование функций{" "}
            <code>get.../set...</code> предпочтительнее:
          </p>
          <CodeExample
            code={`class CoffeeMachine {
  _waterAmount = 0;

  setWaterAmount(value) {
    if (value < 0) throw new Error("Отрицательное количество воды");
    this._waterAmount = value;
  }

  getWaterAmount() {
    return this._waterAmount;
  }
}

new CoffeeMachine().setWaterAmount(100);`}
          />
          <p>
            Это выглядит немного длиннее, но функции более гибкие. Они могут
            принимать несколько аргументов (даже если они нам сейчас не нужны).
            Итак, на будущее, если нам надо что-то отрефакторить, функции –
            более безопасный выбор.
          </p>
          <p>С другой стороны, синтаксис get/set короче, решать вам.</p>
        </InfoSection>
        <InfoSection title={`Защищённые поля наследуются`}>
          <p>
            Если мы унаследуем{" "}
            <code>class MegaMachine extends CoffeeMachine</code>, ничто не
            помешает нам обращаться к <code>this._waterAmount</code> или{" "}
            <code>this._power</code> из методов нового класса.
          </p>
          <p>
            Таким образом, защищённые поля, конечно же, наследуются. В отличие
            от приватных полей, в чём мы убедимся ниже.
          </p>
        </InfoSection>
      </section>
      <section className="mb-3">
        <h2 className="text-2xl font-bold">Приватное свойство «#waterLimit»</h2>
        <WarningSection title={`Новая возможность`}>
          <p>
            Эта возможность была добавлена в язык недавно. В движках JavaScript
            пока не поддерживается или поддерживается частично, нужен{" "}
            <strong>полифил</strong>.
          </p>
        </WarningSection>
        <p>
          Есть новшество в языке JavaScript, которое почти добавлено в стандарт:
          оно добавляет поддержку приватных свойств и методов.
        </p>
        <p>
          Приватные свойства и методы должны начинаться с <code>#</code>. Они
          доступны только внутри класса.
        </p>
        <p>
          Например, в классе ниже есть приватное свойство{" "}
          <code>#waterLimit</code> и приватный метод <code>#checkWater</code>{" "}
          для проверки количества воды:
        </p>
        <CodeExample
          code={`class CoffeeMachine {
  #waterLimit = 200;

  #checkWater(value) {
    if (value < 0) throw new Error("Отрицательный уровень воды");
    if (value > this.#waterLimit) throw new Error("Слишком много воды");
  }
}

let coffeeMachine = new CoffeeMachine();

// снаружи нет доступа к приватным методам класса
coffeeMachine.#checkWater(); // Error
coffeeMachine.#waterLimit = 1000; // Error`}
          output={`Error: Expected identifier but found "#checkWater"
Error: Expected identifier but found "#waterLimit"`}
        />
        <p>
          На уровне языка <code>#</code> является специальным символом, который
          означает, что поле приватное. Мы не можем получить к нему доступ извне
          или из наследуемых классов.
        </p>
        <p>
          Приватные поля не конфликтуют с публичными. У нас может быть два поля
          одновременно – приватное <code>#waterAmount</code> и публичное{" "}
          <code>waterAmount</code>.
        </p>
        <p>
          Например, давайте сделаем аксессор <code>waterAmount</code> для{" "}
          <code>#waterAmount:</code>
        </p>
        <CodeExample
          code={`class CoffeeMachine {

  #waterAmount = 0;

  get waterAmount() {
    return this.#waterAmount;
  }

  set waterAmount(value) {
    if (value < 0) throw new Error("Отрицательный уровень воды");
    this.#waterAmount = value;
  }
}

let machine = new CoffeeMachine();

machine.waterAmount = 100;
console.log(machine.#waterAmount); // Error`}
          output={`Error: Expected identifier but found "#waterAmount"`}
        />
        <p>
          В отличие от защищённых, функциональность приватных полей
          обеспечивается самим языком. Это хорошо.
        </p>
        <p>
          Но если мы унаследуем от <code>CoffeeMachine</code>, то мы не получим
          прямого доступа к <code>#waterAmount</code>. Мы будем вынуждены
          полагаться на геттер/сеттер <code>waterAmount</code>:
        </p>
        <CodeExample
          code={`class MegaCoffeeMachine extends CoffeeMachine {
  method() {
    alert( this.#waterAmount ); // Error: can only access from CoffeeMachine
  }
}`}
        />
        <p>
          Во многих случаях такое ограничение слишком жёсткое. Раз уж мы
          расширяем <code>CoffeeMachine</code>, у нас может быть вполне законная
          причина для доступа к внутренним методам и свойствам. Поэтому
          защищённые свойства используются чаще, хоть они и не поддерживаются
          синтаксисом языка.
        </p>
        <WarningSection title={`Важно:`}>
          <p>Приватные поля особенные.</p>
          <p>
            Как мы помним, обычно мы можем получить доступ к полям объекта с
            помощью <code>this[name]</code>:
          </p>
          <CodeExample
            code={`class User {
  ...
  sayHi() {
    let fieldName = "name";
    alert(\`Hello, \${this[fieldName]}\`);
  }
}`}
          />
          <p>
            С приватными свойствами такое невозможно: <code>this['#name']</code>{" "}
            не работает. Это ограничение синтаксиса сделано для обеспечения
            приватности.
          </p>
        </WarningSection>
      </section>
      <section className="mb-3">
        <h2 className="text-2xl font-bold">Итого</h2>
        <p>
          В терминах ООП отделение внутреннего интерфейса от внешнего называется
          <strong>инкапсуляция</strong>.
        </p>
        <p>
          Для сокрытия внутреннего интерфейса мы используем защищённые или
          приватные свойства:
        </p>
        <ul className="list-disc pl-6">
          <li>
            <p>
              Защищённые поля имеют префикс <code>_</code>. Это хорошо известное
              соглашение, не поддерживаемое на уровне языка. Программисты должны
              обращаться к полю, начинающемуся с <code>_</code>, только из его
              класса и классов, унаследованных от него.
            </p>
          </li>
          <li>
            <p>
              Приватные поля имеют префикс <code>#</code>. JavaScript
              гарантирует, что мы можем получить доступ к таким полям только
              внутри класса.
            </p>
          </li>
        </ul>
        <p>
          В настоящее время приватные поля не очень хорошо поддерживаются в
          браузерах, но можно использовать <strong>полифил</strong>.
        </p>
      </section>
    </LessonLayout>
  );
};

export default page;
