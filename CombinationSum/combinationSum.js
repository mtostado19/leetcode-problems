/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  let arrSolutions = [];
  let currentPath = [];
  let index = 0;
  let sum = 0;

  function exploreCombinations(index, sum, currentPath) {
  
    if (sum == target) {
      arrSolutions.push([...currentPath]);
      return;
    }
  
    if (sum > target) { return; }
  
    for (let i = index; i < candidates.length; i++) {
      currentPath.push(candidates[i])
      exploreCombinations(i, sum + candidates[i], currentPath);
      currentPath.pop();
    }
  
    return;
  }

  exploreCombinations(index, sum, currentPath);
  return arrSolutions;
};


const candidates = [2,3,6,7];
const target = 7;
console.log(combinationSum(candidates, target));
