import axios from "axios";

const API = "http://localhost:3000";

export const addPoints = (data) => axios.post(`${API}/addPoints`, data);
export const getLeaderboard = () => axios.get(`${API}/leaderboard`);