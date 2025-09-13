import type { ApiResponse, Auth, User } from "../types/apiTypes";
import { api, request } from "./apiInstance";

let accessToken: string | null = null;

export const setAccessToken = (token: string) => {
  accessToken = token;
};

export const getAccessToken = (): string | null => accessToken;

export const clearAccessToken = () => {
  accessToken = null;
};

export async function login(
  email: string,
  password: string,
): Promise<ApiResponse<Auth>> {
  const res = await request<Auth>("post", "auth/signin", {
    email,
    password,
  });

  if (res.data) {
    setAccessToken(res.data.accessToken);
  }

  return res;
}

export async function logout(): Promise<void> {
  await api.post("auth/logout");
  clearAccessToken();
}

export async function refreshToken(): Promise<ApiResponse<Auth>> {
  const res = await request<Auth>("post", "auth/refreshToken");

  if (res.data) {
    setAccessToken(res.data.accessToken);
  }

  return res;
}
