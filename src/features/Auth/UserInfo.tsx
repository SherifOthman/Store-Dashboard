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
        label="First Name"
        error={errors.firstName?.message}
        {...register("firstName")}
      />

      <TextField
        label="Last Name"
        error={errors.lastName?.message}
        {...register("lastName")}
      />

      <TextField
        label="Email"
        error={errors.email?.message}
        {...register("email")}
        disabled
      />

      <TextField
        label="Phone"
        error={errors.phoneNumber?.message}
        {...register("phoneNumber")}
      />
    </div>
  );
};
