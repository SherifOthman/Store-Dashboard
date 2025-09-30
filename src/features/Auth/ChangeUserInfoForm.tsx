import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { UserInfo } from "./UserInfo";
import { UserAvatar } from "./UserAvatar";
import { Button, Card, CardBody, Typography } from "@material-tailwind/react";
import { useCurrentUser } from "./useCurrentUser";
import { Loader } from "../../components/Loader";
import { useEffect, useState } from "react";
import { useUpdateCurrentUser } from "./useUpdateCurrentUser";
import { setBackendErrors } from "../../utils/helpers";

const UserInfoSchema = z.object({
  firstName: z.string().min(3, "Name must be at least 3 characters long"),
  lastName: z.string().min(3, "Name must be at least 3 characters long"),
  email: z.email("Please enter a valid email address"),
  phoneNumber: z
    .string()
    .regex(/^\d{11}$/, "Phone number must be exactly 11 digits"),
});

export type UserInfoFormType = z.infer<typeof UserInfoSchema>;

export const ChangeUserInfoForm = () => {
  const { currentUser, isLoading } = useCurrentUser();
  const { isPending, error, updateCurrentUser } = useUpdateCurrentUser();
  const [preview, setPreview] = useState<File | undefined>(undefined);

  const methods = useForm<UserInfoFormType>({
    resolver: zodResolver(UserInfoSchema),
  });

  const { setError, handleSubmit, reset } = methods;

  useEffect(() => {
    if (currentUser)
      methods.reset({
        firstName: currentUser.firstName,
        lastName: currentUser.lastName,
        email: currentUser.email,
        phoneNumber: currentUser.phoneNumber,
      });
  }, [currentUser, methods]);

  useEffect(() => {
    if (error) setBackendErrors<UserInfoFormType>(setError, error?.errors);
  }, [error, setError]);

  const onSubmit = async (data: UserInfoFormType) => {
    await updateCurrentUser({ ...data, imageFile: preview });
  };

  if (isLoading) return <Loader />;

  return (
    <Card className="relative mx-auto mt-5 w-3/4">
      <CardBody className="flex flex-col gap-6 p-4 md:flex-row">
        <Typography
          className="bg-surface absolute top-5 -left-9 w-36 -rotate-45 rounded text-center font-bold"
          color="info"
        >
          {currentUser?.role}
        </Typography>
        <UserAvatar
          avatarUrl={
            (preview && URL.createObjectURL(preview)) ||
            currentUser?.avatarUrl ||
            "profile.jpg"
          }
          setPreview={setPreview}
        />
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <UserInfo />
            <div className="flex justify-end">
              <Button
                className="cursor-pointer"
                disabled={isPending}
                type="submit"
              >
                Save
              </Button>
              <Button
                className="cursor-pointer"
                variant="ghost"
                color="error"
                type="button"
                onClick={() => reset()}
              >
                Cancel
              </Button>
            </div>
          </form>
        </FormProvider>
      </CardBody>
    </Card>
  );
};
