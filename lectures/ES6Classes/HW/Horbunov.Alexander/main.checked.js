// First class
class Machine {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
  turnOn() {
    console.log(this.name + ' ' + this.type + ' is on');
  }
  turnOff() {
    console.log(this.name + ' ' + this.type + ' is off');
  }
}

// Second class
class CoffeeMachine extends Machine {
  constructor(name, type, numOfProgramms, manufacturer) {
    super(name, type);
    this._numOfProgramms = numOfProgramms;
    this._manufacturer = manufacturer;
  }
  makeCoffee() {
    console.log('Making coffee...');
  }
  makeLatte() {
    console.log('Making latte...');
  }
}

// Third class
class Microwave extends Machine {
  constructor(name, type) {
    super(name, type);
    this.dishes = [{ nameOfDish: 'potato', time: 30 }, { nameOfDish: 'pizza', time: 45 }];
  }
  cookDish(nameOfDish) {
    let dish = this.dishes.find(dish => dish.nameOfDish === nameOfDish);
    console.log(nameOfDish + ' is being cooked, please wait ' + dish.time + ' seconds.');

    if (dish.time !== undefined) {
      setTimeout(() => {
        alert(nameOfDish + ' is ready!');
        this.turnOff();
      }, dish.time * 1000);
    } else {
      alert(this.type + ' does not know how to cook ' + nameOfDish);
      this.turnOff();
    }
  }
  
}

// Test
const coffeeMachine = new CoffeeMachine('DreamCoffee', 'coffeemachine', 12, 'DC');
coffeeMachine.turnOn();
coffeeMachine.turnOff();

const microwave = new Microwave('WavePRO', 'microwave');
microwave.turnOn();
microwave.cookDish('potato');