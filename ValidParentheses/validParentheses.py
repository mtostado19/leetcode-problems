class Solution:
    def isValid(self, s: str) -> bool:
        dict = { ")": "(", "]": "[", "}": "{" }
        openArr = []
        for i in s:
            if i in "([{":
                openArr.append(i)
            if i in ")]}":
                if len(openArr) == 0:
                    return False
                if (openArr[-1] != dict[i]):
                    return False
                openArr.pop()
        if len(openArr) > 0:
            return False
        return True
    

s = "(())"
sol = Solution()
print(sol.isValid(s))