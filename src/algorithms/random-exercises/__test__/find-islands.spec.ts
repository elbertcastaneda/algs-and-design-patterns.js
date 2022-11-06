import findIslands from '../find-islands';

const formatMatrix = (matrix: number[][]) => matrix.map(row => row.join(', ')).join('\n');

type MatrixZeroOne = Array<Array<0 | 1>>;

const matrixOneIsland: MatrixZeroOne = [
  [1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1],
];
const matrixOneIslandStrangeScenario: MatrixZeroOne = [
  [1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1],
  [0, 0, 0, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1],
];
const matrixOneIslandWithOneZero: MatrixZeroOne = [
  [1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 0],
];
const matrixTwoIslands: MatrixZeroOne = [
  [1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1],
  [0, 0, 0, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1],
];
const matrixFourIslands: MatrixZeroOne = [
  [1, 1, 1, 0, 1, 1, 1],
  [1, 1, 1, 0, 1, 1, 1],
  [0, 1, 0, 0, 1, 1, 1],
  [0, 0, 0, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 1, 1],
  [1, 0, 1, 0, 1, 1, 1],
  [1, 1, 1, 0, 1, 1, 1],
];
const matrixFiveIslands: MatrixZeroOne = [
  [1, 1, 1, 0, 1, 1],
  [1, 1, 1, 0, 1, 1],
  [0, 1, 0, 0, 1, 1],
  [0, 0, 0, 0, 0, 0],
  [1, 1, 0, 0, 0, 1],
  [1, 0, 1, 0, 1, 1],
];
const matrixSixIsland: MatrixZeroOne = [
  [1, 1, 0, 1, 1, 0, 1, 0],
  [1, 1, 0, 1, 1, 0, 1, 1],
  [0, 1, 0, 1, 1, 0, 1, 1],
  [0, 0, 0, 0, 0, 0, 1, 0],
  [0, 0, 0, 0, 1, 0, 0, 1],
  [1, 1, 0, 1, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 0, 1, 1],
  [0, 1, 0, 1, 1, 0, 1, 1],
];
const matrixSevenIsland: MatrixZeroOne = [
  [1, 1, 0, 1, 1, 0, 1, 0],
  [1, 1, 0, 1, 1, 0, 1, 1],
  [0, 1, 0, 1, 1, 0, 1, 1],
  [0, 0, 0, 0, 0, 0, 1, 0],
  [0, 0, 0, 0, 0, 1, 0, 1],
  [1, 1, 0, 1, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 0, 1, 1],
  [0, 1, 0, 1, 1, 0, 1, 1],
];
const matrixComplex: MatrixZeroOne = [
  [1, 0, 1, 0, 1, 0, 1, 0],
  [0, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 0],
  [0, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 0],
  [0, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 0],
  [0, 1, 0, 1, 0, 1, 0, 1],
];

describe('findIslands:', () => {
  it(`should return 1 island for the following matrix: \n${formatMatrix(matrixOneIsland)}`, () => {
    expect(findIslands(matrixOneIsland)).toBe(1);
  });

  it(`should return 1 island for the following matrix(Strange use case): \n${formatMatrix(
    matrixOneIslandStrangeScenario,
  )}`, () => {
    expect(findIslands(matrixOneIslandStrangeScenario)).toBe(1);
  });

  it(`should return 1 islands for the following matrix (One Zero): \n${formatMatrix(
    matrixOneIslandWithOneZero,
  )}`, () => {
    expect(findIslands(matrixOneIslandWithOneZero)).toBe(1);
  });

  it(`should return 2 islands for the following matrix: \n${formatMatrix(
    matrixTwoIslands,
  )}`, () => {
    expect(findIslands(matrixTwoIslands)).toBe(2);
  });

  it(`should return 4 islands for the following matrix: \n${formatMatrix(
    matrixFourIslands,
  )}`, () => {
    expect(findIslands(matrixFourIslands)).toBe(4);
  });

  it(`should return 5 islands for the following matrix: \n${formatMatrix(
    matrixFiveIslands,
  )}`, () => {
    expect(findIslands(matrixFiveIslands)).toBe(5);
  });

  it(`should return 6 islands for the following matrix: \n${formatMatrix(matrixSixIsland)}`, () => {
    expect(findIslands(matrixSixIsland)).toBe(6);
  });

  it(`should return 7 islands for the following matrix: \n${formatMatrix(
    matrixSevenIsland,
  )}`, () => {
    expect(findIslands(matrixSevenIsland)).toBe(7);
  });

  it(`should return 32 islands for the following complex matrix: \n${formatMatrix(
    matrixComplex,
  )}`, () => {
    expect(findIslands(matrixComplex)).toBe(32);
  });
});
