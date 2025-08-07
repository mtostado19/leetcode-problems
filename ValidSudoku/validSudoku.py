class Solution():
    def validSudoku(self, board):
        rows = [set() for _ in range(9)]
        cols = [set() for _ in range(9)]
        boxes = [set() for _ in range(9)]
        for row in range(9):
            for col in range(9):
                cell = board[row][col]
                if cell == ".":
                    continue

                boxIndex = (row // 3) * 3 + (col // 3)

                if cell in rows[row]:
                    return False
                
                if cell in cols[col]:
                    return False
                
                if cell in boxes[boxIndex]:
                    return False
                
                rows[row].add(cell)
                cols[col].add(cell)
                boxes[boxIndex].add(cell)

        return True

board = [["5","3",".",".","7",".",".",".","."],
         ["6",".",".","1","9","5",".",".","."],
         [".","9","8",".",".",".",".","6","."],
         ["8",".",".",".","6",".",".",".","3"],
         ["4",".",".","8",".","3",".",".","1"],
         ["7",".",".",".","2",".",".",".","6"],
         [".","6",".",".",".",".","2","8","."],
         [".",".",".","4","1","9",".",".","5"],
         [".",".",".",".","8",".",".","7","9"]]

sol = Solution()
print(sol.validSudoku(board))
