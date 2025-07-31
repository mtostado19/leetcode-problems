import math


# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class MinHeap():

    def __init__(self):
        self.heap = []

    def show(self):
        return self.heap

    def insert(self, val):
        self.heap.append(val)
        if len(self.heap) == 1:
            return
        self.bubbleUp()
        return
    
    def bubbleUp(self):
        indexAdded = len(self.heap) - 1
        while indexAdded > 0:
            parentIndex = math.floor((indexAdded - 1) / 2)
            if (self.heap[indexAdded] < self.heap[parentIndex]):
                self.heap[indexAdded], self.heap[parentIndex] = self.heap[parentIndex], self.heap[indexAdded]
                indexAdded = parentIndex
            else:
                break
        return
    
    def getMinValue(self):
        if len(self.heap) == 0:
            return
        if len(self.heap) == 1:
            return self.heap.pop()
        
        minValue = self.heap[0]
        self.heap[0] = self.heap.pop()
        self.bubbleDown(0)
        return minValue
    
    def bubbleDown(self, index):
        heapLength = len(self.heap)
        while self.hasLeftNode(index):
            leftNode = (index * 2) + 1
            rightNode = (index * 2) + 2
            minValue = leftNode
            if rightNode < heapLength:
                minValue = rightNode if self.heap[rightNode] < self.heap[minValue] else minValue
            if self.heap[minValue] < self.heap[index]:
                self.heap[minValue], self.heap[index] = self.heap[index], self.heap[minValue]
                index = minValue
            else:
                break
        return
    
    def hasLeftNode(self, index):
        return (index * 2) + 1 < len(self.heap)

    def isEmpty(self):
        return True if len(self.heap) <= 0 else False



class Solution:
    def mergeKLists(self, lists):
        minHeap = MinHeap()
        for items in lists:
            flag = items
            while flag:
                minHeap.insert(flag.val)
                flag = flag.next
        orderArr = ListNode()
        current = orderArr
        while minHeap.isEmpty() != True:
            current.next = ListNode(minHeap.getMinValue())
            current = current.next
        return orderArr.next


list1 = ListNode(1,ListNode(4, ListNode(5)))
list2 = ListNode(1,ListNode(3, ListNode(4)))
list3 = ListNode(2,ListNode(6))

# list1 = ListNode(1,ListNode(2, ListNode(2)))
# list2 = ListNode(1,ListNode(1, ListNode(2)))
lists = [list1, list2, list3]
sol = Solution()

def printSolution(list):
    while list:
        print(list.val, end="->")
        list = list.next
    print("None")

printSolution(sol.mergeKLists(lists))
