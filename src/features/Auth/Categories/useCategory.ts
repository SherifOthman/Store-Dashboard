import { useQuery } from "@tanstack/react-query";
import { getCategoryById } from "../../../services/categoriesService";

export const useCategory = (id: number) => {
  const { data, isLoading, error } = useQuery({
    queryFn: () => getCategoryById(id),
    queryKey: ["category", id],
  });

  return { cateogry: data, isLoading, error };
};
