// i/p: [1,2,3]
// o/p: ['1', '2', '3']

// Method 1: using map
function convertToStringArray(ar) {
  let result = ar.map((item) => item.toString());
  return result;
}

let arr = [1, 2, 3];
// console.log(convertToStringArray(arr));

// Method 2: using reduce
function convertToStringArrayUsingReduce(ar) {
  let result = ar.reduce((acc, item) => {
    console.log(acc.push(item.toString())); // push returns count of elements
    // return acc.push(item.toString());
    return acc;
  }, []);
  return result;
}

console.log(convertToStringArrayUsingReduce(arr));
