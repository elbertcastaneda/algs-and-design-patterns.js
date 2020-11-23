const insertionSort = source => {
  for (let i = 0; i < source.length; i++) {
    const current = source[i];
    let j = i - 1;
    while (j >= 0 && source[j] > current) {
      source[j + 1] = source[j];
      j = j - 1;
    }
    source[j + 1] = current;
  }
};

module.exports = insertionSort;
