import type { ApiResponse } from "../types/apiTypes";
import { refreshToken, logout, getAccessToken } from "./authService";

const apiUrl = import.meta.env.VITE_API_URL;

export async function request<T>(
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
        return {
          success: false,
          message: "Unauthorized",
          errors: [],
        };
      }

      response = await makeRequest(method, endpoint, data);
    }

    const json: ApiResponse<T> = await response.json();

    if (!response.ok) {
      return {
        success: false,
        message: json.message || "Request failed",
        errors: json.errors || [],
      };
    }

    return json;
  } catch (error: any) {
    return {
      success: false,
      message: error.message || "Network error",
      errors: [],
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
