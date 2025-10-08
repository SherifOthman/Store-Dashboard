import { useRef, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

type UserAvatarProps = {
  avatarUrl: string;
  setPreview: React.Dispatch<React.SetStateAction<File | undefined>>;
};

export const UserAvatar = ({ avatarUrl, setPreview }: UserAvatarProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [imageError, setImageError] = useState("");
  const [open, setOpen] = useState(false);

  const handleUploadOnChange = () => {
    const file = inputRef.current?.files?.[0];
    if (!file) return;

    if (file.size > 2 * 1024 * 1024)
      setImageError("Image must be less or equal 2MB");
    else {
      setPreview(file);
      setImageError("");
    }
  };

  const handleUploadClick = () => inputRef.current?.click();

  return (
    <div className="flex flex-col items-center justify-center space-y-2">
      <h3 className="font-bold">Change Profile</h3>
      <p className="text-muted-foreground mb-4 text-center">
        Change your profile picture from here
      </p>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <img
            src={avatarUrl}
            alt="Profile"
            className="h-28 w-28 cursor-pointer rounded-full object-cover"
          />
        </DialogTrigger>

        <DialogContent className="max-w-md">
          <img
            src={avatarUrl}
            alt="Profile"
            className="w-full rounded-lg object-cover"
          />
        </DialogContent>
      </Dialog>

      <input
        type="file"
        accept="image/*"
        hidden
        ref={inputRef}
        onChange={handleUploadOnChange}
      />

      <div className="mt-3 flex gap-2">
        <Button onClick={handleUploadClick}>Upload</Button>
        <Button
          variant="outline"
          className="text-destructive"
          onClick={() => setPreview(undefined)}
        >
          Close
        </Button>
      </div>

      <p className="text-muted-foreground text-center text-sm">
        Allowed JPG, GIF or PNG. Max size of 2MB
      </p>
      {imageError && (
        <p className="text-destructive text-sm italic">{imageError}</p>
      )}
    </div>
  );
};
