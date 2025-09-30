import {
  Avatar,
  Button,
  Dialog,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import { X } from "lucide-react";
import { useRef, useState } from "react";

type UserAvatarProps = {
  avatarUrl: string;
  setPreview: React.Dispatch<React.SetStateAction<File | undefined>>;
};

export const UserAvatar = ({ avatarUrl, setPreview }: UserAvatarProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [imageError, setImageError] = useState("");

  const handleUploadOnChange = () => {
    if (inputRef.current?.files) {
      if (inputRef.current.files[0].size > 2 * 1024 * 1024) {
        setImageError("Image must be less or equal 2MB");
      } else {
        setPreview(inputRef.current.files[0]);
        setImageError("");
      }
    }
  };

  const handleUploadClick = () => {
    const el = inputRef.current;
    el?.click();
  };

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
            src={avatarUrl}
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
              src={avatarUrl}
              alt="Profile Image"
              className="block max-h-[300px] max-w-[300px] rounded-lg md:max-h-[500px] md:max-w-[500px]"

              // className="block h-96 w-36"
            />
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog>
      <input
        className="file:bg-secondary file:text-secondary-foreground file:mr-2 file:rounded file:px-2 file:py-1"
        accept="Image/*"
        type="file"
        hidden
        onChange={handleUploadOnChange}
        ref={inputRef}
      />

      <div className="mt-6 flex gap-4">
        <Button
          className="cursor-pointer"
          // variant="outline"
          color="secondary"
          onClick={handleUploadClick}
        >
          Upload
        </Button>
        <Button
          className="cursor-pointer"
          // type="reset"
          color="error"
          variant="outline"
          onClick={() => setPreview(undefined)}
        >
          Close
        </Button>
      </div>
      <Typography className="mt-4 text-center">
        Allowed JPG, GIF or PNG. Max size of 2MB
      </Typography>
      <Typography color="error" className="italic">
        {imageError}
      </Typography>
    </div>
  );
};
