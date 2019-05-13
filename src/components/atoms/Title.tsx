import styled from 'styled-components';

type TitleProps = {
  theme: any;
};

export const Title = styled.h1<TitleProps>`
  text-align: center;
  color: ${props => props.theme.primary};
  font-weight: bold;
`;

Title.displayName = 'Title';