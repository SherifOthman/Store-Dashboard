import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCategory as createCategoryApi } from "../../../services/categoriesService";
import type { ApiError } from "../../../services/ApiError";
import { toast } from "sonner";

export const useCreateCategory = () => {
  const queryClient = useQueryClient();
  const { mutateAsync, isPending, data, isSuccess, isError, error } =
    useMutation({
      mutationFn: createCategoryApi,
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["categories"] });
        toast.success("The category has been added successfully.");
      },
      onError: (error: ApiError) => {
        console.log("Error: ", error);
        toast.error(error.message);
      },
    });

  return {
    createCategory: mutateAsync,
    isPending,
    isSuccess,
    data,
    isError,
    error,
  };
};
