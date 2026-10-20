"use client";
import { useActionState } from "react";

interface FormWrapperProps {
  action: (prevState: any, formData: FormData) => Promise<any>;
  children: React.ReactNode;
  submitText: string;
}

export function FormWrapper({
  action,
  children,
  submitText,
}: FormWrapperProps) {
  const [state, formAction, isPending] = useActionState(action, null);

  return (
    <form action={formAction} className="space-y-5">
      {state?.error && (
        <div className="bg-red-50 text-red-600 p-3 rounded-xl text-sm">
          {state.error}
        </div>
      )}

      {children}

      <button
        type="submit"
        disabled={isPending}
        className="btn btn-primary w-full py-4"
      >
        {isPending ? "Skickar..." : submitText}
      </button>
    </form>
  );
}
