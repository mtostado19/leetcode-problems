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
  if (isNegative) {
    reverse_number *= -1;
  }
  return reverse_number;

};

const x = -1234;
let result;
result = reverse(x);
console.log(result);