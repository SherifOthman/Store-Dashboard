import type { ApiResponse, Auth } from "../types/apiTypes";
import { clearAuth, setAuth } from "../utils/Auth";

const apiUrl = import.meta.env.VITE_API_URL;

export async function login(
  email: string,
  password: string,
): Promise<ApiResponse<Auth>> {
  try {
    const res = await fetch(`${apiUrl}auth/signin`, {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data: ApiResponse<Auth> = await res.json();

    if (res.ok && data.data) {
      setAuth(data.data); // store tokens + user info
    }

    return data;
  } catch (error) {
    console.error("Failed to login", error);
    return {
      success: false,
    };
  }
}

export async function logout(): Promise<boolean> {
  try {
    const res = await fetch(`${apiUrl}auth/logout`, {
      method: "POST",
      credentials: "include",
    });

    if (!res.ok) return false;

    clearAuth();
  } catch (error) {
    console.error("Failded to logout", error);
  }
  return true;
}

export async function refreshToken(): Promise<boolean> {
  try {
    const res = await fetch(`${apiUrl}auth/refresh`, {
      method: "POST",
      credentials: "include",
    });
    const data: ApiResponse<Auth> = await res.json();

    if (!res.ok) return false;

    if (data.data) setAuth(data?.data); // update auth with new token
  } catch (err) {
    console.error("Failed to refresh token", err);
  }
  return true;
}
