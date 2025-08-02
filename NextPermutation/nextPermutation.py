class Solution():
    def nextPermutation(self, nums):

        sizeArr = len(nums) - 1
        index = -1
        for i in range(sizeArr, 0, -1):
            if nums[i] > nums[i - 1]:
                index = i - 1
                break

        if index == -1:
            nums.sort()
            return
        for i in range(sizeArr, index, -1):
            if (nums[i] > nums[index]):
                nums[i], nums[index] = nums[index], nums[i]
                break

        left = index + 1
        right = sizeArr
        while left < right:
            nums[left], nums[right] = nums[right], nums[left]
            left += 1
            right -= 1
        return
    
sol = Solution()
nums = [1,4,3,2]
sol.nextPermutation(nums)
print(nums)