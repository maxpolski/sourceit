function createCounter(startCount, incrementor) {
  this.counter = startCount || 0;
  this.increment = incrementor || 1;
  return () => {
    console.log(this.counter);
    this.counter += this.increment;
  };
}


const counterThree = createCounter(50, 25);
counterThree();
counterThree();
counterThree();
