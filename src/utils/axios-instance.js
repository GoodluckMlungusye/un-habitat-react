import axios from 'axios';
import { API_PARAMS } from '../params/api';

const axiosInstance = axios.create({
  baseURL: API_PARAMS.baseURL, 
  headers: API_PARAMS.headers
});

export default axiosInstance;
