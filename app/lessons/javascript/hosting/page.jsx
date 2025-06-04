"use client";

import React from "react";
import LessonLayout from "@/components/LessonLayout";
import CodeExample from "@/components/CodeExample";

const page = () => {
  const code = `
console.log(myVar);
var myVar = 5;`;
  const output = `undefined`;

  return (
    <LessonLayout
      title="JavaScript Hoisting"
      description="Понимание механизма поднятия переменных и функций в JavaScript."
    >
      <p className="mb-4">
        В JavaScript переменные и объявления функций «поднимаются» в верхнюю
        часть своей области видимости. Пример:
      </p>

      <CodeExample code={code} output={output} />

      <p>
        Из-за hoisting, <code>var myVar</code> поднимается наверх, но значение
        присваивается только после <code>console.log</code>, поэтому результат —{" "}
        <strong>undefined</strong>.
      </p>
    </LessonLayout>
  );
};

export default page;
