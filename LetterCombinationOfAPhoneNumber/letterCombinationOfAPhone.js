/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {

  if (digits.length <= 0 || digits.length > 4) {
    return [];
  }

  let positionNumber = digits[0] - 1;
  let array_result = [];
  let current_string = "";

  for (let i = 0; i < phoneSymbols[positionNumber].length; i++) {
    current_string = phoneSymbols[positionNumber][i];
    array_result = getDifferentCombinations(digits, 1, array_result, current_string);
  }

  return array_result;
};

function getDifferentCombinations(digits, positionNumber, array_result, current_string) {

  if (positionNumber >= digits.length) {
    array_result.push(current_string);
    return array_result;
  }

  for (let j = 0; j < phoneSymbols[digits[positionNumber] - 1].length; j++) {
    current_string += phoneSymbols[digits[positionNumber] - 1][j];
    array_result = getDifferentCombinations(digits, positionNumber + 1, array_result, current_string);
    current_string = current_string.substring(0, current_string.length - 1);
  }

  return array_result;
}

const phoneSymbols = [
  "",
  "abc",
  "def",
  "ghi",
  "jkl",
  "mno",
  "pqrs",
  "tuv",
  "wxyz"
];

const data = [
  "23",
  "",
  "9",
  "9678",
  "57",
];

data.forEach(element => {
  console.log(letterCombinations(element));
  console.log("---------------------------");
});