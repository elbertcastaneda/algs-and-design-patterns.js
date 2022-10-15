const insertionSortDesc = (source: number[]): void => {
  for (let i = 0; i < source.length; i++) {
    const current = source[i];

    let j;
    for (j = i - 1; j >= 0 && source[j] < current; j--) {
      source[j + 1] = source[j];
    }
    source[j + 1] = current;
  }
};

export default insertionSortDesc;
