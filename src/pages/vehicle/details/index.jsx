import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

import VehicleDetailsTab from './VehicleDetailTab';
import RentalDetailsTab from './RentalDetailsTab';
import InfractionsDetailsTab from './InfractionsDetailsTab';
import MaintenanceDetailsTab from './MaintenanceDetailsTab';

import CreateVehicle from '../create/createVehicle';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `vehicle-details-tab-${index}`,
    'aria-controls': `vehicle-details-tabpanel-${index}`
  };
}

export default function VehicleDetails() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="vehicle-details tabs">
          <Tab label="Veículo" {...a11yProps(0)} />
          <Tab label="Locação" {...a11yProps(1)} />
          <Tab label="Manutenção" {...a11yProps(2)} />
          <Tab label="Infrações" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        {/*   <VehicleDetailsTab /> */}
        <CreateVehicle />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <RentalDetailsTab />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <MaintenanceDetailsTab />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <InfractionsDetailsTab />
      </CustomTabPanel>
    </Box>
  );
}
