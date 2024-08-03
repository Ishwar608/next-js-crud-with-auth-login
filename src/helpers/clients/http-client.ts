import { AUTH_TOKEN_KEY } from "@/lib/constants";
import axios from "axios";
import Cookies from "js-cookie";

const Axios = axios.create({
  baseURL: process.env.BASE_URL,
  timeout: 5000000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Change request data/error here
Axios.interceptors.request.use((config) => {
  const token = Cookies.get(AUTH_TOKEN_KEY);
  //@ts-ignore
  config.headers = {
    ...config.headers,
    Authorization: `Bearer ${token ? token : ""}`,
  };
  return config;
});

export default Axios;

// Change response data/error here
Axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 502) {
      Cookies.remove(AUTH_TOKEN_KEY);
      window.location.reload();
    }
    return Promise.reject(error);
  },
);

export class HttpClient {
  static async get<T>(url: string, params?: unknown) {
    const response = await Axios.get<T>(url, { params });
    return response.data;
  }

  static async post<T>(url: string, data: unknown, options?: any) {
    const response = await Axios.post<T>(url, data, options);
    return response.data;
  }

  static async put<T>(url: string, data: unknown) {
    const response = await Axios.put<T>(url, data);
    return response.data;
  }

  static async delete<T>(url: string) {
    const response = await Axios.delete<T>(url);
    return response.data;
  }
}
