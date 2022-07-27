// array move item at selected index to top

var a = [3, 2, 1, 8, 5, 7, 2, 4, 1];

function moveItemTop(index) {
  if (index === 0 || index >= a.length) return a;
  let a1 = a.slice(0, index);
  let a2 = a.slice(index + 1);

  return [a[index], ...a1, ...a2];
}

console.log(moveItemTop(a.length - 1));

function moveTotop2(index) {
  if (index === 0 || index >= a.length) return a;
  let item = a[index];
  for (let i = index; i > 0; i--) {
    a[i] = a[i - 1];
  }
  a[0] = item;
  return a;
}

moveTotop2(5);

// print array as string comma separated [1,2,3].print(); //'1,2,3';

Array.prototype.print = function () {
  let str = "";
  for (let i = 0; i < this.length; i++) {
    str += this[i];
    if (i === this.length - 1) {
      return str;
    }
    str += ",";
  }
  return;
};

// [1,2,3].print() --> gives error
let ar = [11, 22, 33, 44];
ar.print();
