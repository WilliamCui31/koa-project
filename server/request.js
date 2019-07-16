import axios from 'axios';

const instance = axios.create({ baseURL: 'http://localhost:3000F' });

export default instance;
