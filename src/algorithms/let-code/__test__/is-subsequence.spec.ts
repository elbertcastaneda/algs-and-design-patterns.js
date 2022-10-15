import isSubsequence, { isSubsequenceWithIndexOf } from 'algorithms/let-code/is-subsequence';

describe('isSubsequence: ', () => {
  it('Example 1 => "abc" is a subsequence of "ahbgdc"', () => {
    const result = isSubsequence('abc', 'ahbgdc');

    expect(result).toBeTruthy();
  });

  it('Example 2 => "abc" is a subsequence of "bahbgdc"', () => {
    const result = isSubsequence('abc', 'bahbgdc');

    expect(result).toBeTruthy();
  });

  it('Example 3 => "axc" is not a subsequence of "ahbgdc"', () => {
    const result = isSubsequence('axc', 'ahbgdc');

    expect(result).toBeFalsy();
  });

  it('Example 4 => "aabcde" is a subsequence of "ahabgcdaaae"', () => {
    const result = isSubsequence('aabcde', 'ahabgcdaaae');

    expect(result).toBeTruthy();
  });

  it('Example 5 => "aabcde" is not a subsequence of "ahbgcdaaae"', () => {
    const result = isSubsequence('aabcde', 'ahbgcdaaae');

    expect(result).toBeFalsy();
  });

  it('Example 6 => "aabcde" is a subsequence of "jsjskjwkwjwahabgcdaaaedfsfjksdfsdkhfdsjkfdshfsdfhsdfsdkh"', () => {
    const result = isSubsequence(
      'aabcde',
      'jsjskjwkwjwahabgcdaaaedfsfjksdfsdkhfdsjkfdshfsdfhsdfsdkh',
    );

    expect(result).toBeTruthy();
  });

  it('Example 7 => Empty strings is a sequence"', () => {
    const result = isSubsequence('', '');

    expect(result).toBeTruthy();
  });
});

describe('isSubsequenceWithIndexOf: ', () => {
  it('Example 1 => "abc" is a subsequence of "ahbgdc"', () => {
    const result = isSubsequenceWithIndexOf('abc', 'ahbgdc');

    expect(result).toBeTruthy();
  });

  it('Example 2 => "abc" is a subsequence of "bahbgdc"', () => {
    const result = isSubsequenceWithIndexOf('abc', 'bahbgdc');

    expect(result).toBeTruthy();
  });

  it('Example 3 => "axc" is not a subsequence of "ahbgdc"', () => {
    const result = isSubsequenceWithIndexOf('axc', 'ahbgdc');

    expect(result).toBeFalsy();
  });

  it('Example 4 => "aabcde" is a subsequence of "ahabgcdaaae"', () => {
    const result = isSubsequenceWithIndexOf('aabcde', 'ahabgcdaaae');

    expect(result).toBeTruthy();
  });

  it('Example 5 => "aabcde" is not a subsequence of "ahbgcdaaae"', () => {
    const result = isSubsequenceWithIndexOf('aabcde', 'ahbgcdaaae');

    expect(result).toBeFalsy();
  });

  it('Example 6 => "aabcde" is a subsequence of "jsjskjwkwjwahabgcdaaaedfsfjksdfsdkhfdsjkfdshfsdfhsdfsdkh"', () => {
    const result = isSubsequenceWithIndexOf(
      'aabcde',
      'jsjskjwkwjwahabgcdaaaedfsfjksdfsdkhfdsjkfdshfsdfhsdfsdkh',
    );

    expect(result).toBeTruthy();
  });

  it('Example 7 => Empty strings is a sequence"', () => {
    const result = isSubsequenceWithIndexOf('', '');

    expect(result).toBeTruthy();
  });
});

describe('Perfomance isSubsequence vs isSubsequenceWithIndexOf: ', () => {
  it('Example 1 => "aabcde" is a subsequence of "jsjskjwkwjwahabgcdaaaedfsfjksdfsdkhfdsjkfdshfsdfhsdfsdkh"', () => {
    const [s, t] = ['aabcde', 'jsjskjwkwjwahabgcdaaaedfsfjksdfsdkhfdsjkfdshfsdfhsdfsdkh'];

    const startIsSubsequence = performance.now();
    const resultIsSubsequence = isSubsequence(s, t);
    const timeUsedIsSubsequence = performance.now() - startIsSubsequence;

    const startIsSubsequenceWithIndexOf = performance.now();
    const resultIsSubsequenceWithIndexOf = isSubsequenceWithIndexOf(s, t);
    const timeUsedIsSubsequenceWithIndexOf = performance.now() - startIsSubsequence;

    expect(resultIsSubsequence).toBeTruthy();
    expect(resultIsSubsequenceWithIndexOf).toBeTruthy();
    expect(timeUsedIsSubsequenceWithIndexOf).toBeGreaterThan(timeUsedIsSubsequence);
  });
});
