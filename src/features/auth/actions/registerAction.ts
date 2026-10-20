"use server";

import { redirect } from "next/navigation";
import { registerSchema } from "../schemas/registerSchema";

type ActionState = {
  error?: string | null;
  fieldErrors?: Record<string, string[] | undefined>;
} | null;

export async function registerAction(
  prevState: ActionState,
  formData: FormData,
): Promise<ActionState> {

  // 1. Hämta data från formuläret
  const rawData = {
    fullName: formData.get("fullName") as string,
    email: formData.get("email") as string,
    password: formData.get("password") as string,
    confirmPassword: formData.get("confirmPassword") as string,
  };

  // 2. Validering
  const validatedFields = registerSchema.safeParse(rawData);

  if (!validatedFields.success) {
    return {
      fieldErrors: validatedFields.error.flatten().fieldErrors,
    };
  }

  // 3. Hämta den validerade och typade datan
  const { email, password, fullName } = validatedFields.data;

  // 4. Skicka till backend
  try {
    const response = await fetch("https://localhost:7071/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password, fullName }),
    });

    if (!response.ok) {
      const errorData = await response.json();

      if (errorData.errors) {
        return {
          fieldErrors: errorData.errors,
        };
      }

      // Hantera generella fel
      return {
        error:
          errorData.message || errorData.title || "Registreringen misslyckades",
      };
    }
  } catch (error) {
    // Hantera oväntade fel
    return { error: "Kunde inte ansluta till servern." };
  }

  redirect("/onboarding");
}
