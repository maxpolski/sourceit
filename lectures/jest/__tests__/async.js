import { runWithDelay } from '../async';

describe('function runWithDelay', () => {
  const mockTimer = jest.fn();
  const mockCb = () => {};
  const mockDelay = 1000;

  it.skip('should call timer with passed function and delay', () => {
    runWithDelay(mockDelay, mockCb, mockTimer);

    expect(mockTimer).toBeCalledWith(mockCb, mockDelay);
  });

  it('should return promise', () => {
    const result = runWithDelay(mockDelay, mockCb, mockTimer);

    expect(result instanceof Promise).toBeTruthy();
  });

  it('returned promise should resolve with result of passed cb', (done) => {
    const expectedResult = 'test';
    const testCb = () => expectedResult;
    const result = runWithDelay(mockDelay, testCb, setTimeout);
    result
      .then((cbResult) => {
        expect(cbResult).toBe(expectedResult);
        done();
      });
  });
});
