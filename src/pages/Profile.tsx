import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Input,
  Typography,
} from "@material-tailwind/react";
import { getAuth } from "../utils/Auth";
import { email } from "zod";

export const Profile = () => {
  return (
    <div className="flex flex-col flex-wrap gap-6 p-4 md:flex-row">
      <PrictureCard />
      <ChangePasswordCard />
      <PersonalDetails />
    </div>
  );
};

const PrictureCard = () => {
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
        <Avatar src="profile.jpg" className="h-30 w-30" />
        <div className="mt-3 flex space-x-4">
          <Button>Upload</Button>
          <Button variant="outline" color="error">
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

const ChangePasswordCard = () => {
  return (
    <Card className="min-w-[300px] flex-1 p-4">
      <CardHeader>
        <Typography color="default" className="font-bold">
          Change Password
        </Typography>
        <Typography className="mt-2">
          To change your password please confirm here
        </Typography>
      </CardHeader>
      <CardBody>
        <Typography
          as="label"
          color="default"
          htmlFor="currentPassword"
          type="small"
          className="font-semibold"
        >
          Current Password
        </Typography>
        <Input placeholder="••••••••••••••" type="password" className="mt-1" />
        <Typography
          color="error"
          type="small"
          className="mt-1 mb-2 block h-4 w-full"
        >
          {/* ErrorMessage */}
        </Typography>

        <Typography
          as="label"
          color="default"
          htmlFor="currentPassword"
          type="small"
          className="mb-5 font-semibold"
        >
          New Password
        </Typography>
        <Input placeholder="••••••••••••••" type="password" className="mt-1" />
        <Typography
          color="error"
          type="small"
          className="mb-2 block h-4 w-full"
        >
          {/* ErrorMessage */}
        </Typography>

        <Typography
          as="label"
          color="default"
          htmlFor="currentPassword"
          type="small"
          className="mb-5 font-semibold"
        >
          Confirm Password
        </Typography>
        <Input placeholder="••••••••••••••" type="password" className="mt-1" />
        <Typography
          color="error"
          type="small"
          className="mt-1 block h-4 w-full"
        >
          {/* Error message */}
        </Typography>
      </CardBody>
    </Card>
  );
};

const PersonalDetails = () => {
  const user = getAuth()?.user;
  return (
    <Card className="p-4">
      <CardHeader>
        <Typography color="default" className="font-bold">
          Personal Details
        </Typography>
        <Typography className="text-foreground mt-4">
          To change your personal detail, edit and save from here
        </Typography>
      </CardHeader>
      <CardBody className="grid grid-cols-1 gap-x-5 md:grid-cols-2">
        <div>
          <Typography
            as="label"
            color="default"
            htmlFor="currentPassword"
            type="small"
            className="font-semibold"
          >
            Your Name
          </Typography>
          <Input
            className="mt-1"
            value={user?.firstName + " " + user?.lastName}
          />
          <Typography
            color="error"
            type="small"
            className="mt-1 mb-2 block h-4 w-full"
          >
            {/* ErrorMessage */}
          </Typography>
        </div>
        <div>
          <Typography
            as="label"
            color="default"
            htmlFor="currentPassword"
            type="small"
            className="font-semibold"
          >
            Email
          </Typography>
          <Input className="mt-1" value={user?.email} />
          <Typography
            color="error"
            type="small"
            className="mt-1 mb-2 block h-4 w-full"
          >
            {/* ErrorMessage */}
          </Typography>
        </div>
        <div className="min-w-1/2 flex-1">
          <Typography
            as="label"
            color="default"
            htmlFor="currentPassword"
            type="small"
            className="font-semibold"
          >
            Phone
          </Typography>
          <Input className="mt-1" value={user?.phoneNumber} />
          <Typography
            color="error"
            type="small"
            className="mt-1 mb-2 block h-4 w-full"
          >
            {/* ErrorMessage */}
          </Typography>
        </div>
      </CardBody>
      <CardFooter className="flex items-center justify-end gap-2">
        <Button>Save</Button>
        <Button variant="ghost" color="error">
          Cancel
        </Button>
      </CardFooter>
    </Card>
  );
};
