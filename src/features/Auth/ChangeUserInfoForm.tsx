import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { UserInfo } from "./UserInfo";
import { UserAvatar } from "./UserAvatar";
import { Button, Card, CardBody, CardFooter } from "@material-tailwind/react";
import { useCurrentUser } from "./useCurrentUser";
import { Loader } from "../../components/Loader";
import { useEffect } from "react";

const UserInfoSchema = z.object({
  name: z.string().min(6, "Name must be at least 6 characters long"),
  email: z.email("Please enter a valid email address"),
  phone: z.string().regex(/^\d{11}$/, "Phone number must be exactly 11 digits"),
  profilePicture: z.instanceof(File).optional(),
});

export type UserInfoFormType = z.infer<typeof UserInfoSchema>;

export const ChangeUserInfoForm = () => {
  const { currentUser, isLoading, error } = useCurrentUser();

  const methods = useForm<UserInfoFormType>({
    resolver: zodResolver(UserInfoSchema),
  });

  useEffect(() => {
    if (currentUser)
      methods.reset({
        name: currentUser.firstName + " " + currentUser.lastName,
        email: currentUser.email,
        phone: currentUser.phoneNumber,
        profilePicture: new File([], ""),
      });
  }, [currentUser, methods]);

  const onSubmit = async (data: UserInfoFormType) => {
    console.log(data);
  };

  if (isLoading) return <Loader />;

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Card className="mx-auto mt-5 w-3/4">
          <CardBody className="flex flex-col gap-6 p-4 md:flex-row">
            <UserAvatar />
            <UserInfo />
          </CardBody>
          <CardFooter className="flex w-full justify-end gap-x-3">
            <Button className="cursor-pointer">Save</Button>
            <Button className="cursor-pointer" variant="ghost" color="error">
              Cancel
            </Button>
          </CardFooter>
        </Card>
      </form>
    </FormProvider>
  );
};
