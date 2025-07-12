/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {

  let modifiedArr = [];
  for (let i = 0; i < nums.length; i++) {
    if (!modifiedArr.includes(nums[i])) {
      modifiedArr.push(nums[i]);
    }
  }
  nums.length = 0;
  nums.push(...modifiedArr);
  return modifiedArr.length;
};

const data = [1,1,2,3,3,4];

console.log(removeDuplicates(data));
console.log(data);