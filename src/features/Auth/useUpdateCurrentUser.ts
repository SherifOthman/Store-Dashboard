import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  updateCurrentUser,
  type UpdateCurrentUserType,
} from "../../services/usersService";
import type { ApiError } from "../../services/ApiError";
import { toast } from "sonner";

export const useUpdateCurrentUser = () => {
  const queryClient = useQueryClient();

  const { mutateAsync, isPending, error } = useMutation({
    mutationFn: (user: UpdateCurrentUserType) => updateCurrentUser(user),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["currentUser"] });
      toast.success("Profile Updated successfully.");
    },
    onError: (error: ApiError) => {
      toast.error(error.message);
    },
  });

  return { updateCurrentUser: mutateAsync, isPending, error };
};
