import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate required fields
    if (!body.name || !body.email || !body.service || !body.message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Option 1: Using Formspree (uncomment and add your form ID)
    /*
    const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: body.name,
        email: body.email,
        company: body.company,
        service: body.service,
        budget: body.budget,
        message: body.message,
      }),
    })

    if (!response.ok) {
      return NextResponse.json(
        { error: 'Failed to send message' },
        { status: 500 }
      )
    }
    */

    // Option 2: Using Nodemailer with Gmail (uncomment and configure)
    /*
    import nodemailer from 'nodemailer'

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    })

    await transporter.sendMail({
      from: body.email,
      to: 'info@novultex.com',
      subject: `Project Inquiry: ${body.service} — ${body.name}`,
      html: `
        <h2>${body.service}</h2>
        <p><strong>Name:</strong> ${body.name}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Company:</strong> ${body.company || 'N/A'}</p>
        <p><strong>Budget:</strong> ${body.budget || 'Prefer to discuss'}</p>
        <h3>Message:</h3>
        <p>${body.message}</p>
      `,
    })
    */

    // Option 3: Using SendGrid (uncomment and configure)
    /*
    import sgMail from '@sendgrid/mail'
    sgMail.setApiKey(process.env.SENDGRID_API_KEY!)

    await sgMail.send({
      to: 'info@Novultex.com',
      from: process.env.SENDGRID_FROM_EMAIL!,
      replyTo: body.email,
      subject: `Project Inquiry: ${body.service} — ${body.name}`,
      html: `...`,
    })
    */

    // For now, just return success (email will open in user's client)
    return NextResponse.json(
      { success: true, message: 'Message logged. Email client will open.' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
