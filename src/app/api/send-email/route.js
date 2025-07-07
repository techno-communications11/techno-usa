import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    // Parse request body
    const { name, email, subject, message } = await request.json();

    // Validate input
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Send email with Resend
    const { data, error } = await resend.emails.send({
      from: "ticketing@techno-communications.com", // Must be a verified domain with Resend
      to: ["potharajutharunrana@gmail.com"], // Replace with your recipient email
      replyTo: email,
      subject: `Techno Communications LLC: ${subject}`,
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Techno Communications LLC</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: Arial, Helvetica, sans-serif; background-color: #f4f4f9; color: #333333;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: 20px auto; background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);">
            <tr>
              <td style="padding: 20px; text-align: center; background: linear-gradient(to right, #1a73e8, #6b21a8); border-radius: 8px 8px 0 0;">
                <img src="https://internal.techno-communications.com/logoT.webp" alt="Techno Communications Logo" style="max-width: 400px; height: auto; display: block; margin: 0 auto;" />
              </td>
            </tr>
            <tr>
              <td style="padding: 20px;">
                <p style="font-size: 16px; line-height: 1.5; margin: 0 0 20px;">
                  Dear Techno Communications Team,
                </p>
                <p style="font-size: 16px; line-height: 1.5; margin: 0 0 20px;">
                  You have received a new inquiry through the contact form. Please find the details below:
                </p>
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border: 1px solid #e5e7eb; border-radius: 4px;">
                  <tr><td style="padding: 12px; font-size: 16px; background-color: #f9fafb;"><strong>Name:</strong> ${name}</td></tr>
                  <tr><td style="padding: 12px; font-size: 16px;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #1a73e8;">${email}</a></td></tr>
                  <tr><td style="padding: 12px; font-size: 16px; background-color: #f9fafb;"><strong>Subject:</strong> ${subject}</td></tr>
                  <tr><td style="padding: 12px; font-size: 16px;"><strong>Message:</strong> <p style="margin: 8px 0; line-height: 1.6;">${message}</p></td></tr>
                </table>
                <p style="font-size: 16px; line-height: 1.5; margin: 20px 0;">
                  Please review and respond promptly to <a href="mailto:${email}" style="color: #1a73e8;">${email}</a>.
                </p>
                <p style="font-size: 16px; line-height: 1.5; margin: 0;">
                  Sincerely,<br />Techno Communications LLC Team
                </p>
              </td>
            </tr>
            <tr>
              <td style="padding: 20px; text-align: center; background-color: #f4f4f9; border-radius: 0 0 8px 8px;">
                <p style="font-size: 14px; color: #666666; margin: 0 0 10px;">
                  <strong>Techno Communications</strong><br />6464 Savoy Dr, Suite 215, Houston, TX 77036
                </p>
                <p style="font-size: 14px; color: #666666; margin: 0 0 10px;">
                  <a href="tel:+13464877627" style="color: #1a73e8;">+1(713) 640-5426</a> | 
                  <a href="mailto:info@techno-communications.com" style="color: #1a73e8;">info@techno-communications.com</a>
                </p>
                <p style="font-size: 12px; color: #666666; margin: 0;">
                  © ${new Date().getFullYear()} Techno Communications. All rights reserved.
                </p>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: `Failed to send email: ${error.message}` },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Email sent successfully", data },
      { status: 200 }
    );
  } catch (err) {
    console.error("Unexpected error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// Handle preflight requests for CORS
export async function OPTIONS(request) {
  const origin = request.headers.get("origin");
  const response = NextResponse.json({}, { status: 200 });
  if (origin) response.headers.set("Access-Control-Allow-Origin", origin);
  response.headers.set("Access-Control-Allow-Methods", "POST, OPTIONS");
  response.headers.set("Access-Control-Allow-Headers", "Content-Type");
  return response;
}