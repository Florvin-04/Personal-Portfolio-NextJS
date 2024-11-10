"use client";

import { Input } from "@/components/ui/input";
import { sendEmail } from "../action";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useEffect, useRef, useState, useTransition } from "react";
import { toast } from "sonner";

const NODE_ENV = process.env.NEXT_PUBLIC_NODE_ENV;

export default function SendEmailForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isEmailSent, setIsEmailSent] = useState(true);
  const [isPending, startTransition] = useTransition();
  // Check for the emailSent cookie when the component mounts
  useEffect(() => {
    const cookies = document.cookie.split("; ");
    const emailSentCookie = cookies.find((cookie) =>
      cookie.startsWith("emailSent=")
    );
    if (!emailSentCookie) {
      setIsEmailSent(false); // Disable the button if the emailSent cookie is present
    }
  }, [isPending]);

  return (
    <form
      ref={formRef}
      action={async (formData) => {
        startTransition(async () => {
          const response = await sendEmail(formData);

          if (response.success) {
            toast.success(`${response.message}`, {
              description: "Thank you for contacting me!",
            });
            formRef.current?.reset();
            // Set a cookie indicating successful email submission, expires in 5 hours
            document.cookie = `emailSent=true; path=/; max-age=18000`; // 5 hours (18000 seconds)

            document.cookie = `emailSent=true; path=/; max-age=18000; ${
              NODE_ENV === "production"
                ? "SameSite=None; Secure"
                : "SameSite=Lax"
            }`;

            setIsEmailSent(true);
          } else {
            toast.error(response.error);
          }
        });
      }}
      className="space-y-3"
    >
      <div className="flex gap-3">
        <Input
          type="email"
          name="email"
          placeholder="Your Email Address (johndoe@example.com)"
          required
        />
        <Input
          type="text"
          name="name"
          placeholder="Your Name (John Doe)"
          required
        />
      </div>

      <Textarea
        required
        name="message"
        placeholder="Write your message here..."
      />

      <Button disabled={isPending || isEmailSent}>
        {isPending ? "Sending..." : "Send"}
      </Button>
    </form>
  );
}
