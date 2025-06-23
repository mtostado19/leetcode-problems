/**
 * @param {number} num
 * @return {string}
 */

const val = [
  ["M", 1000],
  ["CM", 900],
  ["D", 500],
  ["CD", 400],
  ["C", 100],
  ["XC", 90],
  ["L", 50],
  ["XL", 40],
  ["X", 10],
  ["IX", 9],
  ["V", 5],
  ["IV", 4],
  ["I", 1],
];

var intToRoman = function(num) {
    let romanString = "";
    romanString = generateRomanString(num);
    return romanString;
};

function generateRomanString(num) {
  let i = 0;
  let romanString = "";
  while (num !== 0) {
    if (num >= val[i][1]) {
      romanString += val[i][0]
      num -= val[i][1];
    } else {
      i++;
    }
  }
  return romanString;
};

const num = [
  3749,
  58,
  1994,
];

num.forEach(e => {
  console.log(intToRoman(e));
})