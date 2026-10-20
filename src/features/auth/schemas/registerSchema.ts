import { z } from "zod";

export const registerSchema = z
  .object({
    fullName: z
      .string()
      .min(2, { message: "Namnet måste vara minst 2 tecken." })
      .max(50, { message: "Namnet får vara max 50 tecken." }),

    email: z
      .string()
      .min(1, { message: "E-post krävs." })
      .email({ message: "Ange en giltig e-postadress." }),

    password: z
      .string()
      .min(8, { message: "Lösenordet måste vara minst 8 tecken." }),

    confirmPassword: z.string().min(8, { message: "Bekräfta ditt lösenord." }),
  })
  // .refine - jämför två fält med varandra
  .refine((data) => data.password === data.confirmPassword, {
    message: "Lösenorden matchar inte.",
    path: ["confirmPassword"],
  });
