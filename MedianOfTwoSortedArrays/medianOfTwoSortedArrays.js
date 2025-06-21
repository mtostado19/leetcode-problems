/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  let median;
  let new_arr = [];
  new_arr.push(...nums1, ...nums2)
  let arr_sorted = quickSort(new_arr, 0, new_arr.length - 1);
  console.log(arr_sorted);
  if (arr_sorted.length % 2 == 0) {
    median = (arr_sorted[(arr_sorted.length/2) - 1] + arr_sorted[(arr_sorted.length/2)]) / 2;
  } else {
    median = arr_sorted[Math.round(arr_sorted.length/2) - 1];
  }
  return median;
};


function quickSort(arr, low, high) {
  if (low < high) {

    // do the steps
    let parti = partition(arr, low, high);

    // do the recursion here
    quickSort(arr, low, parti-1)
    quickSort(arr, parti+1, high)
  }
  return arr;
}

function swap(arr, i, m) {
  let temp = arr[i];
  arr[i] = arr[m];
  arr[m] = temp;
}


function partition(arr, low, high) {
  let pivot = arr[high];
  let index = low;
  let helper = low - 1;

  for (index; index < high; index++) {
    if(arr[index] <= pivot) {
      helper++;
      // swap
      swap(arr, index, helper);
    }
  }
  swap(arr, helper + 1, high);
  return helper + 1;
}

const num1 = [2,2,4,4];
const num2 = [2,2,4,4];

let result = findMedianSortedArrays(num1, num2);
console.log(result);