import { getMaxValue } from './solution1';

describe('getMaxValue solution 1', () => {
  it('should return the maximum value of carrot types', () => {
    expect(getMaxValue([{ kg: 10, price: 60 }], 60)).toBe(60);
    expect(
      getMaxValue(
        [
          { kg: 10, price: 60 },
          { kg: 30, price: 150 },
          { kg: 30, price: 120 },
          { kg: 40, price: 160 },
          { kg: 50, price: 200 },
          { kg: 50, price: 150 },
          { kg: 60, price: 60 },
        ],
        60,
      ),
    ).toBe(290);
    expect(
      getMaxValue(
        [
          { kg: 10, price: 60 },
          { kg: 20, price: 120 },
        ],
        60,
      ),
    ).toBe(180);
    expect(
      getMaxValue(
        [
          { kg: 5, price: 100 },
          { kg: 7, price: 150 },
          { kg: 3, price: 70 },
        ],
        36,
      ),
    ).toBe(320);
  });
});
