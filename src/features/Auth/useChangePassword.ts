import { useMutation } from "@tanstack/react-query";
import { changePassword as changePasswordApi } from "../../services/usersService";
import toast from "react-hot-toast";

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
    onError: (error) => {
      console.log("ERROR: ", error.message);
      toast.error(error.message);
    },
  });

  return { isPending, changePassword, error };
};
