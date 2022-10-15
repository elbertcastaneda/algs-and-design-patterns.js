const insertionSort = (source: number[]): void => {
  for (let i = 0; i < source.length; i++) {
    const current = source[i];

    let j;
    for (j = i - 1; j >= 0 && source[j] > current; j--) {
      source[j + 1] = source[j];
    }
    source[j + 1] = current;
  }
};

export default insertionSort;

// source = 2,8,4,7,9,5

// i = 0
// current = 2
// j = -1
// exit while j is not greater or equals than zero
// source [0] = 2
// source = 2,8,4,7,9,5

// i = 1
// current = 8
// j = 0
// exit while because j is greater or equals then zero but source[0] (2) is not greater then current (8)
// source [1] = 8
// source = 2,8,4,7,9,5

// i = 2
// current = 4
// j = 1
// enter while because j is greater or equals then zero and source[1] (8) is greater then current (4)
// source[2] = 8;
// source = 2,8,8,7,9,5
// j = 0 (j = j - 1;)
// exit while because j is greater or equals then zero but source[0] (2) is not greater then current (4)
// source [1] = 4
// source = 2,4,8,7,9,5

// i = 3
// current = 7
// j = 2
// enter while because j is greater or equals then zero and source[2] (8) is greater then current (7)
// source[3] = 8;
// source = 2,4,8,8,9,5
// j = 1 (j = j - 1;)
// exit while because j is greater or equals then zero but source[1] (4) is not greater then current (7)
// source [2] = 7
// source = 2,4,7,8,9,5

// i = 4
// current = 9
// j = 3
// exit while because j is greater or equals then zero but source[3] (8) is not greater then current (9)
// source [4] = 9
// source = 2,4,7,8,9,5

// i = 5
// current = 5
// j = 4
// enter while because j is greater or equals then zero and source[4] (9) is greater then current (5)
// source[5] = 9;
// source = 2,4,7,8,9,9
// j = 3 (j = j - 1;)
// enter while because j is greater or equals then zero and source[3] (8) is greater then current (5)
// source[4] = 8;
// source = 2,4,7,8,8,9
// j = 2 (j = j - 1;)
// enter while because j is greater or equals then zero and source[2] (7) is greater then current (5)
// source[3] = 7;
// source = 2,4,7,7,8,9
// j = 1 (j = j - 1;)
// exit while because j is greater or equals then zero but source[1] (4) is not greater then current (5)
// source [2] = 5
// source = 2,4,5,7,8,9
