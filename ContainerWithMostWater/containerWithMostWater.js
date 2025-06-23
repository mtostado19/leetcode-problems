/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let left;
  let highestSolution = 0;
  let current_highest = 0;;
  for (let i = 0; i < height.length - 1; i++) {
    left = i + 1;
    while (left < height.length) {
      current_highest = (Math.min(height[i], height[left])) * (left - i);
      highestSolution = current_highest > highestSolution ? current_highest : highestSolution;
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