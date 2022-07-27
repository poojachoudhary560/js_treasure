// const iterator = () => iterate(['x', 'y', 'z']);
// console.log(iterator()); // x
// console.log(iterator()); // y
// console.log(iterator()); // z

let ar = ["x", "y", "z"];
const iterate = function (ar) {
  let position = 0;
  const iterator = function () {
    let currentEl = ar[position];
    position++;
    return currentEl;
  };
  return iterator;
};

const iterator = iterate(ar);
console.log(iterator());
console.log(iterator());
console.log(iterator());

/*
    let ar = ["x", "y", "z"];
function iterate(ar) {
  let position = 0;
  function iterator() {
    let currentEl = ar[position];
    position++;
    return currentEl;
  };
  return iterator;
};

const iterator = iterate(ar);
console.log(iterator());
console.log(iterator());
console.log(iterator());

*/
/*
let ar = ["x", "y", "z"];
const iterate = (ar) => {
  let position = 0;
  const iterator = () => {
    let currentEl = ar[position];
    position++;
    return currentEl;
  };
  return iterator;
};

const iterator = iterate(ar);
console.log(iterator());
console.log(iterator());
console.log(iterator());
*/
