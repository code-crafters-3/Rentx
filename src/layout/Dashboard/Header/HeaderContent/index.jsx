// material-ui
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';

// project import
import Search from './Search';
import Profile from './Profile';
import Notification from './Notification';
import MobileSection from './MobileSection';

import { Settings } from './Settings';
import { useSettingsStore } from '../../../../zustand/settings';

// ==============================|| HEADER - CONTENT ||============================== //

export default function HeaderContent() {
  const { drawerDirection } = useSettingsStore();
  const downLG = useMediaQuery((theme) => theme.breakpoints.down('lg'));

  return (
    <>
      {drawerDirection === 'left' ? (
        <>
          {!downLG && <Search />}
          {downLG && <Box sx={{ width: '100%', ml: 1 }} />}
          <Notification />
          <Settings />
          {!downLG && <Profile />}
          {downLG && <MobileSection />}
        </>
      ) : (
        <Box sx={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {!downLG && <Profile />}
            <Settings />
            <Notification />
            {downLG && <MobileSection />}
            {downLG && <Box sx={{ width: '100%', ml: 1 }} />}
          </Box>
          {!downLG && (
            <Box>
              <Search />
            </Box>
          )}
        </Box>
      )}
    </>
  );
}
