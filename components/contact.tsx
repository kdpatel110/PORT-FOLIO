// Contact section: a simple message form + contact details.
"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { MapPin, Mail, Phone } from "lucide-react"

export function Contact() {
  // The form does not send anywhere yet — just prevent a page reload on submit.
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
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
              <Input id="name" placeholder="Full name" required />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="email">Email (required)</Label>
              <Input id="email" type="email" placeholder="Email address" required />
            </div>
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="subject">Subject (required)</Label>
            <Input id="subject" placeholder="Subject" required />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="comment">Comment (required)</Label>
            <Textarea id="comment" placeholder="Type comment" rows={5} required />
          </div>

          <Button type="submit" className="w-full rounded-full" size="lg">
            Contact Me
          </Button>
        </form>

        {/* Right: contact details */}
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
