import { quadraticFormula, findHighestFloor } from './solution1';

describe('quadratic formula', () => {
  it('should find the roots of a quadratic equation when the discriminant is positive', () => {
    expect(quadraticFormula(1, -3, 2)).toEqual([2, 1]);
    expect(quadraticFormula(1, -5, 6)).toEqual([3, 2]);
  });

  it('should return an empty array if the discriminant is negative', () => {
    expect(quadraticFormula(1, 4, 5)).toEqual([]);
  });

  it('should return one solution if the discriminant is zero', () => {
    expect(quadraticFormula(1, -6, 9)).toEqual([3]);
  });
});

describe('findHighestFloor solution 1', () => {
  it('should return the highest floor from 100 floors', () => {
    // Question 5 Solution
    expect(findHighestFloor(100)).toBe(14);
  });
});
