function every(array, test){
  	var returnVal = true;
	array.forEach(function (element, index){
      if(!test(element))
        returnVal = false;
    });
	return returnVal;
}

function some(array, test){
  	var returnVal = false;
	array.forEach(function (element, index){
      if(test(element))
        returnVal = true;
    });
	return returnVal;
}

console.log(every([NaN, NaN, NaN], isNaN));
// → true
console.log(every([NaN, NaN, 4], isNaN));
// → false
console.log(some([NaN, 3, 4], isNaN));
// → true
console.log(some([2, 3, 4], isNaN));
// → false