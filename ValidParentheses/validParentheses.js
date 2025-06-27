/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  
  let i = 0;
  let stack = [];
  let answer = true;
  while (i < s.length) {
    if (open.includes(s[i])) {
      stack.push(open.indexOf(s[i]));
    }

    if (close.includes(s[i])) {
      if (close.indexOf(s[i]) == stack[stack.length - 1]) {
        stack.pop();
      } else {
        answer = false;
        break;
      }
    }
    i++;
  }

  if (stack.length != 0) {
    answer = false;
  }
  
  return answer
};

const open = ["(","[","{"];
const close = [")", "]", "}"];


const s = "["

console.log(isValid(s));