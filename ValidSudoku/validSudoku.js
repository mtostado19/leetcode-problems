/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  const rowObject = Array.from({ length: 9 }, () => new Set());
  const columnObject = Array.from({ length: 9 }, () => new Set());
  const boxObject = Array.from({ length: 9 }, () => new Set());

  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {

      if (board[row][col] != ".") {
        const boxIndex = Math.floor(row / 3) * 3 + Math.floor(col / 3);
        let num = board[row][col];
        if (rowObject[row].has(num) || columnObject[col].has(num) || boxObject[boxIndex].has(num)) {
          return false;
        }
        rowObject[row].add(num);
        columnObject[col].add(num);
        boxObject[boxIndex].add(num);
      }
    }
  }
  return true;
};

const board = [
  ["5","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"],
];

// const board = [
//   [".","8","7","6","5","4","3","2","1"],
//   ["2",".",".",".",".",".",".",".","."],
//   ["3",".",".",".",".",".",".",".","."],
//   ["4",".",".",".",".",".",".",".","."],
//   ["5",".",".",".",".",".",".",".","."],
//   ["6",".",".",".",".",".",".",".","."],
//   ["7",".",".",".",".",".",".",".","."],
//   ["8",".",".",".",".",".",".",".","."],
//   ["9",".",".",".",".",".",".",".","."]
// ]

console.log(isValidSudoku(board));
