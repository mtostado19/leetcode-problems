class Solution:
    def numIslands(self, grid):
        if len(grid) == 0:
            return 0
        
        row = len(grid)
        col = len(grid[0])
        numberIslands = 0

        for r in range(row):
            for c in range(col):
                if grid[r][c] == "1":
                    numberIslands += 1
                    self.exploreIsland(grid, r, c)
        return numberIslands
    
    
    def exploreIsland(self, grid, row, col):
        if col < 0 or row < 0 or col >= len(grid[0]) or row >= len(grid) or grid[row][col] == '0':
            return
        
        grid[row][col] = "0"
        
        self.exploreIsland(grid, row, col + 1)
        self.exploreIsland(grid, row + 1, col)
        self.exploreIsland(grid, row, col - 1)
        self.exploreIsland(grid, row - 1, col)

        return grid
    
grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","1"],
  ["1","1","0","0","0"],
  ["0","0","1","0","1"]
]
sol = Solution()
print(sol.numIslands(grid))
