class Solution():
    def generateParentheses(self, n):
        solutionsArr = []
        current = ""
        self.parentheses(n, n, current, solutionsArr)
        return solutionsArr
    
    def parentheses(self, openTotal, closeTotal, current, solutions):

        if (openTotal + closeTotal == 0):
            return solutions.append(current)
        
        if openTotal > 0:
            #open the parentheses
            current += "("
            self.parentheses(openTotal - 1, closeTotal, current, solutions)
            current = current[:-1]
        
        if openTotal < closeTotal:
            # close the parentheses
            current += ")"
            self.parentheses(openTotal, closeTotal - 1, current, solutions)
            current = current[:-1]
        return solutions


n = 3
sol = Solution()
print(sol.generateParentheses(n))
