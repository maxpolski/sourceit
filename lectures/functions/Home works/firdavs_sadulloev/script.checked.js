// Реализовать функцию, которая принимает, как параметр массив чисел(числа в случайном порядке), 
// возвращает так же массив, но уже отсортированный в порядке возрастания. 
// Например:
// 		var arr = [145, 12, 84, 36, 59];

// 		function sort(arrToSort) {
//   			// здесь ваш код
// 		}

// 		sort(arr); // [12, 36, 59, 84, 145]

var arr = [145, 12, 84, 36, 59];

function sort(arrToSort) {
    var sizeArr = arrToSort.length;
    for (var i = 0; i < sizeArr-1; i++) {
    	for (var j = 0; j < sizeArr-1-i; j++) {
    		if (arrToSort[j+1] < arrToSort[j]) {
    			var t = arrToSort[j+1]; 
    			arrToSort[j+1] = arrToSort[j]; 
    			arrToSort[j] = t; 
    		}
        }
     }                     
    return arrToSort;
}

console.log(sort(arr)); // [12, 36, 59, 84, 145]

/****************************************************************************************************/

// Реализовать функцию, которая принимает два параметра : массив и примитив, возвращает true или false, 
// в зависимости от того есть в массиве значение равное этому примитиву.
// Например:
// 		var arr = [1, 'b', 125, 'hello'];

// 		function isIncludesValue(array, value) {
// 			// Здесь ваш код
// 		}

// 		isIncludesValue(arr, 'hello') // должно вернуть true
// 		isIncludesValue(arr, 'world') // должно вернуть false

var arr = [1, 'b', 125, 'hello'];

function isIncludesValue(array, value) {
	for (var i = 0; i < array.length; i++) {
		if (array[i] === value) {
			return console.log(true);
		}
	}
	return console.log(false);
}

isIncludesValue(arr, 'hello');
isIncludesValue(arr, 'world');