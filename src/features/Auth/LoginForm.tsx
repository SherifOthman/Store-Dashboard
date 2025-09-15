import { Input, Button, Typography } from "@material-tailwind/react";
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { login } from "../../services/authService";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Lock, User } from "lucide-react";

const formSchema = z.object({
  email: z.email("Invalid email address"),
  password: z.string().min(6, "Password is too short"),
});

type FormData = z.infer<typeof formSchema>;

export const LoginForm = () => {
  const navigate = useNavigate();
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

    console.log(res);

    if (res.success) {
      navigate("/", { replace: true });
    } else {
      setErrorMessage(res.message!);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex w-full flex-col">
      <Typography type="small" color="error">
        {errorMessage}
      </Typography>
      <div className="mt-2 mb-4 space-y-1.5">
        <Typography
          as="label"
          htmlFor="email"
          type="small"
          color="default"
          className="font-semibold"
        >
          Email
        </Typography>
        <Input
          id="email"
          type="email"
          placeholder="someone@example.com"
          {...register("email")}
          isError={!!errors.email}
        >
          <Input.Icon>
            <User className="h-full w-full" />
          </Input.Icon>
        </Input>
        <Typography type="small" color="error" className="mt-1 block">
          {errors.email?.message || ""}
        </Typography>
      </div>
      <div className="mb-4 space-y-1.5">
        <Typography
          as="label"
          htmlFor="password"
          type="small"
          color="default"
          className="font-semibold"
        >
          Password
        </Typography>
        <Input
          id="password"
          type="password"
          placeholder="************"
          {...register("password")}
        >
          <Input.Icon>
            <Lock className="h-full w-full" />
          </Input.Icon>
        </Input>
        <Typography type="small" color="error" className="mt-1 block">
          {errors.password?.message || ""}
        </Typography>
      </div>
      <Button>Sign In</Button>
    </form>
  );
};
