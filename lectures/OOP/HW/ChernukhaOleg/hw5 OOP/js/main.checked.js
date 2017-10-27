//1.Создать класс (функцию конструктор) Machine со свойствами name и type;
//Добваить ей два метода turnOn и turnOff;

function Machine(name, type) {
    this.name = name;
    this.type = type;
}
Machine.prototype.turnOn = function () {
    console.log(this.name + ' ' + this.type + ' ON')
};
Machine.prototype.turnOff = function () {
    console.log(this.name + ' ' + this.type + ' OF')
};
//2.Создать класс (функцию конструктор) CoffeeMachine со свойствами,
//    унаследовать его от Machine и добавить свои свойства: numOfProgramms, manufacturer,
//    добавить свои методы: makeCoffee, makeLatte;

function CoffeMachine(numOfPrograms, manufacturer) {
    Machine.apply(this,arguments);
    this.numOfProgramms = numOfPrograms;
    this.manufacturer = manufacturer;
}
CoffeMachine.prototype = Object.create(Machine.prototype);
CoffeMachine.prototype.makeCoffee = function () {
console.log('Coffee is ready')
};
CoffeMachine.prototype.makeLatte = function () {
console.log('Latte ready')
};
const cofeMachine = new CoffeMachine('Delonghi', 'cofemachine', 12, 'Italy');
cofeMachine.turnOn();

/*
3.Создать класс (функцию конструктор) Microwave со свойствами,
    унаследовать его от Machine и добавить свои свойства: disches(это должен быть массив объектов),
например [{ nameOfDish: 'potato', time: 30 }, { nameOfDish: 'pizza', time: 45 }], здесь nameOfDish - название блюда,
    а time - время приготовления;
добавить метод cookDish, который будет принимать, как параметр название блюда, по названию будет назодить в описанном выше массиве
время приготовления блюда, с помощью метода find https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/find,
    исходя из значения time будет запускать таймер и по истечении оного - выводить алерт, например:
const microwave = new Microwave('Bosch');
microwave.cookDish('potato'); //через 30 секунд выведет "Potato is ready!";*/

function Microwave() {
    Machine.apply(this, arguments);
    this.dishes = [{
        nameOfDish: 'potato',
        time: 30
    }, {
        nameOfDish: 'pizza',
        time: 45
    }]
}
Microwave.prototype = Object.create(Machine.prototype);
Microwave.prototype.cookDish = function(nameOfDish) {
    let dish = this.dishes.find(dish => dish.nameOfDish === nameOfDish);
    console.log(nameOfDish + ' will be ready through ' + dish.time + ' seconds');
    setTimeout(function () {
        alert(nameOfDish + ' is ready');
        microwave.turnOff()
    },dish.time * 1000 );

};
const microwave = new Microwave('Bosh', 'microwave');
microwave.turnOn();
microwave.cookDish('potato');
