import {
  Card,
  CardBody,
  CardHeader,
  Input,
  Typography,
} from "@material-tailwind/react";

export const ChangePasswordCard = () => {
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
