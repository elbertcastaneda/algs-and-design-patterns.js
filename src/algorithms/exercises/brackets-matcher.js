const bracketsMatcher = template => {
  const openings = { '{': '}', '[': ']', '(': ')' };
  const closings = new Set(['}', ']', ')']);

  const brackets = [];

  for (let i = 0; i < template.length; i++) {
    const character = template[i];
    const startOpening = openings[character];

    if (startOpening) {
      brackets.push(startOpening);
    } else if (closings.has(character)) {
      // Closings  alone use case
      if (!brackets.length) {
        return false;
      }

      const lastBracket = brackets.pop();

      if (lastBracket !== character) {
        return false;
      }
    }
  }

  return !brackets.length;
};

module.exports = bracketsMatcher;
