function largest(ar) {
  let item = ar[0];
  for (let i = 1; i < ar.length; i++) {
    if (ar[i] > item) {
      item = ar[i];
    }
  }
  return item;
}
let arr = [77, 4, 56, 78, 09, 30];
largest(arr);
