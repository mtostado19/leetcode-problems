/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  if (s.split("").length == 0) { return 0; }
  let last_letters = [];
  let largest_solution = 0;

  let test = [];


  s.split("").forEach(e => {
    if (last_letters.includes(e)) {
      largest_solution = last_letters.length > largest_solution ? last_letters.length : largest_solution;
      test.push(...last_letters);
      last_letters = [];
    }
    last_letters.push(e);
    largest_solution = last_letters.length > largest_solution ? last_letters.length : largest_solution
  });
  return largest_solution;
};



const s = "dvdf";


console.log(lengthOfLongestSubstring(s));
