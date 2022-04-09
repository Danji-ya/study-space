import axios from 'axios';

const url = 'http://localhost:3000/';

const axiosInstance = axios.create({
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json',
  },
  baseURL: url,
});

export default axiosInstance;
