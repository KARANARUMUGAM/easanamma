"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"

export function NewsletterSection() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription
    console.log("Newsletter subscription:", email)
    setEmail("")
  }

  return (
    <section className="py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="max-w-2xl mx-auto border-2 border-accent divine-glow bg-card">
          <CardContent className="pt-8 pb-8">
            <p className="text-center text-foreground/70">
              Receive spiritual insights and updates from the Gurukulam
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
