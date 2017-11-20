function createCounter(startCount, incrimentor) {
  this.val = startCount || 0;
  this.inc = incrimentor || 1;

  console.log('Starting value is', this.val, 'incrimentor is', this.inc);

  return () => {
    this.val += this.inc;
    console.log(this.val);
  };
}

const counter1 = createCounter();
counter1();
counter1();
counter1();

const counter2 = createCounter(1);
counter2();
counter2();
counter2();

const counter3 = createCounter(50, 25);
counter3();
counter3();
counter3();
