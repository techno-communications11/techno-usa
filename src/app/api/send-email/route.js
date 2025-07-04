import { Resend } from "resend";

export async function POST(request) {
  try {
    const { name, email, subject, message } = await request.json();

    // Validate input
    if (!name || !email || !subject || !message) {
      return new Response(JSON.stringify({ error: "All fields are required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(JSON.stringify({ error: "Invalid email address" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Initialize Resend with your API key
    const resend = new Resend(process.env.RESEND_API_KEY);

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: "ticketing@techno-communications.com", // Replace with your verified sender email
      to: ["potharajutharunrana@gmail.com"],
      replyTo: email, // Allow replies to go to the submitter's email
      subject: `Techno Communications LLC: ${subject}`,
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title style="#E10174">Techno Communications LLC</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: Arial, Helvetica, sans-serif; background-color: #f4f4f9; color: #333333;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: 20px auto; background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);">
            <!-- Header -->
            <tr>
              <td style="padding: 5px; text-align: center; background: linear-gradient(to right, #1a73e8, #6b21a8); border-radius: 8px 8px 0 0;">
                <img src="https://internal.techno-communications.com/logoT.webp" alt="Techno Communications Logo" style="max-width: 400px; height: auto; display: block; margin: 0 auto;" />
              </td>
            </tr>
            <!-- Body -->
            <tr>
              <td style="padding: 2px 5px;">
                <p style="font-size: 16px; line-height: 1.5; margin: 0 0 20px;">
                  Dear Techno Communications Team,
                </p>
                <p style="font-size: 16px; line-height: 1.5; margin: 0 0 20px;">
                  You have received a new inquiry through the contact form on your website. Please find the details below:
                </p>
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border: 1px solid #e5e7eb; border-radius: 4px;">
                  <tr>
                    <td style="padding: 12px; font-size: 16px; background-color: #f9fafb;">
                      <strong>Name:</strong> ${name}
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 12px; font-size: 16px;">
                      <strong>Email:</strong> <a href="mailto:${email}" style="color: #1a73e8; text-decoration: none;">${email}</a>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 12px; font-size: 16px; background-color: #f9fafb;">
                      <strong>Subject:</strong> ${subject}
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 12px; font-size: 16px;">
                      <strong>Message:</strong>
                      <p style="margin: 8px 0; line-height: 1.6;">${message}</p>
                    </td>
                  </tr>
                </table>
                <p style="font-size: 16px; line-height: 1.5; margin: 20px 0;">
                  Please review this inquiry and respond promptly to ensure excellent customer service. You can reply directly to the sender at <a href="mailto:${email}" style="color: #1a73e8; text-decoration: none;">${email}</a>.
                </p>
                <p style="font-size: 16px; line-height: 1.5; margin: 0;">
                  Sincerely,<br />
                   Techno Communications LLC Team
                </p>
              </td>
            </tr>
            <!-- Footer -->
            <tr>
              <td style="padding: 20px; text-align: center; background-color: #f4f4f9; border-radius: 0 0 8px 8px;">
                <p style="font-size: 14px; color: #666666; margin: 0 0 10px;">
                  <strong>Techno Communications</strong><br />
                  6464 Savoy Dr, Suite 215, Houston, TX 77036
                </p>
                <p style="font-size: 14px; color: #666666; margin: 0 0 10px;">
                  <a href="tel:+13464877627" style="color: #1a73e8; text-decoration: none;">+1 (346) 487-7627</a> | 
                  <a href="mailto:info@techno-communications.com" style="color: #1a73e8; text-decoration: none;">info@techno-communications.com</a>
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
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ message: "Email sent successfully", data }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}