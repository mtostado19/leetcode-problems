/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let arr_solution = [];
  let k2 = 0;
  let j2 = 0;

  if (nums.length == 0) {
    return [];
  }

  for (let i = 0; i < nums.length - 2; i++) {

    for (let j = 1; j < nums.length - 1; j++) {

      for (let k = 2; k < nums.length; k++) {
        if (nums[i] + nums[j + j2] + nums[k + k2] == 0) {
          arr_solution.push([nums[i], nums[j + j2], nums[k + k2]]);
        }

      }
      k2++;

    }
    j2++;
  }
  return arr_solution
};

let arr = [
  [-1,0,1,2,-1,-4],
  [],
  [0,0,0],
  [2,0,-1,4,6,-6,0,8,1,1,-1,-2,3]
];


arr.forEach(element => {
  console.log(threeSum(element));
});
