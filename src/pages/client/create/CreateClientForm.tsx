import { FormControl, FormHelperText, Grid, InputLabel, OutlinedInput } from '@mui/material';
import { Control, Controller, FieldErrors } from 'react-hook-form';
import PropTypes from 'prop-types';
import { ICreateClient } from '../dtos';

interface IRequest {
    control: Control<ICreateClient>;
    errors: FieldErrors<ICreateClient>;
}

export default function CreateClientForm({ control, errors }: IRequest) {
  return (
    <Grid container spacing={3}>
      <Grid md={6} xs={12} item>
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <FormControl fullWidth required>
              <InputLabel>Nome</InputLabel>
              <OutlinedInput label="Nome" {...field} error={!!errors?.name} />
              {errors?.name?.message && <FormHelperText error>{errors?.name?.message}</FormHelperText>}
            </FormControl>
          )}
        />
      </Grid>
      <Grid md={6} xs={12} item>
        <Controller
          name="individualRegistration"
          control={control}
          render={({ field }) => (
            <FormControl fullWidth required>
              <InputLabel>CPF</InputLabel>
              <OutlinedInput label="CPF" {...field} error={!!errors?.individualRegistration} />

              {errors?.individualRegistration?.message && <FormHelperText error>{errors?.individualRegistration?.message}</FormHelperText>}
            </FormControl>
          )}
        />
      </Grid>
      <Grid md={6} xs={12} item>
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <FormControl fullWidth required>
              <InputLabel>Email</InputLabel>
              <OutlinedInput label="Email" {...field} error={!!errors?.email} />

              {errors?.email?.message && <FormHelperText error>{errors?.email?.message}</FormHelperText>}
            </FormControl>
          )}
        />
      </Grid>
    </Grid>
  );
}

CreateClientForm.propTypes = { control: PropTypes.any, errors: PropTypes.object };
