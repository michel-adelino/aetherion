import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import type SMTPTransport from 'nodemailer/lib/smtp-transport';

export const dynamic = 'force-dynamic';

// Email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Rate limiting (simple in-memory store - in production, use Redis or similar)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW = 15 * 60 * 1000; // 15 minutes
const RATE_LIMIT_MAX_REQUESTS = 3; // 3 requests per window

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const userLimit = rateLimitMap.get(ip);
  
  if (!userLimit || now > userLimit.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return true;
  }
  
  if (userLimit.count >= RATE_LIMIT_MAX_REQUESTS) {
    return false;
  }
  
  userLimit.count++;
  return true;
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const ip = request.ip || request.headers.get('x-forwarded-for') || 'unknown';
    
    // Check rate limit
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { firstName, lastName, email, company, inquiryType, message } = body;

    // Validate required fields
    if (!firstName || !lastName || !email || !inquiryType || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Validate field lengths
    if (firstName.length > 50 || lastName.length > 50) {
      return NextResponse.json(
        { error: 'Name fields are too long' },
        { status: 400 }
      );
    }

    if (message.length > 2000) {
      return NextResponse.json(
        { error: 'Message is too long' },
        { status: 400 }
      );
    }

    // Check required environment variables
    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS || !process.env.CONTACT_EMAIL) {
      console.error('Missing required SMTP environment variables');
      return NextResponse.json(
        { error: 'Email service configuration error' },
        { status: 500 }
      );
    }

    // Create transporter with SMTP configuration and better connection options
    const smtpPort = parseInt(process.env.SMTP_PORT || '587');
    const smtpSecure = process.env.SMTP_SECURE
      ? process.env.SMTP_SECURE === 'true'
      : smtpPort === 465; // default secure true only for 465

    const transportOptions: SMTPTransport.Options = {
      host: process.env.SMTP_HOST,
      port: smtpPort,
      secure: smtpSecure, // true for 465 (SMTPS), false for STARTTLS ports like 587/25
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      // Connection timeout options to fix common handshake issues
      connectionTimeout: 60000,
      greetingTimeout: 30000,
      socketTimeout: 60000,
      // Debug mode (set to false in production)
      debug: process.env.NODE_ENV === 'development',
      logger: process.env.NODE_ENV === 'development',
      // TLS options for better compatibility
      requireTLS: smtpPort === 587, // enforce STARTTLS on 587
      tls: {
        rejectUnauthorized: process.env.NODE_ENV === 'production',
        ciphers: 'TLSv1.2:TLSv1.3'
      }
    };

    const transporter = nodemailer.createTransport(transportOptions);

    // Verify connection configuration (non-blocking: some providers close verify connections)
    try {
      await transporter.verify();
      console.log('SMTP connection verified successfully');
    } catch (verifyError) {
      console.warn('SMTP connection verification failed, continuing to send anyway:', verifyError);
    }

    // Email content with better formatting
    const emailContent = `
New Contact Form Submission from Aetherion Biosciences Website

Name: ${firstName} ${lastName}
Email: ${email}
Company: ${company || 'Not provided'}
Inquiry Type: ${inquiryType}

Message:
${message}

---
Submitted at: ${new Date().toLocaleString()}
IP Address: ${ip}
    `.trim();

    // HTML email content
    const htmlEmailContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Contact Form Submission</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #3b82f6, #10b981); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
        .content { background: #f8fafc; padding: 20px; border-radius: 0 0 8px 8px; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #374151; }
        .value { margin-top: 5px; padding: 10px; background: white; border-radius: 4px; border-left: 4px solid #3b82f6; }
        .message { background: white; padding: 15px; border-radius: 4px; border-left: 4px solid #10b981; white-space: pre-wrap; }
        .footer { margin-top: 20px; padding-top: 15px; border-top: 1px solid #e5e7eb; font-size: 12px; color: #6b7280; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h2>New Contact Form Submission</h2>
          <p>Aetherion Biosciences Website</p>
        </div>
        <div class="content">
          <div class="field">
            <div class="label">Name:</div>
            <div class="value">${firstName} ${lastName}</div>
          </div>
          <div class="field">
            <div class="label">Email:</div>
            <div class="value">${email}</div>
          </div>
          <div class="field">
            <div class="label">Company:</div>
            <div class="value">${company || 'Not provided'}</div>
          </div>
          <div class="field">
            <div class="label">Inquiry Type:</div>
            <div class="value">${inquiryType}</div>
          </div>
          <div class="field">
            <div class="label">Message:</div>
            <div class="message">${message}</div>
          </div>
          <div class="footer">
            <p>Submitted at: ${new Date().toLocaleString()}</p>
            <p>IP Address: ${ip}</p>
          </div>
        </div>
      </div>
    </body>
    </html>
    `;

    // Send email to company
    await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL,
      subject: `New Contact Form Submission - ${inquiryType}`,
      text: emailContent,
      html: htmlEmailContent,
    });

    // Send confirmation email to user
    const confirmationContent = `
Dear ${firstName},

Thank you for contacting Aetherion Biosciences. We have received your inquiry regarding "${inquiryType}" and will respond within 24-48 hours.

Your message:
${message}

Best regards,
The Aetherion Biosciences Team

---
This is an automated confirmation email. Please do not reply to this message.
    `.trim();

    // HTML confirmation email
    const htmlConfirmationContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Thank you for contacting Aetherion Biosciences</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #3b82f6, #10b981); color: white; padding: 30px; border-radius: 8px 8px 0 0; text-align: center; }
        .content { background: #f8fafc; padding: 30px; border-radius: 0 0 8px 8px; }
        .message-box { background: white; padding: 20px; border-radius: 8px; border-left: 4px solid #10b981; margin: 20px 0; }
        .footer { margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; font-size: 12px; color: #6b7280; text-align: center; }
        .highlight { color: #3b82f6; font-weight: bold; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Thank You!</h1>
          <p>Your message has been received</p>
        </div>
        <div class="content">
          <p>Dear <span class="highlight">${firstName}</span>,</p>
          
          <p>Thank you for contacting Aetherion Biosciences. We have received your inquiry regarding <span class="highlight">"${inquiryType}"</span> and will respond within 24-48 hours.</p>
          
          <div class="message-box">
            <h3>Your message:</h3>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          
          <p>We appreciate your interest in our work and look forward to connecting with you soon.</p>
          
          <p>Best regards,<br>
          <strong>The Aetherion Biosciences Team</strong></p>
          
          <div class="footer">
            <p>This is an automated confirmation email. Please do not reply to this message.</p>
            <p>If you have any urgent questions, please call us at 888 300 6730</p>
          </div>
        </div>
      </div>
    </body>
    </html>
    `;

    await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: email,
      subject: 'Thank you for contacting Aetherion Biosciences',
      text: confirmationContent,
      html: htmlConfirmationContent,
    });

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    
    // More specific error handling
    if (error instanceof Error) {
      if (error.message.includes('Invalid login')) {
        return NextResponse.json(
          { error: 'Email service authentication failed' },
          { status: 500 }
        );
      }
      if (error.message.includes('ECONNREFUSED')) {
        return NextResponse.json(
          { error: 'Email service unavailable' },
          { status: 500 }
        );
      }
      if (error.message.includes('timeout') || error.message.includes('ETIMEDOUT')) {
        return NextResponse.json(
          { error: 'Email service timeout - please check your SMTP settings' },
          { status: 500 }
        );
      }
      if (error.message.includes('Greeting never received')) {
        return NextResponse.json(
          { error: 'SMTP connection failed - please verify your SMTP host and port settings' },
          { status: 500 }
        );
      }
      if (error.message.includes('ENOTFOUND')) {
        return NextResponse.json(
          { error: 'SMTP host not found - please check your SMTP_HOST setting' },
          { status: 500 }
        );
      }
    }
    
    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    );
  }
}