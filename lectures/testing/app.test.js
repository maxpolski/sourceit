const app = require('./app');

const {
  add,
  runWithDelay,
  myMap,
} = app;

// class MockTimeout {
//   timeout(...realArgs) {
//     this.realArgs = realArgs;
//   }

//   calledWith(...args) {
//     let isEqual = true;
//     this.realArgs.forEach((arg, i) => {
//       if (arg !== args[i]) {
//         isEqual = false;
//       }
//     });
//     return isEqual;
//   }
// }

console.log('function add should summarise it`s aguments');
const testSum = 87;
const result = add(10, 5, 13, 20, 39);
if (result !== testSum) {
  throw new Error(`expected result ${testSum}, but got ${result}`);
}
console.log('OK');

console.log('function runWithDelay should return Promise');
let runWithDelayResult = runWithDelay(() => {}, 1000);
if (!(runWithDelayResult instanceof Promise)) {
  throw new Error('function runWithDelay doesn`t return Promise');
}
runWithDelayResult = undefined;
console.log('OK');

console.log(`
  function runWithDelay should return Promise
  which resolves with result of execution function which was passed as a first param`);
const expectedResult = 'testResult';
const testFunction = () => expectedResult;
runWithDelayResult = runWithDelay(testFunction, 0);
runWithDelayResult
  .then((promiseResult) => {
    if (promiseResult !== expectedResult) {
      throw new Error(`Promise was resolved with ${promiseResult}, expected ${expectedResult}`);
    }
    console.log('OK');
  }).catch(err => console.error(err));

console.log('myMap should work as expected');
const expectedMyMapResult = [2, 4, 10, 16];
const mockMyMapParams = [1, 2, 5, 8];
const mockMyMapFunc = el => el * 2;

const myMapResult = myMap(mockMyMapParams, mockMyMapFunc);
console.log('myMapResult', myMapResult);
console.log('expectedMyMapResult', expectedMyMapResult);

const isEqual = myMapResult.reduce((prev, cur, i) =>
  (cur === expectedMyMapResult[i]) && prev, true);

if (!isEqual) {
  throw new Error('Not equal');
}
console.log('OK');
