import { zodResolver } from "@hookform/resolvers/zod";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Input,
  Typography,
} from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import z from "zod";

const ChangePasswordSchema = z
  .object({
    password: z.string().nonempty("Current password is required"),
    newPassword: z
      .string()
      .min(6, "New password must be at least 6 characters long"),
    confirmPassword: z.string().nonempty("Please confirm your new password"),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "New password and confirmation do not match",
    path: ["confirmPassword"],
  });

type ChangePasswordFormType = z.infer<typeof ChangePasswordSchema>;

export const ChangePasswordForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors },
  } = useForm<ChangePasswordFormType>({
    resolver: zodResolver(ChangePasswordSchema),
  });

  const onSubmit = (data: ChangePasswordFormType) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Card className="mx-auto mt-5 w-3/4 p-4">
        <CardHeader>
          <Typography color="default" className="font-bold">
            Change Password
          </Typography>
          <Typography className="mt-2">
            To change your password please confirm here
          </Typography>
        </CardHeader>
        <CardBody>
          <Typography
            as="label"
            color="default"
            htmlFor="currentPassword"
            type="small"
            className="font-semibold"
          >
            Current Password
          </Typography>
          <Input
            placeholder="••••••••••••••"
            type="password"
            className="mt-1"
            {...register("password")}
          />
          <Typography
            color="error"
            type="small"
            className="mt-1 mb-2 block h-4 w-full"
          >
            {errors.password?.message}
          </Typography>

          <Typography
            as="label"
            color="default"
            htmlFor="currentPassword"
            type="small"
            className="mb-5 font-semibold"
          >
            New Password
          </Typography>
          <Input
            placeholder="••••••••••••••"
            type="password"
            className="mt-1"
            {...register("newPassword")}
          />
          <Typography
            color="error"
            type="small"
            className="mb-2 block h-4 w-full"
          >
            {errors.newPassword?.message}
          </Typography>

          <Typography
            as="label"
            color="default"
            htmlFor="currentPassword"
            type="small"
            className="mb-5 font-semibold"
          >
            Confirm Password
          </Typography>
          <Input
            placeholder="••••••••••••••"
            type="password"
            className="mt-1"
            {...register("confirmPassword")}
          />
          <Typography
            color="error"
            type="small"
            className="mt-1 block h-4 w-full"
          >
            {errors.confirmPassword?.message}
          </Typography>
        </CardBody>
        <CardFooter className="flex justify-end gap-3">
          <Button className="cursor-pointer">Save</Button>
          <Button
            type="reset"
            className="cursor-pointer"
            variant="ghost"
            color="error"
            onClick={() => reset()}
          >
            Cancel
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
};
