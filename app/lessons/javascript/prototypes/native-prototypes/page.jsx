import React from "react";
import LessonLayout from "@/components/LessonLayout";
import CodeExample from "@/components/CodeExample";
import InfoSection from "@/components/InfoSection";
import WarningSection from "@/components/WarningSection";

const page = () => {
  return (
    <LessonLayout
      title="JavaScript Native prototypes"
      page="javascript/prototypes/native-prototypes"
    >
      <section className="mb-3">
        <h2 className="text-2xl font-bold mb-2">Встроенные прототипы</h2>
        <p>В программировании мы часто хотим взять что-то и расширить.</p>
        <p>
          Свойство <code>"prototype"</code> широко используется внутри самого
          языка JavaScript. Все встроенные функции-конструкторы используют его.
        </p>
      </section>
      <section className="mb-3">
        <h2 className="text-2xl font-bold mb-2">Object.prototype</h2>
        <p>Давайте выведем пустой объект:</p>
        <CodeExample
          code={`let obj = {};
alert( obj ); // "[object Object]" ?`}
        />
        <p>
          Где код, который генерирует строку <code>"[object Object]"</code>? Это
          встроенный метод <code>toString</code>, но где он? <code>obj</code>{" "}
          ведь пуст!
        </p>
        <p>
          …Но краткая нотация <code>obj = {}</code> – это то же самое, что и{" "}
          <code>obj = new Object()</code>, где <code>Object</code> – встроенная
          функция-конструктор для объектов с собственным свойством{" "}
          <code>prototype</code>, которое ссылается на огромный объект с методом{" "}
          <code>toString</code> и другими.
        </p>
        <p>Вот что происходит:</p>
        <img
          src="/images/lessons/javascript/object-prototype.svg"
          alt="Native prototypes"
          className="mb-4 w-full max-w-md"
        />
        <p>
          Когда вызывается <code>new Object()</code> (или создаётся объект с
          помощью литерала <code>{`{...}`}</code>), свойство{" "}
          <code>[[Prototype]]</code> этого объекта устанавливается на
          <code>Object.prototype</code> по правилам, которые мы обсуждали в
          предыдущей главе:
        </p>
        <img
          src="/images/lessons/javascript/object-prototype-1.svg"
          alt="Native prototypes"
          className="mb-4 w-full max-w-md"
        />
        <p>
          Таким образом, когда вызывается <code>obj.toString()</code>, метод
          берётся из
          <code>Object.prototype</code>.
        </p>
        <p>Мы можем проверить это так:</p>
        <CodeExample
          code={`let obj = {};

console.log(obj.__proto__ === Object.prototype);
// obj.toString === obj.__proto__.toString === Object.prototype.toString`}
          output={`true`}
        />
        <p>
          Обратите внимание, что по цепочке прототипов выше{" "}
          <code>Object.prototype</code>
          больше нет свойства <code>[[Prototype]]</code>:
        </p>
        <CodeExample
          code={`console.log(Object.prototype.__proto__);`}
          output={`null`}
        />
      </section>
      <section className="mb-3">
        <h2 className="text-2xl font-bold mb-2">Другие встроенные прототипы</h2>
        <p>
          Другие встроенные объекты, такие как <code>Array</code>,{" "}
          <code>Date</code>, <code>Function</code> и другие, также хранят свои
          методы в прототипах.
        </p>
        <p>
          Например, при создании массива <code>[1, 2, 3]</code> внутренне
          используется конструктор массива <code>Array</code>. Поэтому
          прототипом массива становится
          <code>Array.prototype</code>, предоставляя ему свои методы. Это
          позволяет эффективно использовать память.
        </p>
        <p>
          Согласно спецификации, наверху иерархии встроенных прототипов
          находится <code>Object.prototype</code>. Поэтому иногда говорят, что
          «всё наследует от объектов».
        </p>
        <p>Вот более полная картина (для трёх встроенных объектов):</p>
        <img
          src="/images/lessons/javascript/native-prototypes-classes.svg"
          alt="Native prototypes"
          className="mb-4 w-full max-w-4xl"
        />
        <p>Давайте проверим прототипы:</p>
        <CodeExample
          code={`let arr = [1, 2, 3];

// наследует ли от Array.prototype?
console.log( arr.__proto__ === Array.prototype ); // true

// затем наследует ли от Object.prototype?
console.log( arr.__proto__.__proto__ === Object.prototype ); // true

// и null на вершине иерархии
console.log( arr.__proto__.__proto__.__proto__ ); // null`}
          output={`true
true
null`}
        />
        <p>
          Некоторые методы в прототипах могут пересекаться, например, у
          <code>Array.prototype</code> есть свой метод <code>toString</code>,
          который выводит элементы массива через запятую:
        </p>
        <CodeExample
          code={`let arr = [1, 2, 3]
console.log(arr); // 1,2,3 <-- результат Array.prototype.toString`}
          output={`1,2,3`}
        />
        <p>
          Как мы видели ранее, у <code>Object.prototype</code> есть свой метод{" "}
          <code>toString</code>, но так как <code>Array.prototype</code> ближе в
          цепочке прототипов, то берётся именно вариант для массивов:
        </p>
        <img
          src="/images/lessons/javascript/native-prototypes-array-tostring.svg"
          alt="Native prototypes"
          className="mb-4 w-full max-w-md"
        />
        <p>
          В браузерных инструментах, таких как консоль разработчика, можно
          посмотреть цепочку наследования (возможно, потребуется использовать
          <code>console.dir</code> для встроенных объектов):
        </p>
        <img
          src="/images/lessons/javascript/console_dir_array.png"
          alt="Native prototypes"
          className="mb-4 w-full max-w-md"
        />
        <p>
          Другие встроенные объекты устроены аналогично. Даже функции – они
          объекты встроенного конструктора <code>Function</code>, и все их
          методы (<code>call</code>/<code>apply</code>и другие) берутся из{" "}
          <code>Function.prototype</code>. Также у функций есть свой метод{" "}
          <code>toString</code>.
        </p>
        <CodeExample
          code={`function f() {}

console.log(f.__proto__ == Function.prototype); // true
console.log(f.__proto__.__proto__ == Object.prototype); // true, наследует от Object`}
          output={`true
true`}
        />
      </section>
      <section className="mb-3">
        <h2 className="text-2xl font-bold mb-2">Примитивы</h2>
        <p>
          Самое сложное происходит со строками, числами и булевыми значениями.
        </p>
        <p>
          Как мы помним, они не объекты. Но если мы попытаемся получить доступ к
          их свойствам, то тогда будет создан временный объект-обёртка с
          использованием встроенных конструкторов <code>String</code>,{" "}
          <code>Number</code> и <code>Boolean</code>, который предоставит методы
          и после этого исчезнет.
        </p>
        <p>
          Эти объекты создаются невидимо для нас, и большая часть движков
          оптимизирует этот процесс, но спецификация описывает это именно таким
          образом. Методы этих объектов также находятся в прототипах, доступных
          как <code>String.prototype</code>, <code>Number.prototype</code> и{" "}
          <code>Boolean.prototype</code>.
        </p>
        <WarningSection
          title={
            "Значения <code>null</code> и <code>undefined</code> не имеют объектов-обёрток"
          }
        >
          <p>
            Специальные значения <code>null</code> и <code>undefined</code>{" "}
            стоят особняком. У них нет объектов-обёрток, так что методы и
            свойства им недоступны. Также у них нет соответствующих прототипов.
          </p>
        </WarningSection>
      </section>
      <section className="mb-3">
        <h2 className="text-2xl font-bold mb-2">
          Изменение встроенных прототипов
        </h2>
        <p>
          Встроенные прототипы можно изменять. Например, если добавить метод к
          String.prototype, метод становится доступен для всех строк:
        </p>
        <CodeExample
          code={`String.prototype.show = function () {
  console.log(this);
};

'BOOM!'.show();`}
          output={`BOOM!`}
        />
        <p>
          В течение процесса разработки у нас могут возникнуть идеи о новых
          встроенных методах, которые нам хотелось бы иметь, и искушение
          добавить их во встроенные прототипы. Это плохая идея.
        </p>
        <WarningSection title={"Важно:"}>
          <p>
            Прототипы глобальны, поэтому очень легко могут возникнуть конфликты.
            Если две библиотеки добавляют метод String.prototype.show, то одна
            из них перепишет метод другой.
          </p>
          <p>
            Так что, в общем, изменение встроенных прототипов считается плохой
            идеей.
          </p>
        </WarningSection>
        <p>
          <strong>
            В современном программировании есть только один случай, в котором
            одобряется изменение встроенных прототипов. Это создание полифилов.
          </strong>
        </p>
        <p>
          <strong>Полифил</strong> – это термин, который означает эмуляцию
          метода, который существует в спецификации JavaScript, но ещё не
          поддерживается текущим движком JavaScript.
        </p>
        <p>
          Тогда мы можем реализовать его сами и добавить во встроенный прототип.
        </p>
        <p>Например:</p>
        <CodeExample
          code={`if (!String.prototype.repeat) { // Если такого метода нет
  // добавляем его в прототип

  String.prototype.repeat = function(n) {
    // повторить строку n раз

    // на самом деле код должен быть немного более сложным
    // (полный алгоритм можно найти в спецификации)
    // но даже неполный полифил зачастую достаточно хорош для использования
    return new Array(n + 1).join(this);
  };
}

console.log( "La".repeat(3) );`}
          output={`LaLaLa`}
        />
      </section>
      <section className="mb-3">
        <h2 className="text-2xl font-bold mb-2">Заимствование у прототипов</h2>
        <p>
          Заимствование у прототипов это когда мы берём метод из одного объекта
          и копируем его в другой.
        </p>
        <p>Некоторые методы встроенных прототипов часто одалживают.</p>
        <p>
          Например, если мы создаём объект, похожий на массив (псевдомассив), мы
          можем скопировать некоторые методы из <code>Array</code> в этот
          объект.
        </p>
        <p>Пример:</p>
        <CodeExample
          code={`let obj = {
  0: 'Hello',
  1: 'world!',
  length: 2,
};

obj.join = Array.prototype.join;

console.log(obj.join(','));`}
          output={`Hello,world!`}
        />
        <p>
          Это работает, потому что для внутреннего алгоритма встроенного метода
          <code>join</code> важны только корректность индексов и свойство{" "}
          <code>length</code>, он не проверяет, является ли объект на самом деле
          массивом. И многие встроенные методы работают так же.
        </p>
        <p>
          Альтернативная возможность – мы можем унаследовать от массива,
          установив <code>obj.__proto__</code> как <code>Array.prototype</code>,
          таким образом все методы <code>Array</code> станут автоматически
          доступны в <code>obj</code>.
        </p>
        <p>
          Но это будет невозможно, если <code>obj</code> уже наследует от
          другого объекта. Помните, мы можем наследовать только от одного
          объекта одновременно.
        </p>
        <p>
          Заимствование методов – гибкий способ, позволяющий смешивать
          функциональность разных объектов по необходимости.
        </p>
      </section>
      <section className="mb-3">
        <h2 className="text-2xl font-bold mb-2">Итого</h2>
        <ul className="list-disc ms-4">
          <li>
            <p>Все встроенные объекты следуют одному шаблону:</p>
            <ul className="list-disc ms-4">
              <li>
                <p>
                  Методы хранятся в прототипах (<code>Array.prototype</code>,
                  <code>Object.prototype</code>, <code>Date.prototype</code> и
                  т.д.).
                </p>
              </li>
              <li>
                <p>
                  Сами объекты хранят только данные (элементы массивов, свойства
                  объектов, даты).
                </p>
              </li>
            </ul>
          </li>
          <li>
            <p>
              Примитивы также хранят свои методы в прототипах объектов-обёрток:{" "}
              <code>Number.prototype</code>, <code>String.prototype</code>,
              <code>Boolean.prototype</code>. Только у значений{" "}
              <code>undefined</code> и <code>null</code> нет объектов-обёрток.
            </p>
          </li>
          <li>
            <p>
              Встроенные прототипы могут быть изменены или дополнены новыми
              методами. Но не рекомендуется менять их. Единственная допустимая
              причина – это добавление нового метода из стандарта, который ещё
              не поддерживается движком JavaScript.
            </p>
          </li>
        </ul>
      </section>
    </LessonLayout>
  );
};

export default page;
