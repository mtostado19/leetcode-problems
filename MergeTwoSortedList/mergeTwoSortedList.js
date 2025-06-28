/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
  
  let index1 = 0;
  let index2 = 0;
  let list1Size = list1.length - 1;
  let list2Size = list2.length - 1;
  let test = (list1Size + list2Size) + 1;
  let mergeNode = [];

  while (index1 + index2 <= test) {

    if (list1[index1] <= list2[index2] && index1 < list1Size || index2 > list2Size) {
      mergeNode.push(list1[index1]);
      index1++;
    }
    else {
      mergeNode.push(list2[index2])
      index2++;
    }
  }

  return mergeNode;

};


const list1 = [1,2,4]
const list2 = [1,3,4]

// const list1 = []
// const list2 = [1,2,4]

console.log(mergeTwoLists(list1, list2));
