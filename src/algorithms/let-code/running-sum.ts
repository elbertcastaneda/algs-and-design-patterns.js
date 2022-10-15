// Running Sum of 1d Array
function runningSum(numbers: number[]): number[] {
  const values: number[] = [];

  return numbers.reduce(
    (acc, num) => {
      acc.sum += num;
      acc.values.push(acc.sum);

      return acc;
    },
    { sum: 0, values },
  ).values;
}

export default runningSum;
