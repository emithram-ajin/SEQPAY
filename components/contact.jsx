"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, MapPin, Send } from "lucide-react"
import { FadeIn, SlideIn } from "./motion-wrapper"
import { toast } from "./ui/use-toast"



export default function Contact() {

  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    number: "",
    email: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [result, setResult] = useState("")

  const isValidPhone = (phone) => {
    const cleaned = phone.replace(/\D/g, "")
    const indianMobileRegex = /^[6-9]\d{9}$/
    return indianMobileRegex.test(cleaned)
  }

  const isValidEmail = (email) => {
    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
    return emailRegex.test(email)
  }


  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!isValidPhone(formData.number)) {
      toast({
        title: "Invalid phone number",
        description: "Please enter a valid mobile number.",
        variant: "destructive",
      })
      return
    }
    if (!isValidEmail(formData.email)) {
      toast({
        title: "Invalid email address",
        description: "Please enter a valid email address.",
      })
      return
    }

    setIsSubmitting(true)
    setResult("")

    const formDataToSend = new FormData()
    formDataToSend.append("access_key", "396e2e5a-eb6a-411b-a09b-764f8731cb82")
    formDataToSend.append("first_name", formData.fname)
    formDataToSend.append("last_name", formData.lname)
    formDataToSend.append("phone", formData.number)
    formDataToSend.append("email", formData.email)
    formDataToSend.append("message", formData.message)

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend,
      })

      const data = await response.json()

      if (data.success) {
        if (data.success) {
          toast({
            title: "Message sent 🎉",
            description: "We’ll get back to you as soon as possible.",
          })
          // setResult("Message sent successfully!")
          setFormData({
            fname: "",
            lname: "",
            number: "",
            email: "",
            message: "",
          })
        } else {
          setResult("Failed to send message.")
          toast({
            title: "Submission failed",
            description: "Please try again later.",
            variant: "destructive",
          })
        }
      }
    } catch (error) {
      setResult("Something went wrong!")
      setIsSubmitting(false)
    }
    finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/50 via-muted/30 to-background" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Contact Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Get in <span className="text-gradient">touch</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 ">
          <SlideIn from="left">
            <Card className="border border-border/50 shadow-xl bg-background/50 backdrop-blur">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6 mt-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">
                        First Name
                      </label>
                      <Input
                        placeholder="Your Firstname"
                        value={formData.fname}
                        onChange={(e) =>
                          setFormData({ ...formData, fname: e.target.value })
                        }
                        required
                        className="h-12 border-border/50 focus:border-primary/50 transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">
                        Last Name
                      </label>
                      <Input
                        placeholder="Your lastname"
                        value={formData.lname}
                        onChange={(e) =>
                          setFormData({ ...formData, lname: e.target.value })
                        }
                        required
                        className="h-12 border-border/50 focus:border-primary/50 transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">
                        Mobile Number
                      </label>
                      <Input
                        type="tel"
                        placeholder="your mobile number"
                        value={formData.number}
                        onChange={(e) => {
                          const value = e.target.value.replace(/\D/g, "").slice(0, 10)
                          setFormData({ ...formData, number: value })
                        }}
                        maxLength={10}
                        required
                        className="h-12 border-border/50 focus:border-primary/50 transition-colors"
                      />

                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">
                        Email
                      </label>
                      <Input
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => {
                          const value = e.target.value.replace(/\s/g, "")
                          setFormData({ ...formData, email: value })
                        }}
                        required
                        className="h-12 border-border/50 focus:border-primary/50 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      Message
                    </label>
                    <Textarea
                      placeholder="How can we help you?"
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      required
                      className="border-border/50 focus:border-primary/50 transition-colors resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full h-12 font-semibold bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 btn-shine"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        Send Message
                        <Send className="w-4 h-4" />
                      </span>
                    )}
                  </Button>

                  {result && (
                    <p className="text-center text-sm text-muted-foreground">
                      {result}
                    </p>
                  )}
                </form>
              </CardContent>
            </Card>
          </SlideIn>

          <SlideIn from="right" delay={0.2}>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-8">
                  Contact Information
                </h3>

                <div className="space-y-6">
                  {[
                    {
                      icon: Mail,
                      title: "Email",
                      lines: ["estakerala@gmail.com"],
                      color: "from-blue-500 to-cyan-500",
                    },
                    {
                      icon: MapPin,
                      title: "Office",
                      lines: [
                        "DD Vyapar Bhavan",
                        "KP Vallon Rd",
                        "Kadavanthra, Kochi 682020",
                        "Kerala, India",
                      ],
                      color: "from-purple-500 to-pink-500",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="group flex items-start gap-4 p-4 rounded-xl hover:bg-muted/50 transition-all duration-300 cursor-default"
                    >
                      <div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} p-0.5 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <div className="w-full h-full rounded-xl bg-background flex items-center justify-center">
                          <item.icon className="w-5 h-5 text-primary" />
                        </div>
                      </div>

                      <div>
                        <p className="font-semibold text-foreground mb-1">
                          {item.title}
                        </p>

                        {item.lines.map((line, i) => (
                          <p key={i} className="text-muted-foreground text-sm">
                            {line}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </SlideIn>
        </div>
      </div >
    </section >
  )
}
