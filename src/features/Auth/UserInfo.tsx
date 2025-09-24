import { Typography } from "@material-tailwind/react";
import { useFormContext } from "react-hook-form";
import type { UserInfoFormType } from "./ChangeUserInfoForm";
import { TextField } from "../../components/TextField";

export const UserInfo = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<UserInfoFormType>();

  return (
    <div className="flex-1">
      <Typography color="default" className="font-bold">
        Personal Details
      </Typography>
      <Typography className="text-foreground mt-2 mb-4">
        To change your personal detail, edit and save from here
      </Typography>

      <TextField
        label="Email"
        error={errors.email?.message}
        {...register("email")}
      />

      <TextField
        label="Your name"
        error={errors.name?.message}
        {...register("name")}
      />

      <TextField
        label="Phone"
        error={errors.phone?.message}
        {...register("phone")}
      />
    </div>
  );
};
