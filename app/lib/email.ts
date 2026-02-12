import nodemailer from "nodemailer";

export async function sendContactEmail({
  name,
  email,
  message,
}: {
  name: string;
  email: string;
  message: string;
}) {
  // Configure transporter using environment variables
  // For Gmail, you can use an App Password: https://support.google.com/accounts/answer/185833
  // For other providers, adjust the host and port accordingly
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port: parseInt(process.env.SMTP_PORT || "587"),
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  // If no SMTP credentials are configured, log and return false
  if (!process.env.SMTP_USER || !process.env.SMTP_PASSWORD) {
    console.warn(
      "SMTP credentials not configured. Set SMTP_USER and SMTP_PASSWORD environment variables."
    );
    // In development, you might want to still log the email
    console.log("Would send email:", {
      to: process.env.CONTACT_EMAIL || "conner.mccarthy.97@gmail.com",
      subject: `Contact Form: ${name}`,
      text: `From: ${name} (${email})\n\n${message}`,
    });
    return false;
  }

  try {
    const info = await transporter.sendMail({
      from: `"${name}" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL || "conner.mccarthy.97@gmail.com",
      replyTo: email,
      subject: `Contact Form: ${name}`,
      text: `From: ${name} (${email})\n\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1e40af;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Message:</strong></p>
          <div style="background-color: #f3f4f6; padding: 15px; border-radius: 5px; margin-top: 10px;">
            <p style="white-space: pre-wrap; margin: 0;">${message}</p>
          </div>
        </div>
      `,
    });

    console.log("Email sent:", info.messageId);
    return true;
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
}

export async function sendIntakeLeadEmail({
  leadSummary,
  lead,
}: {
  leadSummary: string;
  lead: Record<string, unknown>;
}) {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port: parseInt(process.env.SMTP_PORT || "587"),
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  const to = process.env.CONTACT_EMAIL || "conner.mccarthy.97@gmail.com";

  if (!process.env.SMTP_USER || !process.env.SMTP_PASSWORD) {
    console.warn("SMTP credentials not configured. Intake lead email skipped.");
    console.log("Would send intake lead email:", { to, leadSummary, lead });
    return false;
  }

  const jsonBlock = JSON.stringify(lead, null, 2);
  const escapedJson = jsonBlock.replace(/</g, "&lt;").replace(/>/g, "&gt;");

  try {
    const info = await transporter.sendMail({
      from: `"Website Intake" <${process.env.SMTP_USER}>`,
      to,
      subject: `AI Smart Intake Lead: ${(lead.businessName as string) || "New lead"}`,
      text: `AI Smart Intake – Lead Summary\n\n${leadSummary}\n\n--- Lead data (JSON) ---\n${jsonBlock}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0f172a;">AI Smart Intake – New Lead</h2>
          <p><strong>Summary</strong></p>
          <div style="background-color: #f1f5f9; padding: 15px; border-radius: 5px; margin: 10px 0;">
            <p style="white-space: pre-wrap; margin: 0;">${leadSummary || "(No summary)"}</p>
          </div>
          <p><strong>Lead data (JSON)</strong></p>
          <pre style="background-color: #e2e8f0; padding: 15px; border-radius: 5px; overflow-x: auto; font-size: 12px;">${escapedJson}</pre>
        </div>
      `,
    });
    console.log("Intake lead email sent:", info.messageId);
    return true;
  } catch (error) {
    console.error("Error sending intake lead email:", error);
    throw error;
  }
}
