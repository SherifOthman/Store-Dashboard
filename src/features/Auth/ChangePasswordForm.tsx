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
import { TextField } from "../../components/TextField";
import { changePassword } from "../../services/usersService";

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
    setError,
    formState: { isSubmitting, errors },
  } = useForm<ChangePasswordFormType>({
    resolver: zodResolver(ChangePasswordSchema),
  });

  const onSubmit = async (data: ChangePasswordFormType) => {
    changePassword(data.password, data.newPassword);
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
            placeholder="••••••••••••••"
            {...register("password")}
            error={errors.password?.message}
          />

          <TextField
            label="New Password"
            placeholder="••••••••••••••"
            {...register("newPassword")}
            error={errors.password?.message}
          />

          <TextField
            label="Confirm Password"
            placeholder="••••••••••••••"
            {...register("confirmPassword")}
            error={errors.password?.message}
          />
        </CardBody>
        <CardFooter className="flex justify-end gap-x-3">
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
