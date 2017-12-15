import { add, mult, div } from '../math';

describe('function add', () => {
  it('should summarize passed values', () => {
    expect(add(1, 2, 3)).toBe(6);
  });
});

describe('function mult', () => {
  it('should multiply passed values', () => {
    const expectedResult = 90;
    const result = mult(3, 5, 6);

    expect(result).toBe(expectedResult);
  });
});

describe('function div', () => {
  it('should divide passed values', () => {
    const expectedResult = 3;
    const result = div(12, 4);

    expect(result).toBe(expectedResult);
  });

  it('should return undefined in case of 0 division', () => {
    const expectedResult = undefined;
    const result = div(100, 0);

    expect(result).toBe(expectedResult);
  });
});
