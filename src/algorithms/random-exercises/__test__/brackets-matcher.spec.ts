import bracketsMatcher from 'algorithms/random-exercises/brackets-matcher';

describe('bracketsMatcher', () => {
  it('should return true with "[()]{}{[()()]()}"', () => {
    expect(bracketsMatcher('[()]{}{[()()]()}')).toBeTruthy();
  });

  it('should return false with "[(])"', () => {
    expect(bracketsMatcher('[(])')).toBeFalsy();
  });

  it('should return true with "[{()()}({[]})]({}[({})])((((((()[])){}))[]{{{({({({{{{{{}}}}}})})})}}}))[][][]"', () => {
    const result = bracketsMatcher(
      '[{()()}({[]})]({}[({})])((((((()[])){}))[]{{{({({({{{{{{}}}}}})})})}}}))[][][]',
    );

    expect(result).toBeTruthy();
  });

  it('should return true with "[()]{}{[()()]()}"', () => {
    const result = bracketsMatcher('[()]{}{[()()]()}');

    expect(result).toBeTruthy();
  });

  it('should return false with "[()]{}{[()()]()}["', () => {
    const result = bracketsMatcher('[()]{}{[()()]()}[');

    expect(result).toBeFalsy();
  });

  it('should return false with "[()]{}{[()()]()}]" (Closing Bracket alone use case)', () => {
    const result = bracketsMatcher('[()]{}{[()()]()}]');

    expect(result).toBeFalsy();
  });
});
