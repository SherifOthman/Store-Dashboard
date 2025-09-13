import axios from "axios";
import { getAccessToken, refreshToken, setAccessToken } from "./authService";
import type { ApiResponse } from "../types/apiTypes";

const apiUrl = import.meta.env.VITE_API_URL;

export const api = axios.create({
  baseURL: apiUrl,
  // timeout: 50000,
  withCredentials: true,
});

api.interceptors.request.use((config) => {
  const token = getAccessToken();
  if (token) {
    config.headers = {
      "Content-Type": "application/json",
      ...config.headers,
      Authorization: `Bearer ${token}`,
    };
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const auth = await refreshToken();
        if (auth.data) setAccessToken(auth.data?.accessToken);

        originalRequest.headers.Authorization = `Bearer ${getAccessToken()}`;
        return api(originalRequest);
      } catch (err) {
        return Promise.reject(err);
      }
    }

    // Important: reject all other errors
    return Promise.reject(error);
  },
);

export async function request<T>(
  method: "get" | "post" | "put" | "delete",
  url: string,
  data?: unknown,
): Promise<ApiResponse<T>> {
  try {
    const response = await api.request<ApiResponse<T>>({
      method,
      url,
      data,
      // ...(data || undefined),
    });

    console.log(response);

    return response.data;
  } catch (error: any) {
    console.log(error);
    // TODO:  Handle network or server errors
    if (error.response?.data) {
      return error.response.data as ApiResponse<T>;
    }

    return {
      success: false,
      message: error.message || "Unknown error",
    };
  }
}
