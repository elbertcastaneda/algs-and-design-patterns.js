const sqrt = value => {
  if (value < 0) {
    return NaN;
  }

  const eps = 1e-15;
  let result = value;

  while (Math.abs(result - value / result) > eps * result) {
    result = (value / result + result) / 2;
    console.log('result: ', result);
  }

  return result;
};

module.exports = sqrt;