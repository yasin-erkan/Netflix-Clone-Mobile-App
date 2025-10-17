import axios from 'axios';
import {BASE_URL} from './urls';
import {API_KEY, TOKEN} from '../utils/constants';

const Client = axios.create({
  baseURL: BASE_URL,
  timeout: 10000, // 10 saniye timeout
  params: {
    api_key: API_KEY,
  },
  headers: {
    Authorization: `Bearer ${TOKEN}`,
    accept: 'application/json',
  },
});

export default Client;
