import { NextRequest, NextResponse } from "next/server";

interface ContactPayload {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  service?: unknown;
  message?: unknown;
  source?: unknown;
}

// Validate request body
function validateContactRequest(data: ContactPayload) {
  const errors: Record<string, string> = {};

  if (!data.name || typeof data.name !== "string" || !data.name.trim()) {
    errors.name = "Name is required";
  }

  if (!data.email || typeof data.email !== "string" || !data.email.trim()) {
    errors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Invalid email format";
  }

  if (
    !data.phone ||
    typeof data.phone !== "string" ||
    !data.phone.trim()
  ) {
    errors.phone = "Phone is required";
  }

  if (!data.service || typeof data.service !== "string") {
    errors.service = "Service is required";
  }

  if (
    !data.message ||
    typeof data.message !== "string" ||
    !data.message.trim()
  ) {
    errors.message = "Message is required";
  }

  return errors;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate
    const errors = validateContactRequest(body);
    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        { success: false, errors },
        { status: 400 }
      );
    }

    // Prepare webhook data
    const webhookData = {
      name: body.name,
      email: body.email,
      phone: body.phone,
      service: body.service,
      message: body.message,
      source: body.source || "website",
      timestamp: new Date().toISOString(),
      ip: request.headers.get("x-forwarded-for") || "unknown",
      userAgent: request.headers.get("user-agent") || "unknown",
    };

    // Send to webhook (Zapier, Make, or custom service)
    const webhookUrl = process.env.WEBHOOK_URL;

    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(webhookData),
        });
      } catch (webhookError) {
        console.error("Webhook error:", webhookError);
        // Don't fail the request if webhook fails
        // Log it but continue
      }
    }

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: "Contact form submitted successfully",
        data: {
          name: body.name,
          email: body.email,
          service: body.service,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Error processing form",
      },
      { status: 500 }
    );
  }
}

// Handle OPTIONS for CORS if needed
export async function OPTIONS() {
  return NextResponse.json({}, { status: 200 });
}
