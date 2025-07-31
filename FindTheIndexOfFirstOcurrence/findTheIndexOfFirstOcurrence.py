class Solution:
    def strStr(self, haystack: str, needle: str) -> int:
        return haystack.find(needle)
    
haystack = "qwewasdty"
needle = "wasd"

sol = Solution()
sol.strStr(haystack, needle)