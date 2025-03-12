import nodemailer from "nodemailer";

type EmailPayload = {
  to: string;
  subject: string;
  html: string;
};

// Get SMTP options from environment variables
const getSmtpOptions = () => {
  const port = parseInt(process.env.EMAIL_SERVER_PORT || "587");
  
  // Determine if we should use TLS/SSL based on port
  // Typically, port 465 uses SSL, while 587 uses STARTTLS
  const secure = port === 465;
  
  return {
    host: process.env.EMAIL_SERVER_HOST,
    port,
    secure,
    auth: {
      user: process.env.EMAIL_SERVER_USER,
      pass: process.env.EMAIL_SERVER_PASSWORD,
    },
    // For self-signed certificates or certificate issues
    tls: {
      // Don't fail on invalid certificates in development
      rejectUnauthorized: process.env.NODE_ENV === "production",
    },
  };
};

export const sendEmail = async (data: EmailPayload) => {
  try {
    console.log("Creating nodemailer transport with options:", {
      host: process.env.EMAIL_SERVER_HOST,
      port: process.env.EMAIL_SERVER_PORT,
      user: process.env.EMAIL_SERVER_USER ? "Provided" : "Not provided",
      password: process.env.EMAIL_SERVER_PASSWORD ? "Provided" : "Not provided",
      from: process.env.EMAIL_FROM,
    });
    
    const smtpOptions = getSmtpOptions();
    const transporter = nodemailer.createTransport(smtpOptions);
    
    // Verify connection configuration
    await transporter.verify();
    console.log("SMTP connection verified successfully");

    // Send mail
    const mailOptions = {
      from: process.env.EMAIL_FROM,
      ...data,
    };
    
    console.log("Sending email to:", data.to);
    const result = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully:", result.messageId);
    return result;
  } catch (error) {
    console.error("Email sending failed:", error);
    throw error;
  }
};
