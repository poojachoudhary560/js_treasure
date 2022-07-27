// Deep clone
var obj1 = {
  a: 1,
  b: 2,
  c: {
    age: 30,
    h: {
      d: 1,
      h: {
        d: 1,
      },
    },
  },
};
function deepClone(obj) {
  var objCopy = {};
  for (let i in obj) {
    if (typeof obj[i] === "object") {
      let res = deepClone(obj[i]);
      objCopy[i] = { ...objCopy, ...res };
    } else {
      objCopy[i] = obj[i];
    }
  }
  return objCopy;
}

deepClone(obj1);
