// function declaration
console.log(test); // function definition of test
console.log(test()); // 101

function test() {
  return 101;
}

// function expression with var
console.log(test1); // undefined
// console.log(test1()); // Error: test1 is not a function

var test1 = function () {
  return 102;
};

// function expression with arrow
console.log(test3); // undefined
var test3 = () => {
  return 103;
};
