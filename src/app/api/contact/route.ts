import { NextResponse } from "next/server";
import { sendEmail } from "@/app/libs/email";

export async function POST(req: Request) {
  try {
    // Check if environment variables are set
    if (!process.env.EMAIL_SERVER_HOST || !process.env.EMAIL_SERVER_USER || !process.env.EMAIL_SERVER_PASSWORD) {
      console.error("Email environment variables are not set properly");
      return NextResponse.json(
        { error: "Email service is not configured. Please contact the administrator." },
        { status: 500 }
      );
    }

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

    console.log("Attempting to send email");
    
    // Send the email using the sendEmail utility
    await sendEmail({
      to: process.env.EMAIL_TO || "info@shsengineering.co.nz",
      subject: "New Contact Form Submission - SHS Engineering",
      html: htmlContent,
    });

    console.log("Email sent successfully");

    return NextResponse.json(
      { message: "Your message has been sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    // More detailed error logging
    console.error("Error details:", error);
    
    let errorMessage = "Failed to send message. Please try again later.";
    
    // Try to extract a more descriptive error message if available
    if (error instanceof Error) {
      console.error(`Error name: ${error.name}, message: ${error.message}`);
      
      // Check for specific error types to provide better user feedback
      if (error.message.includes("ECONNREFUSED")) {
        errorMessage = "Could not connect to email server. Please try again later.";
      } else if (error.message.includes("authorization")) {
        errorMessage = "Email server authentication failed. Please contact the administrator.";
      } else if (error.message.includes("timeout")) {
        errorMessage = "Connection to email server timed out. Please try again later.";
      }
    }

    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
} 