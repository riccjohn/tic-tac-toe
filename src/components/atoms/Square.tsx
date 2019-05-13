import styled, { css } from 'styled-components';

type SquareProps = {
  winner?: boolean;
  theme: Theme;
};

const Square = styled.td`
  padding: 2rem;
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  border: 4px solid ${props => props.theme.lightText};
  color: ${props => props.theme.lightText};
  background-color: ${props => props.theme.primary};
  transition: all 125ms ease-in-out;
  &:hover {
    background-color: ${props => props.theme.active};
  }

  ${(props: SquareProps) =>
    props.winner &&
    css`
      background: ${squareProps => squareProps.theme.secondary};
    `}
`;

Square.displayName = 'Square';

export default Square;
