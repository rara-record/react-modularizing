export const roundToNearestInteger = (amount: number) => Math.ceil(amount);
export const roundToFloat = (amount: number) =>
  Math.floor(amount / 100 + 1) * 100;
