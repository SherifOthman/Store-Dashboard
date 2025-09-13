import { LockKeyhole, Mail } from "lucide-react";
import { ErrorMessage, Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { useAuth } from "../../contexts/AuthContext";
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { login } from "../../services/authService";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const formSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password is too short"),
});

type FormData = z.infer<typeof formSchema>;

export const LoginForm = () => {
  const navigate = useNavigate();
  const { setUser } = useAuth();
  const [errorMessage, setErrorMessage] = useState<string>("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    const res = await login(data.email, data.password);

    if (!res.success) {
      setErrorMessage(res.message || "");
    }
    if (res.data) {
      setUser(res.data?.user);
      navigate("/", { replace: true });
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-6 flex w-3/4 flex-col gap-4"
    >
      <ErrorMessage title={errorMessage} />
      {/* Email Field */}
      <div className="flex flex-col">
        <Input
          icon={Mail}
          placeholder="Email"
          {...register("email")}
          error={!!errors.password}
        />
        <ErrorMessage title={errors.email?.message} />
      </div>

      {/* Password Field */}
      <div className="flex flex-col">
        <Input
          icon={LockKeyhole}
          type="password"
          placeholder="Password"
          {...register("password")}
          error={!!errors.password}
        />
        <ErrorMessage title={errors.password?.message} />
      </div>

      {/* Submit Button */}
      <Button type="submit" size="lg" className="mt-2">
        LOGIN
      </Button>
    </form>
  );
};
