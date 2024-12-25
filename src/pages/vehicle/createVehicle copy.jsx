import * as React from 'react';

import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Divider from '@mui/material/Divider';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import OutlinedInput from '@mui/material/OutlinedInput';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Unstable_Grid2';

const states = [
  { value: 'alabama', label: 'Alabama' },
  { value: 'new-york', label: 'New York' },
  { value: 'san-francisco', label: 'San Francisco' },
  { value: 'los-angeles', label: 'Los Angeles' }
];

export default function CreateVehicle() {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <Card>
        <CardHeader subheader="The information can be edited" title="Profile" />
        <Divider />
        <CardContent>
          <Grid container spacing={3} sx={{ border: '3px solid red' }}>
            <Grid xs={6} item>
              <Grid container spacing={3} sx={{ border: '3px solid blue' }} xs={12}>
                <Grid md={12} xs={12} sx={{ border: '3px solid green' }} item>
                  <FormControl fullWidth required>
                    <InputLabel>First name</InputLabel>
                    <OutlinedInput defaultValue="Sofia" label="First name" name="firstName" />
                  </FormControl>
                </Grid>
                {/* <Grid md={6} xs={12}>
                  <FormControl fullWidth required>
                    <InputLabel>Last name</InputLabel>
                    <OutlinedInput defaultValue="Rivers" label="Last name" name="lastName" />
                  </FormControl>
                </Grid>
                <Grid md={6} xs={12}>
                  <FormControl fullWidth required>
                    <InputLabel>Email address</InputLabel>
                    <OutlinedInput defaultValue="sofia@devias.io" label="Email address" name="email" />
                  </FormControl>
                </Grid>
                <Grid md={6} xs={12}>
                  <FormControl fullWidth>
                    <InputLabel>Phone number</InputLabel>
                    <OutlinedInput label="Phone number" name="phone" type="tel" />
                  </FormControl>
                </Grid>
                <Grid md={6} xs={12}>
                  <FormControl fullWidth>
                    <InputLabel>State</InputLabel>
                    <Select defaultValue="New York" label="State" name="state" variant="outlined">
                      {states.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid md={6} xs={12}>
                  <FormControl fullWidth>
                    <InputLabel>City</InputLabel>
                    <OutlinedInput label="City" />
                  </FormControl>
                </Grid> */}
              </Grid>
            </Grid>
            <Grid xs={6}>
              <Grid spacing={3} columns={{ xs: 6, sm: 6, md: 6, lg: 6, xl: 6 }}>
                <Grid md={6} xs={12}>
                  <FormControl fullWidth required>
                    <InputLabel>First name</InputLabel>
                    <OutlinedInput defaultValue="Sofia" label="First name" name="firstName" />
                  </FormControl>
                </Grid>
                <Grid md={6} xs={12}>
                  <FormControl fullWidth required>
                    <InputLabel>Last name</InputLabel>
                    <OutlinedInput defaultValue="Rivers" label="Last name" name="lastName" />
                  </FormControl>
                </Grid>
                <Grid md={6} xs={12}>
                  <FormControl fullWidth required>
                    <InputLabel>Email address</InputLabel>
                    <OutlinedInput defaultValue="sofia@devias.io" label="Email address" name="email" />
                  </FormControl>
                </Grid>
                <Grid md={6} xs={12}>
                  <FormControl fullWidth>
                    <InputLabel>Phone number</InputLabel>
                    <OutlinedInput label="Phone number" name="phone" type="tel" />
                  </FormControl>
                </Grid>
                <Grid md={6} xs={12}>
                  <FormControl fullWidth>
                    <InputLabel>State</InputLabel>
                    <Select defaultValue="New York" label="State" name="state" variant="outlined">
                      {states.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid md={6} xs={12}>
                  <FormControl fullWidth>
                    <InputLabel>City</InputLabel>
                    <OutlinedInput label="City" />
                  </FormControl>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <CardActions sx={{ justifyContent: 'flex-end' }}>
          <Button variant="contained">Save details</Button>
        </CardActions>
      </Card>
    </form>
  );
}
