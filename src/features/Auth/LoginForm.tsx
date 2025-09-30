import { Button, Spinner } from "@material-tailwind/react";
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Lock, User } from "lucide-react";
import { useLogin } from "./useLogin";
import { TextField } from "../../components/TextField";

const formSchema = z.object({
  email: z.email("Invalid email address"),
  password: z.string().min(6, "Password is too short"),
});

type FormType = z.infer<typeof formSchema>;

export const LoginForm = () => {
  const { login, isPending } = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormType>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormType) => {
    await login({ email: data.email, password: data.password });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex w-full flex-col">
      <TextField
        label="Email"
        type="email"
        icon={User}
        error={errors.email?.message}
        placeholder="omeone@example.com"
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
      <Button>
        {isPending && <Spinner className="mr-2" />}
        Sign In
      </Button>
    </form>
  );
};
