import { http, HttpResponse } from 'msw';
import { API_URL } from '../config';

const _user = {
  id: 1,
  name: 'mock',
  email: 'mock@mock.com',
  user: 'mock.user'
};

export const authHandlers = [
  http.post(`${API_URL}/api/session`, async ({ request }) => {
    const { user, password } = await request.json();

    if (user !== 'mock.user' || password !== '123456') {
      return HttpResponse.json({ message: 'Usuário ou senha inválidos' }, { status: 401 });
    }
    return HttpResponse.json({ user: _user });
  })
];
