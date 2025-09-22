import {
  Avatar,
  Button,
  Dialog,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import { X } from "lucide-react";

export const UserAvatar = () => {
  return (
    <div className="relative flex flex-1 flex-col items-center justify-center">
      <Typography color="default" className="font-bold">
        Change Profile
      </Typography>
      <Typography className="text-foreground mt-2">
        Change your profile picture from here
      </Typography>

      <Dialog>
        <Dialog.Trigger className="relative">
          <Avatar
            src="profile.jpg"
            alt="Profile Image"
            className="mx-auto mt-4 flex h-30 w-30 cursor-pointer"
          />
        </Dialog.Trigger>
        <Dialog.Overlay>
          <Dialog.Content className="w-auto max-w-fit">
            <Dialog.DismissTrigger
              as={IconButton}
              size="sm"
              variant="solid"
              color="secondary"
              className="absolute top-6 right-7"
              isCircular
            >
              <X />
            </Dialog.DismissTrigger>
            <img
              src="profile.jpg"
              alt="Profile Image"
              className="block max-h-[300px] max-w-[300px] rounded-lg md:max-h-[500px] md:max-w-[500px]"

              // className="block h-96 w-36"
            />
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog>
      <div className="mt-6 flex gap-4">
        <Button className="cursor-pointer">Upload</Button>
        <Button
          className="cursor-pointer"
          type="reset"
          color="error"
          variant="ghost"
        >
          Close
        </Button>
      </div>
      <Typography className="mt-4 text-center">
        Allowed JPG, GIF or PNG. Max size of 800K
      </Typography>
    </div>
  );
};
