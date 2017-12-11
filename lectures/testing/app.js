function add(...args) {
  return args.reduce((prev, cur) => prev + cur, 0);
}

function myMap(arr, cb) {
  return arr.reduce((prev, cur) => [...prev, cb(cur)], []);
}

function runWithDelay(func, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(func());
    }, delay);
  });
}

module.exports.add = add;
module.exports.runWithDelay = runWithDelay;
module.exports.myMap = myMap;
