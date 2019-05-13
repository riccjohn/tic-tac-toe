import styled, { css } from 'styled-components';

type InputProps = {
  type?: string;
  theme: Theme;
};

const Input = styled.input<InputProps>`
  box-sizing: border-box;
  padding: 0.75em;
  margin: 0.5em;
  border: 1px solid ${props => props.theme.primary};
  color: ${props => props.theme.darkAccent};
  background: ${props => props.theme.lightText};
  border-radius: 5px;
  font-size: 1.1em;

  ${(props: InputProps) =>
    props.type === 'submit' &&
    css`
      background: ${inputProps => inputProps.theme.primary};
      color: ${inputProps => inputProps.theme.lightText};
      border: none;
    `}
`;

Input.displayName = 'StyledInput';

export default Input;
