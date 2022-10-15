// Running Sum of 1d Array

function runningSum(nums: number[]): number[] {
  return nums.reduce((acc, num) => {
      acc.sum += num;
      acc.values.push(acc.sum);

      return acc;
  }, { sum: 0, values: [] as number[] }).values;
}

export default runningSum;

