/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  let minLength = strs[0].length;
  strs.forEach(e => {
    minLength = minLength < e.length ? minLength : e.length;
  });
  let longestPrefix = "";
  longestPrefix = lookForLongestPrefix(strs, 0, longestPrefix, minLength);
  return longestPrefix;
};


function lookForLongestPrefix(string, i, longestPrefix, minLength) {
  let stop = false;
  let last_string = "";

  if (i >= minLength) {
    return longestPrefix;
  }

  string.forEach(e => {
    last_string = last_string == "" ? e[i] : last_string;
    if (e[i] != last_string) {
      stop = true;
    }
  })

  if (stop != true) {
    longestPrefix += string[0][i];
    longestPrefix = lookForLongestPrefix(string, i + 1, longestPrefix, minLength)
  }
  return longestPrefix;
}

const string = ["flower", "flow", "flight", "fls"];

console.log(longestCommonPrefix(string));