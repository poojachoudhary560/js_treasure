let obj = {
  name: "employees",
};

function displayEmployees(a, b, c) {
  return this.name + ": " + a + " " + b + " " + c;
}

//displayEmployees.apply(obj, ['Mike', 'Sam', 'Lily'])

Function.prototype.myBetterApply = function (objOrThis, ar) {
  objOrThis = objOrThis || window;

  var uniqueId = "00" + Math.random();
  while (objOrThis.hasOwnProperty(uniqueId)) {
    uniqueId = "00" + Math.random();
  }

  objOrThis[uniqueId] = this;
  // return objOrThis.fn()
  var args = [];
  var results = null;
  if (!ar) {
    results = objOrThis[uniqueId]();
  } else {
    for (let i = 0; i < ar.length; i++) {
      args.push("ar[" + i + "]");
    }
    console.log(args);
    let str = "objOrThis[uniqueId](" + args + ")";
    console.log(str);
    results = eval(str);
  }
  console.log(results);
};

displayEmployees.myBetterApply(obj, ["Josh", "Mike", "Tina"]);
displayEmployees.myBetterApply(obj);
