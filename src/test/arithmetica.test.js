const { add } = require('../arithmetica');

test('2 + 3 is equal to 5', () => {
  expect(add(2, 3)).toBe(5);
});

test('2 + 3 is not equal to 6', () => {
  expect(add(2, 3)).not.toBe(6);
});

test('4000000000000 + 59281011111111 is equal to 63281011111111', () => {
  expect(add(4000000000000, 59281011111111)).toBe(63281011111111);
});