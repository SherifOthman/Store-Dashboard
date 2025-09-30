export type ErrorItem = {
  message: string;
  field: string;
};

export type ApiResponse<T> = {
  success: boolean;
  message?: string;
  data?: T;
  errors?: ErrorItem[];
};

export type User = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  avatarUrl: string;
  role: "Customer" | "Staff" | "Manager" | "Admin";
};

export type Auth = {
  accessToken: string;
};

export type Category = {
  id: number;
  name: string;
  createdAt: string;
  parentCategoryId: number | null;
  subCategories: Category[];
};
