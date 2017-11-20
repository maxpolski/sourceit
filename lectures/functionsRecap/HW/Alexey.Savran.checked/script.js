// неожиданное решение, но прикольно)
function createCounter(startCount, incrementor) {
  this.count = startCount;
  this.incrementor = incrementor;

  if (startCount === undefined) {
    this.count = 0;
  }

  if (incrementor === undefined) {
    this.incrementor = 1;
  }

  return () => {
    console.log(this.count);
    this.count += this.incrementor;
  };
}

const counter = createCounter(50, 25);
counter();
counter();
counter();

