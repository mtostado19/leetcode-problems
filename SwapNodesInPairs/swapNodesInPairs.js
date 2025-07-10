/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

class ListNode {
  constructor(val, next) {
    this.val = (val===undefined ? 0 : val);
    this.next = (next===undefined ? null : next);
  };
}

var swapPairs = function(head) {
  let swapList = new ListNode();
  let current = swapList;
  
  if (head === null || head.next === null) {
    return head;
  }
  while (head.next !== null) {

    let parentHead = head.val;
    head = head.next;
    let childHead = head.val;

    current.next = new ListNode(childHead);
    current = current.next;
    current.next = new ListNode(parentHead);
    current = current.next;
    
    if (head.next !== null) {
      head = head.next;
      if (head.next === null) {
        current.next = new ListNode(head.val);
        break;
      }
    } else {
      break;
    }
  }
  return swapList.next
};

// const list = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))));
const list = new ListNode(1);

console.log(swapPairs(list));