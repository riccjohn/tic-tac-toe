export const containsCoordinates = (
  master: WinningVector | undefined = [],
  sub: Coords
): boolean => {
  return master.some(el => {
    return el.row === sub.row && el.col === sub.col;
  });
};
