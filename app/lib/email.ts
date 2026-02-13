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

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function formatLeadForEmail(lead: Record<string, unknown>): { html: string; text: string } {
  const textLines: string[] = [];
  const rows: string[] = [];

  const formatLabel = (key: string): string =>
    key.replace(/([A-Z])/g, " $1").replace(/^./, (c) => c.toUpperCase()).trim();

  const formatValue = (v: unknown): string => {
    if (v == null || v === "") return "—";
    if (Array.isArray(v)) return v.length ? v.join(", ") : "—";
    if (typeof v === "object") return JSON.stringify(v);
    return String(v);
  };

  const formatValueHtml = (v: unknown): string => {
    if (v == null || v === "") return "<em>—</em>";
    if (Array.isArray(v)) {
      if (!v.length) return "<em>—</em>";
      return "<ul style=\"margin: 0; padding-left: 18px;\">" + v.map((i) => `<li>${escapeHtml(String(i))}</li>`).join("") + "</ul>";
    }
    if (typeof v === "object") {
      const obj = v as Record<string, unknown>;
      const inner = Object.entries(obj)
        .map(([k, val]) => `<tr><td style="padding: 4px 8px 4px 0; color: #64748b; font-size: 12px;">${escapeHtml(formatLabel(k))}</td><td style="padding: 4px 0;">${formatValueHtml(val)}</td></tr>`)
        .join("");
      return `<table style="width: 100%; font-size: 13px; border-collapse: collapse;">${inner}</table>`;
    }
    return escapeHtml(String(v));
  };

  for (const [key, value] of Object.entries(lead)) {
    if (value === undefined) continue;
    const label = formatLabel(key);
    if (key === "pricing_estimate" && value && typeof value === "object") {
      const est = value as Record<string, unknown>;
      const range = [est.monthlyLow, est.monthlyHigh].every((n) => typeof n === "number")
        ? `$${est.monthlyLow}–$${est.monthlyHigh}/mo`
        : "—";
      textLines.push(`Pricing estimate – Tier: ${est.suggestedTier ?? "—"}, Est. pages: ${est.estimatedPages ?? "—"}, Range: ${range}`);
      if (Array.isArray(est.rationale) && est.rationale.length) textLines.push(`  Rationale: ${est.rationale.join(" ")}`);
    } else {
      textLines.push(`${label}: ${formatValue(value)}`);
    }

    if (key === "pricing_estimate" && value && typeof value === "object") {
      rows.push(
        `<tr><td colspan="2" style="padding: 12px 0 4px; border-top: 1px solid #e2e8f0; font-weight: 600; color: #0f172a;">Pricing estimate</td></tr>`,
      );
      const est = value as Record<string, unknown>;
      const tier = est.suggestedTier ?? "—";
      const pages = est.estimatedPages ?? "—";
      const range = [est.monthlyLow, est.monthlyHigh].every((n) => typeof n === "number")
        ? `$${est.monthlyLow}–$${est.monthlyHigh}/mo`
        : "—";
      const rationale = Array.isArray(est.rationale) ? est.rationale.join(" ") : String(est.rationale ?? "—");
      rows.push(
        `<tr><td style="padding: 4px 12px 4px 0; color: #64748b; vertical-align: top; width: 140px;">Tier</td><td style="padding: 4px 0;">${escapeHtml(String(tier))}</td></tr>`,
        `<tr><td style="padding: 4px 12px 4px 0; color: #64748b;">Est. pages</td><td style="padding: 4px 0;">${escapeHtml(String(pages))}</td></tr>`,
        `<tr><td style="padding: 4px 12px 4px 0; color: #64748b;">Monthly range</td><td style="padding: 4px 0;">${escapeHtml(String(range))}</td></tr>`,
        `<tr><td style="padding: 4px 12px 4px 0; color: #64748b;">Rationale</td><td style="padding: 4px 0;">${escapeHtml(rationale)}</td></tr>`,
      );
    } else {
      rows.push(
        `<tr><td style="padding: 6px 12px 6px 0; color: #64748b; vertical-align: top; width: 140px;">${escapeHtml(label)}</td><td style="padding: 6px 0;">${formatValueHtml(value)}</td></tr>`,
      );
    }
  }

  const tableHtml =
    rows.length > 0
      ? `<table style="width: 100%; font-size: 14px; border-collapse: collapse;">${rows.join("")}</table>`
      : "<p><em>No lead data</em></p>";

  return {
    html: tableHtml,
    text: textLines.join("\n"),
  };
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

  const { html: leadTableHtml, text: leadText } = formatLeadForEmail(lead);

  const summaryEscaped = escapeHtml(leadSummary || "(No summary)").replace(/\n/g, "<br>");

  try {
    const info = await transporter.sendMail({
      from: `"Website Intake" <${process.env.SMTP_USER}>`,
      to,
      subject: `Smart Intake Lead: ${(lead.businessName as string) || "New lead"}`,
      text: `Smart Intake – Lead Summary\n\n${leadSummary || "(No summary)"}\n\n--- Lead data ---\n${leadText}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0f172a;">AI Smart Intake – New Lead</h2>
          <p><strong>Summary</strong></p>
          <div style="background-color: #f1f5f9; padding: 15px; border-radius: 6px; margin: 10px 0;">
            <p style="white-space: pre-wrap; margin: 0; line-height: 1.5;">${summaryEscaped}</p>
          </div>
          <p style="margin-top: 20px;"><strong>Lead data</strong></p>
          <div style="background-color: #f8fafc; padding: 16px; border-radius: 6px; border: 1px solid #e2e8f0;">
            ${leadTableHtml}
          </div>
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
