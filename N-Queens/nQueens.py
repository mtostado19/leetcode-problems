class Solution:
  def solveNQueens(self, n):
    currentPath = []
    solutionArr = []
    self.exploreCells(n, 0, currentPath, solutionArr)
    solutionVisual = []
    for solutions in solutionArr:
       self.generateVisualSolution(n, solutions, solutionVisual)
    return solutionVisual
  
  def generateVisualSolution(self, n, arr, solutionVisual):
    lineArr = []
    for i in arr:
        lineStr = ""
        for j in range(n):
            if (j == i[0]):
                lineStr += "Q"
            else:
                lineStr += "."
        lineArr.append(lineStr)
    solutionVisual.append([*lineArr])
    return
  
  def exploreCells(self, n, row, currentPath, arrResult):
    
    if row > n - 1:
       arrResult.append([*currentPath])
       return
    
    for col in range(n):
        if self.validCell([col, row], currentPath):
           currentPath.append([col, row])
           self.exploreCells(n, row + 1, currentPath, arrResult)
           currentPath.pop()
    return
  
  def validCell(self, cell, arr):  
     for items in arr:
        if items[0] == cell[0] or items[0] + items[1] == cell[0] + cell[1] or items[0] - items[1] == cell[0] - cell[1]:
           return False
     return True

n = 4
sol = Solution()
sol.solveNQueens(n)

