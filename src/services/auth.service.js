import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/";

const register = (username,first_name, last_name, email, password) => {
  return axios.post(API_URL + "signup", {
    username,
    first_name,
    last_name,
    email,
    password,
  });
};

const login = (email, password) => {
  return axios
    .post(API_URL + "signin", {
      email,
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
  return JSON.parse(localStorage.getItem("user"));
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  register,
  login,
  logout,
  getCurrentUser,
};
