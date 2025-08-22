export type WithId = {
  id: number;
};

export type Response<T> = {
  error: boolean;
  message: string;
  errors?: string[];
  data: T;
};

export type PagedResult<T> = {
  items: T[];
  totalPages: number;
};

export type PaginationParams = {
  page?: number;
  pageSize?: number;
  search?: string;
  sortBy?: string;
  direction?: "asc" | "desc";
};
