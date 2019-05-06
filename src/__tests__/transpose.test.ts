import { transposeVectors } from '../helperFunctions/transpose';

describe('transposeVectors', () => {
  it('will take column coordinates and give back row coordinates', () => {
    const originalCoords = [[0, 0], [0, 1], [0, 2]];
    const expectedCoords = [[0, 0], [1, 0], [2, 0]];
    expect(transposeVectors(originalCoords)).toEqual(expectedCoords);
  });
});
