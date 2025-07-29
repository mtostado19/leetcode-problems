class Solution:
    def isValid(self, s: str) -> bool:
        openDict = {"(": 0, "[": 1, "{": 2}
        closeDict = {")": 0, "]": 1, "}": 2}
        openArr = []
        for i in s:
            if i in openDict:
                openArr.append(openDict[i])
                print("open", openArr)
            if i in closeDict:
                if len(openArr) == 0:
                    return False
                if (openArr[-1] != closeDict[i]):
                    return False
                openArr.pop()
        if len(openArr) > 0:
            return False
        return True
    

s = "(])"
sol = Solution()
print(sol.isValid(s))