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
    this.heap[0] = this.heap.pop();
    this.bubbleDown(0);
    return min;
  }

  bubbleUp(index) {
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2)
      if (this.heap[index].val < this.heap[parentIndex].val) {
        [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
        index = Math.floor((index - 1) / 2);
      } else {
        break;
      }
    }
  }

  bubbleDown(index) {
    while (this.hasLeftChild(index)) {
      let leftNode = (index * 2) + 1;
      let rightNode = (index * 2) + 2;
      let minVal = leftNode;
      
      if (this.heap[rightNode] != undefined) {
        if (this.heap[leftNode].val > this.heap[rightNode].val) {
          minVal = rightNode;
        }
      }

      if (this.heap[minVal].val < this.heap[index].val) {
        [this.heap[index], this.heap[minVal]] = [this.heap[minVal], this.heap[index]];
        index = minVal;
      }
      else {
        break;
      }
    }
    return;
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  hasLeftChild(index) {
    return (index * 2) + 1 > this.heap.length - 1 ? false : true;
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
const list4 = new ListNode(5);
const list5 = new ListNode(4, new ListNode(5, new ListNode(7, new ListNode(9))));

const data = [list1, list2, list3, list4, list5];

let answer;
answer = mergeKLists(data);

console.log(answer.val);
while (answer.next != null) {
  answer = answer.next;
  console.log(answer.val);
}
