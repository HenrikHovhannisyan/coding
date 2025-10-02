import React from "react";
import LessonLayout from "@/components/LessonLayout";
import CodeExample from "@/components/CodeExample";
import InfoSection from "@/components/InfoSection";

const Page = () => {
  return (
    <LessonLayout
      title="Введение в Python"
      page="python/basics/introduction"
    >
      <section className="mb-3">
        <h2 className="text-2xl font-bold mb-2">Что такое Python?</h2>
        <p>
          Python — высокоуровневый язык программирования общего назначения, 
          который был создан Гвидо ван Россумом и выпущен в 1991 году. Python 
          отличается простым синтаксисом, который делает его идеальным языком 
          для начинающих программистов.
        </p>
        <p className="mt-2">
          Python широко используется в различных областях, включая:
        </p>
        <ul className="list-disc pl-6 mt-2">
          <li>Веб-разработку</li>
          <li>Анализ данных и машинное обучение</li>
          <li>Автоматизацию задач</li>
          <li>Научные вычисления</li>
          <li>Разработку игр</li>
        </ul>
      </section>

      <section className="mb-3">
        <h2 className="text-2xl font-bold mb-2">Особенности Python</h2>
        <p>
          Python имеет ряд особенностей, которые делают его популярным среди 
          разработчиков:
        </p>
        <ul className="list-disc pl-6 mt-2">
          <li>Простой и понятный синтаксис</li>
          <li>Динамическая типизация</li>
          <li>Автоматическое управление памятью</li>
          <li>Богатая стандартная библиотека</li>
          <li>Большое сообщество и множество сторонних библиотек</li>
          <li>Кроссплатформенность</li>
        </ul>
      </section>

      <section className="mb-3">
        <h2 className="text-2xl font-bold mb-2">Ваша первая программа на Python</h2>
        <p>
          Традиционно, первая программа на любом языке программирования — это 
          программа "Hello, World!". Вот как она выглядит на Python:
        </p>
        <CodeExample
          code={`print("Hello, World!")`}
          output={`Hello, World!`}
        />
        <p className="mt-2">
          Как видите, Python очень лаконичен. Для сравнения, в языках вроде Java 
          или C++ для вывода текста на экран требуется гораздо больше кода.
        </p>
      </section>

      <InfoSection title="Версии Python">
        <p>
          На сегодняшний день существуют две основные версии Python: Python 2 и 
          Python 3. Python 2 больше не поддерживается с 2020 года, поэтому 
          рекомендуется использовать Python 3.
        </p>
        <p className="mt-2">
          В этих уроках мы будем использовать Python 3, так как это актуальная 
          и поддерживаемая версия языка.
        </p>
      </InfoSection>
    </LessonLayout>
  );
};

export default Page;