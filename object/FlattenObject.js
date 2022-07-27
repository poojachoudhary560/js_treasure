// Flatten object
// let obj1 = {
//     a: 1,
//     b: 2,
//     c: {
//         age: 30,
//         h: {
//             d: 1,
//                 h: {
//             d: 1
//         }
//         }
//     }
// };

// o/p
/*
{
    a: 1,
    b: 2,
    'c.age': 30,
    'c.h.d': 1,
    'c.h.h.d': 1
} */

function flattenObj(obj, path) {
  let flatObj = {};
  for (let i in obj) {
    if (typeof obj[i] === "object") {
      let newPath = path ? `${path}.${i}` : i;
      let res = flattenObj(obj[i], newPath);
      flatObj = { ...flatObj, ...res };
    } else {
      path ? (flatObj[`${path}.${i}`] = obj[i]) : (flatObj[i] = obj[i]);
    }
  }
  return flatObj;
}

let obj1 = {
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
console.log(flattenObj(obj1, ""));
