import axios from 'axios';
import { API_AUTH_PARAMS } from '../auth/api';

const axiosInstance = axios.create({
  baseURL: '/api', 
  headers: API_AUTH_PARAMS.headers,
  auth: API_AUTH_PARAMS.auth
});

export default axiosInstance;
