"use client";

import React from "react";
import LessonLayout from "@/components/LessonLayout";
import CodeExample from "@/components/CodeExample";

const page = () => {
  return (
    <LessonLayout
      title="JavaScript Destructuring"
      page="javascript/destructuring"
    >
      <section className="mb-3">
        <p>
          <strong>Destructuring</strong> — это способ извлечения значений из
          массивов и объектов и присваивания их к переменным.
        </p>
      </section>
      <section className="mb-3">
        <h2 className="text-2xl font-bold mb-2">Деструктуризация массива</h2>
        <p>Синтаксис:</p>
        <CodeExample
          code={`const arr = [1, 2, 3];
const [a, b, c] = arr;
console.log(a, b, c);`}
          output={`1
2
3`}
        />
        <p>Пропуск элементов:</p>
        <CodeExample
          code={`const arr = [1, 2, 3];
const [a, , c] = arr;
console.log(a, c);`}
          output={`1
3`}
        />
        <p>Значение по умолчанию:</p>
        <CodeExample
          code={`const arr = [5];
const [a, b = 10] = arr;
console.log(a); // 5
console.log(b); // 10 (так как второго значения нет)`}
          output={`5
10`}
        />
      </section>
      <section className="mb-3">
        <h2 className="text-2xl font-bold mb-2">Деструктуризация объекта</h2>
        <p>Синтаксис:</p>
        <CodeExample
          code={`const user = {
  name: "Anna",
  age: 25,
};

const { name, age } = user;
console.log(name);
console.log(age);`}
          output={`Anna
25`}
        />
        <p>Переименование переменной:</p>
        <CodeExample
          code={`const user = { name: "Ivan" };
const { name: userName } = user;
console.log(userName);`}
          output={`Ivan`}
        />
        <p>Значение по умолчанию:</p>
        <CodeExample
          code={`const user = {};
const { name = "Guest" } = user;
console.log(name);`}
          output={`Guest`}
        />
      </section>
      <section className="mb-3">
        <h2 className="text-2xl font-bold mb-2">
          Деструктуризация объекта с вложенными объектами
        </h2>
        <CodeExample
          code={`const user = {
  name: "Ivan",
  address: {
    city: "Moscow",
    country: "Russia",
  },
};

const {
  name,
  address: { city, country },
} = user;
console.log(name);
console.log(city);
console.log(country);`}
          output={`Ivan
Moscow
Russia`}
        />
      </section>
      <section className="mb-3">
        <h2 className="text-2xl font-bold mb-2">Деструктуризация в функциях</h2>
        <CodeExample
          code={`function showUser({ name, age }) {
  console.log(\`Name: \${name}, Age: \${age}\`);
}

const user = { name: 'Ivan', age: 30 };
showUser(user);`}
          output={`Name: Ivan, Age: 30`}
        />
      </section>
    </LessonLayout>
  );
};

export default page;
