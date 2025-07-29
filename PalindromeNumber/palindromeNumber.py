
class Solution:
  def isPalindrome(self, x: int) -> bool:
    stringifyN = str(x)
    left = 0
    right = len(stringifyN) - 1
    while left < right:
      if stringifyN[left] != stringifyN[right]:
        return False
      left += 1
      right -= 1
    return True


n = 43234
sol = Solution()
print(sol.isPalindrome(n))