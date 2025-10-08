import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useEffect, useState } from "react";
import { useCurrentUser } from "./useCurrentUser";
import { useUpdateCurrentUser } from "./useUpdateCurrentUser";
import { setBackendErrors } from "../../utils/helpers";
import { UserInfo } from "./UserInfo";
import { UserAvatar } from "./UserAvatar";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const UserInfoSchema = z.object({
  firstName: z.string().min(3, "Name must be at least 3 characters long"),
  lastName: z.string().min(3, "Name must be at least 3 characters long"),
  email: z.string().email("Please enter a valid email address"),
  phoneNumber: z
    .string()
    .regex(/^\d{11}$/, "Phone number must be exactly 11 digits"),
});

export type UserInfoFormType = z.infer<typeof UserInfoSchema>;

export const ChangeUserInfoForm = () => {
  const { currentUser, isLoading } = useCurrentUser();
  const { isPending, error, updateCurrentUser } = useUpdateCurrentUser();
  const [preview, setPreview] = useState<File>();

  const methods = useForm<UserInfoFormType>({
    resolver: zodResolver(UserInfoSchema),
  });

  const { setError, handleSubmit, reset } = methods;

  useEffect(() => {
    if (currentUser)
      reset({
        firstName: currentUser.firstName,
        lastName: currentUser.lastName,
        email: currentUser.email,
        phoneNumber: currentUser.phoneNumber,
      });
  }, [currentUser, reset]);

  useEffect(() => {
    if (error) setBackendErrors<UserInfoFormType>(setError, error.errors);
  }, [error, setError]);

  const onSubmit = async (data: UserInfoFormType) => {
    await updateCurrentUser({ ...data, imageFile: preview });
  };

  if (isLoading)
    return (
      <div className="flex justify-center p-8">
        <Loader2 className="h-6 w-6 animate-spin" />
      </div>
    );

  return (
    <Card className="relative mx-auto mt-5 max-w-3xl">
      <Badge
        variant="destructive"
        className="absolute top-6 left-1 -rotate-45 text-base"
      >
        {currentUser?.role}
      </Badge>
      <CardContent className="mt-5 flex flex-col gap-6 md:flex-row">
        <UserAvatar
          avatarUrl={
            (preview && URL.createObjectURL(preview)) ||
            currentUser?.avatarUrl ||
            "profile.jpg"
          }
          setPreview={setPreview}
        />

        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)} className="flex-1 space-y-4">
            <UserInfo />

            <div className="flex justify-end gap-2">
              <Button type="submit" disabled={isPending}>
                {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Save
              </Button>
              <Button
                type="button"
                variant="ghost"
                onClick={() => reset()}
                className="text-destructive"
              >
                Cancel
              </Button>
            </div>
          </form>
        </FormProvider>
      </CardContent>
    </Card>
  );
};
