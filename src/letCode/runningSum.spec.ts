import runningSum from "./runningSum";

test('Example 1', () => {
  const result = runningSum([1,2,3,4]);

  expect(result).toEqual([1,3,6,10]);
});

test('Example 2', () => {
  const result = runningSum([1,1,1,1,1]);

  expect(result).toEqual([1,2,3,4,5]);
});

test('Example 3', () => {
  const result = runningSum([3,1,2,10,1]);

  expect(result).toEqual([3,4,6,16,17]);
});