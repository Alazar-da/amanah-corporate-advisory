import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const allowedOrigins = [
  'http://localhost:3000',
  'https://amanahcorporateadvisory.com',
];

const getCorsHeaders = (request: Request) => {
  const origin = request.headers.get('origin');
  const matchedOrigin = origin && allowedOrigins.includes(origin) ? origin : '';

  return {
    'Access-Control-Allow-Origin': matchedOrigin,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };
};

export async function OPTIONS(req: Request) {
  return new Response(null, {
    status: 200,
    headers: getCorsHeaders(req),
  });
}

export async function POST(req: Request) {
  try {
    const { name, company, email, phone, service, message } =
      await req.json();

    const { data, error }  = await resend.emails.send({
      from: 'amanah@resend.dev',
      to: 'info@amanahcorporateadvisory.com',
      subject: `New Contact Form Submission - ${service || 'General Inquiry'}`,
 html: `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Contact Request</title>
  </head>
  <body style="margin: 0; padding: 0; font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8f9fa;">
    <table cellpadding="0" cellspacing="0" width="100%" style="background-color: #f8f9fa; padding: 40px 0;">
      <tr>
        <td align="center">
          <table cellpadding="0" cellspacing="0" width="600" style="background-color: #ffffff; border-radius: 16px; box-shadow: 0 4px 24px rgba(0,0,0,0.06); overflow: hidden; max-width: 600px; width: 100%;">
            
            <!-- Header -->
            <tr>
              <td style="padding: 40px 40px 30px 40px; background: linear-gradient(135deg, #0B1F3B 0%, #1a2f4a 100%);">
                <table width="100%">
                  <tr>
                    <td align="center">
                      <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 700; letter-spacing: -0.5px;">
                        AMANAH<span style="color: #B76E79;">.</span>
                      </h1>
                      <p style="margin: 8px 0 0 0; color: #B76E79; font-size: 14px; font-weight: 500; letter-spacing: 1px; text-transform: uppercase;">
                        New Contact Request
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- Content -->
            <tr>
              <td style="padding: 40px;">
                <table width="100%">
                  <!-- Greeting -->
                  <tr>
                    <td style="padding-bottom: 30px;">
                      <p style="margin: 0; color: #1A1A1A; font-size: 16px; font-weight: 600;">
                        📬 You have received a new inquiry
                      </p>
                      <p style="margin: 8px 0 0 0; color: #6B7280; font-size: 14px;">
                        A potential client has submitted a contact request through your website.
                      </p>
                    </td>
                  </tr>

                  <!-- Divider -->
                  <tr>
                    <td style="padding-bottom: 30px;">
                      <table width="100%">
                        <tr>
                          <td style="border-bottom: 1px solid #f0f0f0; height: 1px;"></td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                  <!-- Contact Details -->
                  <tr>
                    <td style="padding-bottom: 20px;">
                      <table width="100%" cellpadding="0" cellspacing="0">
                        <!-- Name -->
                        <tr>
                          <td width="120" style="padding: 10px 0; color: #6B7280; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Name</td>
                          <td style="padding: 10px 0; color: #1A1A1A; font-size: 15px;">${name}</td>
                        </tr>
                        <!-- Company -->
                        <tr>
                          <td width="120" style="padding: 10px 0; color: #6B7280; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Company</td>
                          <td style="padding: 10px 0; color: #1A1A1A; font-size: 15px;">${company || 'N/A'}</td>
                        </tr>
                        <!-- Email -->
                        <tr>
                          <td width="120" style="padding: 10px 0; color: #6B7280; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Email</td>
                          <td style="padding: 10px 0;">
                            <a href="mailto:${email}" style="color: #B76E79; font-size: 15px; text-decoration: none; border-bottom: 1px dashed #B76E79;">${email}</a>
                          </td>
                        </tr>
                        <!-- Phone -->
                        <tr>
                          <td width="120" style="padding: 10px 0; color: #6B7280; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Phone</td>
                          <td style="padding: 10px 0;">
                            <a href="tel:${phone}" style="color: #1A1A1A; font-size: 15px; text-decoration: none;">${phone}</a>
                          </td>
                        </tr>
                        <!-- Service -->
                        <tr>
                          <td width="120" style="padding: 10px 0; color: #6B7280; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Service</td>
                          <td style="padding: 10px 0;">
                            <span style="display: inline-block; background: #FDF5F6; color: #B76E79; font-size: 13px; font-weight: 500; padding: 4px 12px; border-radius: 20px;">${service || 'N/A'}</span>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                  <!-- Divider -->
                  <tr>
                    <td style="padding: 20px 0 30px 0;">
                      <table width="100%">
                        <tr>
                          <td style="border-bottom: 1px solid #f0f0f0; height: 1px;"></td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                  <!-- Message -->
                  <tr>
                    <td style="padding-bottom: 30px;">
                      <p style="margin: 0 0 12px 0; color: #6B7280; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Message</p>
                      <div style="background: #f8f9fa; border-radius: 12px; padding: 20px; border-left: 3px solid #B76E79;">
                        <p style="margin: 0; color: #1A1A1A; font-size: 15px; line-height: 1.6;">${message}</p>
                      </div>
                    </td>
                  </tr>

                  <!-- Action Button -->
                  <tr>
                    <td align="center" style="padding-top: 10px;">
                      <a href="mailto:${email}" style="display: inline-block; background: linear-gradient(135deg, #B76E79 0%, #CDA3A9 100%); color: #ffffff; font-size: 16px; font-weight: 600; text-decoration: none; padding: 14px 40px; border-radius: 8px; box-shadow: 0 4px 12px rgba(183, 110, 121, 0.3);">
                        Reply to ${name}
                      </a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="padding: 30px 40px; background: #f8f9fa; border-top: 1px solid #f0f0f0;">
                <table width="100%">
                  <tr>
                    <td align="center">
                      <p style="margin: 0 0 8px 0; color: #6B7280; font-size: 13px;">
                        <span style="font-weight: 600;">AMANAH</span> Corporate Advisory
                      </p>
                      <p style="margin: 0; color: #9CA3AF; font-size: 12px;">
                        Dubai World Trade Center, UAE &bull; +971 50 447 6610
                      </p>
                      <p style="margin: 8px 0 0 0; color: #9CA3AF; font-size: 11px;">
                        This is an automated notification from your website contact form.
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

          </table>
        </td>
      </tr>
    </table>
  </body>
  </html>
`
    });

    if (error) {
return Response.json(
  {
    success: false,
    error,
  },
  {
    status: 500,
      headers: getCorsHeaders(req),
  }
);
}

if (error) {
  throw new Error(JSON.stringify(error));
}

return Response.json(
  {
    success: true,
    data,
  },
  {
      headers: getCorsHeaders(req),
  }
);
  } catch (error) {
    console.error(error);

return Response.json(
  {
    success: false,
    message: 'Failed to send email',
  },
  {
    status: 500,
       headers: getCorsHeaders(req),
  }
);
  }
}