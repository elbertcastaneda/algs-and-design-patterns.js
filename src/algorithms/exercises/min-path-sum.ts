function minPathSum(grid: number[][]): number {
  const rows = grid.length - 1;
  const cols = grid[0].length - 1;

  // first row
  for (let i = 1; i <= cols; i++) {
    grid[0][i] += grid[0][i - 1];
  }

  // first col
  for (let i = 1; i <= rows; i++) {
    grid[i][0] += grid[i - 1][0];
  }

  // inner cells
  for (let i = 1; i <= rows; i++) {
    for (let j = 1; j <= cols; j++) {
      grid[i][j] += Math.min(grid[i - 1][j], grid[i][j - 1]);
    }
  }

  return grid[rows][cols];
}
