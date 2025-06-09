/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  if (s.split("").length == 0) { return 0; }
  const array = s.split("");
  let longestFound = 0;
  let i = 0;
  let current_solution;

  while (array.length - 1 >= i) {
    current_solution = searchUntilRepeat(s.split(""), [], i);
    console.log(current_solution);
    longestFound = longestFound < current_solution.length ? current_solution.length : longestFound;
    if (i + current_solution.length >= array.length) {
      break;
    }
    i += current_solution.indexOf(array[i + current_solution.length]) + 1;
  }
  return longestFound;
};


const searchUntilRepeat = function(arr, current_arr, n) {
  if (!current_arr.includes(arr[n])) {
    current_arr.push(arr[n]);
    if (n < (arr.length - 1)) {
      searchUntilRepeat(arr, current_arr, n+1);
    }
    return current_arr;
  }
  return current_arr;
}


const a = [
  "abcabcbb",
  "dvdf",
  "wwtreuwpl",
  "mnopolkjhgmmi"
]

a.forEach(element => {
  console.log(lengthOfLongestSubstring(element));
  console.log("-------------")
});

