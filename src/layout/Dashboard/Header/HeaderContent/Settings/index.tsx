import { useEffect, useRef, useState } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import { Box, Button, IconButton, Typography } from '@mui/material';
import { SettingOutlined } from '@ant-design/icons';
import { CustomSwipeableDrawer } from '../../../../../components/swipeableDrawer';
import { SettingsHeader } from './Header';
import { useSettingsStore } from '../../../../../zustand/settings';

// ==============================|| HEADER CONTENT - SETTINGS ||============================== //

export const Settings = () => {
  const theme = useTheme();
  const  {theme: storageTheme, toggleTheme, drawerMode, toggleDrawerMode, drawerDirection, toggleDrawerDirection } = useSettingsStore();
  const matchesXs = useMediaQuery(theme.breakpoints.down('md'));
  const [rotationClass, setRotationClass] = useState('');
  const [isSlowingDown, setIsSlowingDown] = useState(false);
  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const iconBackColorOpen = 'grey.100';

  useEffect(() => {
    const rotationInterval = setInterval(() => {
      setRotationClass('rotate');
      setIsSlowingDown(false);

      // Start slowing down towards the end
      setTimeout(() => {
        setIsSlowingDown(true);
      }, 1500);
    }, 4500);

    return () => clearInterval(rotationInterval);
  }, []);

  return (
    <Box sx={{ flexShrink: 0, ml: 0.75 }}>
      <IconButton
        color="secondary"
        className={`${rotationClass} ${isSlowingDown ? 'slow-down' : ''}`}
        sx={{
          color: 'text.primary',
          bgcolor: open ? iconBackColorOpen : 'transparent'
        }}
        aria-label="open settings"
        ref={anchorRef}
        aria-controls={open ? 'settings-grow' : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
      >
        <SettingOutlined />
      </IconButton>
      <CustomSwipeableDrawer anchor="right" isOpen={open} onClose={() => setOpen(false)}>
        <SettingsHeader onClose={() => setOpen(false)} />
        <Typography variant="h4" sx={{ px: 2, mt: 2 }}>
          Layout
        </Typography>
        <Button variant={drawerMode === 'default' ? 'contained' : 'outlined'} onClick={() => toggleDrawerMode()}>Menu lateral</Button>
        <Button variant={drawerMode === 'mini' ? 'contained' : 'outlined'} onClick={() => toggleDrawerMode()}>Mini menu lateral</Button>
        <Typography variant="h4" sx={{ px: 2, mt: 2 }}>
          Direção
        </Typography>
        <Button variant={drawerDirection === 'left' ? 'contained' : 'outlined'} onClick={() => toggleDrawerDirection()}>Menu lado esquerdo</Button>
        <Button variant={drawerDirection === 'right' ? 'contained' : 'outlined'} onClick={() => toggleDrawerDirection()}>Menu lado direito</Button>
        <Typography variant="h4" sx={{ px: 2, mt: 2 }}>
          Tema
        </Typography>
        <Button variant={storageTheme === 'light' ? 'contained' : 'outlined'} onClick={() => toggleTheme()}>Tema claro</Button>
        <Button variant={storageTheme === 'dark' ? 'contained' : 'outlined'} onClick={() => toggleTheme()}>Tema escuro</Button>
      </CustomSwipeableDrawer>
      <style>
        {`
          .rotate {
            animation: spin 1.5s linear infinite;
          }
          .slow-down {
            animation: spin-slow 3s ease-out infinite;
          }
          @keyframes spin {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
          @keyframes spin-slow {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
        `}
      </style>
    </Box>
  );
};
