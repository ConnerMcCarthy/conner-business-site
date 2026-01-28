"use server";

import { sendContactEmail } from "../lib/email";

export async function submitContactForm(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  // Validate input
  if (!name || !email || !message) {
    return { success: false, error: "All fields are required" };
  }

  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { success: false, error: "Invalid email address" };
  }

  try {
    // Send email
    const emailSent = await sendContactEmail({ name, email, message });
    
    if (emailSent) {
      return { success: true };
    } else {
      // If email wasn't sent (e.g., no SMTP config), still return success
      // but log a warning (handled in email.ts)
      return { success: true };
    }
  } catch (error) {
    console.error("Error submitting contact form:", error);
    return { success: false, error: "Failed to send message. Please try again." };
  }
}
