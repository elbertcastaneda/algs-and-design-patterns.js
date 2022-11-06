// Symbol('visited') is equals to a place visited;
const visited = Symbol('visited');

type Visited = typeof visited;
type CallbackIterate = (value: 0 | 1 | Visited, i: number, j: number) => void;

function findIslands(matrix: Array<Array<0 | 1 | Visited>>) {
  const maxColumnLength = Math.max(...matrix.map(row => row.length));

  const get = (i: number, j: number): 0 | 1 | Visited | null => {
    if (i < 0 || j < 0 || i >= matrix.length || j >= maxColumnLength) {
      return null;
    }

    return matrix[i][j];
  };

  const iterate = (callback: CallbackIterate) =>
    matrix.forEach((row, i) => {
      row.forEach((cellValue, j) => {
        callback(cellValue, i, j);
      });
    });

  const canGo = (i: number, j: number) => {
    const place = get(i, j);

    return place !== null && place !== visited && place === 1;
  };

  const exploreIsland = (i: number, j: number) => {
    matrix[i][j] = visited;

    const canGoUp = canGo(i - 1, j);
    if (canGoUp) {
      exploreIsland(i - 1, j);
    }

    const canGoRight = canGo(i, j + 1);
    if (canGoRight) {
      exploreIsland(i, j + 1);
    }

    const canGoDown = canGo(i + 1, j);
    if (canGoDown) {
      exploreIsland(i + 1, j);
    }

    const canGoLeft = canGo(i, j - 1);
    if (canGoLeft) {
      exploreIsland(i, j - 1);
    }
  };

  let foundIslands = 0;

  iterate((value, i, j) => {
    if (value !== visited && value === 1) {
      exploreIsland(i, j);

      foundIslands++;
    }
  });

  return foundIslands;
}

export default findIslands;
