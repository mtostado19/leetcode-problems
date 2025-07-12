/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    return haystack.indexOf(needle);
};

const haystack = "qwerty";
const needle = "rt";

console.log(strStr(haystack, needle));