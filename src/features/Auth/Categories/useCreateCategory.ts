import { useMutation } from "@tanstack/react-query";
import { createCategory as createCategoryApi } from "../../../services/categoriesService";
import toast from "react-hot-toast";
import type { ApiError } from "../../../services/ApiError";

export const useCreateCategory = () => {
  const { mutateAsync, isPending, data, isError, error } = useMutation({
    mutationFn: createCategoryApi,
    onSuccess: () => {
      toast.success("The category has been added successfully.");
    },
    onError: (error: ApiError) => {
      console.log("Error: ", error);
      toast.error(error.message);
    },
  });

  return { createCategory: mutateAsync, isPending, data, isError, error };
};
