import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Input,
  Typography,
} from "@material-tailwind/react";

export const PersonalDetails = () => {
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
          <Input className="mt-1" defaultValue={"Hamada Mido"} />
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
          <Input className="mt-1" defaultValue={"Test@gmail.com"} />
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
          <Input className="mt-1" defaultValue={"03424342"} />
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
