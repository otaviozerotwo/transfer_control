import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://192.168.5.16:3000',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const setAuthToken = (token: string | null) => {
  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.Authorization;
  }
};