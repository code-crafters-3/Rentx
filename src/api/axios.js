import { API_URL } from '../config';
import axios from 'axios';

const api = axios.create({
  baseURL: API_URL
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken');

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      // O servidor respondeu com um status diferente de 2xx
      console.error('Erro de resposta:', error.response.data);
    } else if (error.request) {
      // Nenhuma resposta foi recebida
      console.error('Erro na requisição:', error.request);
    } else {
      // Outro tipo de erro
      console.error('Erro desconhecido:', error.message);
    }
    return Promise.reject(error);
  }
);

export { api };
