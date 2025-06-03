import React from "react";
import LessonLayout from "@/components/LessonLayout";

const page = () => {
  return (
    <LessonLayout
      title="Метод Array.map()"
      description="Как работает метод map() для перебора и преобразования массивов."
    >
      <p>
        Метод <code>map()</code> создаёт новый массив, вызывая функцию для
        каждого элемента исходного массива.
      </p>
      <pre className="bg-dark-100 p-2 rounded mt-2">
        {`const numbers = [1, 2, 3];
    const doubled = numbers.map(n => n * 2);
    console.log(doubled); // [2, 4, 6]`}
      </pre>
    </LessonLayout>
  );
};

export default page;
