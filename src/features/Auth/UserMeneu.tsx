import { Avatar, Menu, MenuTrigger } from "@material-tailwind/react";
import { LogOut, Settings, User } from "lucide-react";
import { logout } from "../../services/authService";
import { useNavigate } from "react-router-dom";

export const UserMenue = () => {
  const navigate = useNavigate();

  const logOut = async () => {
    if (await logout()) navigate("login");
  };

  return (
    <Menu>
      <MenuTrigger
        as={Avatar}
        src="profile.jpg"
        alt="Profile picture"
        className="m-0 h-10 w-10 p-0"
      />
      <Menu.Content>
        <Menu.Item onClick={() => navigate("profile")}>
          <User className="mr-2 h-[18px] w-[18px]" /> My Profile
        </Menu.Item>
        <Menu.Item>
          <Settings className="mr-2 h-[18px] w-[18px]" /> Edit Profile
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
