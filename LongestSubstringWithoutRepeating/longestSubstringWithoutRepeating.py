class Solution:
  def lengthOfLongestSubstring(self, s: str) -> int:
    dictionary = {}
    leftIndex = 0
    maxLength = 0

    for i in range(len(s)):
      if (s[i] in dictionary and dictionary[s[i]] >= leftIndex ):
        leftIndex = dictionary[s[i]] + 1
      dictionary[s[i]] = i
      maxLength = max(maxLength, i - leftIndex + 1)

    return maxLength
        

sol = Solution()
s = "bbbbb"

print(sol.lengthOfLongestSubstring(s))