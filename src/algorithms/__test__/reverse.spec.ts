import reverse from 'algorithms/reverse';

describe('reverse: ', () => {
  it('input [1000, 3, 15, 8, 6, 99, -88, 2, 1, 77, -1] => [-1, 77, 1, 2, -88, 99, 6, 8, 15, 3, 1000]', () => {
    const numbersToReversed = [1000, 3, 15, 8, 6, 99, -88, 2, 1, 77, -1];
    reverse(numbersToReversed);

    expect(numbersToReversed).toEqual([-1, 77, 1, 2, -88, 99, 6, 8, 15, 3, 1000]);
  });

  it('input [1000, 3, 15, 8, 15, 99, 15, 2, 3, 4, 3] => [3, 4, 3, 2, 15, 99, 15, 8, 15, 3, 1000]', () => {
    const numbersToReversed = [1000, 3, 15, 8, 15, 99, 15, 2, 3, 4, 3];
    reverse(numbersToReversed);

    expect(numbersToReversed).toEqual([3, 4, 3, 2, 15, 99, 15, 8, 15, 3, 1000]);
  });

  it('input ["a", "b", "c", "d", "e", "f"] => ["f", "e", "d", "c", "b", "a"]', () => {
    const arrayToReverse = ['a', 'b', 'c', 'd', 'e', 'f'];
    reverse(arrayToReverse);

    expect(arrayToReverse).toEqual(['f', 'e', 'd', 'c', 'b', 'a']);
  });
});
