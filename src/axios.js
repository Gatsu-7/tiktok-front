import axios from "axios";
const instance = axios.create({
  baseURL: "https://tiktok-backend-ghj2.onrender.com/",
});

export default instance;
