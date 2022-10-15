/**
 *
 * @param {Array<Array<0|1>>} matrix
 */
const findIslands = matrix => {
  /** @type Object<string, Object<string, { value: 0|1, visited: boolean }>> */
  const data = {};
  const maxColumnLength = Math.max(matrix.map(row => row.length));

  /**
   *
   * @param {Number} i
   * @param {Number} j
   * @returns {{ value: 0|1, visited: boolean }}
   */
  const get = (i, j) => {
    if (i < 0 || j < 0 || i >= matrix.length || j >= maxColumnLength) {
      return null;
    }

    data[i] = data[i] || {};
    const current = data[i][j];

    if (current) {
      return current;
    }

    data[i][j] = { value: matrix[i][j], visited: false };

    return data[i][j];
  };

  /**
   *
   * @param {function(0|1, Number, Number)} callback
   */
  const iterate = callback =>
    matrix.forEach((row, i) => row.forEach((cellValue, j) => callback(cellValue, i, j)));

  /**
   *
   * @param {Number} i
   * @param {Number} j
   * @param {{ i: Number, j: Number}} steps
   * @returns boolean
   */
  const canGo = (i, j, { i: iSteps = 0, j: jSteps = 0 }) => {
    const place = get(i + iSteps, j + jSteps);

    return place && !place.visited && place.value === 1;
  };

  /**
   *
   * @param {Number} i
   * @param {Number} j
   */
  const findNeighbors = (i, j) => {
    const place = get(i, j);

    if (!place) {
      return;
    }

    place.visited = true;

    const canGoUp = canGo(i, j, { i: -1 });

    if (canGoUp) {
      findNeighbors(i - 1, j);
    }

    const canGoRight = canGo(i, j, { j: 1 });

    if (canGoRight) {
      findNeighbors(i, j + 1);
    }

    const canGoDown = canGo(i, j, { i: 1 });

    if (canGoDown) {
      findNeighbors(i + 1, j);
    }

    const canGoLeft = canGo(i, j, { j: -1 });

    if (canGoLeft) {
      findNeighbors(i, j - 1);
    }
  };

  let foundIslands = 0;

  iterate((value, i, j) => {
    if (value === 1 && !get(i, j).visited) {
      findNeighbors(i, j);

      foundIslands++;
    }
  });

  return foundIslands;
};

module.exports = findIslands;
