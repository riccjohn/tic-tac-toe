import styled, { css } from 'styled-components';

type SquareProps = {
  winner?: boolean;
};

export const Square = styled.td`
  padding: 2rem;
  text-align: center;
  border: 1px solid #3a3a3a;
  color: #3a3a3a;
  background-color: #32d2ff;
  &:hover {
    background-color: #42f4d4;
  }

  ${(props: SquareProps) =>
    props.winner &&
    css`
      background: #42f4d4;
    `}
`;

export const Table = styled.table`
  border-collapse: collapse;
  align-self: center;
  max-width: 400px;
  min-width: 250px;
`;
