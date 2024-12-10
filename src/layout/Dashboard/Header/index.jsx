import { useMemo } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';

// project import
import AppBarStyled from './AppBarStyled';
import HeaderContent from './HeaderContent';

// assets
import MenuFoldOutlined from '@ant-design/icons/MenuFoldOutlined';
import MenuUnfoldOutlined from '@ant-design/icons/MenuUnfoldOutlined';
import { useSettingsStore } from '../../../zustand/settings';

// ==============================|| MAIN LAYOUT - HEADER ||============================== //

export default function Header() {
  const theme = useTheme();
  const downLG = useMediaQuery(theme.breakpoints.down('lg'));

  const { drawerMode, toggleDrawerMode, drawerDirection } = useSettingsStore();

  const drawerOpen = drawerMode === 'default';

  // header content
  const headerContent = useMemo(() => <HeaderContent />, []);

  const iconBackColor = 'grey.100';
  const iconBackColorOpen = 'grey.200';

  // common header
  const mainHeader = (
    <Toolbar>
      {drawerDirection === 'left' ? (
        <>
          <IconButton
            disableRipple
            aria-label="open drawer"
            onClick={() => toggleDrawerMode()}
            edge="start"
            color="secondary"
            variant="light"
            sx={{ color: 'text.primary', bgcolor: drawerOpen ? iconBackColorOpen : iconBackColor, ml: { xs: 0, lg: -2 } }}
          >
            {!drawerOpen ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </IconButton>
          {headerContent}
        </>
      ) : (
        <>
          {headerContent}
          <IconButton
            disableRipple
            aria-label="open drawer"
            onClick={() => toggleDrawerMode()}
            edge="start"
            color="secondary"
            variant="light"
            sx={{ color: 'text.primary', bgcolor: drawerOpen ? iconBackColorOpen : iconBackColor, ml: { xs: 0, lg: 2 } }}
          >
            {!drawerOpen ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </IconButton>
        </>
      )}
    </Toolbar>
  );

  // app-bar params
  const appBar = {
    position: 'fixed',
    color: 'inherit',
    elevation: 0,
    sx: {
      borderBottom: `1px solid ${theme.palette.divider}`
      // boxShadow: theme.customShadows.z1
    }
  };

  return (
    <>
      {!downLG ? (
        <AppBarStyled drawerDirection={drawerDirection} open={!!drawerOpen} {...appBar}>
          {mainHeader}
        </AppBarStyled>
      ) : (
        <AppBar {...appBar}>{mainHeader}</AppBar>
      )}
    </>
  );
}
