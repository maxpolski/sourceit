function createCounter(startCount, incrementor) {
  this.counter = startCount || 0;
  this.increment = incrementor || 1;
  return () => {
    console.log(this.counter);
    this.counter += this.increment;
  };
}

const counter = createCounter();
counter();
counter();
counter();

createCounter(1);
counter();
counter();
counter();

createCounter(50, 25);
counter();
counter();
counter();
