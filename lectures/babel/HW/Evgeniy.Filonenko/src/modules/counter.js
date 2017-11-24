function createCounter(startCount = 0, incrementor = 1) {
  let counter = startCount;
  return () => {
    const temp = counter;
    counter += incrementor;
    return temp;
  };
}

export default createCounter;
