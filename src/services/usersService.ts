import { type ApiResponse, type User } from "../types/apiTypes";
import { api } from "./api";

export const getCurrentUser = async () => {
  const res = await api.get<ApiResponse<User>>("/users/me");
  return res.data.data;
};

export type UpdateCurrentUserType = { imageFile?: File } & Omit<
  User,
  "avatarUrl" | "role"
>;

export const updateCurrentUser = async (user: UpdateCurrentUserType) => {
  const formData = new FormData();
  formData.append("firstName", user.firstName);
  formData.append("lastName", user.lastName);
  formData.append("email", user.email);
  formData.append("phoneNumber", user.phoneNumber);
  if (user.imageFile) formData.append("imageFile", user.imageFile);

  await api.put<ApiResponse<User>>("/users/me", formData);
};

export const changePassword = async ({
  currentPassword,
  newPassword,
}: {
  currentPassword: string;
  newPassword: string;
}) => {
  await api.post("/users/change-password", {
    currentPassword,
    newPassword,
  });
};
