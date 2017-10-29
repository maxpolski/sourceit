/**
* First class Machine
*/
class Machine {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }

  turnOn() {
    console.log(`${this.type} ${this.name} is on`);
  }

  turnOff() {
    console.log(`${this.type} ${this.name} is off`);
  }
}

/**
* Second class CoffeeMachine
*/
class CoffeeMachine extends Machine {
  constructor(name, type, numOfProgramms, manufacturer) {
    super(name, type);
    this._numOfProgramms = numOfProgramms;
    this._manufacturer = manufacturer;
  }

  get numOfProgramms() {
    return this._numOfProgramms;
  }

  get manufacturer() {
    return this._manufacturer;
  }

  makeCoffee() {
    console.log('Your coffee is ready');
  }

  makeLatte() {
    console.log('Your latte is ready');
  }
}

const coffee = new CoffeeMachine('Bosch', 'Coffee Machine', 2, 'Germany');

coffee.turnOn();
coffee.makeCoffee();
coffee.makeLatte();
coffee.turnOff();

/**
* Third class CoffeeMachine
*/
class Microwave extends Machine {
  constructor(name, type) {
    super(name, type);
    this.disches = [{
      nameOfDish: 'potato',
      time: 30,
    },
    {
      nameOfDish: 'pizza',
      time: 45,
    }];
  }

  cookDish(nameOfDish) {
    let time;
    const that = this;
    this.disches.find((elem) => {
      if (nameOfDish === elem.nameOfDish) {
        time = +elem.time;
        console.log(`The ${nameOfDish} is cooked, it will be ready in ${time} seconds.`)
        return true;
      };
      return false;
    });

    if (time !== undefined) {
      setTimeout(() => {
        alert(`${nameOfDish} is ready!`);
        that.turnOff();
      }, time * 1000);
    } else {
      alert(`${this.type} does not know how to cook ${nameOfDish}!`);
      that.turnOff();
    }
  }
}

const microwave = new Microwave('Bosch', 'Microwave');

microwave.turnOn();
microwave.cookDish('potato');