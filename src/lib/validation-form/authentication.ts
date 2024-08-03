import { z } from "zod";

export const loginFormSchema = z.object({
  email: z.string().min(1, "This field is required"),
  password: z.string().min(1, "This field is required"),
});

export const signUpFormSchema = z
  .object({
    title: z.string().min(1, "This field is required"),
    firstName: z
      .string()
      .min(1, "This field is required")
      .min(3, "Too Short!")
      .max(10, "Too Long!"),
    lastName: z
      .string()
      .min(1, "This field is required")
      .min(3, "Too Short!")
      .max(10, "Too Long!"),
    email: z.string().min(1, "This field is required").email("Invalid email"),
    password: z
      .string()
      .min(1, "This field is required")
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/,
        "Min 1 uppercase letter, Min 1 lowercase letter, Min 1 special character, Min 8 characters!",
      ),
    confirmPassword: z.string().min(1, "This field is required"),
    acceptTerms: z
      .boolean()
      .refine((val) => val === true, "You must accept terms"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password should match",
    path: ["confirmPassword"],
  });
