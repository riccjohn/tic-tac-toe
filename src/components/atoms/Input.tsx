import styled, { css } from 'styled-components';

type InputProps = {
  submit?: boolean;
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

  ${(props: InputProps) =>
    props.submit &&
    css`
      background: ${inputProps => inputProps.theme.primary};
      font-size: 1.2em;
      color: ${inputProps => inputProps.theme.lightText};
      border: none;
    `}
`;

Input.displayName = 'styledInput';

export default Input;
