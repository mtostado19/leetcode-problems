class Solution:
    def solveNQueens(self, n):
        currentPath = []
        solutionArr = []
        visualArr = []
        self.exploreCells(n, 0, currentPath, solutionArr, visualArr)
        return solutionArr
  
    def exploreCells(self, n, row, currentPath, arrResult, visualArr):
    
        if row > n - 1:
            arrResult.append([*visualArr])
            return
    
        strLine = "." * n
        for col in range(n):
            if self.validCell([col, row], currentPath):
                currentPath.append([col, row])
                visualArr.append(strLine[:col] + "Q" + strLine[col + 1:])
                self.exploreCells(n, row + 1, currentPath, arrResult, visualArr)
                currentPath.pop()
                visualArr.pop()
        return
  
    def validCell(self, cell, arr):  
        for items in arr:
            if items[0] == cell[0] or items[0] + items[1] == cell[0] + cell[1] or items[0] - items[1] == cell[0] - cell[1]:
                return False
        return True

n = 5
sol = Solution()

response = sol.solveNQueens(n)
print(response)

for res in response:
    for i in res:
        print(i)
    print("-----------------------------------")