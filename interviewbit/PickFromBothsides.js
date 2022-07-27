module.exports = {
  //param A : array of integers
  //param B : integer
  //return an integer
  solve: function (A, B) {
    // [5, -2, 3, 1, 2] // 3
    // let arrFront = A.splice(0,B);
    // let arrBack = A.splice(A.length-B, A.length) // 5-2
    console.log(A.length);
    let total = [];
    for (let i = 0; i < B; i++) {
      let sum = 0;
      let leftItems = i; // 0 3
      let rightItems = B - i;
      console.log(leftItems, rightItems);
      while (leftItems) {
        console.log("left", leftItems - 1, A[leftItems - 1]);
        sum += A[leftItems - 1];
        leftItems--;
      }
      while (rightItems) {
        console.log(
          "right",
          rightItems,
          A.length,
          A.length + 1 - rightItems,
          A[A.length + 1 - rightItems]
        );

        sum += A[A.length + 1 - rightItems];
        rightItems--;
      }
      total.push(sum);
    }
    if (total.length === 1) {
      return total[0];
    }
    if (total.length > 1) {
      let max = total[0];
      for (let k = 1; k < total.length; k++) {
        if (max < total[k]) {
          max = total[k];
        }
      }
      return max;
    }
    return 0;
  },
};
