getName(); // Hello Pooja
getValue(); // Op is getValue is not a function
console.log(x); // undefined
console.log(y); // y is not defined as y is nowhere initialized in code
console.log(getName); // function is returned
console.log(getData); // undefined

var x = 7;

function getName() {
  console.log("Hello Pooja");
}

// arrow functions are hoisted same way as variables
var getValue = () => {
  console.log("Oodles Doodles");
};
getName();
console.log(x);

// getData also beahves just like a variable
var getData = function () {
  console.log("Harry Potter");
};

// Is undefined and not defined same? // no
// Hoisting is a phenomenon by which you can access var and fn even before we have initialized it
