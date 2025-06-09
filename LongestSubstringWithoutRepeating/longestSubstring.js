/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  if (s.split("").length == 0) { return 0; }
  let longestFound = 0;
  let current_length = 0;
  console.log(s.split(""));
  for (let i = 0; i < s.split("").length; i++) {
    current_length = recursiveFunction(s.split(""), [], i);
    if (longestFound < current_length) {
      longestFound = current_length;
    }
  }
  return longestFound;
};


const recursiveFunction = function(arr, current_arr, n) {
  let longestSubstring = 0;
  if (!current_arr.includes(arr[n])) {
    current_arr.push(arr[n]);
    if (n < (arr.length - 1)) {
      longestSubstring = recursiveFunction(arr, current_arr, n+1);
    } else {
      return current_arr.length;
    }
  } else {
    return current_arr.length;
  }
  return longestSubstring;
}



const s = "dvdf";
const a = "abcabcbb";


lengthOfLongestSubstring(a);




// first attempt
// var lengthOfLongestSubstring = function(s) {
//   if (s.split("").length == 0) { return 0; }
//   let last_letters = [];
//   let largest_solution = 0;

//   let test = [];


//   s.split("").forEach(e => {
//     if (last_letters.includes(e)) {
//       largest_solution = last_letters.length > largest_solution ? last_letters.length : largest_solution;
//       test.push(...last_letters);
//       last_letters = [];
//     }
//     last_letters.push(e);
//     largest_solution = last_letters.length > largest_solution ? last_letters.length : largest_solution
//   });
//   return largest_solution;
// };
