const selectionSort = (source: number[]) => {
  for (let i = 0; i < source.length - 1; i++) {
    // console.log('i:', i);
    let minIndex = i;
    // Finding index of the minimum value from i + 1 to the last item in the array
    for (let j = i + 1; j < source.length; j++) {
      // console.log('j:', j);

      // When the value of the current iteration index is less than value of current minimum index
      // we establish the current minimum index with the value of the current iteration index
      if (source[j] < source[minIndex]) {
        minIndex = j;
      }
    }

    // We save the value of the minimum index found into a temp var to perform the swap
    const tmp = source[minIndex];
    // We swap the value of the current iteration to the minimum index found
    source[minIndex] = source[i];
    // We swap the value of the minimum index found to current iteration position
    source[i] = tmp;

    // We are moving found items to left side and the left side items to the found items position
  }
};

export default selectionSort;
