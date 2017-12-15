export const add = (...args) => args.reduce((prev, cur) => prev + cur, 0);
export const mult = (...args) => args.reduce((prev, cur) => prev * cur, 1);
export const div = (a, b) => {
  const result = b === 0 ? undefined : a / b;
  return result;
};
