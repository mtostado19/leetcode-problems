/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let arr = [...s];
  let right = arr.length - 1;
  let longestPalindrome = "";

  for (let i = 0; i < arr.length; i++) {
    right = arr.length - 1;
    while (right >= i) {
      if (checkForPalindrome(arr, i, right) == true) {
        if (longestPalindrome.length < (right - i) + 1) {
          longestPalindrome = "";
          for (let j = i; j <= right; j++) {
            longestPalindrome += arr[j];
          }
        }
        break;
      }
      right--
    }
  }
  return longestPalindrome;

};

function checkForPalindrome(arr, left, right) {
  let isPalindrome = true;
  while (left <= right) {
    if (arr[left] != arr[right]) {
      isPalindrome = false;
      break;
    }
    left++;
    right--;
  }
  return isPalindrome;
}

s = [
  "babad",
  "cbbd",
  "xpsometemosldabalearrozalazorraelabady"
];


s.forEach(element => {
  console.log(longestPalindrome(element));
});

