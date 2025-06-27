import React from "react";
import LessonLayout from "@/components/LessonLayout";
import CodeExample from "@/components/CodeExample";

const page = () => {
  return (
    <LessonLayout title="V8 (движок JavaScript)" page="web-technologies/v8">
      <section className="mb-3">
        <p>
          <code>V8</code> — это <strong>движок JavaScript</strong>,
          разработанный компанией <strong>Google</strong>. Он используется,
          например, в:
        </p>
        <ul className="list-disc pl-6">
          <li>
            <p>Google Chrome</p>
          </li>
          <li>
            <p>Node.js</p>
          </li>
        </ul>
      </section>
      <section className="mb-3">
        <h2 className="text-2xl font-bold mb-2">Что делает V8?</h2>
        <p>
          V8 берет JavaScript-код и{" "}
          <strong>преобразует его в машинный код</strong> — то есть в код,
          который понимает процессор.
        </p>
        <p>
          Это делает выполнение кода <strong>быстрее</strong>, чем если бы он
          выполнялся напрямую как текстовый JS.
        </p>
        <p>
          <strong>Пример:</strong>
        </p>
        <CodeExample
          code={`let a = 2 + 2;
console.log(a);`}
          output={`4`}
        />
        <p>Когда браузер с V8 (например, Chrome) встречает этот код:</p>
        <ul className="list-disc pl-6">
          <li>
            <p>
              Он сначала <strong>парсит</strong> его
            </p>
          </li>
          <li>
            <p>
              Потом <strong>оптимизирует</strong>
            </p>
          </li>
          <li>
            <p>
              И <strong>компилирует в машинный код</strong>
            </p>
          </li>
        </ul>
      </section>
    </LessonLayout>
  );
};

export default page;
