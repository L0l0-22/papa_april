import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    console.log("📩 CONTACT API CALLED");

    const body = await req.json();
    console.log("📦 Request body:", body);

    const {
      firstName,
      lastName,
      company,
      email,
      jobLevel,
      phone,
      country,
      comments,
      interests,
      consent,
    } = body;

    // ✅ validation
    if (!firstName || !email || !comments) {
      return Response.json(
        { status: 0, message: "Missing required fields" },
        { status: 400 }
      );
    }

    // 🔧 transporter (we will configure later)
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    console.log("📤 Sending email...");

    await transporter.sendMail({
      from: `"Website Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: `New Contact - ${firstName} ${lastName}`,

      html: `
        <h2>New Contact Message</h2>

        <p><b>Name:</b> ${firstName} ${lastName}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Company:</b> ${company}</p>
        <p><b>Job Level:</b> ${jobLevel}</p>
        <p><b>Phone:</b> ${phone || "-"}</p>
        <p><b>Country:</b> ${country}</p>

        <p><b>Interests:</b><br/>
        ${interests?.length ? interests.join("<br/>") : "None"}
        </p>

        <p><b>Message:</b></p>
        <p>${comments}</p>

        <p><b>Consent:</b> ${consent ? "Yes" : "No"}</p>
      `,
    });

    console.log("✅ Email sent");

    return Response.json({ status: 1, message: "Email sent successfully" });

  } catch (error) {
    console.error("❌ EMAIL ERROR:", error);

    return Response.json(
      { status: 0, message: "Failed to send email" },
      { status: 500 }
    );
  }
}