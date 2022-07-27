// Remove duplicate from array
// removeDuplicate([1,3,3,3,1,5,6,7,8,1])
// o/p: [1,3,5,6,7,8]

function removeDuplicate(ar) {
  let obj = {};
  for (let i of ar) {
    if (!obj[i]) {
      obj[i] = true;
    }
  }
  return Object.keys(obj).map(Number);
}

let ar1 = [1, 3, 3, 3, 1, 5, 6, 7, 8, 1];
removeDuplicate(ar1);
