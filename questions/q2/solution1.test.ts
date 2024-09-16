import { printItemsWithDelay } from './solution1';

jest.useRealTimers();
jest.spyOn(global, 'setTimeout');

describe('printItemsWithDelay', () => {
  it('should print items with delay', async () => {
    await printItemsWithDelay(['a', 'b', 'c', 'd']);

    expect(setTimeout).toHaveBeenCalledTimes(4);
    expect(setTimeout).toHaveBeenNthCalledWith(1, expect.any(Function), 1000);
    expect(setTimeout).toHaveBeenNthCalledWith(2, expect.any(Function), 2000);
    expect(setTimeout).toHaveBeenNthCalledWith(3, expect.any(Function), 4000);
    expect(setTimeout).toHaveBeenNthCalledWith(4, expect.any(Function), 8000);
  }, 10000);
});
