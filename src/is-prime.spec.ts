import isPrime from 'is-prime';

test('should return true when we use prime numbers (2, 3, 5, 7, 11, 13, 17, 19, 23)', () => {
  expect([2, 3, 5, 7, 11, 13, 17, 19, 23].every(n => isPrime(n))).toBeTruthy();
});

test('should return false when we use non prime numbers (1, 6, 8, 9, 10, 12, 14, 15, 16, 20, 21, 22)', () => {
  expect([1, 6, 8, 9, 10, 12, 14, 15, 16, 20, 21, 22].every(n => !isPrime(n))).toBeTruthy();
});