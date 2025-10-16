import React from "react";
import LessonLayout from "@/components/LessonLayout";
import CodeExample from "@/components/CodeExample";

const OOPIntroductionLesson = () => {
    return (
        <LessonLayout
            title="Объектно-ориентированное программирование"
            page="python/oop-introduction"
        >
            <section className="mb-6">
                <p className="mb-4">
                    Объектно-ориентированное программирование (ООП) может быть сложным для тех, кто только начинает изучать Python.
                </p>
                
                <p className="mb-4">В этой лекции мы будем продвигаться в освоении ООП в Python, постепенно изучая следующие темы:</p>
                <ul className="list-disc list-inside mb-6 space-y-1">
                    <li>Объекты</li>
                    <li>Использование ключевого слова <em>class</em></li>
                    <li>Создание атрибутов класса</li>
                    <li>Создание методов в классе</li>
                    <li>Изучение наследования</li>
                    <li>Изучение полиморфизма</li>
                    <li>Изучение специальных методов для классов</li>
                </ul>
                
                <p className="mb-4">Начнём с того, что вспомним базовые объекты Python. Например:</p>
            </section>

            <section className="mb-6">
                <CodeExample
                    code={`lst = [1,2,3]`}
                    output={``}
                />
                
                <p className="mb-4">Помните, как мы вызываем методы для списка?</p>
                
                <CodeExample
                    code={`lst.count(2)`}
                    output={`1`}
                />
                
                <p className="mb-4">
                    По сути, в этой лекции мы попробуем создать тип объекта, похожий на список. Мы уже изучали, как создавать функции. 
                    Давайте изучим объекты:
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-bold mb-4">Объекты</h2>
                <p className="mb-4">
                    В Python, <em>любой элемент является объектом</em>. В одной из предыдущих лекций мы видели, что можно использовать 
                    type(), чтобы узнать тип объекта:
                </p>
                
                <CodeExample
                    code={`print(type(1))
print(type([]))
print(type(()))
print(type({}))`}
                    output={`<class 'int'>
<class 'list'>
<class 'tuple'>
<class 'dict'>`}
                />
                
                <p className="mb-4">
                    Мы знаем, что эти элементы являются объектами. Как мы можем создавать свои собственные типы объектов? 
                    Для этого как раз пригодится ключевое слово <code>class</code>.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-bold mb-4">class</h2>
                <p className="mb-4">
                    Объекты пользователя создаются с помощью ключевого слова <code>class</code>. Класс - это шаблон, описывающий будущий объект. 
                    Из классов мы создаем экземпляры (инстансы). Экземпляр - это конкретный объект, созданный на основе конкретного класса. 
                    Например, в примере выше мы создали объект <code>lst</code>, это экземпляр объекта list.
                </p>
                <p className="mb-4">Посмотрим, как мы можем использовать <code>class</code>:</p>
                
                <p className="mb-2 font-semibold">Создаем новый тип объекта, под названием Sample</p>
                <CodeExample
                    code={`class Sample:
    pass

# Экземпляр класса Sample
x = Sample()

print(type(x))`}
                    output={`<class '__main__.Sample'>`}
                />
                
                <p className="mb-4">
                    Согласно принятым соглашениям об именовании, имена классов начинаются с заглавной буквы. Обратите внимание, 
                    что <code>x</code> теперь ссылается на экземпляр нашего нового класса Sample.
                </p>
                <p className="mb-4">
                    Внутри класса у нас пока есть только слово pass. Но мы можем определить атрибуты и методы класса.
                </p>
                
                <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-400 p-4 mb-4">
                    <p className="text-blue-800 dark:text-blue-200 mb-2">
                        <strong>Атрибут</strong> - это характеристика объекта.
                    </p>
                    <p className="text-blue-800 dark:text-blue-200">
                        <strong>Метод</strong> - это операция, которую мы можем выполнять над объектом.
                    </p>
                </div>
                
                <p className="mb-4">
                    Например, мы можем создать класс под названием Dog - собака. Атрибут собаки это например её порода или её имя, 
                    а метод например может быть метод .bark() - лаять.
                </p>
                <p className="mb-4">Рассмотрим атрибуты на примере.</p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-bold mb-4">Атрибуты</h2>
                <p className="mb-4">Синтаксис создания атрибута следующий:</p>
                <CodeExample
                    code={`self.attribute = something`}
                    output={``}
                />
                
                <p className="mb-4">Есть специальный метод, который называется так:</p>
                <CodeExample
                    code={`__init__()`}
                    output={``}
                />
                
                <p className="mb-4">Это метод используется для инициализации атрибутов объекта. Например:</p>
                
                <CodeExample
                    code={`class Dog:
    def __init__(self,breed):
        self.breed = breed
        
sam = Dog(breed='Lab')
frank = Dog(breed='Huskie')`}
                    output={``}
                />
                
                <p className="mb-4">Разберёмся, что здесь происходит. Специальный метод</p>
                <CodeExample
                    code={`__init__()`}
                    output={``}
                />
                <p className="mb-4">вызывается автоматически, сразу после создания объекта:</p>
                <CodeExample
                    code={`def __init__(self, breed):`}
                    output={``}
                />
                <p className="mb-4">
                    Каждый атрибут в определении класса начинается со ссылки на экземпляр объекта. По соглашению об именовании, 
                    он называется self. Далее, breed это параметр. Значение передается при инициализации класса.
                </p>
                <CodeExample
                    code={`self.breed = breed`}
                    output={``}
                />
                
                <p className="mb-4">
                    Итак, мы создали два экземпляра класса Dog. У нас два разных типа породы - breed. Мы можем получить значения атрибутов вот так:
                </p>
                
                <CodeExample
                    code={`sam.breed`}
                    output={`'Lab'`}
                />
                
                <CodeExample
                    code={`frank.breed`}
                    output={`'Huskie'`}
                />
                
                <p className="mb-4">
                    Обратите внимание, что здесь нет скобок после breed; это потому, что атрибуты не принимают на вход никаких параметров.
                </p>
                
                <p className="mb-4">
                    В Python также есть <em>атрибуты класса (class object attributes)</em>. Эти атрибуты одни и те же для всех экземпляров класса. 
                    Например, мы могли бы создать атрибут <em>species</em> (вид) для класса Dog. Собаки, вне зависимости от породы, имени и других атрибутов, 
                    всегда являются млекопитающими (mammal). Мы можем указать это следующим образом:
                </p>
                
                <CodeExample
                    code={`class Dog:
    
    # Class Object Attribute
    species = 'mammal'
    
    def __init__(self,breed,name):
        self.breed = breed
        self.name = name`}
                    output={``}
                />
                
                <CodeExample
                    code={`sam = Dog('Lab','Sam')`}
                    output={``}
                />
                
                <CodeExample
                    code={`sam.name`}
                    output={`'Sam'`}
                />
                
                <p className="mb-4">
                    Обратите внимание, что атрибуты класса объекта определяются вне методов класса. По соглашению, мы помещаем их в начале, 
                    перед методом init.
                </p>
                
                <CodeExample
                    code={`sam.species`}
                    output={`'mammal'`}
                />
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-bold mb-4">Методы</h2>
                <p className="mb-4">
                    Методы - это функции, определённые внутри класса. Они используются для выполнения операций с атрибутами объектов. 
                    Методы это ключевая концепция парадигмы OOP. Они нужны для разделения обязанностей в программировании, 
                    особенно для больших приложений.
                </p>
                <p className="mb-4">
                    Методы можно представить себе как функции, которые работают с объектом, ссылаясь на этот объект с помощью параметра <em>self</em>.
                </p>
                <p className="mb-4">Давайте рассмотрим пример создания класса Circle - круг:</p>
                
                <CodeExample
                    code={`class Circle:
    pi = 3.14

    # Circle инициализируется, используя радиус (по умолчанию 1)
    def __init__(self, radius=1):
        self.radius = radius 
        self.area = radius * radius * Circle.pi

    # Метод для указания радиуса
    def setRadius(self, new_radius):
        self.radius = new_radius
        self.area = new_radius * new_radius * self.pi

    # Метод для определения длины окружности
    def getCircumference(self):
        return self.radius * self.pi * 2


c = Circle()

print('Радиус: ',c.radius)
print('Площадь: ',c.area)
print('Длина окружности: ',c.getCircumference())`}
                    output={`Радиус:  1
Площадь:  3.14
Длина окружности:  6.28`}
                />
                
                <p className="mb-4">
                    В методе __init__ выше, чтобы вычислить атрибут area, мы вызываем Circle.pi. Поскольку в объекте ещё нет своего атрибута .pi, 
                    мы вызываем атрибут класса объекта.<br/>
                    Однако в методе setRadius мы уже работаем с существующим объектом класса Circle, в котором есть свой атрибут pi. 
                    Так что здесь мы можем использовать или Circle.pi, или self.pi.
                </p>
                <p className="mb-4">Теперь давайте поменяем радиус и посмотрим, как это повлияет на наш объект Circle:</p>
                
                <CodeExample
                    code={`c.setRadius(2)

print('Радиус: ',c.radius)
print('Площадь: ',c.area)
print('Длина окружности: ',c.getCircumference())`}
                    output={`Радиус:  2
Площадь:  12.56
Длина окружности:  12.56`}
                />
                
                <p className="mb-4">
                    Отлично! Обратите внимание, как мы использовали нотацию self., чтобы сослаться на атрибуты класса внутри методов. 
                    Изучите код выше, и попробуйте создать свой собственный метод.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-bold mb-4">Наследование (Inheritance)</h2>
                <p className="mb-4">
                    Наследование - это способ создавать новые классы на основе уже существующих классов. Новые классы называются 
                    производными (derived) классами, а те классы, на основе которых они создаются, называются базовыми классами. 
                    Важные преимущества наследования - это переиспользование существующего кода, а также уменьшение сложности программ. 
                    Производные (дочерние) классы переопределяют и/или расширяют функциональность базовых (родительских) классов.
                </p>
                <p className="mb-4">В качестве примера давайте возьмём класс Dog и создадим наследование от класса Animal:</p>
                
                <CodeExample
                    code={`class Animal:
    def __init__(self):
        print("Animal created")

    def whoAmI(self):
        print("Animal")

    def eat(self):
        print("Eating")


class Dog(Animal):
    def __init__(self):
        Animal.__init__(self)
        print("Dog created")

    def whoAmI(self):
        print("Dog")

    def bark(self):
        print("Woof!")`}
                    output={``}
                />
                
                <CodeExample
                    code={`d = Dog()`}
                    output={`Animal created
Dog created`}
                />
                
                <CodeExample
                    code={`d.whoAmI()`}
                    output={`Dog`}
                />
                
                <CodeExample
                    code={`d.eat()`}
                    output={`Eating`}
                />
                
                <CodeExample
                    code={`d.bark()`}
                    output={`Woof!`}
                />
                
                <p className="mb-4">В этом примере у нас есть два класса: Animal и Dog. Animal является базовым классом, а Dog производным классом.</p>
                <ul className="list-disc list-inside mb-4 space-y-2">
                    <li>Производный класс наследует функциональность базового класса - это показано с помощью метода eat().</li>
                    <li>Производный класс меняет поведение базового класса - показано с помощью метода whoAmI().</li>
                    <li>И наконец, производный класс расширяет функциональность базового класса, добавляя новый метод bark().</li>
                </ul>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-bold mb-4">Полиморфизм (Polymorphism)</h2>
                <p className="mb-4">
                    Мы знаем, что функции могут принимать различные параметры, и что методы принадлежат объектам, над которыми они работают. 
                    В Python, <em>полиморфизм</em> - это когда различные объекты класса могут иметь одно и то же название метода, 
                    и эти методы можно вызывать из одной и той же точки кода для различных объектов. Это проще всего объяснить на примере:
                </p>
                
                <CodeExample
                    code={`class Dog:
    def __init__(self, name):
        self.name = name

    def speak(self):
        return self.name+' says Woof!'
    
class Cat:
    def __init__(self, name):
        self.name = name

    def speak(self):
        return self.name+' says Meow!' 
    
niko = Dog('Niko')
felix = Cat('Felix')

print(niko.speak())
print(felix.speak())`}
                    output={`Niko says Woof!
Felix says Meow!`}
                />
                
                <p className="mb-4">
                    Здесь у нас есть классы Dog и Cat, и каждый из них имеет метод `.speak()`. При вызове, метод для каждого объекта `.speak()` 
                    возвращает результат, специфичный для этого объекта.
                </p>
                <p className="mb-4">Есть разные способы продемонстрировать полиморфизм. Прежде всего, с помощью цикла for:</p>
                
                <CodeExample
                    code={`for pet in [niko,felix]:
    print(pet.speak())`}
                    output={`Niko says Woof!
Felix says Meow!`}
                />
                
                <p className="mb-4">Другой способ - с помощью функций:</p>
                
                <CodeExample
                    code={`def pet_speak(pet):
    print(pet.speak())

pet_speak(niko)
pet_speak(felix)`}
                    output={`Niko says Woof!
Felix says Meow!`}
                />
                
                <p className="mb-4">
                    В обоих случаях мы смогли передавать разные типы объектов, и мы получили результаты, разные для каждого типа объекта, 
                    используя один или тот же механизм вызова.
                </p>
                
                <p className="mb-4">
                    Более общей практикой является использование абстрактных классов и наследования. Абстрактный класс - это такой класс, 
                    для которого никогда не создаются экземпляры. Например, у нас никогда не будет объекта Animal, только объекты Dog и Cat, 
                    хотя оба эти класса наследуются от Animal:
                </p>
                
                <CodeExample
                    code={`class Animal:
    def __init__(self, name):    # конструктор класса
        self.name = name

    def speak(self):              # абстрактный метод
        raise NotImplementedError("Subclass must implement abstract method")


class Dog(Animal):
    
    def speak(self):
        return self.name+' says Woof!'
    
class Cat(Animal):

    def speak(self):
        return self.name+' says Meow!'
    
fido = Dog('Fido')
isis = Cat('Isis')

print(fido.speak())
print(isis.speak())`}
                    output={`Fido says Woof!
Isis says Meow!`}
                />
                
                <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 p-4 mb-4">
                    <p className="text-yellow-800 dark:text-yellow-200 font-bold mb-2">
                        Примеры полиморфизма из реальной жизни:
                    </p>
                    <ul className="text-yellow-700 dark:text-yellow-300 space-y-1">
                        <li>• открытие разных типов файлов - для отображения файлов Word, pdf и Excel нужны разные приложения</li>
                        <li>• сложение разных объектов - оператор `+` выполняет и сложение чисел, и конкатенацию строк</li>
                    </ul>
                </div>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-bold mb-4">Специальные методы</h2>
                <p className="mb-4">
                    И наконец, давайте изучим специальные методы. Классы в Python могут выполнять определенные операции с помощью специальных методов. 
                    Эти методы вызываются не напрямую, а с помощью специального синтаксиса языка Python. Для примера давайте создадим класс Book:
                </p>
                
                <CodeExample
                    code={`class Book:
    def __init__(self, title, author, pages):
        print("Создаём книгу")
        self.title = title
        self.author = author
        self.pages = pages

    def __str__(self):
        return "Название: %s, Автор: %s, Кол-во страниц: %s" %(self.title, self.author, self.pages)

    def __len__(self):
        return self.pages

    def __del__(self):
        print("Книга удалена")`}
                    output={``}
                />
                
                <CodeExample
                    code={`book = Book("Руководство по Python", "Влад", 159)

#Special Methods
print(book)
print(len(book))
del book`}
                    output={`Создаём книгу
Название: Руководство по Python, Автор: Влад, Кол-во страниц: 159
159
Книга удалена`}
                />
                
                <p className="mb-4">Методы __init__(), __str__(), __len__() and __del__()</p>
                <p className="mb-4">
                    Эти специальные методы определяются с помощью символов нижнего подчёркивания. Они позволяют использовать определенные функции Python 
                    для объектов, которые создаются на основе нашего класса.
                </p>
            </section>
        </LessonLayout>
    );
};

export default OOPIntroductionLesson;