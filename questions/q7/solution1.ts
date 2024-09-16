type CarrotType = {
  kg: number;
  price: number;
};

/**
 * @complexity
 * T: O(n * log(n))
 * S: O(1)
 */
export const getMaxValue = (carrotTypes: CarrotType[], capacity: number) => {
  const orderedCarrotTypes = carrotTypes.sort(
    (a, b) => b.price / b.kg - a.price / a.kg,
  );

  let maxValue = 0;
  let currentWeight = 0;

  for (
    let i = 0;
    i < orderedCarrotTypes.length && currentWeight < capacity;
    i++
  ) {
    const { kg, price } = orderedCarrotTypes[i] as CarrotType;

    if (currentWeight + kg <= capacity) {
      maxValue += price;
      currentWeight += kg;
    } else {
      const remainingCapacity = capacity - currentWeight;

      maxValue += (remainingCapacity / kg) * price;

      break;
    }
  }

  return maxValue;
};
