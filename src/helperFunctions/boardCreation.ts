type arrayData = string | number | undefined;

export const createBoard = (size: number, value: arrayData): Board => {
  return Array(size)
    .fill(value)
    .map(() => Array(size).fill(value));
};
