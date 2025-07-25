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



// More Efficient Solution

// We check the complement generated from each element in the array (target - number[i])
// if the result of the complement is "0", we have found our 2 number.
// if the result is diferent from 0, we save the complement with its index in an array
// and then we evaluate the following position.
// if the number we are currently evaluating already exists within the complement array,
// then we have found our 2 numbers.

console.log("------------------------------");


function TwoSumBetter(nums, target) {
  let complement_map = [];
  for (let i = 0; i < nums.length;  i++) {
    let complement = target - nums[i];

    for (let x = 0; x < complement_map.length; x++) {
      if (nums[i] == complement_map[x].complement){
        return [complement_map[x].index, i];
      }
    }

    complement_map.push({ complement, index: i });
  }
}

x.forEach(element => {
  console.log(TwoSumBetter(element[0], element[1]));
});


console.log("------------------------------");

// Solution using Hash Maps

function TwoSumHashMap(nums, target) {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    complement = target - nums[i];

    if (map.has(complement)) {
      return [map.get(complement), i];
    }

    map.set(nums[i], i);
  }

  return null;
};

x.forEach(element => {
  console.log(TwoSumHashMap(element[0], element[1]));
})