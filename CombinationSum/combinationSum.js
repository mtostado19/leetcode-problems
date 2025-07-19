/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  let arrSolutions = [];
  let tempArr = [];
  let index = 0;
  let sum = 0;

  return exploreCombinations(candidates, target, index, sum, arrSolutions, tempArr);
};

function exploreCombinations(candidates, target, index, sum, arrSolutions, tempArr) {

  if (sum == target) {
    arrSolutions.push([...tempArr]);
    return;
  }

  if (sum > target) {
    return;
  }

  for (let i = index; i < candidates.length; i++) {
    tempArr.push(candidates[i])
    exploreCombinations(candidates, target, i, sum + candidates[i], arrSolutions, tempArr);
    tempArr.pop();
  }

  return;
}

const candidates = [2];
const target = 1;
console.log(combinationSum(candidates, target));
