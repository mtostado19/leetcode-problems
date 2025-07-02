/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {

  let result =  [];
  let finalResult = [];
  let helper = "";

  result = solve(n, 0, 0, [], result)

  let test = [];
  result.forEach(element => {
    test.push(generateSolution(n, element));
  });
  console.log(test);
};

function generateSolution(n, result) {
  console.log(result)
  let helper = "";
  let index = 0;
  for (let i = n; i > 0; i--) {
    helper += "(";
    while (index < result[i - 1]) {
      helper += ")"
      index++;
    }
    index = 0;
  }
  return helper;
}


function validation(n, numberOfClosing, row, max) {
  if (numberOfClosing <= (n - row) && (max + numberOfClosing) <= n) {
    if (row == 0 && numberOfClosing == 0) {
      return false;
    }
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
    return arraySolution;
  }

  for (let i = n; i > -1; i--) {
    if (validation(n, i, row, max)) {
      max += i;
      arrayHelper.push(i);
      arraySolution = solve(n, row + 1, max, arrayHelper, arraySolution);
      arrayHelper.pop();
      max -= i;
    }
  }
  return arraySolution;
}


const s = 3;
generateParenthesis(s);