import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import { useRef, useState } from "react";

export const PrictureCard = () => {
  const fileEl = useRef<HTMLInputElement | null>(null);
  const [selectedImage, setSelectedImage] = useState<string>("profile.jpg");

  const onUploadClick = () => {
    fileEl.current?.click();
  };

  const onFileChange = () => {
    const file = fileEl.current?.files?.[0];
    console.log(file);
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  const onReset = () => {
    setSelectedImage("profile.jpg");
    if (fileEl.current) fileEl.current.value = "";
  };

  return (
    <Card className="min-w-[300px] flex-1 p-4">
      <CardHeader>
        <Typography color="default" className="font-bold">
          Change Profile
        </Typography>
        <Typography className="text-foreground mt-2">
          Change your profile picture from here
        </Typography>
      </CardHeader>
      <CardBody className="mt-3 flex flex-col items-center gap-4">
        <Avatar src={selectedImage} className="h-30 w-30" />
        <div className="mt-3 flex space-x-4">
          <Button onClick={onUploadClick}>
            Upload
            <input
              ref={fileEl}
              onChange={onFileChange}
              // multiple
              type="file"
              className="hidden"
              accept=".jpg, .png, .jpeg"
            />
          </Button>
          <Button variant="outline" color="error" onClick={onReset}>
            Reset
          </Button>
        </div>
      </CardBody>
      <CardFooter>
        <Typography className="mt-4 text-center">
          Allowed JPG, GIF or PNG. Max size of 800K
        </Typography>
      </CardFooter>
    </Card>
  );
};
