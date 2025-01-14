import axios from "axios";
///const BASE_URL = 'http://localhost:3500';
const BASE_URL = 'https://blogs-api.onrender.com';        //for production

export default axios.create(
    {
        baseURL: BASE_URL
    }
);


export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers: {'Content-Type': 'multipart/form-data'},
  // headers: {'Content-Type': 'application/json'},
    withCredentials: true
});