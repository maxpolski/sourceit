//class#1
class Machine {
    constructor(name, type){
        this.name = name;
        this.type = type;
    }
    
    turnOn() {
        console.log(this.name + '-'  + this.type + '-'  + 'Включена!');
    }
    
    turnOff() {
        console.log(this.name + '-'  + this.type + '-'  + 'Выключена!');
    }
    
    
}
//class#2

class CoffeMachine extends Machine {
    constructor(name, type, numOfProgramms, manufacturer){
        super(name, type);
        this.numOfProgramms = numOfProgramms;
        this.manufacturer = manufacturer;
    }
    makeCoffe(){
                console.log('Готовим кофе...');
            }
    
    makeLatte(){
                console.log('Готовим латте...');
            }
}

const coffemachine = new CoffeMachine('V-12', 'Coffemachine', 12, 'LG');

coffemachine.turnOn();
coffemachine.makeCoffe();
coffemachine.makeLatte();
coffemachine.turnOff();
console.log(coffemachine instanceof Machine);

//class#3

class Microwave extends Machine {
    constructor(name, type, dishes){
    super(name, type);
    this.dishes = dishes || [];
    }
    cookDish(nameOfDish){
    const dish = this.dishes.find(dish => dish.nameOfDish === nameOfDish);
        setTimeout(function () {
        alert(nameOfDish + ' готово!');
    }, dish.time * 1000);
 };
}

const microwave = new Microwave('LG', 'Microwave', [{ nameOfDish: 'potato', time: 30 }, { nameOfDish: 'pizza', time: 45 }]);
microwave.turnOn();
microwave.cookDish('pizza');
console.log(microwave instanceof Machine);
