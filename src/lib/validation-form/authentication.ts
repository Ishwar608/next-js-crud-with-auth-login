import { z } from "zod";

export const loginFormSchema = z.object({
  email: z.string().min(1, "This field is required"),
  password: z.string().min(1, "This field is required"),
});

export const signUpFormSchema = z.object({
  email: z.string().min(1, "This field is required"),
  password: z.string().min(1, "This field is required"),
});
