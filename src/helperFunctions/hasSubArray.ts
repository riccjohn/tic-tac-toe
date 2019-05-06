export const hasSubArray = (master: number[][], sub: number[]): boolean => {
  for (const val of master) {
    if (val.toString() === sub.toString()) {
      return true;
    }
  }
  return false;
};
