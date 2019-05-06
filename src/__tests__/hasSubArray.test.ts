import { hasSubArray } from '../helperFunctions/hasSubArray';

describe('hasSubArray', () => {
  it('will find a sub-array in a master array', () => {
    const array = [[0, 0], [0, 1], [0, 2]];
    const subArray = [0, 0];
    expect(hasSubArray(array, subArray)).toBe(true);
  });

  it('will not send a false positive', () => {
    const array = [[0, 0], [0, 1], [0, 2]];
    const subArray = [1, 1];
    expect(hasSubArray(array, subArray)).toBe(false);
  });

  it('will work if the master array is undefined', () => {
    const array = undefined;
    const subArray = [0, 0];
    expect(hasSubArray(array, subArray)).toBe(false);
  });
});
