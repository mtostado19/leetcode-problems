/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  const firstRow = 0;
  const firstColum = 0;
  let solutionBoard = board;
  let isValid = false;

  isValid = exploreSolutions(solutionBoard, firstRow, firstColum, isValid);
  console.log(isValid);

};

function exploreSolutions(board, row, column, isValid) {

  if (row > 8) {
    return true;
  }

  if (column > 8) {
    isValid = exploreSolutions(board, row + 1, 0, isValid);
    return isValid;
  }

  if (board[row][column] != '.') {
    isValid = exploreSolutions(board, row, column + 1, isValid);
  } else {

    for (let i = 0; i < 9; i++) {
      if (validator(board, i.toString(), row, column)) {
        board[row][column] = i.toString();
        isValid = exploreSolutions(board, row, column + 1, isValid);
        board[row][column] = ".";
      }
    }

  }

  return isValid;

}

function validator(board, number, row, column) {
  let isCorrect = true;

  for(let i = 0; i < 9; i++) {
    if (board[i][column] == number) {
      isCorrect = false;
    }
  }

  for(let j = 0; j < 9; j++) {
    if (board[row][j] == number) {
      isCorrect = false;
    }
  }
  return isCorrect;
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


isValidSudoku(board);
