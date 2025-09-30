import axios from "axios";
import type { ApiResponse, Auth } from "../types/apiTypes";
import { clearAccessToken, setAccessToken } from "./authStorge";

const apiUrl = import.meta.env.VITE_API_URL;

export async function login({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<void> {
  const res = await axios.post<ApiResponse<Auth>>(
    `${apiUrl}/auth/signin`,
    {
      email,
      password,
    },
    { withCredentials: true },
  );

  if (res.data.data) {
    setAccessToken(res.data.data.accessToken);
  }
}

export async function logout() {
  await axios.post(`${apiUrl}/auth/logout`, undefined, {
    withCredentials: true,
  });
  clearAccessToken();
}

export async function refreshToken() {
  const res = await axios.post<ApiResponse<Auth>>(
    `${apiUrl}/auth/refresh`,
    undefined,
    {
      withCredentials: true,
    },
  );

  if (res.data.data) setAccessToken(res.data.data.accessToken);
}
