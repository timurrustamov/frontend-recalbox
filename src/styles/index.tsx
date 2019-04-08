import React, { createContext, FunctionComponent } from 'react';

import MuiThemeProvider from '@material-ui/styles/ThemeProvider';
import transparentize from 'polished/lib/color/transparentize';

import 'typeface-montserrat';

export const defaultTheme = {
  colors: {
    base: '#131A2B',
    primary: '#6BB4F3',
    secondary: '#2E4960',
    accent: '#FAA900',
    alert: '#F82605',
    notice: '#94CC6D',
    special: '#F94FAB',
    shaded: 'rgba(0, 0, 0, 0.05)',
  },
  transitions: {
    normal: '0.5s ease-in-out',
  },
  shadows: {
    default: (color = 'rgba(0,0,0,0.14)', opacity = 0.35) => {
      color = transparentize(1 - opacity, color);
      return `0px 1px 5px 0px ${color}, 0px 2px 2px 0px ${color}, 0px 3px 1px -2px ${color}`;
    },
  },
  typography: {
    button: {
      fontFamily: 'Montserrat',
      fontSize: 16,
      fontWeight: 300,
      textTransform: 'uppercase',
    },
  },
  spacing: {
    unit: 8,
    xs: 8,
    sm: 16,
    md: 24,
    xl: 64,
    xxl: 128,
  },
};

export type Theme = typeof defaultTheme;

export const ThemeContext = createContext(defaultTheme);

export type ThemeContextProps = {
  theme?: Theme;
};

const ThemeProvider: FunctionComponent<ThemeContextProps> = (props) => {
  const { theme = defaultTheme, children } = props;
  return (
    <MuiThemeProvider theme={theme}>
      <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
    </MuiThemeProvider>
  );
};

export default ThemeProvider;
