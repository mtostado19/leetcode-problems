# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def mergeTwoLists(self, list1, list2):
        mergeList = ListNode()
        sortingList = mergeList
        while list1 and list2:
            if list1.val > list2.val:
                sortingList.next = ListNode(list2.val)
                list2 = list2.next
            else:
                sortingList.next = ListNode(list1.val)
                list1 = list1.next
            sortingList = sortingList.next
        sortingList.next = list1 if list1 else list2

        return mergeList.next


list1 = ListNode(1, ListNode(2, ListNode(4)))
list2 = ListNode(1, ListNode(3, ListNode(4)))
sol = Solution()
sol.mergeTwoLists(list1, list2)

def printSolution(list):
    while list:
        print(list.val, end="->")
        list = list.next
    print("None")

printSolution(sol.mergeTwoLists(list1, list2))