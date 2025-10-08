import { useMutation } from "@tanstack/react-query";
import { changePassword as changePasswordApi } from "../../services/usersService";
import type { ApiError } from "../../services/ApiError";
import { toast } from "sonner";

export const useChangePassword = () => {
  const {
    isPending,
    mutateAsync: changePassword,
    error,
  } = useMutation({
    mutationFn: changePasswordApi,
    onSuccess: () => {
      toast.success("Password changed successfully.");
    },
    onError: (error: ApiError) => {
      console.log("ERROR: ", error);
      toast.error(error.message);
    },
  });

  return { isPending, changePassword, error };
};
