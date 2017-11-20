/* eslint-env browser */


function createCounter(startCount = 0, incrementor = 1) {
  let currentCount = startCount;
  return () => {
    /* eslint-disable no-console */
    console.log(currentCount);
    /* eslint-enable no-console */
    currentCount += incrementor;
  };
}

const counter = createCounter();
counter();
counter();
counter();

const counter1 = createCounter(50, 25);
counter1();
counter1();
counter1();
