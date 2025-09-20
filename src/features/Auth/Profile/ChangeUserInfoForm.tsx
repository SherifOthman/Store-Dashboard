import { ChangePasswordCard } from "./ChangePasswordCard";
import { PersonalDetails } from "./PersonalDetails";
import { PrictureCard } from "./PictureCard";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { PprofileSchema, type ProfileFormType } from "./profileSchema";

export const ChangeUserInfoForm = () => {
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors, isLoading },
  // } = useForm<ProfileFormType>({
  //   resolver: zodResolver(PprofileSchema),
  // });

  const methods = useForm<ProfileFormType>({
    resolver: zodResolver(PprofileSchema),
  });

  const onSubmit = (data: ProfileFormType) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="flex flex-col flex-wrap gap-6 p-4 md:flex-row"
      >
        <PrictureCard />
        <ChangePasswordCard />
        <PersonalDetails />
      </form>
    </FormProvider>
  );
};
