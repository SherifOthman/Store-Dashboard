import { zodResolver } from "@hookform/resolvers/zod";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Spinner,
  Typography,
} from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import z from "zod";
import { TextField } from "../../components/TextField";
import { useChangePassword } from "./useChangePassword";

import { useEffect } from "react";
import { setBackendErrors } from "../../utils/helpers";

const ChangePasswordSchema = z
  .object({
    currentPassword: z.string().nonempty("Current password is required"),
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
  const { isPending, changePassword, error } = useChangePassword();
  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors },
  } = useForm<ChangePasswordFormType>({
    resolver: zodResolver(ChangePasswordSchema),
  });

  useEffect(() => {
    if (error) setBackendErrors(setError, error.errors);
  }, [error, setError]);

  const onSubmit = async (data: ChangePasswordFormType) => {
    await changePassword({
      currentPassword: data.currentPassword,
      newPassword: data.newPassword,
    });

    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Card className="mx-auto mt-5 w-3/4 p-4 pb-0">
        <CardHeader>
          <Typography color="default" className="font-bold">
            Change Password
          </Typography>
          <Typography className="mt-2">
            To change your password please confirm here
          </Typography>
        </CardHeader>
        <CardBody>
          <TextField
            label="Current Password"
            type="password"
            placeholder="••••••••••••••"
            {...register("currentPassword")}
            error={errors.currentPassword?.message}
          />

          <TextField
            label="New Password"
            type="password"
            placeholder="••••••••••••••"
            {...register("newPassword")}
            error={errors.newPassword?.message}
          />

          <TextField
            label="Confirm Password"
            type="password"
            placeholder="••••••••••••••"
            {...register("confirmPassword")}
            error={errors.confirmPassword?.message}
          />
        </CardBody>
        <CardFooter className="flex justify-end gap-x-3">
          <Button className="cursor-pointer">
            {isPending && <Spinner className="mr-2" />}
            Save
          </Button>
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
