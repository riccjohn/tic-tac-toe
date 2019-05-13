import styled, { css } from 'styled-components';

type ButtonProps = {
  theme: Theme;
};

const Button = styled.button<ButtonProps>`
  box-sizing: border-box;
  padding: 0.75em 1.25em;
  margin: 0.5em;
  background: ${props => props.theme.primary};
  font-size: 1.2em;
  color: ${props => props.theme.lightText};
  font-weight: bold;
  border: none;
  border-radius: 5px;
  transition: all 125ms ease-in-out;
  &:hover {
    background-color: ${props => props.theme.active};
  }
`;

Button.displayName = 'Button';

export default Button;
