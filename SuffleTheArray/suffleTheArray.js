/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
  let new_arr = [];
  let arr_length = (nums.length / 2);
  for (let i = 0; i < n; i++) {
      new_arr.push(nums[i], nums[arr_length + i])
  }
  return new_arr;
};

data = [
  [[2,5,1,3,4,7], 3],
  [[1,2,3,4,4,3,2,1], 4],
  [[1,1,2,2], 2]
] 


data.forEach(element => {
  console.log(shuffle(element[0], element[1]));
});