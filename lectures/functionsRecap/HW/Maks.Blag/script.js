function createCounter (startCount, incrementor){
    //var counter = startCount || 0;  
    //var increment = incrementor || 1;
    this.counter = startCount || 0;  
    this.increment = incrementor || 1;
        return () => {
            console.log(this.counter);
            this.counter += this.increment;
            //console.log(counter);
            //counter += increment;
    }
};

const counter = createCounter();
counter() 
counter() 
counter() 

const counterFoo = createCounter(1);
counter()
counter()
counter() 
//console.log(counterFoo)

const counterBoo = createCounter(50, 25);
counter()
counter()
counter()