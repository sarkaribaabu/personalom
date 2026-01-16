import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  email: string;
  mobile: string;
  reason: string;
  message: string;
}

const reasonLabels: Record<string, string> = {
  consulting: "Consulting & Advisory",
  synergies: "Synergies / Project",
  riding: "Riding Collaboration",
  general: "General Enquiry",
};

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, mobile, reason, message }: ContactEmailRequest = await req.json();

    // Validate required fields
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "Name, email, and message are required" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    const reasonLabel = reasonLabels[reason] || reason || "Not specified";

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
          New Contact Form Submission
        </h2>
        
        <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
          <tr>
            <td style="padding: 10px; background: #f8f9fa; border: 1px solid #dee2e6; font-weight: bold; width: 30%;">
              Category
            </td>
            <td style="padding: 10px; border: 1px solid #dee2e6;">
              ${reasonLabel}
            </td>
          </tr>
          <tr>
            <td style="padding: 10px; background: #f8f9fa; border: 1px solid #dee2e6; font-weight: bold;">
              Name
            </td>
            <td style="padding: 10px; border: 1px solid #dee2e6;">
              ${name}
            </td>
          </tr>
          <tr>
            <td style="padding: 10px; background: #f8f9fa; border: 1px solid #dee2e6; font-weight: bold;">
              Email
            </td>
            <td style="padding: 10px; border: 1px solid #dee2e6;">
              <a href="mailto:${email}">${email}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 10px; background: #f8f9fa; border: 1px solid #dee2e6; font-weight: bold;">
              Mobile
            </td>
            <td style="padding: 10px; border: 1px solid #dee2e6;">
              ${mobile || "Not provided"}
            </td>
          </tr>
        </table>
        
        <div style="margin-top: 20px;">
          <h3 style="color: #333;">Message:</h3>
          <div style="padding: 15px; background: #f8f9fa; border-left: 4px solid #007bff; white-space: pre-wrap;">
            ${message}
          </div>
        </div>
        
        <p style="color: #666; font-size: 12px; margin-top: 30px; border-top: 1px solid #dee2e6; padding-top: 15px;">
          This email was sent from the contact form on ommahajan.com
        </p>
      </div>
    `;

    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Website Contact <onboarding@resend.dev>",
        to: ["hello@ommahajan.com"],
        reply_to: email,
        subject: `New Enquiry: ${reasonLabel} from ${name}`,
        html: emailHtml,
      }),
    });

    const emailData = await emailResponse.json();

    if (!emailResponse.ok) {
      console.error("Resend API error:", emailData);
      throw new Error(emailData.message || "Failed to send email");
    }

    console.log("Email sent successfully:", emailData);

    return new Response(JSON.stringify({ success: true, data: emailData }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
