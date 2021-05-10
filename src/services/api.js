import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_DATABASE_PATH,
});

export default api;
