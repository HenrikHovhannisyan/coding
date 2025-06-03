import React from "react";
import LessonLayout from "@/components/LessonLayout";

const page = () => {
  return (
    <LessonLayout
      title="JavaScript Hoisting"
      description="Понимание механизма поднятия переменных и функций в JavaScript."
    >
      <p>
        В JavaScript переменные и объявления функций «поднимаются» в верхнюю
        часть своей области видимости...
      </p>
    </LessonLayout>
  );
};

export default page;
