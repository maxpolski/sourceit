class Machine {
    constructor(name, type) { 
        this.name = name;
        this.type = type;
    }
    turnOn() {
        console.log("Machine is On");
   }
   turnOff() {
       console.log("Machine is Off");
   }
}
// Second Class
class CMAchine extends Machine{
    constructor(name, type, numOfProgramms, manufactuser){
        super(name,type);
        this._numOfProgramms = numOfProgramms;
        this._manufactuser = manufactuser;
    }
    get numOfProgramms(){
        return this._numOfProgramms;
    }
    get manufactuser(){
        return this._manufactuser;
    }
    makeCoffe(){
        console.log('Coffee is make');
    }
    latteCoffee(){
        console.log('Coffee is latte');
    }
}
const cofee = new CMAchine('Kaffit','coffee Machine',3,'Japan');
cofee.turnOn();
cofee.makeCoffe();
cofee.latteCoffee();
cofee.turnOff();

// Third Callsses

class Microwave extends Machine{
    constructor(name,type,){
        super(name,type);
        this.dishes = [{ nameOfDish: 'potato', time: 30},{nameOfDish: 'pizza' , time: 45}];
    }
    cookDish(nameOfDish){
        let time;
        this.dishes.find(function(element,index){
            if(nameOfDish === element.nameOfDish){
                time = +element.time;
                console.log(nameOfDish + 'cooking ,please wait '+ time + ' seconds');
                return true;
            }
            return false;
        });
        if(time != undefined){
            setTimeout(function() {
                console.log(nameOfDish ,' is cooked');
            }, time * 1000);
        }
    }
}
const micr = new Microwave('Kaffit');
micr.cookDish('pizza');
