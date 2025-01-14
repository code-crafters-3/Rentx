import PropTypes from 'prop-types';
import { createContext, useContext, useMemo, useState } from 'react';

// material-ui
import { CssBaseline, StyledEngineProvider } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// project import
import Palette from './palette';
import Typography from './typography';
import CustomShadows from './shadows';
import componentsOverride from './overrides';
import { useSettingsStore } from '../zustand/settings';

// ==============================|| DEFAULT THEME - MAIN  ||============================== //

interface IThemeContextData {}

interface IThemeCustomizationProps {
  children: React.ReactNode;
}

const ThemeContext = createContext({} as IThemeContextData);

export default function ThemeCustomization({ children }: IThemeCustomizationProps) {
  const { theme: storagedTheme, fontFamily, primaryColor } = useSettingsStore();
  const theme = Palette(storagedTheme, 'default', primaryColor);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const themeTypography = Typography(`'${fontFamily}', sans-serif`);
  const themeCustomShadows = useMemo(() => CustomShadows(theme), [theme]);

  const themeOptions: any = useMemo(
    () => ({
      breakpoints: {
        values: {
          xs: 0,
          sm: 768,
          md: 1024,
          lg: 1266,
          xl: 1440
        }
      },
      direction: 'ltr',
      mixins: {
        toolbar: {
          minHeight: 60,
          paddingTop: 8,
          paddingBottom: 8
        }
      },
      palette: theme.palette,
      customShadows: themeCustomShadows,
      typography: themeTypography
    }),
    [theme, themeTypography, themeCustomShadows]
  );

  const themes = createTheme(themeOptions);
  themes.components = componentsOverride(themes);

  return (
    <ThemeContext.Provider value={{}}>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={themes}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </StyledEngineProvider>
    </ThemeContext.Provider>
  );
}

export function useCustomTheme(): IThemeContextData {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useCustomTheme must be used with a ThemeProvider.');
  }

  return context;
}

ThemeCustomization.propTypes = {
  children: PropTypes.node
};
