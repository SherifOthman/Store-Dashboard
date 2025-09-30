import { useMutation } from "@tanstack/react-query";
import { deleteCategory as deleteCategoryApi } from "../../../services/categoriesService";
import type { ApiError } from "../../../services/ApiError";
import toast from "react-hot-toast";

export const useDeleteCategory = () => {
  const { mutateAsync, isPending, error, isError } = useMutation({
    mutationFn: (id: number) => deleteCategoryApi(id),
    onSuccess: () => {
      toast.error("Category was removed successfully.");
    },
    onError: (error: ApiError) => {
      console.log("Error: ", error);
      toast.error(error.message);
    },
  });
  return { deleteCategory: mutateAsync, isPending, error, isError };
};
