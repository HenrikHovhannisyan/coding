import React from "react";
import LessonLayout from "@/components/LessonLayout";
import CodeExample from "@/components/CodeExample";

const page = () => {
  return (
    <LessonLayout
      title="CDN (Content Delivery Network)"
      page="web-technologies/cdn"
    >
      <section className="mb-3">
        <p>
          <code>CDN</code> — это сеть серверов, расположенных по всему миру, для{" "}
          <strong>быстрой доставки контента</strong> пользователям
        </p>
        <p>Зачем нужен CDN?</p>
        <ul className="list-disc pl-6">
          <li>
            <p>
              <strong>Быстрее загрузка</strong> сайта (сервера ближе к
              пользователю)
            </p>
          </li>
          <li>
            <p>
              <strong>Меньше нагрузка</strong> на основной сервер
            </p>
          </li>
          <li>
            <p>
              Часто поддерживают <strong>кеширование</strong>, защиту и
              балансировку трафика
            </p>
          </li>
        </ul>
      </section>
      <section className="mb-3">
        <h2 className="text-2xl font-bold mb-2">Пример использования:</h2>
        <p>
          Если ты подключаешь <strong>jQuery</strong> из <strong>CDN</strong>:
        </p>
        <CodeExample
          code={`<script src="https://cdn.jsdelivr.net/npm/jquery@3.6.0/dist/jquery.min.js"></script>`}
        />
        <p>
          Эта библиотека загружается с ближайшего сервера CDN, а не с твоего
          сайта.
        </p>
      </section>
    </LessonLayout>
  );
};

export default page;
