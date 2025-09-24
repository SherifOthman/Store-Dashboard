import type { User } from "../types/apiTypes";
import { request } from "./WrappedFetch";

export const getCurrentUser = async () => {
  const res = await request<User>("GET", "/users/me");
  return res;
};

export const updateCurrentUser = async (user: User) => {
  const res = await request<User>("PUT", "/users/me", user);
  return res;
};

export const changePassword = async (
  currentPassword: string,
  newPassword: string,
) => {
  const res = await request("POST", "users/change-password", {
    currentPassword,
    newPassword,
  });

  return res;
};
