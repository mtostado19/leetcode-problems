/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  let new_arr = sortArray(nums1, nums2);
  if (new_arr.length % 2 == 0) {
    console.log("even");
  } else {
    console.log("odd");
  }
};

function sortArray(nums1, nums2) {
  // must be 0(log(m+n))
};


const num1 = [1,3];
const num2 = [2];

findMedianSortedArrays(num1, num2);