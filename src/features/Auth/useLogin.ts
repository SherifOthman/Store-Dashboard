import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { login as loginApi } from "../../services/authService";
import { toast } from "sonner";

export const useLogin = () => {
  const navigate = useNavigate();

  const { mutate: login, isPending } = useMutation({
    mutationFn: loginApi,
    onSuccess: () => {
      navigate("/");
    },
    onError: (err: any) => {
      console.log("ERROR", err);
      toast.error(err.response.data.message);
    },
  });

  return { login, isPending };
};
