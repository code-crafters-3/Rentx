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
import { FormControlLabel, FormLabel, Grid, Paper, Radio, RadioGroup, styled } from '@mui/material';
import { width } from '@mui/system';
import { CloudUploadOutlined } from '@ant-design/icons';
import CreateVehicleForm from './createVehicleForm';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const states = [
  { value: 'motorcycle', label: 'Motocicleta' },
  { value: 'car', label: 'Carro' },
  { value: 'truck', label: 'Caminhão' }
];

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1
});

const schema = z.object({
  vin: z.string().nonempty('Campo obrigatório'),
  renavan: z.string().nonempty('Campo obrigatório'),
  maker: z.string().nonempty('Campo obrigatório'),
  model: z.string().nonempty('Campo obrigatório'),
  color: z.string().nonempty('Campo obrigatório'),
  plate: z.string().nonempty('Campo obrigatório')
  /*   makeYear: '',
  modelYear: '',
  vin: '',
  renavan: '',
  color: '',
  plate: '' */
});

export default function CreateVehicle() {
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      vehicleType: 'car',
      maker: '',
      model: '',
      makeYear: '',
      modelYear: '',
      vin: '',
      renavan: '',
      color: '',
      plate: ''
    },
    mode: 'onSubmit'
  });

  console.log(errors);

  const onSubmit = (data) => {
    console.log('onSubmit', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <Card>
        <CardHeader subheader="" title="Novo veículo" />
        <Divider />
        <CardContent>
          <Grid sx={{ flexGrow: 1 }} container spacing={2} p={1}>
            <Grid item xs={6}>
              <CreateVehicleForm control={control} errors={errors} />
              {/* <Grid container spacing={3} xs={12}>
                <Grid md={12} xs={12} item>
                  <FormControl sx={{ width: 150 }}>
                    <InputLabel>Tipo de veículo</InputLabel>
                    <Select defaultValue="New York" label="State" name="state" variant="outlined">
                      {states.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid md={6} xs={12} item>
                  <FormControl fullWidth required>
                    <InputLabel>Marca</InputLabel>
                    <OutlinedInput defaultValue="" label="Marca" name="maker" />
                  </FormControl>
                </Grid>
                <Grid md={6} xs={12} item>
                  <FormControl fullWidth required>
                    <InputLabel>Modelo</InputLabel>
                    <OutlinedInput defaultValue="" label="Modelo" name="model" />
                  </FormControl>
                </Grid>
                <Grid md={6} xs={12} item>
                  <FormControl fullWidth required>
                    <InputLabel>Ano fabricação</InputLabel>
                    <OutlinedInput defaultValue="" label="Ano fabricação" name="makeYear" />
                  </FormControl>
                </Grid>
                <Grid md={6} xs={12} item>
                  <FormControl fullWidth>
                    <InputLabel>Ano modelo</InputLabel>
                    <OutlinedInput label="Ano modelo" name="modelYear" />
                  </FormControl>
                </Grid>
                <Grid md={6} xs={12} item>
                  <FormControl fullWidth>
                    <InputLabel>Chassi</InputLabel>
                    <OutlinedInput label="Chassi" name="vin" />
                  </FormControl>
                </Grid>
                <Grid md={6} xs={12} item>
                  <FormControl fullWidth>
                    <InputLabel>Renavan</InputLabel>
                    <OutlinedInput label="Renavan" name="renavan" />
                  </FormControl>
                </Grid>
                <Grid md={6} xs={12} item>
                  <FormControl fullWidth>
                    <InputLabel>Cor</InputLabel>
                    <OutlinedInput label="Cor" name="color" />
                  </FormControl>
                </Grid>
                <Grid md={6} xs={12} item>
                  <FormControl fullWidth>
                    <InputLabel>Placa</InputLabel>
                    <OutlinedInput label="Placa" name="plate" />
                  </FormControl>
                </Grid>
              </Grid> */}
            </Grid>
            <Grid item xs={6}>
              <Grid container>
                <Grid item xs={12}>
                  <Button component="label" role={undefined} variant="contained" tabIndex={-1} startIcon={<CloudUploadOutlined />}>
                    Imagens do veículo
                    <VisuallyHiddenInput type="file" />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <CardActions sx={{ justifyContent: 'flex-end' }}>
          <Button variant="contained" type="submit">
            Salvar
          </Button>
        </CardActions>
      </Card>
    </form>
  );
}
