# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def swapPairs(self, head):
        current = head
        if head == None:
            return head
        flag = 1
        while current.next != None:
            if flag % 2 != 0:
                current.val, current.next.val = current.next.val, current.val
            flag += 1
            current = current.next
        return head
    

head = ListNode()
sol = Solution()

def printSolution(list):
    while list:
        print(list.val, end="->")
        list = list.next
    print("None")

printSolution(sol.swapPairs(head))
