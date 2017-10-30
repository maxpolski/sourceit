class Machine {
	constructor(name, type) {
		this.name = name;
 		this.type = type;
 		this.isTurnedOn = false;
	}

	turnOn(){
        this.isTurnedOn = true;
 		console.log('Machine ' + this.name + " is turned on");
 	}
	 
	 turnOff(){
        this.isTurnedOn = false;
 		console.log('Machine ' + this.name + " is turned off");
 	}
}

class CoffeeMachine extends Machine {
	constructor(name, type, numOfPrograms, manufacturer) {
		super(name, type);
 		this.numOfPrograms = numOfPrograms;
 		this.manufacturer = manufacturer;
	}

	makeCoffee(){
		console.log('Machine ' + this.name + ' is making coffee');
	}

	makeLatte(){
		console.log('Machine ' + this.name + ' is making latte');
	}
}

class Microwave extends Machine {
	constructor(name, type, dishes) {
		super(name, type);
 		this.dishes = dishes;
	}

	cookDish(dish){
		this.dishes.find(function(element, index, array){
			if(element.nameOfDish == dish){
				setTimeout(function(){
					console.log(element.nameOfDish +' is ready!')
				}, element.time * 1000);
			}
		});

	};
}


const Gaggia = new CoffeeMachine('Gaggia', 'Baby class D');
Gaggia.turnOn();

const Whirpool = new Microwave('Whirpool', 'microwave', [{nameOfDish: 'lasagna', time: 45}, {nameOfDish: 'omlette', time: 15}, {nameOfDish: 'cake', time: 10}]);

Whirpool.cookDish('cake');