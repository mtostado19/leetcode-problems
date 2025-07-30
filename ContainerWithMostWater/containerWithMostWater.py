
class Solution:
    def maxArea(self, height) -> int:
        left = 0
        right = len(height) - 1
        maxArea = 0
        while right > left:
            currentArea = (min(height[left], height[right])) * (right - left)
            if currentArea > maxArea:
                maxArea = currentArea
            if height[left] > height[right]:
                right -= 1
            else:
                left += 1
        return maxArea
    

height = [1,8,6,2,5,4,8,3,7]
sol = Solution()
print(sol.maxArea(height))