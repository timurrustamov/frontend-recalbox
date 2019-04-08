import { ComponentType, HTMLProps, FunctionComponent, createElement } from 'react';

import cx from 'classnames';
import makeStyles from '@material-ui/styles/makeStyles';
import tint from 'polished/lib/color/tint';
import shade from 'polished/lib/color/shade';

import { Theme } from 'src/styles';

export type ButtonProps = {
  component?: ComponentType<any>;
  variant?: keyof Theme['colors'];
} & HTMLProps<HTMLButtonElement>;

const lightenUp = tint(0.25);
const darkenUp = shade(0.25);

const useStyles = makeStyles((theme: Theme) => {
  const { colors, spacing, typography, transitions, shadows } = theme;

  const getColor = ({ variant = 'primary' }: ButtonProps) => colors[variant];
  const getActiveColor = ({ variant = 'primary' }: ButtonProps) => lightenUp(colors[variant]);
  const getShadowColor = ({ variant = 'primary' }: ButtonProps) => {
    const color = lightenUp(colors[variant]);
    return shadows.default(color);
  }
  
  return {
    root: {
      ...typography.button,
      display: 'flex',
      cursor: 'pointer',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.shaded,
      transition: `all ${transitions.normal}`,
      color: getColor,
      borderColor: getColor,
      borderRadius: spacing.unit,
      borderWidth: 1,
      minHeight: spacing.unit * 5,
      minWidth: spacing.unit * 32,
      padding: `0 ${spacing.unit * 4}px`,
      outline: 'none',
      '&:hover, &:focus': {
        color: getActiveColor,
        borderColor: getActiveColor,
        boxShadow: getShadowColor,
        backgroundColor: darkenUp(colors.shaded),
      },
    },
  } as any; // The typings are not yet perfect!
});

const Button: FunctionComponent<ButtonProps> = (props) => {
  const { component = 'button', variant: _variant, className, children, ...other } = props;
  const classes = useStyles(props);

  return createElement(component, {
    children,
    className: cx(classes.root, className),
    ...other
  });
};

export default Button;
