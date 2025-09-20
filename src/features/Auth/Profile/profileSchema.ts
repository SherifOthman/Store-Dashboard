import z from "zod";

export const PprofileSchema = z
  .object({
    password: z.string(),
    newPasswprd: z.string().min(6, "Password is too short"),
    confirmPassword: z.string(),
    name: z.string().min(6, "Name is too short"),
    email: z.email(),
    pshone: z.string().min(11, "Phone number should be 11 digits"),
    profilePicture: z.instanceof(File, {
      error: "You should select an image",
    }),
  })
  .refine((schema) => schema.confirmPassword === schema.newPasswprd, {
    error: "New passwords are not matched",
  });

export type ProfileFormType = z.infer<typeof PprofileSchema>;
