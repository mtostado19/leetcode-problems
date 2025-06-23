/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let left = 0;
  let last_left = 0;
  let right = height.length - 1;
  let last_right = 0;
  let highestSolution = 0;
  let current_highest = 0;

  while (left < right) {
    if (height[left] >= last_left && height[right] >= last_right) {
      current_highest = (Math.min(height[left], height[right])) * (right - left);
      highestSolution = current_highest > highestSolution ? current_highest : highestSolution;
      last_left = height[left];
      last_right = height[right];
    }
    if (height[left] > height[right]) {
      right--;
    } else {
      left++;
    }
  }
  return highestSolution;
};


const x = [
  [1,8,6,2,5,4,8,3,7],
  [1,1]
];

x.forEach(element => {
  console.log(maxArea(element));
});