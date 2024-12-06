export const mailTemplate = ({
  email,
  name,
  message,
}: {
  email: string;
  name: string;
  message: string;
}) => {
  return `
       <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Contact Details</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: white;
      color: #333;
      margin: 0;
      padding: 20px;
    }
    .email-container {
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
      border: 2px solid #df7234;
      border-radius: 10px;
      background-color: white;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
    .header {
      text-align: center;
      color: #df7234;
      font-size: 24px;
      margin-bottom: 20px;
    }
    .content {
      line-height: 1.6;
    }
    .content p {
      margin: 10px 0;
    }
    .content .highlight {
      color: #df7234;
      font-weight: bold;
    }
    .footer {
      margin-top: 20px;
      text-align: center;
      font-size: 12px;
      color: #777;
    }
  </style>
</head>
<body>
  <div class="email-container">
    <div class="header">New Contact Details</div>
    <div class="content">
      <p><span class="highlight">Name:</span> ${name || "N/A"}</p>
      <p><span class="highlight">Email:</span> ${email || "N/A"}</p>
      <p><span class="highlight">Message:</span> ${message || "N/A"}</p>
      <p>
        Hello, I would like to inquire about your services. Please let me know how we can proceed. 
      </p>
    </div>
    <div class="footer">
      This message was sent via your contact form. Please do not reply to this email.
    </div>
  </div>
</body>
</html>

    `;
};
