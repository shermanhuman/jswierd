//  When you set an object property to another object property 
//  is it by value or referential?

var dude = { man: 0, dudeman: 1 };
dude.man = dude.dudeman;
dude.dudeman = 44;
console.log("dudeman: ", dude.dudeman);
console.log("man: ", dude.man);