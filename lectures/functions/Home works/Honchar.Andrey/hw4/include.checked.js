let arr = [1, 'b', true, undefined, 'hello', 86];

function isIncludesValue(array, value) {
    for(let i=0; i<array.length; i++){
        if(value === array[i]){
            return true;
        }
    }
    return false;
}

console.log(isIncludesValue(arr, 'b'));
console.log(isIncludesValue(arr, 'hello'));
console.log(isIncludesValue(arr, undefined));
console.log(isIncludesValue(arr, 'hi'));
console.log(isIncludesValue(arr, false));