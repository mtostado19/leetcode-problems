/**
 * @param {character[][]} board
 * @return {boolean}
 */
var solveSudoku = function(board) {
  const firstRow = 0;
  const firstColum = 0;
  let solutionBoard = board;
  let isValid;

  isValid = exploreSolutions(solutionBoard, firstRow, firstColum, solutionBoard);
  if (isValid) {
    return solutionBoard;
  }
  return false;
};

function exploreSolutions(board, row, column, solutionBoard) {

  if (row === 9) {
    return true;
  }

  if (column > 8) {
    return exploreSolutions(board, row + 1, 0, solutionBoard);
  }

  if (board[row][column] != '.') {
    return exploreSolutions(board, row, column + 1, solutionBoard);
  } else {

    for (let i = 1; i <= 9; i++) {
      let num = i.toString()
      if (validator(board, num, row, column)) {
        board[row][column] = num;
        if (exploreSolutions(board, row, column + 1, solutionBoard)) {
          solutionBoard[row][column] = board[row][column];
          return true;
        };
        board[row][column] = ".";
      }
    }
  }

  return false;

}

function validator(board, number, row, column) {

  for(let i = 0; i < 9; i++) {
    if (board[i][column] == number) {
      return false;
    }
  }

  for(let j = 0; j < 9; j++) {
    if (board[row][j] == number) {
      return false;
    }
  }

  let boxRow = Math.floor(row / 3) * 3;
  let boxCol = Math.floor(column / 3) * 3;

  for (let r = boxRow; r < boxRow + 3; r++) {
    for (let c = boxCol; c < boxCol + 3; c++) {
      if (board[r][c] === number) {
        return false;
      }
    }
    
  }
  return true;
}


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


console.log(solveSudoku(board));
