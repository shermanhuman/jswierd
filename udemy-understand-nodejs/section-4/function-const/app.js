var Person = function(){
	this.productive = 0;
	this.death = '';
}

Person.prototype.years = function(){
	return this.death - this.productive;
}

var jane = new Person();
jane.productive = 34;
jane.death = 40;



console.log(jane.years());
