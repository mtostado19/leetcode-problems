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
class ListNode {
  constructor(value, next) {
    this.value = (value === undefined ? 0 : value);
    this.next = (next===undefined ? null : next);
  }
}

var mergeTwoLists = function(list1, list2) {
  
  let mergedList = new ListNode();
  let helper = mergedList;
  let finalAnswer = [];

  while (list1 !== null && list2 !== null) {
    if (list1.value < list2.value) {
      helper.next = new ListNode(list1.value);
      list1 = list1.next;
    } else {
      helper.next = new ListNode(list2.value);
      list2 = list2.next;
    }
    helper = helper.next;
  }

  while (mergedList !== null) {
    finalAnswer.push(mergedList.value);
    mergedList = mergedList.next;
  }

  return finalAnswer;
};


let list1 = new ListNode(1, new ListNode(2, new ListNode(4)));
let list2 = new ListNode(1, new ListNode(3, new ListNode(4)));

console.log(mergeTwoLists(list1, list2));
