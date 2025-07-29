class Solution:
    def shuffle(self, nums: list[int], n: int) -> list[int]:
        new_arr = []
        for i in range(n):
            new_arr.append(nums[i])
            new_arr.append(nums[i + n])
        return new_arr
    


nums = [1,2,3,4,5,6,7,8]
n = 4
sol = Solution()

print(sol.shuffle(nums, n))