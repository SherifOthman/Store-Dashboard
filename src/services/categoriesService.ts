import type { ApiResponse, Category } from "../types/apiTypes";
import { api } from "./api";

const ROUTE = "categories";
export type CreateCategoryType = Pick<Category, "name" | "parentCategoryId">;
export type UpdateCategoryType = Pick<
  Category,
  "id" | "name" | "parentCategoryId"
>;

export const getCategories = async () => {
  const res = await api.get<Category[]>(ROUTE);

  return res.data;
};

export const getCategoryById = async (id: number) => {
  const res = await api.get<ApiResponse<Category>>(`${ROUTE}}/${id}`);

  return res.data.data;
};

export const createCategory = async (category: CreateCategoryType) => {
  const res = await api.post<ApiResponse<Category>>(ROUTE, category);

  return res.data.data;
};

export const updateCategory = async (category: UpdateCategoryType) => {
  await api.put(`${ROUTE}/${category.id}`, category);
};

export const deleteCategory = async (id: number) => {
  await api.delete(`${ROUTE}/${id}`);
};
