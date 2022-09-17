import insertionSortDesc from 'insertionSortDesc';

describe('insertionSortDesc: ', () => {
  it('input [1000,3, 15, 8, 6, 99, -88, 2, 1, 77, -1] => [1000, 99, 77, 15, 8, 6, 3, 2, 1, -1, -88]', () => {
    const numbersToBeSorted = [1000,3, 15, 8, 6, 99, -88, 2, 1, 77, -1];
    insertionSortDesc(numbersToBeSorted);

    expect(numbersToBeSorted).toEqual([1000, 99, 77, 15, 8, 6, 3, 2, 1, -1, -88])
  });

  it('input [1000,3, 15, 8, 15, 99, 15, 2, 3, 4, 3] => [1000, 99, 15, 15, 15, 8, 4, 3, 3, 3, 2]', () => {
    const numbersToBeSorted = [1000,3, 15, 8, 15, 99, 15, 2, 3, 4, 3];
    insertionSortDesc(numbersToBeSorted);

    expect(numbersToBeSorted).toEqual([1000, 99, 15, 15, 15, 8, 4, 3, 3, 3, 2])
  });
});