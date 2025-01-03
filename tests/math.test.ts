import { add, multiply } from '../src/math';

describe('Math Functions', () => {
  test('add should return the sum of two numbers', () => {
    expect(add(2, 3)).toBe(5);
    expect(add(-1, 1)).toBe(0);
  });

  // test('multiply should return the product of two numbers', () => {
  //   expect(multiply(2, 3)).toBe(6);
  //   expect(multiply(-2, 3)).toBe(-6);
  // });
});
