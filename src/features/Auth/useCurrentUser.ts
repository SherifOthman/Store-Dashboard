import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../services/usersService";

export const useCurrentUser = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["currentUser"],
    queryFn: getCurrentUser,
  });

  return { currentUser: data, isLoading, error };
};
