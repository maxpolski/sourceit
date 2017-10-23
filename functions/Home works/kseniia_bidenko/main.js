//1

var arr = [145, 12, 84, 36, 59];

function sort(arrToSort) {
	newarr = arrToSort.sort(function(a,b){
		return a-b;
	});
	alert(newarr);
}

sort(arr); 


//2

var arr2 = [1, 'b', 125, 'hello'];

function includesValue(array, value) {
	var match = false;
  for(var i = 0; i < array.length; i++){
  	if(array[i] === value){
  		match = true;
  	}
  	else{
  		match = false;
  	}
  }
  return match;
}

alert(includesValue(arr2, 'hello')); // должно вернуть true
alert(includesValue(arr2, 'world')); // должно вернуть false