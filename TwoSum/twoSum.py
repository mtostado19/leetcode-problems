
class Solution:
  def twoSum(self, nums, target):
    hashMap = {}

    for i in range(len(nums)):
      complement = target - nums[i]
      if (complement in hashMap):
        return [hashMap.get(complement), i]

      hashMap[nums[i]] = i

    return

solution = Solution()
nums = [2,7,5,4]
target = 9

print(solution.twoSum(nums, target))
# twoSum(nums, target)