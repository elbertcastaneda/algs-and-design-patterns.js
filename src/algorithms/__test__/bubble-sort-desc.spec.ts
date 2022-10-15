import bubbleSortDesc from 'algorithms/bubble-sort-desc';

describe('bubbleSortDesc: ', () => {
  it('input [1000, 3, 15, 8, 6, 99, -88, 2, 1, 77, -1] => [1000, 99, 77, 15, 8, 6, 3, 2, 1, -1, -88]', () => {
    const numbersToBeSorted = [1000, 3, 15, 8, 6, 99, -88, 2, 1, 77, -1];
    bubbleSortDesc(numbersToBeSorted);

    expect(numbersToBeSorted).toEqual([1000, 99, 77, 15, 8, 6, 3, 2, 1, -1, -88]);
  });

  it('input [1000, 3, 15, 8, 15, 99, 15, 2, 3, 4, 3] => [1000, 99, 15, 15, 15, 8, 4, 3, 3, 3, 2]', () => {
    const numbersToBeSorted = [1000, 3, 15, 8, 15, 99, 15, 2, 3, 4, 3];
    bubbleSortDesc(numbersToBeSorted);

    expect(numbersToBeSorted).toEqual([1000, 99, 15, 15, 15, 8, 4, 3, 3, 3, 2]);
  });
});
