export type ApiResponse<T> = {
  success: boolean;
  message?: string;
  data?: T;
  errors?: Record<string, string>[];
};

export type User = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  avatarUrl: string;
  roles: UserRoles;
};

export enum UserRoles {
  Customer = 1,
  Staff = 2,
  Manage = 4,
  Admin = 8,
}

export type Auth = {
  accessToken: string;
  user: User;
};
