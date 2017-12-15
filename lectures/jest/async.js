export const runWithDelay = (delay, func, timer) =>
  new Promise((resolve) => {
    const wrapper = () => {
      const result = func();
      resolve(result);
    };
    timer(wrapper, delay);
  });


export const dumbFunction = () => {};

runWithDelay(() => console.log('hello world'), 1000, setTimeout);
