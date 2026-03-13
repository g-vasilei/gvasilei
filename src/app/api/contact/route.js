import { NextResponse } from 'next/server'

export async function POST(request) {
  const { name, email, phone, message } = await request.json()

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  try {
    // Requires: npm install nodemailer
    // Add to .env.local:
    //   EMAIL_USER=you@gmail.com
    //   EMAIL_PASS=xxxx xxxx xxxx xxxx   <- Gmail App Password (not your account password)
    //   EMAIL_TO=you@gmail.com
    //
    // To get an App Password:
    //   1. Enable 2-Step Verification on your Google account
    //   2. Go to myaccount.google.com > Security > App Passwords
    //   3. Generate one and paste it as EMAIL_PASS
    const nodemailer = (await import('nodemailer')).default

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    await transporter.sendMail({
      from: `"${name}" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: `New contact from ${name}`,
      replyTo: email,
      html: `
        <h2 style="font-family:sans-serif;">New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || '—'}</p>
        <hr />
        <p><strong>Message:</strong></p>
        <p style="white-space:pre-wrap;">${message}</p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }
}
