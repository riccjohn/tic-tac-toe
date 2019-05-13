import * as React from 'react';
import FullWidthContainer from './atoms/FullWidthContainer';
import ContentContainer from './atoms/ContentContainer';

const Layout: React.SFC<{ children: JSX.Element[] }> = props => {
  return (
    <FullWidthContainer>
      <ContentContainer>{props.children}</ContentContainer>
    </FullWidthContainer>
  );
};

export default Layout;
