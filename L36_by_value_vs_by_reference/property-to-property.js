var dude = { man: 0, dudeman: 1 };
dude.man = dude.dudeman;
dude.dudeman = 44;
console.log("dudeman: ", dude.dudeman);
console.log("man: ", dude.man);