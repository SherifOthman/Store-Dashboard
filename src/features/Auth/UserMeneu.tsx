import { Avatar } from "@radix-ui/react-avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogOut, User } from "lucide-react";
import { useLogout } from "./useLogout";
import { useNavigate } from "react-router-dom";
import type { User as UserApp } from "../../types/apiTypes";
import { AvatarImage } from "@/components/ui/avatar";

export const UserMenu = ({ user }: { user?: UserApp }) => {
  const navigate = useNavigate();
  const { logout } = useLogout();

  const logOut = async () => await logout();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="h-10 w-10 cursor-pointer">
          <AvatarImage
            src={user?.avatarUrl || "profile.jpg"}
            alt="Profile picture"
          />
        </Avatar>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => navigate("profile")}>
          <User className="mr-2 h-4 w-4" /> My Profile
        </DropdownMenuItem>
        <DropdownMenuItem className="text-destructive" onClick={logOut}>
          <LogOut className="mr-2 h-4 w-4" /> Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
