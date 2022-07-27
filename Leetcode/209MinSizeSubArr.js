// Minimum Size Subarray Sum
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let main = [];
  for (let i = 0; i < nums.length; i++) {
    let sum = 0;
    let ar = [];
    let currentIndex = i;
    // console.log('loop for', i)
    while (sum <= target) {
      // console.log(sum, target)
      let current = nums[currentIndex];
      sum += current;
      ar.push(nums[currentIndex]);

      currentIndex++;
      if (sum >= target) {
        break;
      }
    }
    if (sum >= target) {
      // console.log(nums, ar)
      main.push(ar.length);
    }
  }
  console.log("main", main);
  let min;
  if (main.length === 1) {
    return main[0];
  } else if (main.length > 1) {
    min = main[0];
    for (let i = 1; i < main.length; i++) {
      if (main[i] < min) {
        min = main[i];
      }
    }
    return min;
  }

  return 0;
};
