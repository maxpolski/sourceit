
//1. Реализовать функцию, которая принимает, как параметр массив чисел (числа в случайном порядке), возвращает так же
//массив, но уже отсортированный в порядке возростания.

/*let arr = [145, 12, 84, 36, 59];

function sortArr(a, b) {
    return a - b;
}
arr.sort(sortArr);
console.log(arr);*/

let arr = [145, 12, 84, 36, 59];

function sortArr(arrToSort) {
    let len = arrToSort.length;
    for (let i = 0; i < len - 1; i++){
        for (let j = 0; j < len - 1; j++){
            if (arrToSort[j] > arrToSort[j + 1]){
                let val = arrToSort [j + 1];
                arrToSort[j + 1] = arrToSort [j];
                arrToSort[j] = val;
            }
        }

    }
    return arrToSort
}
console.log(sortArr(arr));


//2. реализовать функцию, которая принимает два параметра: массив и примитив, возвращает true или false, в зависимости
// от того есть в массиве значение равное єтому примитиву.
//Например:
let arr1 = [1, 'b', 125, 'hello'];
function isIncludesValue (arrey, value) {
    for (let i = 0; i < arrey.length; i++ ){
        if (arrey[i] === value){
            return true;
        }
    }
    return false;
}
console.log(isIncludesValue(arr1, 'hello'));
console.log(isIncludesValue(arr1, 'world'));
console.log(isIncludesValue(arr1, 'b'));


