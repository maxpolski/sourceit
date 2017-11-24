import './style.css';
import createCounter from './modules/counter';
import users from './modules/user';
import displayAllUsers, { displayName, displayLastName } from './modules/helper';

const count = createCounter(5, 4);

console.log(count());
console.log(count());
console.log(count());

displayName(users);
displayLastName(users);
displayAllUsers('.wrapper', users);
