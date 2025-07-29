class Solution:
    def longestPalindrome(self, s: str) -> str:
        longestLength = 0
        palindrome = ""

        left2 = 0
        right2 = 0

        for index in range(len(s)):
            left, right = self.isPalindrome(s, index, index)
            if (right - left + 1 > longestLength):
                longestLength = right - left + 1
                palindrome = s[left:right + 1]
            
            left2, right2 = self.isPalindrome(s, index, index + 1)
            if (right2 - left2 + 1 > longestLength):
                longestLength = right2 - left2 + 1
                palindrome = s[left2:right2 + 1]

        return palindrome
    
    def isPalindrome(self, s, left, right):
        while left >= 0 and right <= len(s) - 1 and s[left] == s[right]:
            left -= 1
            right += 1
        return left + 1, right - 1
    

s = ["babad", "cddf", "ptatk"]
sol = Solution()
for item in s:
  print(sol.longestPalindrome(item))