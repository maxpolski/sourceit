var arr = [1, 4, 25, 13, 99]; // arr - массив, который нужно отсортировать
var n = arr.length;
for (var i = 0; i < n-1; i++) {
    for (var j = 0; j < n-1-i; j++) {
        if (arr[j+1] < arr[j]) {
            var t = arr[j+1];
            arr[j+1] = arr[j];
            arr[j] = t;
        }
    }
}                

console.log(arr);    // На выходе сортированный по возрастанию массив arr. [1, 4, 13, 25, 99]; 