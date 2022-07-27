// array move the item at selected index to top
var arr = [3, 1, 2, 4, 88, 76, 92, 55, 66, 23];

function moveItemTop(index) {
  if (index === 0 || index >= arr.length) {
    return arr;
  }
  let a1 = arr.slice(0, index);
  let a2 = arr.slice(index + 1);
  return [arr[index], ...a1, ...a2];
}

moveItemTop(arr.length - 1);
moveItemTop(4);
