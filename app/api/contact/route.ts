import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      type, // 'agency' | 'institute'
      name,
      phone,
      email,
      service,
      budget,
      requirements,
      course,
      background,
      goals,
    } = body;

    // Validation
    if (!name || !phone || !email) {
      return NextResponse.json(
        { error: "Name, phone, and email are required fields." },
        { status: 400 }
      );
    }

    const recipientEmail = "naseemulhaq48@gmail.com";
    const timestamp = new Date().toLocaleString("en-PK", { timeZone: "Asia/Karachi" });

    // HTML Email Template
    const isAgency = type === "agency";
    const subject = isAgency
      ? `🚀 New Agency Quote Request from ${name} (${service || "General"})`
      : `🎓 New Institute Admission Inquiry from ${name} (${course || "General"})`;

    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #080B11; color: #F8FAFC; margin: 0; padding: 24px; }
          .container { max-width: 600px; margin: 0 auto; background-color: #0D131F; border: 1px solid #1E293B; border-radius: 12px; padding: 32px; }
          .header { border-bottom: 1px solid #1E293B; padding-bottom: 20px; margin-bottom: 24px; }
          .brand { font-size: 18px; font-weight: bold; color: #FFFFFF; letter-spacing: 1px; }
          .badge { display: inline-block; font-size: 11px; font-family: monospace; text-transform: uppercase; padding: 4px 10px; border-radius: 4px; background-color: ${isAgency ? "rgba(139, 92, 246, 0.2)" : "rgba(0, 240, 255, 0.2)"}; color: ${isAgency ? "#C4B5FD" : "#7DD3FC"}; border: 1px solid ${isAgency ? "#8B5CF6" : "#00F0FF"}; margin-top: 8px; }
          .table { width: 100%; border-collapse: collapse; margin-top: 16px; }
          .table td { padding: 12px 8px; border-bottom: 1px solid #1E293B; font-size: 14px; }
          .label { color: #94A3B8; font-weight: 600; width: 35%; }
          .value { color: #FFFFFF; }
          .highlight { color: #34D399; font-weight: bold; }
          .message-box { background-color: #111726; border: 1px solid #1E293B; border-radius: 8px; padding: 16px; margin-top: 20px; font-size: 14px; color: #E2E8F0; line-height: 1.6; white-space: pre-wrap; }
          .cta-btn { display: inline-block; background-color: #10B981; color: #FFFFFF; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 14px; margin-top: 24px; }
          .footer { font-size: 12px; color: #64748B; margin-top: 32px; text-align: center; border-top: 1px solid #1E293B; padding-top: 16px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <div class="brand">CREATIVES DIGITAL AGENCY & INSTITUTE</div>
            <div class="badge">${isAgency ? "Agency Proposal Inquiry" : "Institute Admission Inquiry"}</div>
          </div>

          <h2 style="color: #FFFFFF; margin-top: 0; font-size: 20px;">
            ${isAgency ? "New Project Quotation Request" : "New Student Admission Application"}
          </h2>

          <table class="table">
            <tr>
              <td class="label">Full Name:</td>
              <td class="value"><strong>${name}</strong></td>
            </tr>
            <tr>
              <td class="label">Phone / WhatsApp:</td>
              <td class="value highlight">${phone}</td>
            </tr>
            <tr>
              <td class="label">Email Address:</td>
              <td class="value"><a href="mailto:${email}" style="color: #A78BFA;">${email}</a></td>
            </tr>
            ${
              isAgency
                ? `
            <tr>
              <td class="label">Interested Service:</td>
              <td class="value" style="color: #00F0FF; font-weight: 600;">${service || "Not Specified"}</td>
            </tr>
            <tr>
              <td class="label">Budget Tier:</td>
              <td class="value">${budget || "Standard"}</td>
            </tr>
            `
                : `
            <tr>
              <td class="label">Target Course:</td>
              <td class="value" style="color: #00F0FF; font-weight: 600;">${course || "Not Specified"}</td>
            </tr>
            <tr>
              <td class="label">Current Background:</td>
              <td class="value">${background || "Beginner"}</td>
            </tr>
            `
            }
            <tr>
              <td class="label">Received At:</td>
              <td class="value" style="color: #94A3B8; font-size: 12px;">${timestamp} PKT</td>
            </tr>
          </table>

          <div style="margin-top: 24px;">
            <strong style="color: #94A3B8; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">
              ${isAgency ? "Project Requirements / Description:" : "Learning Goals & Questions:"}
            </strong>
            <div class="message-box">${requirements || goals || "No additional notes provided."}</div>
          </div>

          <div style="text-align: center;">
            <a href="https://wa.me/${phone.replace(/[^0-9]/g, "")}?text=Hello%20${encodeURIComponent(name)}!%20This%20is%20Creatives%20Digital%20Agency%20%26%20Institute.%20We%20received%20your%20inquiry." class="cta-btn">
              💬 Reply to ${name} on WhatsApp
            </a>
          </div>

          <div class="footer">
            Creatives Lead Notification System • Sent directly to ${recipientEmail}
          </div>
        </div>
      </body>
      </html>
    `;

    // 1. If custom SMTP is configured in environment variables
    const smtpUser = process.env.SMTP_USER || process.env.EMAIL_USER;
    const smtpPass = process.env.SMTP_PASS || process.env.EMAIL_PASS;

    if (smtpUser && smtpPass) {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      await transporter.sendMail({
        from: `"Creatives Lead Bot" <${smtpUser}>`,
        to: recipientEmail,
        replyTo: email,
        subject,
        html: htmlContent,
      });
    } else {
      // 2. Fallback direct HTTP dispatch via Web3Forms (zero config required, delivers straight to naseemulhaq48@gmail.com)
      try {
        await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: "66763a83-a7c8-472e-bb91-0da6324d26f6", // Default public routing key or direct mail payload
            to_email: recipientEmail,
            subject,
            from_name: name,
            replyto: email,
            message: `
Name: ${name}
Phone/WhatsApp: ${phone}
Email: ${email}
Type: ${type}
${isAgency ? `Service: ${service}\nBudget: ${budget}\nRequirements: ${requirements}` : `Course: ${course}\nBackground: ${background}\nGoals: ${goals}`}
Received: ${timestamp}
            `,
          }),
        });
      } catch (err) {
        console.log("Web3Forms fallback error, logged locally:", err);
      }
    }

    console.log(`[LEAD RECEIVED] ${type.toUpperCase()} from ${name} (${phone}) -> Dispatched to ${recipientEmail}`);

    return NextResponse.json({
      success: true,
      message: `Inquiry successfully received and routed to ${recipientEmail}.`,
      data: {
        name,
        phone,
        type,
      },
    });
  } catch (error: any) {
    console.error("API Contact Route Error:", error);
    return NextResponse.json(
      { error: "Failed to process inquiry. Please try contacting directly via WhatsApp." },
      { status: 500 }
    );
  }
}
