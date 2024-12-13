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
  const {
    theme: storageTheme,
    toggleTheme,
    drawerMode,
    toggleDrawerMode,
    drawerDirection,
    toggleDrawerDirection,
    fontFamily,
    setFontFamily,
    primaryColor,
    setPrimaryColor
  } = useSettingsStore();
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
        <Button variant={drawerMode === 'default' ? 'contained' : 'outlined'} onClick={() => toggleDrawerMode()}>
          Menu lateral
        </Button>
        <Button variant={drawerMode === 'mini' ? 'contained' : 'outlined'} onClick={() => toggleDrawerMode()}>
          Mini menu lateral
        </Button>
        <Typography variant="h4" sx={{ px: 2, mt: 2 }}>
          Direção
        </Typography>
        <Button variant={drawerDirection === 'left' ? 'contained' : 'outlined'} onClick={() => toggleDrawerDirection()}>
          Menu lado esquerdo
        </Button>
        <Button variant={drawerDirection === 'right' ? 'contained' : 'outlined'} onClick={() => toggleDrawerDirection()}>
          Menu lado direito
        </Button>
        <Typography variant="h4" sx={{ px: 2, mt: 2 }}>
          Tema
        </Typography>
        <Button variant={storageTheme === 'light' ? 'contained' : 'outlined'} onClick={() => toggleTheme()}>
          Tema claro
        </Button>
        <Button variant={storageTheme === 'dark' ? 'contained' : 'outlined'} onClick={() => toggleTheme()}>
          Tema escuro
        </Button>

        <Typography variant="h4" sx={{ px: 2, mt: 2 }}>
          Fontes
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', marginTop: '10px' }}>
          <Button variant={fontFamily === 'Inter' ? 'contained' : 'outlined'} onClick={() => setFontFamily('Inter')}>
            Inter
          </Button>
          <Button variant={fontFamily === 'Roboto' ? 'contained' : 'outlined'} onClick={() => setFontFamily('Roboto')}>
            Roboto
          </Button>
          <Button variant={fontFamily === 'Poppins' ? 'contained' : 'outlined'} onClick={() => setFontFamily('Poppins')}>
            Poppins
          </Button>
          <Button variant={fontFamily === 'Public Sans' ? 'contained' : 'outlined'} onClick={() => setFontFamily('Public Sans')}>
            Public Sans
          </Button>
        </Box>

        <Typography variant="h4" sx={{ px: 2, mt: 2 }}>
          Cor
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', marginTop: '10px' }}>
          <Button variant={primaryColor === 'blue' ? 'contained' : 'outlined'} onClick={() => setPrimaryColor('blue')}>
            Padrão
          </Button>
          <Button variant={primaryColor === 'cyan' ? 'contained' : 'outlined'} onClick={() => setPrimaryColor('cyan')}>
            Tema 1
          </Button>
          <Button variant={primaryColor === 'geekblue' ? 'contained' : 'outlined'} onClick={() => setPrimaryColor('geekblue')}>
            Tema 2
          </Button>
          <Button variant={primaryColor === 'gold' ? 'contained' : 'outlined'} onClick={() => setPrimaryColor('gold')}>
            Tema 3
          </Button>
          <Button variant={primaryColor === 'green' ? 'contained' : 'outlined'} onClick={() => setPrimaryColor('green')}>
            Tema 4
          </Button>
          <Button variant={primaryColor === 'grey' ? 'contained' : 'outlined'} onClick={() => setPrimaryColor('grey')}>
            Tema 5
          </Button>
          <Button variant={primaryColor === 'lime' ? 'contained' : 'outlined'} onClick={() => setPrimaryColor('lime')}>
            Tema 6
          </Button>
          <Button variant={primaryColor === 'magenta' ? 'contained' : 'outlined'} onClick={() => setPrimaryColor('magenta')}>
            Tema 7
          </Button>
          <Button variant={primaryColor === 'orange' ? 'contained' : 'outlined'} onClick={() => setPrimaryColor('orange')}>
            Tema 8
          </Button>
          <Button variant={primaryColor === 'purple' ? 'contained' : 'outlined'} onClick={() => setPrimaryColor('purple')}>
            Tema 9
          </Button>
          <Button variant={primaryColor === 'red' ? 'contained' : 'outlined'} onClick={() => setPrimaryColor('red')}>
            Tema 10
          </Button>
          <Button variant={primaryColor === 'volcano' ? 'contained' : 'outlined'} onClick={() => setPrimaryColor('volcano')}>
            Tema 11
          </Button>
          <Button variant={primaryColor === 'yellow' ? 'contained' : 'outlined'} onClick={() => setPrimaryColor('yellow')}>
            Tema 12
          </Button>
        </Box>
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
