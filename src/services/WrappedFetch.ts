import type { ApiResponse } from "../types/apiTypes";
import { ApiError } from "./ApiError";
import { refreshToken, logout } from "./authService";
import { getAccessToken } from "./authStorge";

const apiUrl = import.meta.env.VITE_API_URL;

export async function request<T = undefined>(
  method: "GET" | "POST" | "PUT" | "DELETE",
  endpoint: string,
  data?: unknown,
): Promise<T | undefined> {
  let response = await makeRequest(method, endpoint, data);

  // If unauthorized, try refreshing token
  if (response.status === 401) {
    if (!(await refreshToken())) {
      await logout(); // force logout if refresh fails
      window.location.replace("/login");

      throw new Error("Unauthorized");
    }

    response = await makeRequest(method, endpoint, data);
  }

  const json: ApiResponse<T> = await response.json();

  if (!response.ok) throw new ApiError(json.message, json.errors);

  return json.data;
}

export async function reques2<T = null>(
  method: "GET" | "POST" | "PUT" | "DELETE",
  endpoint: string,
  data?: unknown,
): Promise<ApiResponse<T>> {
  try {
    let response = await makeRequest(method, endpoint, data);

    // If unauthorized, try refreshing token
    if (response.status === 401) {
      if (!(await refreshToken())) {
        await logout(); // force logout if refresh fails
        window.location.replace("/login");
        return {
          success: false,
          message: "Unauthorized",
          errors: [],
        };
      }

      response = await makeRequest(method, endpoint, data);
    }

    const json: ApiResponse<T> = await response.json();

    return json;
  } catch (error) {
    console.error("Network error", error);
    return {
      success: false,
      message: "Network error",
    };
  }
}

const makeRequest = async (
  method: string,
  endpoint: string,
  data?: unknown,
): Promise<Response> => {
  const token = getAccessToken();

  return fetch(`${apiUrl}${endpoint}`, {
    method,
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    body: data ? JSON.stringify(data) : undefined,
  });
};
