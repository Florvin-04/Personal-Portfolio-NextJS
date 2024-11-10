"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
  const email = formData.get("email");
  const name = formData.get("name");
  const message = formData.get("message");

  console.log(email, message);

  if (!email || !message) {
    return { error: "Email and message are required" };
  }

  await new Promise((resolve) => setTimeout(resolve, 3000));

  try {
    await resend.emails.send({
      from: "Portfolio Form <onboarding@resend.dev>",
      to: "bayaborda.f@gmail.com",
      subject: "New message from portfolio",
      replyTo: email as string,
      text: `
      Name: ${name}
      Email: ${email}

      Message: ${message}
      
      `,
    });

    return { success: true, message: "Email sent!" };
  } catch (error) {
    return { error: "Failed to send email" };
  }
}
