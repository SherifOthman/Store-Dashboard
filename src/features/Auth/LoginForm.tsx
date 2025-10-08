import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Lock, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TextField } from "@/components/TextField";
import { useLogin } from "./useLogin";
import { Loader2 } from "lucide-react";

const formSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password is too short"),
});

type FormType = z.infer<typeof formSchema>;

export const LoginForm = () => {
  const { login, isPending } = useLogin();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormType>({ resolver: zodResolver(formSchema) });

  const onSubmit = async (data: FormType) => {
    await login(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full flex-col gap-4"
    >
      <TextField
        label="Email"
        type="email"
        icon={User}
        error={errors.email?.message}
        placeholder="someone@example.com"
        {...register("email")}
      />

      <TextField
        label="Password"
        type="password"
        icon={Lock}
        error={errors.password?.message}
        placeholder="•••••••••••••"
        {...register("password")}
      />

      <Button type="submit" disabled={isPending}>
        {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        Sign In
      </Button>
    </form>
  );
};
