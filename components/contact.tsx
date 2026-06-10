// Contact section: a simple message form + contact details.
"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { MapPin, Mail, Phone } from "lucide-react"

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle")
  const [message, setMessage] = useState<string>("")

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const form = e.currentTarget
    const formData = new FormData(form)
    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      comment: formData.get("comment"),
    }

    if (!payload.name || !payload.email || !payload.subject || !payload.comment) {
      setStatus("error")
      setMessage("Please fill out every field before sending.")
      return
    }

    setStatus("sending")
    setMessage("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data?.error || "Failed to send message")
      }

      setStatus("success")
      setMessage("Message sent! I will respond soon.")
      form.reset()
    } catch (error) {
      console.error(error)
      setStatus("error")
      setMessage("Sorry, something went wrong. Please try again later.")
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-16">
      {/* Section intro */}
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-extrabold md:text-4xl">Can&apos;t Wait to Hear from You</h2>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          If you have feedback, ideas, or just want to say hi, I&apos;d love to hear from you. I&apos;m always open to
          new conversations and fresh perspectives.
        </p>
      </div>

      <div className="mt-12 grid gap-10 md:grid-cols-3">
        {/* Left (wider): the message form */}
        <form onSubmit={handleSubmit} className="space-y-4 md:col-span-2">
            <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <Label htmlFor="name">Name (required)</Label>
                <Input id="name" name="name" placeholder="Full name" required />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="email">Email (required)</Label>
                <Input id="email" name="email" type="email" placeholder="Email address" required />
              </div>
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="subject">Subject (required)</Label>
              <Input id="subject" name="subject" placeholder="Subject" required />
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="comment">Comment (required)</Label>
              <Textarea id="comment" name="comment" placeholder="Type comment" rows={5} required />
            </div>

            <Button type="submit" className="w-full rounded-full" size="lg" disabled={status === "sending"}>
              {status === "sending" ? "Sending..." : "Contact Me"}
            </Button>

            {message ? (
              <p className={`mt-3 text-sm ${status === "success" ? "text-emerald-500" : "text-destructive"}`}>
                {message}
              </p>
            ) : null}
        </form>

        <div>
            <h3 className="text-xl font-bold">Get in Touch</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              If you&apos;ve got an idea, a question, or just want to say hi, I&apos;d love to hear from you.
            </p>
            <ul className="mt-6 space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-primary" />
                Dhruvi Kalariya
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                  dhruvikalariya011@gmail.com
              </li>
              <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  +91 8799660116
              </li>
            </ul>
        </div>
        
        </div>
      
    </section>
  )
}
