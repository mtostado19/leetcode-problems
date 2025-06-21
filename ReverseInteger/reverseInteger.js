/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {

  let temp = Math.abs(x);
  let temp_array = [];
  let isNegative = x < 0 ? true : false;
  let reverse_number;
  while (temp != 0) {
    temp_array.push(temp % 10);
    temp = Math.floor(temp / 10);
  }
  reverse_number = Number(temp_array.join(''));
  // THIS PART OF THE CODE IS TO CHECK FOR THE 32-BIT LIMIT
  // IN JAVASCRIPT IS NOT NECESSARY, BUT THE PROBLEM ASK US TO CONSIDER IT.
  if (reverse_number > 2147483647 || reverse_number < -2147483648) {
    return 0;
  }
  
  if (isNegative) {
    reverse_number *= -1;
  }
  return reverse_number;

};

const x = [
  123,
  -123,
  8765430,
  -76550340,
  1534236469
];

x.forEach(e => {
  console.log(reverse(e));
});