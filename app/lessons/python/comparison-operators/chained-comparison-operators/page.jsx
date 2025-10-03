import React from "react";
import LessonLayout from "@/components/LessonLayout";
import CodeExample from "@/components/CodeExample";

const ChainedComparisonOperatorsLesson = () => {
    return (
        <LessonLayout
            title="Соединение операторов сравнения (chained comparison)"
            page="python/comparison-operators/chained-comparison-operators"
        >
            <section className="mb-6">
                <p className="mb-4">
                    В Python можно объединять несколько операторов сравнения, чтобы выполнять более сложные проверки. Таким способом можно более кратко написать большие Boolean-выражения.
                </p>

                <p className="mb-4">
                    В этой лекции мы посмотрим, как можно объединить операторы сравнения, а также рассмотрим две важных операции в Python: <strong>and</strong> и <strong>or</strong>.
                </p>

                <p className="mb-4">Посмотрим несколько примеров:</p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-bold mb-4">Объединение операторов сравнения</h2>

                <CodeExample
                    code={`1 < 2 < 3`}
                    output={`True`}
                />

                <p className="mb-4">
                    Указанное выше условие проверяет, что 1 меньше 2 <strong>и (and)</strong> что 2 меньше 3. Это можно написать также с помощью операции <strong>and</strong> в Python:
                </p>

                <CodeExample
                    code={`1<2 and 2<3`}
                    output={`True`}
                />

                <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-400 p-4 mb-4">
                    <p className="text-blue-800 dark:text-blue-200">
                        Операция <strong>and</strong> говорит о том, что оба условия должны принимать значение true, чтобы всё условие приняло значение true.
                    </p>
                </div>

                <p className="mb-4">Рассмотрим другой пример:</p>

                <CodeExample
                    code={`1 < 3 > 2`}
                    output={`True`}
                />

                <p className="mb-4">
                    Условие выше проверяет, что 3 больше обоих чисел 1 и 2, так что можно переписать это с помощью <strong>and</strong>:
                </p>

                <CodeExample
                    code={`1<3 and 3>2`}
                    output={`True`}
                />

                <p className="mb-4">
                    Важно сказать, что Python выполняет обе проверки.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-bold mb-4">Логический оператор AND</h2>

                <p className="mb-4">
                    Оператор <strong>and</strong> возвращает <code>True</code> только тогда, когда оба условия истинны:
                </p>

                <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-4">
                    <div className="grid grid-cols-3 gap-4 text-center font-mono text-sm">
                        <div className="font-bold">Условие 1</div>
                        <div className="font-bold">Условие 2</div>
                        <div className="font-bold">Результат</div>
                        <div>True</div>
                        <div>True</div>
                        <div className="text-green-600 font-bold">True</div>
                        <div>True</div>
                        <div>False</div>
                        <div className="text-red-600 font-bold">False</div>
                        <div>False</div>
                        <div>True</div>
                        <div className="text-red-600 font-bold">False</div>
                        <div>False</div>
                        <div>False</div>
                        <div className="text-red-600 font-bold">False</div>
                    </div>
                </div>

                <CodeExample
                    code={`# Примеры с оператором and
print("True and True:", True and True)
print("True and False:", True and False)
print("False and True:", False and True)
print("False and False:", False and False)`}
                    output={`True and True: True
True and False: False
False and True: False
False and False: False`}
                />
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-bold mb-4">Логический оператор OR</h2>

                <p className="mb-4">
                    Мы также можем использовать <strong>or</strong> для сравнений в Python. Например:
                </p>

                <CodeExample
                    code={`1==2 or 2<3`}
                    output={`True`}
                />

                <p className="mb-4">
                    Обратите внимание, почему это равно true; потому что для оператора <strong>or</strong>, нам нужно значение true в одном <em>или</em> в другом условии.
                </p>

                <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-4">
                    <div className="grid grid-cols-3 gap-4 text-center font-mono text-sm">
                        <div className="font-bold">Условие 1</div>
                        <div className="font-bold">Условие 2</div>
                        <div className="font-bold">Результат</div>
                        <div>True</div>
                        <div>True</div>
                        <div className="text-green-600 font-bold">True</div>
                        <div>True</div>
                        <div>False</div>
                        <div className="text-green-600 font-bold">True</div>
                        <div>False</div>
                        <div>True</div>
                        <div className="text-green-600 font-bold">True</div>
                        <div>False</div>
                        <div>False</div>
                        <div className="text-red-600 font-bold">False</div>
                    </div>
                </div>

                <p className="mb-4">Вот ещё один пример:</p>

                <CodeExample
                    code={`1==1 or 100==1`}
                    output={`True`}
                />

                <CodeExample
                    code={`# Примеры с оператором or
print("True or True:", True or True)
print("True or False:", True or False)
print("False or True:", False or True)
print("False or False:", False or False)`}
                    output={`True or True: True
True or False: True
False or True: True
False or False: False`}
                />
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-bold mb-4">Практические примеры</h2>

                <h3 className="text-lg font-semibold mb-3">Проверка диапазона значений</h3>
                <CodeExample
                    code={`# Проверяем, что число находится в диапазоне от 1 до 10
x = 5
print("x в диапазоне 1-10:", 1 <= x <= 10)

y = 15
print("y в диапазоне 1-10:", 1 <= y <= 10)`}
                    output={`x в диапазоне 1-10: True
y в диапазоне 1-10: False`}
                />

                <h3 className="text-lg font-semibold mb-3">Сложные условия</h3>
                <CodeExample
                    code={`# Комбинирование and и or
age = 25
has_license = True
has_car = False

can_drive = age >= 18 and has_license
print("Может водить:", can_drive)

can_travel = has_car or age >= 21
print("Может путешествовать:", can_travel)`}
                    output={`Может водить: True
Может путешествовать: True`}
                />

                <h3 className="text-lg font-semibold mb-3">Объединение нескольких сравнений</h3>
                <CodeExample
                    code={`# Различные способы записи одного и того же условия
a, b, c = 1, 2, 3

# Объединенные операторы
print("Объединенные:", a < b < c)

# С использованием and
print("С and:", a < b and b < c)

# Более сложный пример
print("Сложное условие:", a < b < c and c > 0)`}
                    output={`Объединенные: True
С and: True
Сложное условие: True`}
                />
            </section>

            <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-400 p-4 mt-8">
                <p className="text-green-700 dark:text-green-300 font-bold">
                    Отлично! Теперь вы можете использовать <strong>and</strong> и <strong>or</strong>, а также понимаете, как объединяются операторы сравнения.
                </p>
            </div>
        </LessonLayout>
    );
};

export default ChainedComparisonOperatorsLesson;