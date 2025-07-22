/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  let numberOfIsland = 0;
  for (let row = 0; row < grid.length; row++) {
    
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] == 1) {
        findAllLand(grid, row, col);
        numberOfIsland++;
      }
    }
  }
  return numberOfIsland;
};

function findAllLand(grid, row, col) {
  grid[row][col] = 0;

  // look right 
  if (col < grid[0].length - 1) {
    if (grid[row][col + 1] == 1) {
      findAllLand(grid, row, col + 1);
    }
  }

  // look down
  if (row < grid.length - 1) {
    if (grid[row + 1][col] == 1) {
      findAllLand(grid, row + 1, col)
    }
  }

  // look up
  if (row > 0) {
    if (grid[row - 1][col] == 1) {
      findAllLand(grid, row - 1, col)
    }
  }

  // look left
  if (col > 0) {
    if (grid[row][col - 1] == 1) {
      findAllLand(grid, row, col - 1)
    }
  }

  return;

}


const grid = [
  ["0","1","1","1","0"],
  ["1","0","0","0","0"],
  ["1","1","1","1","0"],
  ["0","0","0","0","1"]
];

numIslands(grid);