import React, { ComponentType } from 'react';

import ThemeProvider, { Theme } from './index';

function withThemeProvider<T extends {}>(Component: ComponentType<T>, theme?: Theme) {
  return (props: T) => (
    <ThemeProvider theme={theme}>
      <Component {...props} />
    </ThemeProvider>
  );
}

export default withThemeProvider;
