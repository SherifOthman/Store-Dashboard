import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"; // adjust import to your shadcn path
import { ChangeUserInfoForm } from "../features/Auth/ChangeUserInfoForm";
import { ChangePasswordForm } from "../features/Auth/ChangePasswordForm";
import { CircleUser, KeyRound } from "lucide-react";

export const Profile = () => {
  return (
    <Tabs defaultValue="info" className="w-full">
      <TabsList className="bg-muted mx-auto flex h-12 w-full rounded-lg md:w-1/2">
        <TabsTrigger
          className="flex h-9 w-full items-center justify-center gap-2"
          value="info"
        >
          <CircleUser className="h-5 w-5" />
          <span>Profile</span>
        </TabsTrigger>

        <TabsTrigger
          className="flex h-9 w-full items-center justify-center gap-2"
          value="password"
        >
          <KeyRound className="h-5 w-5" />
          <span>Change Password</span>
        </TabsTrigger>
      </TabsList>

      <TabsContent value="info" className="mt-4 w-full">
        <ChangeUserInfoForm />
      </TabsContent>

      <TabsContent value="password" className="mt-4 w-full">
        <ChangePasswordForm />
      </TabsContent>
    </Tabs>
  );
};
