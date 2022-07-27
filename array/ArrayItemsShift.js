function arrshift(arr) {
  console.log(arr);
  let last = arr[arr.length - 1];
  let current = arr[0];
  let next = arr[1];
  for (let i = 0; i < arr.length - 1; i++) {
    next = arr[i + 1];
    arr[i + 1] = current;
    current = next;
  }
  arr[0] = last;
  return arr;
}

let a2 = [5, 3, 4, 1, 2];
arrshift(a2);
