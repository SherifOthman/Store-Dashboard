import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCurrentUser } from "../../services/usersService";
import type { User } from "../../types/apiTypes";

export const useUpdateCurrentUser = () => {
  const queryClient = useQueryClient();

  const { mutateAsync, isPending, error } = useMutation({
    mutationFn: (user: User) => updateCurrentUser(user),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["currentUser"] });
    },
  });

  return { updateCurrentUser: mutateAsync, isPending, error };
};
