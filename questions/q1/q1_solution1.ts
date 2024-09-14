/**
 * @complexity
 * T: O(n)
 * S: O(n)
 */
export const findDuplicates = (arr: number[]) => {
  const unique = new Set();
  const duplicates = new Set();

  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];

    if (unique.has(item)) duplicates.add(item);

    unique.add(item);
  }

  return Array.from(duplicates);
};
