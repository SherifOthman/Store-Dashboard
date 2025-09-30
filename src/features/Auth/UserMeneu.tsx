import { Avatar, Menu, MenuTrigger } from "@material-tailwind/react";
import { LogOut, User } from "lucide-react";
import { useLogout } from "./useLogout";
import { useNavigate } from "react-router-dom";
import type { User as UserApp } from "../../types/apiTypes";

export const UserMenue = ({ user }: { user?: UserApp }) => {
  const navigate = useNavigate();
  const { logout } = useLogout();

  const logOut = async () => {
    await logout();
  };

  return (
    <Menu>
      <MenuTrigger
        as={Avatar}
        src={user?.avatarUrl || "profile.jpg"}
        alt="Profile picture"
        className="m-0 h-10 w-10 cursor-pointer p-0"
      />
      <Menu.Content>
        <Menu.Item onClick={() => navigate("profile")}>
          <User className="mr-2 h-[18px] w-[18px]" /> My Profile
        </Menu.Item>
        <hr className="border-surface -mx-1 !my-1" />
        <Menu.Item
          onClick={logOut}
          className="text-error hover:bg-error/10 hover:text-error focus:bg-error/10 focus:text-error dark:hover:text-error dark:focus:text-error"
        >
          <LogOut className="mr-2 h-[18px] w-[18px]" />
          Logout
        </Menu.Item>
      </Menu.Content>
    </Menu>
  );
};
