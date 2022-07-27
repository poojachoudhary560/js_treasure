function steps(val = 0) {
  this.value = val;
}

let obj = new steps(5);
let obj1 = new steps();

console.log(obj);
console.log(obj1);
console.log(steps.prototype);
console.log(obj.__proto__);
console.log(Object.getPrototypeOf(obj));
