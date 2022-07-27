// function
let add = function (n1, n2) {
  return n1 + n2;
};

let sum = add(2, 3);
console.log(sum);

// constructor
let Car = function (color) {
  this.color = color;
};

let redCar = new Car("red");
console.log(redCar);
console.log(window.color);
