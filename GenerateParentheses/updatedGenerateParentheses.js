
function generateParenthesis(n) {
  let arrResult = [];
  recursive(n, n, "", arrResult);
  return arrResult;
}


function recursive(openParentheses, closeParentheses, decisionString, arrResult) {

  if (openParentheses == 0 && closeParentheses == 0) {
    arrResult.push(decisionString);
    return;
  }
  if (openParentheses > 0) {
    decisionString += "("
    recursive(openParentheses - 1, closeParentheses, decisionString, arrResult);
    decisionString = decisionString.slice(0, -1);
  }
  if (closeParentheses > openParentheses) {
    decisionString += ")";
    recursive(openParentheses, closeParentheses - 1, decisionString, arrResult);
    decisionString = decisionString.slice(0, -1);
  }
  return arrResult;
}

const n = 4;
console.log(generateParenthesis(n));