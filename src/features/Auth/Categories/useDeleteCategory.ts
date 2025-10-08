import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCategory as deleteCategoryApi } from "../../../services/categoriesService";
import type { ApiError } from "../../../services/ApiError";
import { toast } from "sonner";

export const useDeleteCategory = () => {
  const queryClient = useQueryClient();
  const { mutateAsync, isPending, error, isError } = useMutation({
    mutationFn: (id: number) => deleteCategoryApi(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["categories"] });
      toast.success("Category was removed successfully.");
    },
    onError: (error: ApiError) => {
      console.log("Error: ", error);
      toast.error(error.message);
    },
  });
  return { deleteCategory: mutateAsync, isPending, error, isError };
};
