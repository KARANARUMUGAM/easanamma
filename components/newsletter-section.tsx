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
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-primary text-center mb-4">
              Stay Connected with Divine Wisdom
            </h2>
            <p className="text-center text-foreground/70 mb-6">
              Receive spiritual insights and updates from the Gurukulam
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 border-primary/30 focus:border-primary"
              />
              <Button
                type="submit"
                className="bg-primary hover:bg-primary/90 text-primary-foreground divine-glow-hover"
              >
                Subscribe
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
