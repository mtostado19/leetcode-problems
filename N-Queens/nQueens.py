class Solution:
  def solveNQueens(self, n):
    currentPath = []
    solutionArr = []
    self.exploreCells(n, 0, currentPath, solutionArr)
    for solutions in solutionArr:
       print(solutions)
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
        if items[0] == cell[0]:
           return False
        if items[0] + items[1] == cell[0] + cell[1]:
           return False
        if items[0] - items[1] == cell[0] - cell[1]:
           return False
     return True

n = 9
sol = Solution()
sol.solveNQueens(n)

