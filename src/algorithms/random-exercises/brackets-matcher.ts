type ClosingBrackets = '}' | ']' | ')';

const openings = Object.freeze(
  new Map<string, string>([
    ['{', '}'],
    ['[', ']'],
    ['(', ')'],
  ]),
);
const closings = Object.freeze(new Set(openings.values()));

// Given an expression string exp, write a program to examine whether the pairs
// and the orders of “{“, “}”, “(“, “)”, “[“, “]” are correct in exp.
const bracketsMatcher = (expression: string) => {
  const bracketsStack: Array<ClosingBrackets> = [];

  for (let i = 0; i < expression.length; i++) {
    const char = expression[i];
    // if is a opening bracket get its closing bracket
    const posibleClosingBracket = openings.get(char);

    if (posibleClosingBracket) {
      // char is opening bracket
      bracketsStack.push(posibleClosingBracket as ClosingBrackets);
    } else if (closings.has(char)) {
      // char is closing bracket

      // Closing bracket alone use case
      if (!bracketsStack.length) {
        return false;
      }

      const lastBracket = bracketsStack.pop();

      if (lastBracket !== (char as ClosingBrackets)) {
        return false;
      }
    }
  }

  return !bracketsStack.length;
};

export default bracketsMatcher;
