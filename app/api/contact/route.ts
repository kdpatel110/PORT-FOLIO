import nodemailer from "nodemailer";
import { NextResponse } from "next/server"

const GMAIL_USER = process.env.GMAIL_USER
const GMAIL_PASS = process.env.GMAIL_PASS
const MAIL_TO = process.env.MAIL_TO

async function sendEmail({ name, email, subject, comment }: { name: string; email: string; subject: string; comment: string }) {
  if (!GMAIL_USER || !GMAIL_PASS || !MAIL_TO) {
    throw new Error("Missing email configuration. Set GMAIL_USER, GMAIL_PASS, and MAIL_TO in environment variables.")
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: GMAIL_USER,
      pass: GMAIL_PASS,
    },
  })

  const message = {
    from: `Portfolio Contact <${GMAIL_USER}>`,
    to: MAIL_TO,
    subject: `[Portfolio] ${subject}`,
    text: `Name: ${name}\nEmail: ${email}\n\n${comment}`,
    html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Subject:</strong> ${subject}</p><p><strong>Message:</strong></p><p>${comment.replace(/\n/g, "<br />")}</p>`,
  }

  await transporter.sendMail(message)
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, subject, comment } = body

    if (!name || !email || !subject || !comment) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 })
    }

    await sendEmail({ name, email, subject, comment })
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Contact API error:", error)
    return NextResponse.json({ error: "Unable to send email." }, { status: 500 })
  }
}
