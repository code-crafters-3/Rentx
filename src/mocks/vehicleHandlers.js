import { API_URL } from '../config';
import { http, HttpResponse } from 'msw';

const vehicles = new Map();

export const vehicleHandlers = [
  http.post(`${API_URL}/api/vehicles`, async ({ request }) => {
    const vehicle = await request.json();
    vehicles.set(String(vehicle.id), vehicle);

    return HttpResponse.json(vehicle);
  }),

  http.get(`${API_URL}/api/vehicles`, () => {
    const vehicleResponse = Array.from(vehicles.values());
    return HttpResponse.json(vehicleResponse);
  }),

  http.get(`${API_URL}/api/vehicles/:id`, ({ params }) => {
    const { id } = params;
    const vehicle = vehicles.get(id);

    if (!vehicle) {
      return HttpResponse.json({ message: 'Veículo não encontrado' }, { status: 404 });
    }

    return HttpResponse.json(vehicle);
  })
];
