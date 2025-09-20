import type { ApiResponse, Auth } from "../types/apiTypes";

const apiUrl = import.meta.env.VITE_API_URL;

let accessToken: string | null = null;

export const setAccessToken = (token: string | null) => {
  accessToken = token;
};
export const getAccessToken = () => accessToken;

export async function login(
  email: string,
  password: string,
): Promise<ApiResponse<Auth>> {
  try {
    const res = await fetch(`${apiUrl}/auth/signin`, {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data: ApiResponse<Auth> = await res.json();

    if (res.ok && data.data) {
      setAccessToken(data.data.accessToken); // store tokens + user info
    }

    return data;
  } catch (error) {
    console.error("Unexpected error:", error);
    return { message: "Something went wrong, try again later", success: false };
  }
}

export async function logout(): Promise<boolean> {
  const res = await fetch(`${apiUrl}/auth/logout`, {
    method: "POST",
    credentials: "include",
  });

  if (!res.ok) return false;

  setAccessToken(null);
  return true;
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
