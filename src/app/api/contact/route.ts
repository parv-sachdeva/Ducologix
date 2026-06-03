import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const body = await request.json();
    const { name, email, company, service, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const to = process.env.CONTACT_TO_EMAIL ?? "hello@ducologix.com";
    const from = process.env.CONTACT_FROM_EMAIL ?? "onboarding@resend.dev";

    await resend.emails.send({
      from,
      to,
      reply_to: email,
      subject: `New enquiry from ${name}${company ? ` at ${company}` : ""}`,
      html: `
        <div style="font-family: Inter, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #7c3aed, #2dd4bf); height: 4px; border-radius: 4px 4px 0 0;"></div>
          <div style="background: #f8fafc; padding: 32px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 8px 8px;">
            <h2 style="margin: 0 0 24px; color: #0f172a; font-size: 20px;">New Contact Form Submission</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px 0; color: #64748b; width: 120px;">Name</td><td style="padding: 8px 0; color: #0f172a; font-weight: 500;">${name}</td></tr>
              <tr><td style="padding: 8px 0; color: #64748b;">Email</td><td style="padding: 8px 0; color: #0f172a;"><a href="mailto:${email}" style="color: #7c3aed;">${email}</a></td></tr>
              ${company ? `<tr><td style="padding: 8px 0; color: #64748b;">Company</td><td style="padding: 8px 0; color: #0f172a;">${company}</td></tr>` : ""}
              ${service ? `<tr><td style="padding: 8px 0; color: #64748b;">Service</td><td style="padding: 8px 0; color: #0f172a;">${service}</td></tr>` : ""}
            </table>
            <div style="margin-top: 24px; padding: 16px; background: white; border: 1px solid #e2e8f0; border-radius: 8px;">
              <p style="margin: 0; color: #64748b; font-size: 13px; margin-bottom: 8px;">Message</p>
              <p style="margin: 0; color: #0f172a; white-space: pre-wrap;">${message}</p>
            </div>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
