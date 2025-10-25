import axios from 'axios';
import {BASE_URL} from './urls';
import {API_KEY, TOKEN} from '../utils/constants';

const Client = axios.create();
Client.defaults.baseURL = BASE_URL;

Client.defaults.params = {
  api_key: API_KEY,
  page: 2,
  language: 'en-US',
};

Client.defaults.headers.common['Authorization'] = `Bearer ${TOKEN}`;

Client.defaults.headers.common['accept'] = 'application/json';

export default Client;
