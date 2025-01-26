import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Divider from '@mui/material/Divider';
import { Grid } from '@mui/material';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import CreateClientForm from './CreateClientForm';
import { ICreateClient } from '../dtos';

const schema = z.object({
  individualRegistration: z.string().nonempty('Campo obrigatório'),
  name: z.string().nonempty('Campo obrigatório'),
  email: z.string().nonempty('Campo obrigatório'),
});

export default function CreateClient() {
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
        individualRegistration: '',
        name: '',
        email: ''
    },
    mode: 'onSubmit'
  });

  console.log(errors);

  const onSubmit = (data: ICreateClient) => {
    console.log('onSubmit', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <Card>
        <CardHeader subheader="" title="Cliente" />
        <Divider />
        <CardContent>
          <Grid sx={{ flexGrow: 1 }} container spacing={2} p={1}>
            <Grid item xs={6}>
              <CreateClientForm control={control} errors={errors} />
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
