import axios from "axios";

const API_URL = "https://witamywas-api.herokuapp.com/api/users/";


const register = (userName: string, password: string, firstName: string, surname: string, email: string, phoneNumber: string) => {
  return axios.post(`${API_URL}register`, {
    userName,
    email,
    password,
    firstName,
    surname,
    phoneNumber
  });
};

const login = (username: string, password: string) => {
  return axios
    .post(`${API_URL}login`, {
      username,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user") || '{}');
};

export {
  register,
  login,
  logout,
  getCurrentUser,
};