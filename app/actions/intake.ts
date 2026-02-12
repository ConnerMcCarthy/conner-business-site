"use server";

import { sendIntakeLeadEmail } from "../lib/email";

export async function submitIntakeLead(leadSummary: string, lead: Record<string, unknown>) {
  try {
    const sent = await sendIntakeLeadEmail({
      leadSummary: leadSummary || "",
      lead: lead || {},
    });
    if (sent) return { success: true };
    return { success: true }; // same as contact: no SMTP still "succeeds" (logged)
  } catch (error) {
    console.error("Error submitting intake lead email:", error);
    return { success: false, error: "Failed to send lead by email. Please try again or contact directly." };
  }
}
