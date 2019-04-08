import React from 'react';

import makeStyles from '@material-ui/styles/makeStyles';

import withThemeProvider from 'src/styles/withThemeProvider';
import Button from 'src/components/Button';
import { Theme } from 'src/styles';

import 'normalize.css';

const useStyles = makeStyles(({ colors, spacing }: Theme) => {
  return {
    root: {
      height: '100vh',
      width: '100vw',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.base,
      '& button': {
        margin: spacing.sm,
      }
    },
  };
});

const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Button>Hello primary !</Button>
      <Button variant="accent">Hello accent !</Button>
      <Button variant="notice">Hello notice !</Button>
      <Button variant="alert">Hello alert !</Button>
      <Button variant="special">Hello special !</Button>
    </div>
  );
};

export default withThemeProvider(Home);
