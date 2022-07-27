function A() {
  this.x = 10;
  this.y = function () {
    console.log("----------this", this);
    console.log(this.x);
  };
  this.z = () => {
    console.log("~~~~~~~~~this in arrow", this);
    console.log(this.x);
  };
}

let a = new A();
console.log("a.y()");
a.y();

function B() {
  this.x = 20;
}
let b = new B();
console.log("b.y()");
b.y = a.y;
b.y();

console.log("a.y.call(b)");
a.y.call(b);

console.log("b.z()");
b.z = a.z;
b.z();

console.log("a.z.call(b)");
a.z.call(b);
