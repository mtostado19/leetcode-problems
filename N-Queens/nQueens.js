
// Practice for backtracking


function nQueens(n) {

  let answer = [];
  answer = backtracking(n, 0, [], []);
  console.log(answer);
  return answer;
}

function validation(cell, row, blockedCells) {

  let diff;
  if (blockedCells.includes(cell)) {
    return false
  }
  for (let j = 0; j < blockedCells.length; j++) {
    diff = (row - j);
    if (blockedCells[j] + diff == cell || blockedCells[j] - diff == cell) {
      return false;
    }
  }
  return true;
}

function backtracking(n, row, solutionArray, blockedCells) {

  if (row === n) {
    solutionArray.push([...blockedCells]);
    return solutionArray;
  }

  for (let i = 0; i < n; i++) {
    if (validation(i, row, blockedCells)) {
      blockedCells.push(i);
      solutionArray = backtracking(n, row + 1, solutionArray, blockedCells);
      blockedCells.pop();
    }
  }

  return solutionArray;
}

nQueens(4);
