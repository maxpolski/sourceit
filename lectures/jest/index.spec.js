import { add } from './index';

describe('TEST', () => {
  it('true should be equal true', () => {
    expect(true).toBe(true);
  });

  it('add should summurize passed values', () => {
    expect(add(1, 2, 3)).toBe(6);
  });
});
