import type { ApiResponse, Auth } from "../types/apiTypes";
import { ApiError } from "./ApiError";
import { clearAccessToken, setAccessToken } from "./authStorge";

const apiUrl = import.meta.env.VITE_API_URL;

export async function login({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<void> {
  const res = await fetch(`${apiUrl}/auth/signin`, {
    method: "POST",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  const data: ApiResponse<Auth> = await res.json();

  if (!res.ok) throw new ApiError(data.message, data.errors);

  if (res.ok && data.data) {
    setAccessToken(data.data.accessToken); // store tokens + user info
  }
}

export async function logout(): Promise<void> {
  await fetch(`${apiUrl}/auth/logout`, {
    method: "POST",
    credentials: "include",
  });

  clearAccessToken();
}

export async function refreshToken(): Promise<boolean> {
  try {
    const res = await fetch(`${apiUrl}/auth/refresh`, {
      method: "POST",
      credentials: "include",
    });

    if (!res.ok) {
      console.error(`Failed to refresh token: ${res.status}`);
      return false;
    }

    const data: ApiResponse<Auth> = await res.json();

    if (data.data) setAccessToken(data.data.accessToken);
    return true;
  } catch (error) {
    console.error("Unexpected error:", error);
    return false;
  }
}
