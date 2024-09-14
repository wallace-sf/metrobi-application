import { findDuplicates } from './q1_solution1';

describe('findDuplicates solution 1', () => {
  it('should return duplicates in a simple array', () => {
    expect(findDuplicates([1, 2, 3, 4, 3, 5, 1, 6, 2])).toEqual([3, 1, 2]);
  });

  it('should return an empty array for an array with no duplicates', () => {
    expect(findDuplicates([1, 2, 3, 4, 5, 6])).toEqual([]);
  });

  it('should handle an empty array', () => {
    expect(findDuplicates([])).toEqual([]);
  });

  it('should handle an array with all elements the same', () => {
    expect(findDuplicates([7, 7, 7, 7, 7])).toEqual([7]);
  });

  it('should handle an array with one element', () => {
    expect(findDuplicates([7])).toEqual([]);
  });
});
