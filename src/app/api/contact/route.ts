import { NextResponse } from "next/server";
import { sendEmail } from "@/app/libs/email";

export async function POST(req: Request) {
  try {
    // Get form data
    const formData = await req.json();
    const { name, email, company, phone, message } = formData;

    // Validate form data
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    // Format the email
    const htmlContent = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Organization:</strong> ${company || "Not provided"}</p>
      <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
      <h3>Message:</h3>
      <p>${message}</p>
    `;

    // Send the email using the sendEmail utility
    await sendEmail({
      to: "info@shsengineering.co.nz",
      subject: "New Contact Form Submission - SHS Engineering",
      html: htmlContent,
    });

    return NextResponse.json(
      { message: "Your message has been sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
} 