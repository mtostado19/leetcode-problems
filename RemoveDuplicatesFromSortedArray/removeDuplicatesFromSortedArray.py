class Solution:
    def removeDuplicates(self, nums):

        leftIndex = 0
        for items in nums:
            if items != nums[leftIndex]:
                leftIndex += 1
                nums[leftIndex] = items
        return leftIndex + 1
    

nums = [1,1,2,2,3,3,4,4,5]
sol = Solution()
print(sol.removeDuplicates(nums))
print(nums)