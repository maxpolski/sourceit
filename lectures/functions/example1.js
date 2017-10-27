// function expression
function sayHello() {
    console.log('Hello');
}
//function declaration
var sayHello = function() {
    console.log('Hello');
}

//стрелочные функции
var sayHello = () => {
    console.log('Hello');
}

var sayHello = () => console.log('Hello');

//самовызывающаяся анонимная функция
(function() {
    console.log('Hello');
})();
