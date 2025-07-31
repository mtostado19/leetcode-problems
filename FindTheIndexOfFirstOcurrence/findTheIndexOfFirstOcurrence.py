class Solution:
    def strStr(self, haystack: str, needle: str) -> int:
        return haystack.find(needle)
    
haystack = "abwswasdpowiu"
needle = "wasd"

sol = Solution()
print(sol.strStr(haystack, needle))

# Manual solution - Less efficient
# def manualSolution():
#     index = 0
#     answer = -1
#     for i in range(len(haystack)):

#         if haystack[i] == needle[index]:
#             index += 1
#             if index == len(needle):
#                 answer = i - (len(needle) - 1)
#                 break
#         else:
#             if haystack[i] == needle[0]:
#                 index = 1
#             else: 
#                 index = 0
#     return answer

# print(manualSolution())