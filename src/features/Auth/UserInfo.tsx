import { Input, Typography } from "@material-tailwind/react";
import { useFormContext } from "react-hook-form";
import type { UserInfoFormType } from "./ChangeUserInfoForm";

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
      <Typography className="text-foreground mt-4">
        To change your personal detail, edit and save from here
      </Typography>
      <div>
        <Typography
          as="label"
          color="default"
          htmlFor="email"
          type="small"
          className="font-semibold"
        >
          Email
        </Typography>
        <Input
          className="mt-1"
          // defaultValue={getValues("email")}
          disabled
          {...register("email")}
        />
        <Typography
          color="error"
          type="small"
          className="mt-1 mb-2 block h-4 w-full"
        >
          {errors.email?.message}
        </Typography>
      </div>
      <div>
        <Typography
          as="label"
          color="default"
          htmlFor="name"
          type="small"
          className="font-semibold"
        >
          Your Name
        </Typography>
        <Input
          className="mt-1"
          // defaultValue={getValues("name")}
          {...register("name")}
        />
        <Typography
          color="error"
          type="small"
          className="mt-1 mb-2 block h-4 w-full"
        >
          {errors.name?.message}
        </Typography>
      </div>

      <div className="min-w-1/2 flex-1">
        <Typography
          as="label"
          color="default"
          htmlFor="phone"
          type="small"
          className="font-semibold"
        >
          Phone
        </Typography>
        <Input
          className="mt-1"
          // defaultValue={getValues("phone")}
          {...register("phone")}
        />
        <Typography
          color="error"
          type="small"
          className="mt-1 block h-4 w-full"
        >
          {errors.phone?.message}
        </Typography>
      </div>
    </div>
  );
};
