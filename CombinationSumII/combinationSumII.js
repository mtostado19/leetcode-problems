/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {

  let allSolutions = [];
  let currentExploration = [];
  let index = 0;
  let sum = 0;
  candidates.sort((a,b) => a - b);

  function exploration(currentExploration, sum, index) {

    if (sum == target) {
      allSolutions.push([...currentExploration]);
      return;
    }

    if (sum > target || index > candidates.length - 1) { return; }

    for (let i = index; i < candidates.length; i++) {
      if (i > index && candidates[i] === candidates[i - 1]){
        continue;
      }
      currentExploration.push(candidates[i]);
      exploration(currentExploration, sum + candidates[i], i + 1);
      currentExploration.pop();
    }
    return;
  }

  exploration(currentExploration, sum, index);
  return allSolutions;
};


const candidates = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
const target = 30;

console.log(combinationSum2(candidates, target));
