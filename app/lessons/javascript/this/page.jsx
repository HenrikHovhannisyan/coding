"use client";

import React from "react";
import LessonLayout from "@/components/LessonLayout";
import CodeExample from "@/components/CodeExample";

const page = () => {
  return (
    <LessonLayout title="JavaScript This" page="javascript/this">
      <section className="mb-3">
        <h2 className="text-2xl font-bold mb-2">
          Что такое this в JavaScript?
        </h2>
        <p>
          <code>this</code> — это специальное ключевое слово, которое{" "}
          <strong>ссылается на контекст выполнения</strong> функции, то есть на{" "}
          <strong>объект, в контексте которого вызвана функция</strong>.
        </p>
      </section>
      <section className="mb-3">
        <h2 className="text-xl font-bold mb-2">Примеры:</h2>
        <ul className="list-decimal pl-6">
          <li>
            <p>
              <strong>Внутри метода объекта:</strong>
            </p>
            <CodeExample
              code={`const user = {
  name: 'Tom',
  sayHi() {
    console.log(this.name); // this → user
  },
};

user.sayHi();`}
              output={`Tom`}
            />
            <p>
              Здесь <code>this</code> указывает на объект <code>user</code>,
              потому что <code>sayHi</code> вызывается как метод объекта.
            </p>
          </li>
          <li>
            <p>
              <strong>В обычной функции:</strong>
            </p>
            <CodeExample
              code={`function show() {
  console.log(this);
}

show(); // 👉 В браузере это будет 'window'`}
            />
            <p>
              В глобальной функции <code>this</code> указывает на{" "}
              <code>window</code> (в браузере) или
              <code>undefined</code> (в строгом режиме).
            </p>
          </li>
          <li>
            <p>
              <strong>В стрелочной функции:</strong>
            </p>
            <CodeExample
              code={`const person = {
  name: "Anna",
  sayLater() {
    setTimeout(() => {
      console.log(this.name);
    }, 1000);
  }
};

person.sayLater();`}
              output={`Anna`}
            />
          </li>
          <li>
            <p>
              <strong> В классе:</strong>
            </p>
            <CodeExample
              code={`class User {
  constructor(name) {
    this.name = name;
  }

  sayHi() {
    console.log(\`Hello, \${this.name}\`);
  }
}

const user = new User("Sofia");
user.sayHi();`}
              output={`Hello, Sofia`}
            />
            <p>
              Здесь <code>this</code> указывает на созданный экземпляр класса.
            </p>
          </li>
        </ul>
      </section>
      <section className="mb-3">
        <h2 className="text-xl font-bold mb-2">Важно:</h2>
        <ul className="list-disc pl-6">
          <li>
            <p>
              <code>this</code> зависит от того,{" "}
              <strong>как вызывается функция</strong>, а не от того, где она
              определена.
            </p>
          </li>
          <li>
            В стрелочной функции <code>this</code> всегда берётся из внешнего
            контекста.
          </li>
          <li>
            В обработчиках событий <code>this</code> может быть элементом, на
            котором сработало событие.
          </li>
        </ul>
      </section>
    </LessonLayout>
  );
};

export default page;
