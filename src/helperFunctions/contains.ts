export const containsCoordinates = (
  master: WinningVector = [],
  coords: Coords
): boolean => {
  return master.some(el => {
    return el.row === coords.row && el.col === coords.col;
  });
};
