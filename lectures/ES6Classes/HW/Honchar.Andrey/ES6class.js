class Machine {
    constructor(type, name) {
      this.type = type;
      this.name = name;
      this.isTurnedOn = false;
    }
  
    turnOn() {
      this.isTurnedOn = true;
      console.log(this.name + ' is on');
    }
  
    turnOff() {
      this.isTurnedOn = false;
      console.log(this.name + ' is off');
    }
  
    getState() {
      console.log('Machine is ' + (this.isTurnedOn ? 'turned on.' : 'turned off.'));
    }
  }

  class CoffeMachine extends Machine {
    constructor(name, numOfPrograms, manufacturer, type = 'coffeeMachine') {
      super(type, name);
      this._numOfPrograms = numOfPrograms;
    }
       
    makeCoffee() {
      console.log('Coffee was successfully made');
    }

    makeLatte() {
        console.log('Latte was successfully made');
      }
  
    getState() {
      console.log('CoffeMachine is ' + (this.isTurnedOn ? 'turned on.' : 'turned off.'))
    }
  }

  class Microwave extends Machine {
    constructor(name, type = 'microwave', dishes = [{ nameOfDish: 'potato', time: 30}, { nameOfDish: 'pizza', time: 45 }]){
        super(name, type);
        this.dishes = dishes;
    }

    cookDish(nameOfDish) {
        let dish = this.dishes.find(dish => nameOfDish === this.dishes.nameOfDish);
        let time = dish.time;
        console.log("Wait....");
        setTimeout(function() {
            alert(dish.nameOfDish + 'is ready');
            console.log(dish.nameOfDish + 'is ready');
        }, time * 1000);
    }
  }

  const machine = new Machine('refrigirator', 'Donbas');
  const coffeeMachine = new CoffeMachine('Illuzion', 10, 'ITALY');
  const microwave = new Microwave('Tefal');

  machine.turnOn();
  machine.getState();
  machine.turnOff();
  coffeeMachine.getState();
  coffeeMachine.turnOn();
  coffeeMachine.makeCoffee();
  coffeeMachine.makeLatte();
  coffeeMachine.turnOff();
  microwave.turnOn();
  microwave.cookDish('potato');
  microwave.cookDish('pizza');
  microwave.getState();
  microwave.turnOff();