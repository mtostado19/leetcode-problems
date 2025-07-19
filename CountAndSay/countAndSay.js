/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  
  let finalString = "1";

  if (n == 1) {
    return finalString;
  }

  finalString = recursion(n, finalString, 1);
  return finalString;
};

function recursion(n, string, index) {

  if (index == n) {
    return string;
  }

  let arrString = [...string];
  let tempArr = [];
  let tempString = "";

  for (let i = 0; i < arrString.length; i++) {
    if (tempArr.length == 0) {
      tempArr.push(arrString[i]);
    } else {
      if (tempArr[tempArr.length - 1] == arrString[i]) {
        tempArr.push(arrString[i]);
      } else {
        tempString += tempArr.length += tempArr[tempArr.length - 1];
        tempArr = [];
        tempArr.push(arrString[i]);
      }
    }
  }

  tempString += tempArr.length += tempArr[tempArr.length - 1];
  return recursion(n, tempString, index + 1);
}


n = 6;
console.log(countAndSay(n));