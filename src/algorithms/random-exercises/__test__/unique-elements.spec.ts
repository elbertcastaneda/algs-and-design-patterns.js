import uniqueElements from '../unique-elements';
describe('uniqueElement', () => {
  it('with [1, 2, 3] and [100, 2, 1, 10] should return [1, 2, 3, 100, 10]', () => {
    const result = uniqueElements([1, 2, 3], [100, 2, 1, 10]);

    expect(result).toEqual([1, 2, 3, 100, 10]);
  });

  it('with [1, 2, 3, 4, 5] and [1, [2], [3, [[4]]], [5, 6]] should return [1, 2, 3, 4, 5, 6]', () => {
    const result = uniqueElements([1, 2, 3, 4, 5], [1, [2], [3, [[4]]], [5, 6]]);

    expect(result).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
