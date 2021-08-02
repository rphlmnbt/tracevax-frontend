import axios from "axios";

const API_URL =  process.env.REACT_APP_BACKEND_URL + "/api/auth/";


const register = (email, password, first_name, last_name,contact_number, gender, 
                    civil_status, birth_date, home_address) => {
  return axios.post(API_URL + "signup", {
    email,
    password,
    first_name,
    last_name,
    contact_number,
    gender,
    civil_status,
    birth_date,
    home_address
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
