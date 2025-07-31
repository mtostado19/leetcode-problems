class Solution:
    numbersDictionary = {
        "2": "abc",
        "3": "def",
        "4": "ghi",
        "5": "jkl",
        "6": "mno",
        "7": "pqrs",
        "8": "tuv",
        "9": "wxyz"
    }
    def letterCombinations(self, digits: str):
        arrSolutions = []
        currentSolution = ""
        if digits == currentSolution:
            return arrSolutions
        
        def exploreSolutions(digits, pos, currentSolution):

            if (pos > len(digits) - 1):
                arrSolutions.append(currentSolution)
                return
        
            for i in self.numbersDictionary[digits[pos]]:
                currentSolution += i
                exploreSolutions(digits, pos + 1, currentSolution)
                currentSolution = currentSolution[:-1]
            return
        
        exploreSolutions(digits, 0, currentSolution)
        return arrSolutions


digits = "23"
sol = Solution()
print(sol.letterCombinations(digits))
