import { apiFetch } from "@/lib/api-fetch";

export type CategoryType = {
  id: number;
  name: string;
  isActive: boolean;
  createdAt: string;
  parentCategory: number;
  subCategories: CategoryType[];
};

export async function getCategory() {
  const data = await apiFetch<CategoryType[]>("category");
  return data;
}
