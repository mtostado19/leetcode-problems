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
  constructor(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next===undefined ? null : next);
  }
}

var mergeTwoLists = function(list1, list2) {
  
  let mergedList = new ListNode();
  let helper = mergedList;

  while (list1 !== null && list2 !== null) {
    if (list1.val < list2.val) {
      helper.next = new ListNode(list1.val);
      list1 = list1.next;
    } else {
      helper.next = new ListNode(list2.val);
      list2 = list2.next;
    }
    helper = helper.next;
  }

  helper.next = (list1 !== null) ? list1 : list2;

  return mergedList.next;
};


let list1 = new ListNode(1, new ListNode(2, new ListNode(4)));
let list2 = new ListNode(1, new ListNode(3, new ListNode(4)));

console.log(mergeTwoLists(list1, list2));
