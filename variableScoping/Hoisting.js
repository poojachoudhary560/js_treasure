console.log("x: ", x);
// console.log(x())

var x = function () {
  console.log("aa");
};

//-----------------------

console.log("y: ", y);
console.log("y(): ", y());

function y() {
  console.log("y");
}

console.log("a:", a);
a = "b";
console.log("a:", a);
var a = "a";
console.log("a:", a);

// console.log('b:', b);
// console.log('c:', c);
let b = "b1";
const c = "c1";
