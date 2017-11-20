// можно было вот так createCounter(startCount = 0, incrementor = 1)...
function createCounter(startCount, incrementor) {
  this.counter = startCount || 0;
  this.increment = incrementor || 1;
  return () => {
    console.log(this.counter);
    this.counter += this.increment;
  };
}

const counterOne = createCounter();
counterOne();
counterOne();
counterOne();

const counterTwo = createCounter(1);
counterTwo();
counterTwo();
counterTwo();

const counterThree = createCounter(50, 25);
counterThree();
counterThree();
counterThree();
