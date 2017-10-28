class Machine {
  constructor(type) {
    this.type = type;
    this.isTurnedOn = false;
  }

  turnOn() {
    this.isTurnedOn = true;
  }

  turnOff() {
    this.isTurnedOn = false;
  }

  getState() {
    console.log('Machine is ' + (this.isTurnedOn ? 'turned on.' : 'turned off.'));
  }
}

function MachineFS(type) {
  this.type = type;
  this.isTurnedOn = false;
}

MachineFS.prototype.turnOn = function() {
  this.isTurnedOn = true;
}

MachineFS.prototype.turnOff = function() {
  this.isTurnedOn = false;
}

MachineFS.prototype.getState = function() {
  console.log('Machine is ' + (this.isTurnedOn ? 'turned on.' : 'turned off.'))
}

function CoffeMachineFS() {
  MachineFS.apply(this, arguments);
}

CoffeMachineFS.prototype = Object.create(MachineFS.prototype);

class CoffeMachine extends Machine {
  constructor(type, numOfPrograms) {
    super(type);
    this._numOfPrograms = numOfPrograms;
  }

  set numOfPrograms(newNumOfPrograms) {
    if (Number.isInteger(newNumOfPrograms)) {
      console.log('New num of programs is ', newNumOfPrograms);
      this._numOfPrograms = newNumOfPrograms;
    } else {
      console.error('Invalid new num of programs');
    }
  }

  get numOfPrograms() {
    return this._numOfPrograms;
  }

  makeCoffee() {
    console.log('Coffee was successfully made');
  }

  getState() {
    console.log('CoffeMachine is ' + (this.isTurnedOn ? 'turned on.' : 'turned off.'))
  }
}

const coffeMachine = new CoffeMachine('coffeMachine', 13);
coffeMachine.getState();
coffeMachine.turnOn();
console.log('Num of programs is ', coffeMachine.numOfPrograms);
coffeMachine.getState();
coffeMachine.makeCoffee();
coffeMachine.numOfPrograms = 15;
console.log('Num of programs is ', coffeMachine.numOfPrograms);
