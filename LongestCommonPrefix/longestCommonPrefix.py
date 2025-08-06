class Solution():
    def longestCommonPrefix(self, strs):
        minVal = min(strs, key=len)
        longest = ""
        for i in range(len(minVal)):
            current = strs[0][i]
            for items in strs:
                if current != items[i]:
                    return longest
            longest += current
        
        return longest

strs = ["flower", "flow", "flight"]
sol = Solution()
print(sol.longestCommonPrefix(strs))