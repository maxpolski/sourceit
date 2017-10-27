Я совсем забыл вам сказать про Object.create во время лекции.
Который является обязательным, когда мы хотим сделать наследование в JS.

Когда у нас есть 

function Animal (name) {
  this.name = name;
}
Animal.prototype.sayMyName = function () { console.log(this.name) };

и

function Cat (name) {
  Animal.apply(this, arguments);
}

то мы еще должны сделать

Cat.prototype = Object.create(Animal.prototype);

это нужно для того, чтобы методы из Animal появились в Cat.
т е, чтобы можно было сделать 

const cat = new Cat('Fluffy');

cat.sayMyName(); //Fluffy;

