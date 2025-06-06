import axios, { AxiosInstance } from "axios";
export const ApiInstance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_SERVER_API,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 5000,
});
