// create duplicate of array
let arr = [1, 2, 3, 4, 5];

// Method 1
function duplicate(ar) {
  return [...ar, ...ar];
}

console.log("Array duplicate with spread", duplicate(arr));

// Method 2
function duplicateArray2(ar) {
  return ar.concat(ar);
}

console.log("Array duplicate with concat", duplicateArray2(arr));
