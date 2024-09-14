/* eslint-disable no-console */
/**
 * @complexity
 * T: O(n)
 * S: O(1)
 */
export const printItemsWithDelay = async (items: string[]) => {
  const delay = (milliseconds: number): Promise<void> =>
    new Promise((resolve) => setTimeout(resolve, milliseconds));

  const printItem = async (item: string, index: number) => {
    console.time(item);
    await delay(2 ** index * 1000);
    console.timeEnd(item);
  };

  await Promise.all(items.map((item, index) => printItem(item, index)));
};
