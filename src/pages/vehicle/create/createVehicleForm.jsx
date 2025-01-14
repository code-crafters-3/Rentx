import { FormControl, FormHelperText, Grid, InputLabel, MenuItem, OutlinedInput, Select } from '@mui/material';
import { Controller } from 'react-hook-form';
import PropTypes from 'prop-types';

const states = [
  { value: 'motorcycle', label: 'Motocicleta' },
  { value: 'car', label: 'Carro' },
  { value: 'truck', label: 'Caminhão' }
];

export default function CreateVehicleForm({ control, errors }) {
  return (
    <Grid container spacing={3}>
      <Grid md={12} xs={12} item>
        <Controller
          name="vehicleType"
          control={control}
          render={({ field }) => (
            <FormControl sx={{ width: 150 }}>
              <InputLabel>Tipo de veículo</InputLabel>
              <Select label="vehicleType" variant="outlined" {...field}>
                {states.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          )}
        />
      </Grid>
      <Grid md={6} xs={12} item>
        <Controller
          name="maker"
          control={control}
          render={({ field }) => (
            <FormControl fullWidth required>
              <InputLabel>Marca</InputLabel>
              <OutlinedInput label="Marca" {...field} error={errors?.maker} />
              {errors?.maker?.message && <FormHelperText error>{errors?.maker?.message}</FormHelperText>}
            </FormControl>
          )}
        />
      </Grid>
      <Grid md={6} xs={12} item>
        <Controller
          name="model"
          control={control}
          render={({ field }) => (
            <FormControl fullWidth required>
              <InputLabel>Modelo</InputLabel>
              <OutlinedInput label="Modelo" {...field} error={errors?.model} />

              {errors?.model?.message && <FormHelperText error>{errors?.model?.message}</FormHelperText>}
            </FormControl>
          )}
        />
      </Grid>
      <Grid md={6} xs={12} item>
        <Controller
          name="makeYear"
          control={control}
          render={({ field }) => (
            <FormControl fullWidth required>
              <InputLabel>Ano fabricação</InputLabel>
              <OutlinedInput label="Ano fabricação" {...field} error={errors?.makeYear} />

              {errors?.makeYear?.message && <FormHelperText error>{errors?.makeYear?.message}</FormHelperText>}
            </FormControl>
          )}
        />
      </Grid>
      <Grid md={6} xs={12} item>
        <Controller
          name="modelYear"
          control={control}
          render={({ field }) => (
            <FormControl fullWidth>
              <InputLabel>Ano modelo</InputLabel>
              <OutlinedInput label="Ano modelo" {...field} error={errors?.modelYear} />

              {errors?.modelYear?.message && <FormHelperText error>{errors?.modelYear?.message}</FormHelperText>}
            </FormControl>
          )}
        />
      </Grid>
      <Grid md={6} xs={12} item>
        <Controller
          name="vin"
          control={control}
          render={({ field }) => (
            <FormControl fullWidth>
              <InputLabel>Chassi</InputLabel>
              <OutlinedInput label="Chassi" {...field} error={errors?.vin} />

              {errors?.vin?.message && <FormHelperText error>{errors?.vin?.message}</FormHelperText>}
            </FormControl>
          )}
        />
      </Grid>
      <Grid md={6} xs={12} item>
        <Controller
          name="renavan"
          control={control}
          render={({ field }) => (
            <FormControl fullWidth>
              <InputLabel>Renavan</InputLabel>
              <OutlinedInput label="Renavan" {...field} error={errors?.vin} />
              {errors?.renavan?.message && <FormHelperText error>{errors?.renavan?.message}</FormHelperText>}
            </FormControl>
          )}
        />
      </Grid>
      <Grid md={6} xs={12} item>
        <Controller
          name="color"
          control={control}
          render={({ field }) => (
            <FormControl fullWidth>
              <InputLabel>Cor</InputLabel>
              <OutlinedInput label="Cor" {...field} error={errors?.color} />
              {errors?.color?.message && <FormHelperText error>{errors?.color?.message}</FormHelperText>}
            </FormControl>
          )}
        />
      </Grid>
      <Grid md={6} xs={12} item>
        <Controller
          name="plate"
          control={control}
          render={({ field }) => (
            <FormControl fullWidth>
              <InputLabel>Placa</InputLabel>
              <OutlinedInput label="Placa" {...field} error={errors?.plate} />
              {errors?.plate?.message && <FormHelperText error>{errors?.plate?.message}</FormHelperText>}
            </FormControl>
          )}
        />
      </Grid>
    </Grid>
  );
}

CreateVehicleForm.propTypes = { control: PropTypes.any, errors: PropTypes.object };
