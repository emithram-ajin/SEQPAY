"use client"

import { Users, TrendingUp, ArrowRight } from "lucide-react"
import { FadeIn } from "./motion-wrapper"
import { Button } from "@/components/ui/button"

const partnerships = [
  {
    icon: Users,
    step: "01",
    title: "Become a Retailer",
    description: "Start your own digital service center with minimal investment. Provide banking services to your local customers and earn a commission.",
    color: "from-green-500 to-emerald-500",
    buttonText: "Get Started",
    buttonVariant: "default"
  },
  {
    icon: TrendingUp,
    step: "02",
    title: "Become a Distributor",
    description: "Build and manage your own network of retailers. Earn passive income through every transaction made within your network.",
    color: "from-blue-500 to-cyan-500",
    buttonText: "Learn More",
    buttonVariant: "outline"
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/50 via-muted/30 to-background" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-r from-primary/10 via-blue-500/10 to-cyan-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Partnership Model
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Join Our <span className="text-gradient">Growing Network</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Choose your path to success. Whether you want to serve customers directly or build a network, we have the perfect opportunity for you.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {partnerships.map((item, index) => (
            <FadeIn key={item.title} delay={index * 0.15}>
              <div className="relative group">
                <div className="relative bg-background rounded-3xl p-8 border border-border/50 shadow-lg hover:shadow-2xl hover:border-primary/30 hover:-translate-y-2 transition-all duration-500 overflow-hidden h-full flex flex-col">
                  {/* Background glow */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  />

                  {/* Step number badge */}
                  <div className="absolute top-4 right-4">
                    <span
                      className={`text-5xl font-bold bg-gradient-to-br ${item.color} bg-clip-text text-transparent opacity-20`}
                    >
                      {item.step}
                    </span>
                  </div>

                  {/* Icon */}
                  <div
                    className={`relative w-20 h-20 rounded-2xl bg-gradient-to-br ${item.color} p-0.5 mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
                  >
                    <div className="w-full h-full rounded-2xl bg-background flex items-center justify-center">
                      <item.icon className="w-9 h-9 text-primary" />
                    </div>
                  </div>

                  <span
                    className={`inline-block text-sm font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent mb-3`}
                  >
                    OPTION {item.step}
                  </span>
                  <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">{item.description}</p>
                  
                  <Button 
                    className="w-full" 
                    variant={item.buttonVariant}
                    size="lg"
                  >
                    {item.buttonText} <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
