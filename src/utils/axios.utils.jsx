import axios from "axios";
// import { getUrl } from "../config";

// const API_URL = getUrl();
const axiosInstance = axios.create({
    baseURL:"https://api.themoviedb.org/"
})

// axiosInstance.defaults.headers.common['Authorization'] = AUTH_TOKEN;

export default axiosInstance;