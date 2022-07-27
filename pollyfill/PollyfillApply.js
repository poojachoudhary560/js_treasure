let obj = {
  item: "cars",
};

function displayCars(a, b, c) {
  return this.item + " " + a + " " + b + " " + c;
}

// displayCars.apply(obj, ['mercedes', 'bmw', 'audi'])

Function.prototype.myApply = function (objOrThis, arr) {
  objOrThis.fn = this;
  // return objOrThis.fn()
  var args = [];
  var result = null;
  if (!arr) {
    result = objOrThis.fn();
  } else {
    console.log(arr);
    for (let i = 0; i < arr.length; i++) {
      args.push("arr[" + i + "]");
    }
    let str = "objOrThis.fn(" + args + ")";
    result = eval(str);
  }
  return result;
};

displayCars.myApply(obj, ["verna", "city", "creta"]);
