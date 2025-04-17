import axios from 'axios';

const api = axios.create({
  baseURL: 'https://g-scores-backend-g1i4.onrender.com/api', // change if your backend uses another port
});

export default api;
