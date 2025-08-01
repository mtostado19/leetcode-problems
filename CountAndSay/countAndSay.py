class Solution:
    def countAndSay(self, n: int) -> str:

        stringSequence = "1"
        if n == 1:
            return stringSequence
        
        stringSequence = self.recursive(stringSequence, n)
        print(stringSequence)
        return stringSequence

    def recursive(self, string, n):

        if n == 1:
            return string
        
        tempArr = []
        currentString = ""
        for items in string:
            if len(tempArr) == 0:
                tempArr.append(items)
            else: 
                if tempArr[0] == items:
                    tempArr.append(items)
                else:
                    currentString += str(len(tempArr)) + tempArr[0]
                    tempArr = [items]

        currentString += str(len(tempArr)) + tempArr[0]
        string = self.recursive(currentString, n - 1)
        return string

n = 3
sol = Solution()
sol.countAndSay(n)