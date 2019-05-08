import { containsCoordinates } from '../helperFunctions/contains';

describe('containsCoordinates', () => {
  it('will find a sub-array in a master array', () => {
    const array = [{ col: 0, row: 0 }, { col: 0, row: 1 }, { col: 0, row: 2 }];
    const obj = { col: 0, row: 0 };
    expect(containsCoordinates(array, obj)).toBe(true);
  });

  it('will not send a false positive', () => {
    const array = [{ col: 0, row: 0 }, { col: 0, row: 1 }, { col: 0, row: 2 }];
    const obj = { col: 1, row: 1 };
    expect(containsCoordinates(array, obj)).toBe(false);
  });

  it('will not throw an error if the master array is undefined', () => {
    const array = undefined;
    const obj = { col: 0, row: 0 };
    expect(containsCoordinates(array, obj)).toBe(false);
  });
});
