// print array as string comma separated [1,2,3].print(); // '1,2,3';
// The entries() method returns a new Array Iterator object
// that contains the key/value pairs for each index in the array.
Array.prototype.print = function () {
  let str = "";
  for (let [index, val] of this.entries()) {
    console.log(index);
    if (index === this.length - 1) {
      str = str + val;
      return str;
    }
    str = str + val + ",";
  }
  return str;
};

Array.prototype.print = function () {
  let ar = this;
  let str = "";
  for (let i = 0; i < ar.length; i++) {
    if (ar.length - 1 === i) {
      str = str + ar[i];
      return str;
    }
    str = str + ar[i] + ",";
  }
  return str;
};
