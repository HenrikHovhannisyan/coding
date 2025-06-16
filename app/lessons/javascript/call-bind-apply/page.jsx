"use client";

import React from "react";
import LessonLayout from "@/components/LessonLayout";
import CodeExample from "@/components/CodeExample";

const page = () => {
  return (
    <LessonLayout
      title="JavaScript Call, Bind, Apply"
      page="javascript/call-bind-apply"
    >
      <section className="mb-3">
        <h2 className="text-2xl font-bold mb-2">
          Что такое <code>Call</code>, <code>Bind</code>, <code>Apply</code> в
          JavaScript?
        </h2>
        <p>
          <code>Call</code>, <code>Bind</code>, <code>Apply</code> - это методы,
          которые позволяют вызвать функцию с определенным контекстом{" "}
          <code>(this)</code>.
        </p>
        <p>
          <strong>Call</strong> - вызывает функцию с указанным контекстом и
          аргументами.
        </p>
        <p>
          <strong>Bind</strong> - создает новую функцию, которая всегда будет
          вызываться с указанным контекстом.
        </p>
        <p>
          <strong>Apply</strong> - вызывает функцию с указанным контекстом и
          массивом аргументов.
        </p>
      </section>
      <section className="mb-3">
        <h2 className="text-2xl font-bold mb-2">Примеры</h2>
        <CodeExample
          code={`
          const person = {
            name: "John Doe",
            greet: function(greeting) {
              console.log(\`\${greeting}, \${this.name}\`);
            }
          };
          
          const anotherPerson = { name: "Jane Doe" };
          
          // Call
          person.greet.call(anotherPerson, "Hello"); // "Hello, Jane Doe"
          
          // Bind
          const boundGreet = person.greet.bind(anotherPerson);
          boundGreet("Hello"); // "Hello, Jane Doe"
          
          // Apply
          person.greet.apply(anotherPerson, ["Hello"]); // "Hello, Jane Doe"
          `}
        />
      </section>
      <section className="mb-3">
        <h2 className="text-2xl font-bold mb-2">Когда использовать?</h2>
        <p>
          <code>call</code>/<code>apply</code> — если нужно{" "}
          <strong>немедленно вызвать функцию с нужным контекстом</strong>.
        </p>
        <p>
          <code>bind</code> — если нужно{" "}
          <strong> создать функцию с заданным</strong> <code>this</code>{" "}
          <strong>для будущего использования </strong> (например, в обработчике
          событий).
        </p>
      </section>
    </LessonLayout>
  );
};

export default page;
