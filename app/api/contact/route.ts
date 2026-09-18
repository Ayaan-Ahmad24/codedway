import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface ContactPayload {
  fullName: string;
  company?: string;
  email: string;
  buildType?: string;
  budget?: string;
  details?: string;
}

export async function POST(req: Request) {
  try {
    const body: ContactPayload = await req.json();
    const { fullName, company, email, buildType, budget, details } = body;

    // 1. Validation
    if (!fullName || !fullName.trim()) {
      return NextResponse.json(
        { error: "Full name is required." },
        { status: 400 }
      );
    }

    if (!email || !email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "A valid business email is required." },
        { status: 400 }
      );
    }

    // 2. Determine Receiver Email
    const receiverEmail =
      process.env.CONTACT_RECEIVER_EMAIL ||
      process.env.SMTP_TO_EMAIL ||
      "ayaansheikh061@gmail.com";

    // 3. Subject with strict [Codedway] label
    const emailSubject = `[Codedway] New Project Brief: ${fullName.trim()}${company ? ` (${company.trim()})` : ""}`;

    // 4. HTML Email Template with Enterprise Codedway Design
    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #0b0b0b; color: #F0EDE8; margin: 0; padding: 24px; }
    .container { max-width: 620px; margin: 0 auto; background-color: #121212; border: 1px solid #222222; border-radius: 0px; overflow: hidden; }
    .header { background-color: #171717; border-bottom: 2px solid #bef44d; padding: 20px 24px; }
    .brand { font-family: monospace; font-size: 13px; font-weight: bold; letter-spacing: 0.15em; color: #bef44d; text-transform: uppercase; }
    .title { font-size: 20px; font-weight: 600; color: #FFFFFF; margin: 8px 0 0 0; }
    .content { padding: 24px; }
    .meta-table { width: 100%; border-collapse: collapse; margin-bottom: 24px; }
    .meta-table th { text-align: left; padding: 10px 12px; font-family: monospace; font-size: 11px; text-transform: uppercase; color: #888888; letter-spacing: 0.1em; border-bottom: 1px solid #222222; width: 35%; }
    .meta-table td { padding: 10px 12px; font-size: 14px; color: #F0EDE8; border-bottom: 1px solid #222222; }
    .highlight { color: #bef44d; font-weight: 600; font-family: monospace; }
    .details-box { background-color: #0e0e0e; border: 1px solid #222222; padding: 16px; margin-top: 16px; font-size: 14px; line-height: 1.6; color: #d1cfcb; white-space: pre-wrap; }
    .footer { background-color: #0e0e0e; border-top: 1px solid #222222; padding: 16px 24px; font-family: monospace; font-size: 11px; color: #666666; text-align: center; }
    .btn { display: inline-block; background-color: #bef44d; color: #111111; font-family: monospace; font-size: 12px; font-weight: bold; padding: 10px 20px; text-decoration: none; text-transform: uppercase; margin-top: 20px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div class="brand">CODEDWAY // INTAKE_PROTOCOL</div>
      <h1 class="title">New Client Project Brief</h1>
    </div>
    <div class="content">
      <table class="meta-table">
        <tr>
          <th>Client Name</th>
          <td><strong>${fullName}</strong></td>
        </tr>
        <tr>
          <th>Client Email</th>
          <td><a href="mailto:${email}" style="color: #bef44d; text-decoration: none;">${email}</a></td>
        </tr>
        <tr>
          <th>Company</th>
          <td>${company ? company : "Not specified"}</td>
        </tr>
        <tr>
          <th>Build Discipline</th>
          <td class="highlight">${buildType || "Full Product Build"}</td>
        </tr>
        <tr>
          <th>Allocated Budget</th>
          <td class="highlight">${budget || "10k-30k"}</td>
        </tr>
        <tr>
          <th>Received At</th>
          <td>${new Date().toUTCString()}</td>
        </tr>
      </table>

      <div style="font-family: monospace; font-size: 11px; color: #888888; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 6px;">
        Project Scope & Specifications:
      </div>
      <div class="details-box">
${details && details.trim() ? details.trim() : "No additional specifications provided."}
      </div>

      <div style="text-align: center;">
        <a href="mailto:${email}?subject=Re:%20Codedway%20Project%20Brief%20-%20${encodeURIComponent(fullName)}" class="btn">
          Reply to ${fullName} &rarr;
        </a>
      </div>
    </div>
    <div class="footer">
      CODEDWAY DIGITAL FLAGSHIP · AUTOMATED SMTP DISPATCH ENCLAVE
    </div>
  </div>
</body>
</html>
    `;

    // 5. Setup Nodemailer Transporter
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = parseInt(process.env.SMTP_PORT || "587", 10);
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS || process.env.SMTP_PASSWORD;
    const smtpSecure = process.env.SMTP_SECURE === "true" || smtpPort === 465;
    const smtpFrom =
      process.env.SMTP_FROM ||
      (smtpUser ? `"Codedway Intake" <${smtpUser}>` : `"Codedway Intake" <no-reply@codedway.com>`);

    if (smtpHost && smtpUser && smtpPass) {
      // Production SMTP Transporter
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpSecure,
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      await transporter.sendMail({
        from: smtpFrom,
        to: receiverEmail,
        replyTo: email,
        subject: emailSubject,
        html: htmlContent,
        text: `New Codedway Project Brief\n\nName: ${fullName}\nEmail: ${email}\nCompany: ${company || "N/A"}\nBuild Type: ${buildType || "N/A"}\nBudget: ${budget || "N/A"}\n\nDetails:\n${details || "N/A"}`,
      });

      return NextResponse.json({
        success: true,
        message: "Project brief successfully dispatched via SMTP.",
      });
    } else {
      // Development / Fallback Mode when SMTP credentials are not yet set in environment
      console.log("[Codedway SMTP Dispatched in Standby Mode]:", {
        to: receiverEmail,
        subject: emailSubject,
        client: { fullName, email, company, buildType, budget },
      });

      return NextResponse.json({
        success: true,
        message:
          "Project brief logged successfully. (Set SMTP_HOST, SMTP_USER, SMTP_PASS in Vercel/environment for live relay)",
      });
    }
  } catch (error: any) {
    console.error("[Codedway Contact API Error]:", error);
    return NextResponse.json(
      {
        error:
          error?.message ||
          "Failed to dispatch project brief. Please try again or email enquiries@codedway.com directly.",
      },
      { status: 500 }
    );
  }
}
