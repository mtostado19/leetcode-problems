/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
  
  let flag = null;
  for (let i = nums.length - 1; i >= 1; i--) {
    if (nums[i - 1] < nums[i]) {
      flag = i - 1;
      break;
    }
  }

  if (flag != null) {
    for (let j = nums.length - 1; j > 0; j--) {
      if (nums[flag] < nums[j]) {
        [nums[flag], nums[j]] = [nums[j], nums[flag]];
        flag += 1;
        break;
      }
    }
    sort(nums, flag, nums.length - 1);
  } else {
    sort(nums, 0, nums.length - 1);
  }
  return;
};

function sort(nums, start, end) {
  for(let i = start; i < end; i++) {
    let min = i;
    for (let k = i + 1; k <= end; k++) {
      if (nums[min] > nums[k]) {
        min = k;
      }
    }
    [nums[i], nums[min]] = [nums[min], nums[i]];
  }
}

data = [1,3,2]

nextPermutation(data);
console.log(data);