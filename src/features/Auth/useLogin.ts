import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { login as loginApi } from "../../services/authService";
import toast from "react-hot-toast";
import type { ApiError } from "../../services/ApiError";

export const useLogin = () => {
  const navigate = useNavigate();

  const { mutate: login, isPending } = useMutation({
    mutationFn: loginApi,
    onSuccess: () => {
      navigate("/");
    },
    onError: (err: ApiError) => {
      console.log("ERROR", err);
      toast.error(err.message);
    },
  });

  return { login, isPending };
};
