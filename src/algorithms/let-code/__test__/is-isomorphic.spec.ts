import isIsomorphic from 'algorithms/let-code/is-isomorphic';

describe('isIsomorphic: ', () => {
  it('Example 1 => "egg" are "add" are isomorphic', () => {
    const result = isIsomorphic('egg', 'add');

    expect(result).toBeTruthy();
  });

  it('Example 2 => "foo" are "bar" aren\'t isomorphic', () => {
    const result = isIsomorphic('foo', 'bar');

    expect(result).toBeFalsy();
  });

  it('Example 3 => "paper" are "title" are isomorphic', () => {
    const result = isIsomorphic('paper', 'title');

    expect(result).toBeTruthy();
  });

  it('Example 4 => Two strings cannot be isomorphic if they have different lengths', () => {
    const result = isIsomorphic('paper', 'titles');

    expect(result).toBeFalsy();
  });

  it('Example 5 => "aab" are "xyz" aren\'t isomorphic', () => {
    const result = isIsomorphic('aab', 'xyz');

    expect(result).toBeFalsy();
  });

  it('Example 6 => "pepcoding" are "sosherlok" aren\'t isomorphic', () => {
    const result = isIsomorphic('pepcoding', 'sosherlok');

    expect(result).toBeFalsy();
  });
});