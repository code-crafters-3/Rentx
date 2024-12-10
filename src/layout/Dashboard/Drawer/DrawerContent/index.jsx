// project import
import { useSettingsStore } from '../../../../zustand/settings';
import Navigation from './Navigation';
import SimpleBar from 'components/third-party/SimpleBar';

// ==============================|| DRAWER CONTENT ||============================== //

export default function DrawerContent() {
  const { drawerMode } = useSettingsStore();
  return (
    <>
      <SimpleBar
        sx={{ '& .simplebar-content': { display: 'flex', flexDirection: 'column', alignItems: drawerMode === 'default' ? '' : 'center' } }}
      >
        <Navigation />
      </SimpleBar>
    </>
  );
}
