// зачем столько отступов в начале? Много ошибок eslint
        "use strict";

        class Machine {
            constructor(name, type) {
                this.name = name;
                this.type = type;
            }

            turnOn() {
                console.log(this.name + ' is on');
            }

            turnOff() {
                console.log(this.name + ' is off');
            }
        }

        class CoffeMachine extends Machine {
            constructor(name, type, numOfPrograms, manufacturer) {
                super(name, type);
                this.numOfPrograms = numOfPrograms;
                this.manufacturer = manufacturer;
            }

            makeCoffe() {
                console.log('Coffe please');
            }

            makeLatte() {
                console.log('Latte please');
            }
        }

        class Microwave extends Machine {
            constructor(name, type, dishes) {
                super(name, type);
                this.dishes = dishes;
            }

            cookDish(nameOfDish, time) {
                let currentDish = this.dishes.find((elem, ind, arr) => { return (nameOfDish === elem.nameOfDish) });
                setTimeout(function () { alert(currentDish.nameOfDish + ' is ready!') }, currentDish.time * 1000);
            }
        }




        const machine = new Machine('super', 'puper');
        const coffemachine = new CoffeMachine('super1', 'puper1', 3, 'dell');
        const microwave = new Microwave('s2', 'p2', [{ nameOfDish: 'Borshch', time: 30 }, { nameOfDish: 'Ukha', time: 40 }]);

        microwave.cookDish('Ukha');

        coffemachine.turnOn();
        coffemachine.makeLatte();
        machine.turnOn();
        machine.turnOff();
        microwave.turnOn();

