import * as React from 'react';
import { FullWidthContainer, ContentContainer } from './atoms/LayoutContainers';

const Layout: React.SFC<{ children: JSX.Element[] }> = props => {
  return (
    <FullWidthContainer>
      <ContentContainer>{props.children}</ContentContainer>
    </FullWidthContainer>
  );
};

export default Layout;
