/**
 * @complexity
 * T: O(1)
 * S: O(1)
 */
export const quadraticFormula = (a: number, b: number, c: number): number[] => {
  const discriminant = b * b - 4 * a * c;

  if (discriminant < 0) return [];

  const sqrtDiscriminant = Math.sqrt(discriminant);
  const x1 = (-b + sqrtDiscriminant) / (2 * a);
  const x2 = (-b - sqrtDiscriminant) / (2 * a);

  if (discriminant === 0) return [x1];

  return [x1, x2];
};

/**
 * @complexity
 * T: O(1)
 * S: O(1)
 */
export const findHighestFloor = (floorsNumber: number) => {
  const [x1, x2] = quadraticFormula(1, 1, -floorsNumber * 2);

  if (typeof x1 !== 'number' || typeof x2 !== 'number') return -1;

  return Math.ceil(x1 > x2 ? x1 : x2);
};
