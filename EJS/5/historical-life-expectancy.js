function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

function groupBy (array, f){
  var obj = {};
  array.forEach(function(element, index){
    obj[f(element)]=[];
    });
  array.forEach(function(element, index){
    obj[f(element)].push(element);
  });
 
  return obj;
}

function byCentury (element){
      return Math.ceil(element.died / 100);
}

	grouped = (groupBy(ancestry, byCentury));
	
for(var prop in grouped){
  		ages = grouped[prop].map(function (element, index){
        	return element.died - element.born;
        });
  		
		console.log(prop + ": " + average(ages).toFixed(1));
	}

//console.log(results);
// Your code here.

// → 16: 43.5
//   17: 51.2
//   18: 52.8
//   19: 54.8
//   20: 84.7
//   21: 94