import { isBracketsBalanced } from './solution1';

describe('isBracketsBalanced solution 1', () => {
  it('should return true for balanced brackets', () => {
    expect(isBracketsBalanced('')).toBe(true); // Empty string is also balanced
    expect(isBracketsBalanced('()')).toBe(true);
    expect(isBracketsBalanced('[]')).toBe(true);
    expect(isBracketsBalanced('{}')).toBe(true);
    expect(isBracketsBalanced('()[]{}')).toBe(true);
    expect(isBracketsBalanced('{[]}')).toBe(true);
  });

  it('should return false for unbalanced brackets', () => {
    expect(isBracketsBalanced('({}')).toBe(false);
    expect(isBracketsBalanced('({]')).toBe(false);
    expect(isBracketsBalanced('({]}')).toBe(false);
    expect(isBracketsBalanced('({]}')).toBe(false);
    expect(isBracketsBalanced('(]')).toBe(false);
    expect(isBracketsBalanced('{(])}')).toBe(false);
    expect(isBracketsBalanced('{([)]}')).toBe(false);
    expect(isBracketsBalanced('@@@')).toBe(false);
  });
});
