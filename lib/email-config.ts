// Email Configuration for ContactSection
// This file manages EmailJS integration for real-time contact form

export interface EmailConfig {
  serviceId: string;
  templateId: string;
  publicKey: string;
}

// EmailJS Configuration
// Reading from your .env file
export const emailConfig: EmailConfig = {
  serviceId: process.env.NEXT_PUBLIC_SERVICE_ID || '',
  templateId: process.env.NEXT_PUBLIC_TEMPLATE_ID || '',
  publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY || '',
};

// Check if EmailJS is properly configured
export const isEmailConfigured = (): boolean => {
  return (
    emailConfig.serviceId.length > 0 &&
    emailConfig.templateId.length > 0 &&
    emailConfig.publicKey.length > 0 &&
    emailConfig.serviceId.startsWith('service_') &&
    emailConfig.templateId.startsWith('template_')
  );
};

// Email Template Structure
// Your EmailJS template should include these variables:
export interface EmailTemplate {
  from_name: string;    // {{from_name}}
  from_email: string;   // {{from_email}}
  subject: string;      // {{subject}}
  message: string;      // {{message}}
  to_name: string;      // {{to_name}} - Your name
  reply_to: string;     // {{reply_to}} - Sender's email for replies
}

// Sample EmailJS template HTML:
export const SAMPLE_EMAIL_TEMPLATE = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>New Contact Form Message</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #3b82f6; color: white; padding: 20px; border-radius: 8px 8px 0 0; }
        .content { background: #f9fafb; padding: 20px; border-radius: 0 0 8px 8px; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #374151; }
        .value { margin-top: 5px; padding: 10px; background: white; border-radius: 4px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h2>🚀 New Contact Form Submission</h2>
        </div>
        <div class="content">
            <div class="field">
                <div class="label">From:</div>
                <div class="value">{{from_name}} ({{from_email}})</div>
            </div>
            <div class="field">
                <div class="label">Subject:</div>
                <div class="value">{{subject}}</div>
            </div>
            <div class="field">
                <div class="label">Message:</div>
                <div class="value">{{message}}</div>
            </div>
            <div class="field">
                <div class="label">Sent to:</div>
                <div class="value">{{to_name}}</div>
            </div>
        </div>
    </div>
</body>
</html>
`;

// Alternative services for contact forms
export const alternativeServices = [
  {
    name: 'Formspree',
    url: 'https://formspree.io/',
    description: 'Simple form backend service with free tier',
    difficulty: 'Easy'
  },
  {
    name: 'Netlify Forms',
    url: 'https://www.netlify.com/products/forms/',
    description: 'Built-in form handling for Netlify sites',
    difficulty: 'Easy'
  },
  {
    name: 'EmailJS',
    url: 'https://www.emailjs.com/',
    description: 'Send emails directly from JavaScript',
    difficulty: 'Medium'
  },
  {
    name: 'SendGrid',
    url: 'https://sendgrid.com/',
    description: 'Professional email service with API',
    difficulty: 'Advanced'
  }
]; 