/**
 * @param {number} num
 * @param {number} t
 * @return {number}
 */
var theMaximumAchievableX = function(num, t) {
    return num + (t * 2);
};


data = [
  [4, 1],
  [3, 2],
]

data.forEach(element => {
  console.log(theMaximumAchievableX(element[0], element[1]));
});