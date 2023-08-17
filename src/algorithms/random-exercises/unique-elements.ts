// Coding Challenge
// Write a JavaScript function to find the unique elements from two arrays.

type RecursiveArrayNumbers = (number | RecursiveArrayNumbers)[];

const NESTING_LEVEL = 10;

export default function uniqueElements(
  firstArray: RecursiveArrayNumbers,
  secondArray: RecursiveArrayNumbers,
): number[] {
  return Array.from(new Set(firstArray.concat(secondArray).flat(NESTING_LEVEL) as number[]));
}
