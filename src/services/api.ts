import axios from "axios";
import { refreshToken, logout } from "./authService";
import { clearAccessToken, getAccessToken } from "./authStorge";

const apiUrl = import.meta.env.VITE_API_URL;

export const api = axios.create({
  baseURL: apiUrl,
  withCredentials: true,
});

api.interceptors.request.use((config) => {
  const token = getAccessToken();
  if (token && config.headers) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        await refreshToken();
        originalRequest.headers.Authorization = `Bearer ${getAccessToken()}`;
        return api(originalRequest);
      } catch (err) {
        await logout();
        clearAccessToken();
        window.location.replace("/login");
        return Promise.reject(err);
      }
    }

    if (error.response?.data) return Promise.reject(error.response.data);

    return Promise.reject(error);
  },
);
