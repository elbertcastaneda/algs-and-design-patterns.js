/**
 *
 * @param {Array<Array<number>>} grid
 */
function minPathSum(grid) {
  return dfs(0,0,grid);
}

/**
 *
 * @param {number} i
 * @param {number} j
 * @param {Array<Array<number>>} grid
 * @returns {number}
 */
function dfs(i, j, grid){
  const nRows = grid.length - 1;
  const nCols = grid[0].length - 1;

  if (i === nRows && j === nCols){
      return grid[i][j];
  }

  if (i < nRows && j < nCols){
      const r1 = grid[i][j] + dfs(i + 1, j, grid);
      const r2 = grid[i][j] + dfs(i, j + 1, grid);
      return Math.min(r1, r2);
  }

  if (i < nRows){
      return grid[i][j] + dfs(i + 1, j, grid);
  }

  if (j < nCols){
      return grid[i][j] + dfs(i, j + 1, grid);
  }

  return 0;
}