export default function createCounter(startCount = 0, incrementor = 1) {
  let count = startCount;
  return () => {
    const currentCount = count;
    count += incrementor;
    return currentCount;
  };
}
