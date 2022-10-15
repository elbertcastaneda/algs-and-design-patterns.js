import insertionSort from 'insertion-sort';

describe('insertionSort: ', () => {
  it('input [1000,3, 15, 8, 6, 99, -88, 2, 1, 77, -1] => [-88, -1, 1, 2, 3, 6, 8, 15, 77, 99, 1000]', () => {
    const numbersToBeSorted = [1000,3, 15, 8, 6, 99, -88, 2, 1, 77, -1];
    insertionSort(numbersToBeSorted);

    expect(numbersToBeSorted).toEqual([-88, -1, 1, 2, 3, 6, 8, 15, 77, 99, 1000])
  });

  it('input [1000,3, 15, 8, 15, 99, 15, 2, 3, 4, 3] => [2, 3, 3, 3, 4, 8, 15, 15, 15, 99, 1000]', () => {
    const numbersToBeSorted = [1000,3, 15, 8, 15, 99, 15, 2, 3, 4, 3];
    insertionSort(numbersToBeSorted);

    expect(numbersToBeSorted).toEqual([2, 3, 3, 3, 4, 8, 15, 15, 15, 99, 1000])
  });
});