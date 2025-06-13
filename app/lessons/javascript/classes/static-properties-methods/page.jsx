import React from "react";
import LessonLayout from "@/components/LessonLayout";
import CodeExample from "@/components/CodeExample";
import WarningSection from "@/components/WarningSection";

const page = () => {
  return (
    <LessonLayout
      title="JavaScript Статические свойства и методы"
      page="javascript/classes/static-properties-methods"
    >
      <section className="mb-3">
        <p>
          Мы также можем присвоить метод самому классу. Такие методы называются{" "}
          <strong>статическими</strong>.
        </p>
        <p>
          В объявление класса они добавляются с помощью ключевого слова{" "}
          <code>static</code>, например:
        </p>
        <CodeExample
          code={`class User {
  static staticMethod() {
    console.log(this === User);
  }
}

User.staticMethod();`}
          output={`true`}
        />
        <p>
          Это фактически то же самое, что присвоить метод напрямую как свойство
          функции:
        </p>
        <CodeExample
          code={`class User { }

User.staticMethod = function() {
  console.log(this === User);
};`}
        />
        <p>
          Значением <code>this</code> при вызове{" "}
          <code>User.staticMethod()</code> является сам конструктор класса{" "}
          <code>User</code> (правило <strong>«объект до точки»</strong>).
        </p>
        <p>
          Обычно статические методы используются для реализации функций, которые
          будут принадлежать классу в целом, но не какому-либо его конкретному
          объекту.
        </p>
        <p>
          Например, есть объекты статей <code>Article</code>, и нужна функция
          для их сравнения.
        </p>
        <p>
          Естественное решение – сделать для этого статический метод{" "}
          <code>Article.compare</code>:
        </p>
        <CodeExample
          code={`class Article {
  constructor(title, date) {
    this.title = title;
    this.date = date;
  }

  static compare(articleA, articleB) {
    return articleA.date - articleB.date;
  }
}

// использование
let articles = [
  new Article("HTML", new Date(2019, 1, 1)),
  new Article("CSS", new Date(2019, 0, 1)),
  new Article("JavaScript", new Date(2019, 11, 1))
];

articles.sort(Article.compare);

console.log( articles[0].title );`}
          output={`CSS`}
        />
        <p>
          Здесь метод <code>Article.compare</code> стоит «над» статьями, как
          средство для их сравнения. Это метод не отдельной статьи, а всего
          класса.
        </p>
        <p>
          Другим примером может быть так называемый <strong>«фабричный»</strong>{" "}
          метод.
        </p>
        <p>Скажем, нам нужно несколько способов создания статьи:</p>
        <ul className="list-decimal pl-6">
          <li>
            <p>
              Создание через заданные параметры (<code>title</code>,{" "}
              <code>date</code> и т. д.).
            </p>
          </li>
          <li>
            <p>Создание пустой статьи с сегодняшней датой.</p>
          </li>
          <li>
            <p>…или как-то ещё.</p>
          </li>
        </ul>
        <p>
          Первый способ может быть реализован через конструктор. А для второго
          можно использовать статический метод класса.
        </p>
        <p>
          Такой как <code>Article.createTodays()</code> в следующем примере:
        </p>
        <CodeExample
          code={`class Article {
  constructor(title, date) {
    this.title = title;
    this.date = date;
  }

  static createTodays() {
    // помним, что this = Article
    return new this("Сегодняшний дайджест", new Date());
  }
}

let article = Article.createTodays();

console.log( article.title );`}
          output={`Сегодняшний дайджест`}
        />
        <p>
          Теперь каждый раз, когда нам нужно создать сегодняшний дайджест, нужно
          вызывать <code>Article.createTodays()</code>. Ещё раз, это не метод
          одной статьи, а метод всего класса.
        </p>
        <p>
          Статические методы также используются в классах, относящихся к базам
          данных, для поиска/сохранения/удаления вхождений в базу данных,
          например:
        </p>
        <CodeExample
          code={`// предположим, что Article - это специальный класс для управления статьями
// статический метод для удаления статьи по id:
Article.remove({id: 12345});`}
        />
        <WarningSection
          title={`Статические методы недоступны для отдельных объектов`}
        >
          <p>
            Статические методы могут вызываться для классов, но не для отдельных
            объектов.
          </p>
          <p>Например. такой код не будет работать:</p>
          <CodeExample
            code={`// ...
article.createTodays(); /// Error: article.createTodays is not a function`}
          />
        </WarningSection>
      </section>
      <section className="mb-3">
        <h2 className="text-2xl font-bold mb-2">Статические свойства</h2>
        <WarningSection title={`Новая возможность`}>
          <p>
            Эта возможность была добавлена в язык недавно. Примеры работают в
            последнем Chrome.
          </p>
        </WarningSection>
        <p>
          Статические свойства также возможны, они выглядят как свойства класса,
          но с <code>static</code> в начале:
        </p>
        <CodeExample
          code={`class Article {
  static publisher = "Илья Кантор";
}

console.log( Article.publisher );`}
          output={`Илья Кантор
`}
        />
        <p>
          Это то же самое, что и прямое присваивание <code>Article</code>:
        </p>
        <CodeExample code={`Article.publisher = "Илья Кантор";`} />
      </section>
      <section className="mb-3">
        <h2 className="text-2xl font-bold mb-2">
          Наследование статических свойств и методов
        </h2>
        <p>Статические свойства и методы наследуются.</p>
        <p>
          Например, метод <code>Animal.compare</code> в коде ниже наследуется и
          доступен как <code>Rabbit.compare</code>:
        </p>
        <CodeExample
          code={`class Animal {
  constructor(name, speed) {
    this.speed = speed;
    this.name = name;
  }

  run(speed = 0) {
    this.speed += speed;
    console.log(\`\${this.name} бежит со скоростью \${this.speed}.\`);
  }

  static compare(animalA, animalB) {
    return animalA.speed - animalB.speed;
  }
}

// Наследует от Animal
class Rabbit extends Animal {
  hide() {
    console.log(\`\${this.name} прячется!\`);
  }
}

let rabbits = [new Rabbit('Белый кролик', 10), new Rabbit('Чёрный кролик', 5)];

rabbits.sort(Rabbit.compare);

rabbits[0].run();`}
          output={`Чёрный кролик бежит со скоростью 5.`}
        />
        <p>
          Мы можем вызвать <code>Rabbit.compare</code>, при этом будет вызван
          унаследованный <code>Animal.compare</code>.
        </p>
        <p>
          Как это работает? Снова с использованием прототипов. Как вы уже могли
          предположить, <code>extends</code> даёт <code>Rabbit</code> ссылку{" "}
          <code>[[Prototype]]</code> на <code>Animal</code>.
        </p>
        <img
          src="/images/lessons/javascript/animal-rabbit-static.svg"
          alt="Статические свойства и методы"
          className="mb-4 w-full max-w-md"
        />
        <p>
          Так что <code>Rabbit extends Animal</code> создаёт две ссылки на
          прототип:
        </p>
        <ul className="list-decimal pl-6">
          <li>
            <p>
              Функция <code>Rabbit</code> прототипно наследует от функции{" "}
              <code>Animal</code>.
            </p>
          </li>
          <li>
            <p>
              <code>Rabbit.prototype</code> прототипно наследует от{" "}
              <code>Animal.prototype</code>.
            </p>
          </li>
        </ul>
        <p>
          В результате наследование работает как для обычных, так и для
          статических методов.
        </p>
        <p>Давайте это проверим кодом:</p>
        <CodeExample
          code={`class Animal {}
class Rabbit extends Animal {}

// для статики
console.log(Rabbit.__proto__ === Animal); // true

// для обычных методов
console.log(Rabbit.prototype.__proto__ === Animal.prototype); // true`}
        />
      </section>
    </LessonLayout>
  );
};

export default page;
