/* eslint-env browser */

import { counter, counter1 } from './counters.js';
import createCounter from './helper.js';

const counter2 = createCounter(0, -1);
console.log(counter2());
console.log(counter2());

console.log(counter());
console.log(counter());
console.log(counter());

console.log(counter1());
console.log(counter1());
console.log(counter1());
