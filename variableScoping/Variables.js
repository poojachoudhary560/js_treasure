let test = {
  x: "x1",
  print: function () {
    // console.log(x);
    console.log("this.x: ", this.x);
    console.log("this.y: ", this.y);
  },
};
let obj = {
  x: "x11",
  y: "y11",
};
console.log("test.print: ", test.print);
console.log("test.print(): ", test.print());
test.print();
test.print.call(obj);
console.log("------------------------");
let print1 = test.print;
console.log("print1", print1());
