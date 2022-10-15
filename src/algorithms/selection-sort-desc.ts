const selectionSort = (source: number[]) => {
  // we use: (source.length - 1) because the last iteration is not necessary because
  // one iteration before the last one we will have the array sorted
  for (let i = 0; i < source.length - 1; i++) {
    // console.log('i:', i);
    let maxIndex = i;
    // Finding index of the maximum value from i + 1 to the last item in the array
    for (let j = i + 1; j < source.length; j++) {
      // console.log('j:', j);

      // When the value of the current iteration index is less than value of current maximum index
      // we establish the current maximum index with the value of the current iteration index
      if (source[j] > source[maxIndex]) {
        maxIndex = j;
      }
    }

    // We save the value of the maximum index found into a temp var to perform the swap
    const tmp = source[maxIndex];
    // We swap the value of the current iteration to the maximum index found
    source[maxIndex] = source[i];
    // We swap the value of the maximum index found to current iteration position
    source[i] = tmp;

    // We are moving found items to left side and the left side items to the found items position
  }
};

export default selectionSort;
