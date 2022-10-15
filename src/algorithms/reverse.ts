const reverse = (source: Array<number | string>) => {
  for (let i = 0; i < source.length / 2; i++) {
    const tmp = source[i];
    // Last value (source[(source.length - i) - 1]) iteration ==> First item (source[i])
    source[i] = source[source.length - i - 1];

    // First value (source[(source.length - i) - 1]) item (source[i]) ==> Last item
    source[source.length - i - 1] = tmp;
  }
};

export default reverse;
