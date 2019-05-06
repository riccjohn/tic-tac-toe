export const transposeVectors = (vectors: Vectors): Vectors => {
  return vectors.map(coord => [coord[1], coord[0]]);
};
