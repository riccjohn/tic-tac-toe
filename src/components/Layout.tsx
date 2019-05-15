import * as React from 'react';
import FullWidthContainer from './atoms/FullWidthContainer';
import ContentContainer from './atoms/ContentContainer';

const Layout: React.SFC<{ children: JSX.Element[] }> = ({ children }) => (
  <FullWidthContainer>
    <ContentContainer>{children}</ContentContainer>
  </FullWidthContainer>
);

export default Layout;
