// repeating e;lements in sorted array

function repeatingEl(ar) {
  for (let i = 0; i < ar.length; i++) {
    if (ar[i] === ar[i + 1]) {
      return ar[i];
    }
  }
  return -1;
}

let ar = [1, 2, 3, 3, 4, 5, 6, 7, 8, 9];
repeatingEl(ar);
