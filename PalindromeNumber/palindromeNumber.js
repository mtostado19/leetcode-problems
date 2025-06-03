/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let left = 0;
    let right = (x.toString().length) - 1;
    let answer = true;
    let arr_x = [...x.toString()];

    while (left <= right) {
      left += 1;
      right -= 1;
      if (arr_x[left] != arr_x[right]) {
        answer = false;
        break;
      }
    }
    return answer;
};


data = [121, -121, 10, 1234321]
data.forEach(element => {
  console.log(isPalindrome(element))
});
