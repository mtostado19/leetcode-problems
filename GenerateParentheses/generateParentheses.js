/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {

  let result =  [];
  solve(n, 0, 0, [], result)
  console.log(result);

  let visualResult = []
  result.forEach(element => {
    visualResult.push(generateSolution(n, element));
  });
  return visualResult;

};

function generateSolution(n, result) {
  let helper = "";
  for (let i = 0; i < n; i++) {
    helper += "(";
    helper += ")".repeat(result[i]);
  }
  return helper;
}


function validation(n, numberOfClosing, row, max) {
  // Check if i have not exceded local maximum
  if (numberOfClosing <= (row + 1) - max) {
    if (row == n - 1 && (max + numberOfClosing) != n) {
      return false;
    }
    return true;
  }
  return false;
}


function solve(n, row, max, arrayHelper, arraySolution) {

  // validation for out of bounds here
  if (row === n) {
    arraySolution.push([...arrayHelper]);
    return;
  }

  for (let i = 0; i <= n; i++) {
    if (validation(n, i, row, max)) {
      max += i;
      arrayHelper.push(i);
      solve(n, row + 1, max, arrayHelper, arraySolution);
      arrayHelper.pop();
      max -= i;
    }
  }
  return;
}


const s = 3;

console.log(generateParenthesis(s));
