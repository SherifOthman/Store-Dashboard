import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../../../services/categoriesService";

export const useCategories = () => {
  const { data, isLoading, error } = useQuery({
    queryFn: getCategories,
    queryKey: ["categories"],
  });

  return { categories: data, isLoading, error };
};
