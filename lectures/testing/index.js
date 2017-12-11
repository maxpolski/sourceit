const { setTimeout } = require('timers');
const app = require('./app');

const {
  add,
  runWithDelay,
} = app;

console.log(add(1, 2));
runWithDelay(() => console.log('hello'), 1000, setTimeout)
  .then(() => console.log('I am done'));
