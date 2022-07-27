// https://blog.usejournal.com/implement-your-own-call-apply-and-bind-method-in-javascript-42cc85dba1b
let obj = {
  item: "vehicles",
  0: "pooja",
};
function display(a, b, c) {
  return this.item + ": " + a + " " + b + " " + c;
}

/*
    console.log(arguments)
    var boundArgs = Array.prototype.slice.call(obj)
    console.log(boundArgs)
*/

// let boundFn = display.bind(obj, 'Car', 'Scooter')
// boundFn('Truck')

Function.prototype.myBind = function (objOrThis) {
  if (typeof this !== "function") {
    throw new Error(this + "cannot be bound as it is not callable");
  }
  var inputFn = this;
  var bindArgs = Array.prototype.slice.call(arguments, 1);
  console.log(bindArgs);
  return function boundFn() {
    var boundArgs = Array.prototype.slice.call(arguments);
    console.log(boundArgs);
    return inputFn.apply(objOrThis, bindArgs.concat(boundArgs));
  };
};

let boundFn = display.myBind(obj, "Cycle", "Trolley");
boundFn("Lorry", "Bike");
