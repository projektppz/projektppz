import axios from "axios";
import {authHeader} from "./auth-header";

const API_URL = "https://witamywas-api.herokuapp.com/api/";

const getNews = () => {
  return axios.get(`${API_URL}news`);
};

const getUserBoard = () => {
  return axios.get(`${API_URL}user`, { headers: authHeader() });
};

const getModeratorBoard = () => {
  return axios.get(`${API_URL}mod`, { headers: authHeader() });
};

const getAdminBoard = () => {
  return axios.get(`${API_URL}admin`, { headers: authHeader() });
};

export {
  getNews,
  getUserBoard,
  getModeratorBoard,
  getAdminBoard,
};