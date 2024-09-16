/**
 * @complexity
 * T: O(n * log(n))
 * S: O(n)
 */
export const findDuplicates = (arr: number[]) => {
  const sortedArr = arr.sort((a, b) => a - b);

  return sortedArr.reduce<number[]>((acc, number, i) => {
    if (sortedArr[i] === sortedArr[i - 1]) acc.push(number);

    return Array.from(new Set(acc));
  }, []);
};
