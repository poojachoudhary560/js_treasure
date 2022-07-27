let obj = {
  name: "pooja",
};

function displayName(message, msg2) {
  console.log(message + " " + msg2 + " " + this.name);
  return message + " " + msg2 + " " + this.name;
}
/*
displayName('welcome')
displayName.call(obj, 'welcome') */

Function.prototype.myCall = function (objOrThis) {
  objOrThis = objOrThis || window;
  console.log(arguments, arguments.length);
  var uniqueId = "00" + Math.random();
  while (objOrThis.hasOwnProperty(uniqueId)) {
    uniqueId = "00" + Math.random();
  }
  objOrThis[uniqueId] = this;
  //objOrThis.fn = this; // this points to fn
  console.log(objOrThis);
  console.log(arguments);
  let args = [];
  for (let i = 1; i < arguments.length; i++) {
    args.push("arguments[" + i + "]");
  }
  console.log(args);
  // let str = "objOrThis.fn(" + args + ")"
  let str = "objOrThis[uniqueId](" + args + ")";
  console.log(str);
  console.log(eval("objOrThis[uniqueId]"));
  var result = eval(str);
  delete objOrThis[uniqueId];
  return result;
};

displayName.myCall(obj, "welcome", "dhdh");

// eval('Math.random()')
