import { useFormContext } from "react-hook-form";
import type { UserInfoFormType } from "./ChangeUserInfoForm";
import { TextField } from "@/components/TextField";

export const UserInfo = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<UserInfoFormType>();

  return (
    <div className="flex-1 space-y-4">
      <h3 className="text-foreground text-lg font-bold">Personal Details</h3>
      <p className="text-muted-foreground">
        To change your personal detail, edit and save from here
      </p>

      <TextField
        label="First Name"
        {...register("firstName")}
        error={errors.firstName?.message}
      />
      <TextField
        label="Last Name"
        {...register("lastName")}
        error={errors.lastName?.message}
      />
      <TextField
        label="Email"
        {...register("email")}
        error={errors.email?.message}
        disabled
      />
      <TextField
        label="Phone"
        {...register("phoneNumber")}
        error={errors.phoneNumber?.message}
      />
    </div>
  );
};
