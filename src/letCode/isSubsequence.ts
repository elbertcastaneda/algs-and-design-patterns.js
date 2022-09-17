function isSubsequence(s: string, t: string): boolean {
  let sequence = 0;

  for (let i = 0; i < t.length; i++) {
    const cs = s[sequence];
    const ct = t[i];

    if (cs === ct) {
      sequence++;
    }

    if (sequence === s.length) {
      return true;
    }
  }

  return sequence === s.length;
}

export function isSubsequenceWithIndexOf(s: string, t: string): boolean {
  let lastIndexChar = 0;

  for (let i = 0; i < s.length; i++) {
    const cs = s[i];
    const indexChar = t.indexOf(cs, lastIndexChar);

    if (indexChar === -1 || indexChar < lastIndexChar) {
      return false;
    }

    lastIndexChar = indexChar + 1;
  }

  return true;
}

export default isSubsequence;
