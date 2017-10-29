//1.Создать класс (функцию конструктор) Machine со свойствами name и type;
//Добваить ей два метода turnOn и turnOff;
class Machine {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }

    turnOn() {
        console.log(this.name + ' ' + this.type + ' ON')
    }

    turnOff() {
        console.log(this.name + ' ' + this.type + 'OFF')
    }
}

//2.Создать класс (функцию конструктор) CoffeeMachine со свойствами,
//    унаследовать его от Machine и добавить свои свойства: numOfProgramms, manufacturer,
//    добавить свои методы: makeCoffee, makeLatte;

class CoffeMachine extends Machine {
    constructor(name, type, numOfPrograms, manufacturer) {
        super(name, type);
        this._numOfPrograms = numOfPrograms;
        this._manufacturer = manufacturer
    }

    makeCoffe() {
        console.log('Coffee is ready');
    }

    makeLatte() {
        console.log('Latte ready');
    }

    get numOfPrograms() {
        return this._numOfPrograms;
    }

    get manufacturer() {
        return this._manufacturer;
    }

}

const coffeMachine = new CoffeMachine('Delonghi', 'cofemachine', 12, 'Italy');
coffeMachine.turnOn();
console.log('Num of programs is ' + coffeMachine.numOfPrograms);
coffeMachine.makeLatte();
coffeMachine.makeCoffe();
coffeMachine.turnOff();


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
class Microwave extends Machine {
    constructor(name, type) {
        super(name, type);
        this.dishes = [{
            nameOfDish: 'potato',
            time: 30
        }, {
            nameOfDish: 'pizza',
            time: 45
        }]
    }

    cookDish(nameOfDish) {
        let timeCooking;
        let dish = this.dishes.find(dish =>
            nameOfDish === dish.nameOfDish);
        timeCooking = dish.time;
        /*console.log(timeCooking);
        console.log(dish);*/
        console.log(nameOfDish + ' will be ready through ' + timeCooking + ' seconds');

        setTimeout(function () {
            alert(nameOfDish + ' is ready');
            microwave.turnOff()
        }, timeCooking * 1000);


    }

}

const microwave = new Microwave('Bosh', 'microwave');
microwave.turnOn();
microwave.cookDish('potato');


