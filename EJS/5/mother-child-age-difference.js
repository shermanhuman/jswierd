function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

hasMoms = ancestry.filter(function(element, index) {
  return byName[element.mother];  
});

agedelta = [];
agedelta = hasMoms.map(function(element, index){
    return element.born - byName[element.mother].born;
});

console.log(average(agedelta).toFixed(1));


// → 31.2