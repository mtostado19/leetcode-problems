/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

class ListNode {
  constructor(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

class MinHeap {
  constructor() {
    this.heap = [];
  }

  show() {
    console.log(this.heap);
    return;
  }

  insert(node) {
    this.heap.push(node);
    this.bubbleUp(this.heap.length - 1);
  }

  extractMin() {

    if (this.heap.length === 0) { return null; }
    if (this.heap.length === 1) { return this.heap.pop(); }
    let min = this.heap[0];
    this.heap.shift();
    this.bubbleDown(0);
    return min;
  }

  bubbleUp(index) {
    while (index > 0) {
      if (this.heap[index].val < this.heap[index - 1].val) {
        [this.heap[index], this.heap[index - 1]] = [this.heap[index - 1], this.heap[index]];
        index -= 1;
      } else {
        break;
      }
    }
  }

  bubbleDown(index) {
    let isFinished = this.heap.length === 1 ? true : false;
    while (!isFinished) {
      if (this.heap[index].val > this.heap[index + 1].val && index < this.heap.length - 1) {
        [this.heap[index], this.heap[index + 1]] = [this.heap[index + 1], this.heap[index]];
        index += 1;
      } else {
        isFinished = true;
        break;
      }
    }
    return;
  }

  isEmpty() {
    return this.heap.length === 0;
  }
}

var mergeKLists = function(lists) {
  const minHeap = new MinHeap();

  lists.forEach(element => {
    if (element != null) {
      minHeap.insert(element);
    }
  });

  let min;
  let mergedList = new ListNode();
  let current = mergedList;
  while (!minHeap.isEmpty()) {
    min = minHeap.extractMin();
    current.next = min;
    current = current.next;

    if (min.next != null) {
      minHeap.insert(min.next);
    }
  }
  return mergedList.next;
};

const list1 = new ListNode(1, new ListNode(4, new ListNode(5)));
const list2 = new ListNode(1, new ListNode(3, new ListNode(4)));
const list3 = new ListNode(2, new ListNode(6));

const data = [list1, list2, list3]

let answer;
answer = mergeKLists(data);

console.log(answer.val);
while (answer.next != null) {
  answer = answer.next;
  console.log(answer.val);
}
