import { useMutation } from "@tanstack/react-query";
import { updateCategory as updateCategoryApi } from "../../../services/categoriesService";
import toast from "react-hot-toast";
import type { ApiError } from "../../../services/ApiError";

export const useUpdateCategory = () => {
  const { mutateAsync, isPending, error, isError } = useMutation({
    mutationFn: updateCategoryApi,
    onSuccess: () => {
      toast.success("Category has benn updated successfully.");
    },
    onError: (error: ApiError) => {
      console.log("Error: ", error);
      toast.error(error.message);
    },
  });

  return { updateCategory: mutateAsync, isPending, error, isError };
};
