const bubbleSortDesc = (source: number[]) => {
  for (let i = 0; i < source.length - 1; i++) {
    let flag = false;
    for (let j = 0; j < source.length - 1 - i; j++) {
      // console.log('source[j] > source[j + 1]', source[j], source[j + 1]);

      if (source[j] < source[j + 1]) {
        const tmp = source[j + 1];
        source[j + 1] = source[j];
        source[j] = tmp;
        flag = true;
      }

      // console.log('source: ', source);
    }

    if (!flag) {
      // console.log('Sorted');
      break;
    }
    // console.log('source:' , i, source);
  }
};

export default bubbleSortDesc;
