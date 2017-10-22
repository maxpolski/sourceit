let arr = [145, 12, 84, 36, 59];
let arr1 = [78, 61, 33, 156, 212, 0, 1, 32, 19, 68, 87, 11, 10];

function sort(arrToSort) {
    let temp;
    let exit = false;

    while (!exit){
        exit = true;
        for(let i=0; i<arrToSort.length; i++){
            if(arrToSort[i]>arrToSort[i+1]){
                temp=arrToSort[i];
                arrToSort[i] = arrToSort[i+1];
                arrToSort[i+1] = temp;
                exit=false;
            }
        }
    }
    
    for(let i=0; i<arrToSort.length; i++){
        console.log(arrToSort[i]);
    }
}

sort(arr);
sort(arr1);