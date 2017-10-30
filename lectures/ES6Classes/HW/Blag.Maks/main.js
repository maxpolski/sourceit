class Machine {
            constructor(name, type){
              this.name = name;
              this.type = type;
            }

            turnOn() {
                console.log(this.name + ' ' + this.type + ' is on');
            }
            turnOff(){
                console.log(this.name + ' ' + this.type + ' is off');
            }
        }

        class CoffeeMachine extends Machine {
            constructor(name, type, numOfPrograms, manufacturer){
            super(name, type);
            this.numOfPrograms = numOfPrograms;
            this.manufacturer = manufacturer;
            } 
            
            makeCoffe(){
                console.log('Coffe is ready');
            }
            makeLatte(){
                console.log('Latte is ready');
            }
        }
        const nokia = new CoffeeMachine ('Nokia', 'coffeemachine', 1, 'poland');

        nokia.turnOn();
        nokia.makeCoffe();
        nokia.makeLatte();
        nokia.turnOff();


        class Microwave extends Machine {
            constructor(name, type, dishes){
                super(name, type);
                this.dishes =  [
            { nameOfDish: 'potato', time: 3}, 
            { nameOfDish: 'pizza', time: 5 }];
            }

            cookDish(nameOfDish){
                let dish = this.dishes.find(dishes => dishes.nameOfDish === nameOfDish);        
                
                console.log(dish.nameOfDish + ' is cooking. Wait ' + dish.time + 'sec...');
                setTimeout(function() {
                    alert(dish.nameOfDish + ' is ready!');
                    console.log(dish.nameOfDish + ' is ready!');
                    microwave.turnOff()
                }, dish.time * 1000);
            };
        }

        const microwave = new Microwave ('Sony', 'microwave', 1 , 'Japan')
        microwave.turnOn();
        microwave.cookDish('pizza');