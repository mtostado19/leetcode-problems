/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let x = 0; x < nums.length; x++) {
      if (i != x && nums[i] + nums[x] == target) {
        return [i, x];
      }
    }
  }
  return;
};

let x = [
  [[2,7,11,15], 9],
  [[3,2,4], 6],
  [[3,3], 6],
  [[-1, -4, -5, 8], 3]
]

x.forEach(element => {
  console.log(twoSum(element[0], element[1]));
});

