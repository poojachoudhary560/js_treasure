function A() {
  this.x = 10;
  this.y = function () {
    return this.x;
  };
  this.z = () => {
    return this.x;
  };
}
let a = new A();
console.log(a.y());
console.log(a.z());

function B() {
  this.x = 20;
}
let b = new B();
b.y = a.y;
b.z = a.z;

console.log(b.y());
console.log(b.z());
