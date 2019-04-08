import { useContext } from 'react';

import { ThemeContext } from './index';

const useTheme = () => {
  return useContext(ThemeContext);
};

export default useTheme;
