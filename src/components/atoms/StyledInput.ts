import styled, { css } from 'styled-components';

type InputProps = {
  submit?: boolean;
};

export const Input = styled.input`
  box-sizing: border-box;
  padding: 0.75rem;
  margin: 0.5rem;
  border: 1px solid #3a3a3a;
  color: #3a3a3a;
  background: #ffffff;
  border-radius: 5px;

  ${(props: InputProps) =>
    props.submit &&
    css`
      background: #42f4d4;
      color: #3a3a3a;
      border: none;
    `}
`;
