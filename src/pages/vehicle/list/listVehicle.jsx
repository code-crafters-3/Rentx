import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Pagination,
  Select,
  Stack,
  TextField,
  Typography
} from '@mui/material';
import { useState } from 'react';
import { faker } from '@faker-js/faker';

const vehicleData = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  model: faker.vehicle.model(),
  make: faker.vehicle.manufacturer(),
  modelYear: 2015 + (i % 10),
  manufactureYear: 2015 + (i % 10),
  plate: `ABC-${1000 + i}`,
  status: i % 2 === 0 ? 'Ativo' : 'Inativo',
  image: 'https://www.yamaha-motor.com.br/file/v5645080670515128185/products/lateral-urbano-factor-dx-150-abs-30132-fx02-img-01-v01.png'
}));

const ITEMS_PER_PAGE = 6;
export default function ListVehicle() {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('Todos');

  const handlePageChange = (_event, value) => {
    setPage(value);
  };

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
    setPage(1); // Reset page on search change
  };

  const handleStatusChange = (event) => {
    setStatusFilter(event.target.value);
    setPage(1); // Reset page on filter change
  };

  const handleViewDetails = (vehicleId) => {
    console.log(`Visualizando detalhes do veículo ID: ${vehicleId}`);
  };

  const filteredData = vehicleData.filter((vehicle) => {
    const matchesSearch =
      vehicle.model.toLowerCase().includes(search.toLowerCase()) || vehicle.plate.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = statusFilter === 'Todos' || vehicle.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const startIndex = (page - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const paginatedData = filteredData.slice(startIndex, endIndex);

  return (
    <Box sx={{ padding: 2 }}>
      <Box sx={{ marginBottom: 2 }}>
        <TextField label="Pesquisar por Modelo ou Placa" variant="outlined" fullWidth value={search} onChange={handleSearchChange} />
      </Box>

      <Box sx={{ marginBottom: 2, display: 'flex', justifyContent: 'space-between' }}>
        <FormControl variant="outlined" sx={{ minWidth: 150 }}>
          <InputLabel>Status</InputLabel>
          <Select value={statusFilter} onChange={handleStatusChange} label="Status">
            <MenuItem value="Todos">Todos</MenuItem>
            <MenuItem value="Ativo">Ativo</MenuItem>
            <MenuItem value="Inativo">Inativo</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Grid container spacing={2}>
        {paginatedData.map((vehicle) => (
          <Grid item xs={12} sm={6} md={4} key={vehicle.id}>
            <Card>
              <CardMedia component="img" height="140" image={vehicle.image} alt={`Imagem do ${vehicle.model}`} />
              <CardContent>
                <Typography variant="h6" component="div" sx={{ fontFamily: 'FeEngschrift', fontSize: 30, textAlign: 'center' }}>
                  {vehicle.plate.replace('-', '').toUpperCase()}
                </Typography>

                <Typography variant="h6" component="div">
                  {vehicle.make} - {vehicle.model}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {vehicle.manufactureYear} / {vehicle.modelYear}
                </Typography>

                <Typography variant="body2" color={vehicle.status === 'Ativo' ? 'green' : 'red'}>
                  Status: {vehicle.status}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  sx={{ marginTop: 2 }}
                  onClick={() => handleViewDetails(vehicle.id)}
                >
                  Visualizar Detalhes
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Stack spacing={2} sx={{ marginTop: 4, alignItems: 'center' }}>
        <Pagination count={Math.ceil(filteredData.length / ITEMS_PER_PAGE)} page={page} onChange={handlePageChange} color="primary" />
      </Stack>
    </Box>
  );
}
