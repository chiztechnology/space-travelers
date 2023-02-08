import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.spacexdata.com/v3/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
