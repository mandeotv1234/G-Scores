import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080/api', // change if your backend uses another port
});

export default api;
