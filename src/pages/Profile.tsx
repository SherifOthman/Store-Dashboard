import { Tabs } from "@material-tailwind/react";
import { ChangeUserInfoForm } from "../features/Auth/ChangeUserInfoForm";
import { ChangePasswordForm } from "../features/Auth/ChangePasswordForm";
import { CircleUser, KeyRound } from "lucide-react";

export const Profile = () => {
  return (
    <Tabs defaultValue="info">
      <Tabs.List className="mx-auto w-1/2">
        <Tabs.Trigger className="w-full" value="info">
          <CircleUser className="mr-2 h-5 w-5" />
          Profile
        </Tabs.Trigger>
        <Tabs.Trigger className="w-full" value="password">
          <KeyRound className="mr-2 h-5 w-5" />
          Change Password
        </Tabs.Trigger>
        <Tabs.TriggerIndicator />
      </Tabs.List>
      <Tabs.Panel value="info">
        <ChangeUserInfoForm />
      </Tabs.Panel>
      <Tabs.Panel value="password">
        <ChangePasswordForm />
      </Tabs.Panel>
    </Tabs>
  );
};
