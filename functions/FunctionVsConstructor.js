// Function vs Constructor

// Function
let add1 = function(n1, n2) {
    return n1 + n2;
}

let sum = add1(1,2);

// Constructor

let Car = function(color) {
    this.color = color;
}

let redCar = new Car('red');

console.log(redCar);
console.log(window.color);
