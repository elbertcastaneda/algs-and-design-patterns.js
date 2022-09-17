function pivotIndex(numbers: number[]): number {
  const sum = numbers.reduce((acc, n) => acc + n, 0);
  let leftSum = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (leftSum === sum - leftSum - numbers[i]) {
      return i;
    }

    leftSum += numbers[i];
  }

  return -1;
}

export default pivotIndex;
