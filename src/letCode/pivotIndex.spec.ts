import pivotIndex from "./pivotIndex";

test('Example 1', () => {
  const result = pivotIndex([1,7,3,6,5,6]);

  expect(result).toBe(3);
});

test('Example 2', () => {
  const result = pivotIndex([1,2,3]);

  expect(result).toBe(-1);
});

test('Example 3', () => {
  const result = pivotIndex([2,1,-1]);

  expect(result).toBe(0);
});

test('Example 4', () => {
  const result = pivotIndex([33,27,10,10,33,10,10,10,10,10,10,10,5,5]);

  expect(result).toBe(4);
});