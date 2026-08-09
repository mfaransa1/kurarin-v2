import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const allowedProjectTypes = [
  "Custom software",
  "Business automation",
  "Cloud infrastructure",
  "Digital product",
  "AI / intelligent systems",
  "Something else",
];

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim();
    const company = String(body.company || "").trim();
    const project = String(body.project || "").trim();
    const message = String(body.message || "").trim();
    const website = String(body.website || "").trim();

    // Honeypot spam protection
    if (website) {
      return NextResponse.json({ success: true });
    }

    // Required fields
    if (!name || !email || !project || !message) {
      return NextResponse.json(
        {
          error: "Please complete all required fields.",
        },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return NextResponse.json(
        {
          error: "Please enter a valid email address.",
        },
        { status: 400 }
      );
    }

    // Project validation
    if (!allowedProjectTypes.includes(project)) {
      return NextResponse.json(
        {
          error: "Please select a valid project type.",
        },
        { status: 400 }
      );
    }

    // Basic length protection
    if (name.length > 100) {
      return NextResponse.json(
        { error: "Name is too long." },
        { status: 400 }
      );
    }

    if (email.length > 200) {
      return NextResponse.json(
        { error: "Email address is too long." },
        { status: 400 }
      );
    }

    if (company.length > 200) {
      return NextResponse.json(
        { error: "Company name is too long." },
        { status: 400 }
      );
    }

    if (message.length > 5000) {
      return NextResponse.json(
        { error: "Message is too long." },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not configured.");

      return NextResponse.json(
        {
          error: "Email service is not configured.",
        },
        { status: 500 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Kurarin Solutions <contact@contact.kurarinsolutions.co.ke>",
      to: ["info@kurarinsolutions.co.ke"],
      replyTo: email,
      subject: `New project enquiry — ${project}`,
      text: `
New enquiry received from the Kurarin Solutions website.

Name: ${name}
Email: ${email}
Company: ${company || "Not provided"}
Project type: ${project}

Message:
${message}
      `.trim(),
    });

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        {
          error: "We couldn't send your enquiry. Please try again.",
        },
        { status: 500 }
      );
    }

    console.log("Contact enquiry sent:", data?.id);

    return NextResponse.json({
      success: true,
      id: data?.id,
    });
  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      {
        error: "Something went wrong. Please try again.",
      },
      { status: 500 }
    );
  }
}