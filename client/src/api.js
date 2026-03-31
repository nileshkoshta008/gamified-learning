import axios from 'axios';

const API_URL = "http://localhost:3000";

const api = axios.create({
  baseURL: API_URL,
});

// Add token to requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const signup = (data) => api.post('/signup', data);
export const login = (data) => api.post('/login', data);
export const addPoints = (data) => api.post('/addPoints', data);
export const getLeaderboard = () => api.get('/leaderboard');

export default api;