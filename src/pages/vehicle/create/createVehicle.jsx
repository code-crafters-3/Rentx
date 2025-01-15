import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Divider from '@mui/material/Divider';
import { Grid } from '@mui/material';
import CreateVehicleForm from './createVehicleForm';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { ImagePicker } from './imagePicker';
import { useEffect } from 'react';
import { api } from '../../../api/axios';

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

  useEffect(() => {
    async function fetch() {
      try {
        const response = await api.post('/api/vehicles', { id: 123, place: 'ABC-1234' });
        console.log('created vehicle', response.data);
        const vehicles = await api.get('/api/vehicles');
        console.log('list vehicles', vehicles.data);
        const vehicleFound = await api.get('/api/vehicles/123');
        console.log('vehicle found', vehicleFound.data);
        console.log(response.data);
      } catch (error) {
        console.log('error', error);
      }
    }
    fetch();
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <Card>
        <CardHeader subheader="" title="Novo veículo" />
        <Divider />
        <CardContent>
          <Grid sx={{ flexGrow: 1 }} container spacing={2} p={1}>
            <Grid item xs={6}>
              <CreateVehicleForm control={control} errors={errors} />
            </Grid>
            <Grid item xs={6}>
              <Grid container>
                <Grid item xs={12}>
                  <ImagePicker />
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
