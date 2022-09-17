function isIsomorphic(s: string, t: string): boolean {
  const map: Map<string, string> = new Map();
  const set: Set<string> = new Set();

  if (s.length !== t.length) {
    return false;
  }

  for (let i = 0; i < s.length; i++) {
    const c1 = s[i];
    const c2 = t[i];

    if (map.has(c1)) {
      // Return false if first occurrence of c1 is mapped to
      // a different character.
      if (map.get(c1) !== c2) {
        return false;
      }
    } else {
      // Return false if c2 is already mapped to some other char in str1
      if (set.has(c2)) {
        return false;
      }

      // All checks passed. So insert in the map, and the set.
      map.set(c1, c2);
      set.add(c2);
    }
  }

  return true;
}

export default isIsomorphic;
