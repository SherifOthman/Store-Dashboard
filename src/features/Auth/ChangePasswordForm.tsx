import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useEffect } from "react";
import { setBackendErrors } from "../../utils/helpers";
import { useChangePassword } from "./useChangePassword";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { Loader2 } from "lucide-react";
import { TextField } from "@/components/TextField";

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
      <Card className="mx-auto mt-5 max-w-3xl">
        <CardHeader>
          <CardTitle>Change Password</CardTitle>
          <p className="text-muted-foreground text-sm">
            To change your password please confirm here
          </p>
        </CardHeader>

        <CardContent>
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
        </CardContent>

        <CardFooter className="flex justify-end gap-3">
          <Button type="submit" disabled={isPending}>
            {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Save
          </Button>
          <Button
            type="reset"
            variant="ghost"
            onClick={() => reset()}
            className="text-destructive"
          >
            Cancel
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
};
