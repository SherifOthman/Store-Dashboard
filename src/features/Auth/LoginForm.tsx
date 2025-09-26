import { Input, Button, Typography, Spinner } from "@material-tailwind/react";
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Lock, User } from "lucide-react";
import { useLogin } from "./useLogin";

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
      <Button>
        {isPending && <Spinner className="mr-2" />}
        Sign In
      </Button>
    </form>
  );
};
