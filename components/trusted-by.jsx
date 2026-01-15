"use client"

import { FadeIn, ScaleIn } from "./motion-wrapper"
import { Shield, Smartphone, CreditCard, Banknote, Receipt, Zap } from "lucide-react"
import { motion } from "framer-motion"

const services = [
  { 
    icon: Smartphone, 
    title: "Aadhaar Enabled Payment System (AEPS)", 
    desc: "Turn your shop into a bank branch. Allow customers to withdraw cash, check their account balance, and get mini-statements using only their Aadhaar number and biometric authentication.",
    color: "from-blue-600 to-blue-700"
  },
  { 
    icon: CreditCard, 
    title: "Domestic Money Transfer (DMT)", 
    desc: "Send money to any bank account across India instantly. Our secure channel ensures that funds reach the recipient in seconds, even on holidays.",
    color: "from-green-600 to-emerald-600"
  },
  { 
    icon: Banknote, 
    title: "Mini ATM (Micro ATM)", 
    desc: "Offer cash withdrawal services through Debit Cards. Our compact, portable Micro-ATM devices are easy to use and provide a convenient way for customers to access their money.",
    color: "from-purple-600 to-indigo-600"
  },
  { 
    icon: Receipt, 
    title: "BBPS & Utility Bill Payments", 
    desc: "Simplify life for your customers by accepting payments for Electricity, Water, Gas, Landline, and Broadband. Powered by Bharat Bill Pay (BBPS) for maximum reliability.",
    color: "from-cyan-600 to-blue-600"
  },
  { 
    icon: Smartphone, 
    title: "Mobile & DTH Recharge", 
    desc: "Instant recharges for all major telecom operators and DTH service providers with high success rates and attractive margins.",
    color: "from-orange-500 to-red-500"
  },
]

export default function TrustedBy() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-gradient-to-b from-background via-muted/20 to-background">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/10 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Shield className="w-4 h-4" />
              Comprehensive Solutions
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Core <span className="text-gradient">Services</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Empowering your business with complete digital banking and payment solutions
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <ScaleIn key={idx} delay={0.1 * idx}>
              <motion.div 
                className="group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-lg transition-all overflow-hidden"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                transition={{ duration: 0.2 }}
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                <div className="relative">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} p-0.5 mb-4`}>
                    <div className="w-full h-full rounded-xl bg-background flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-foreground" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.desc}</p>
                </div>

                {/* Bottom gradient line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
              </motion.div>
            </ScaleIn>
          ))}
        </div>

        {/* Trust indicators */}
        <FadeIn delay={0.4}>
          <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span>Safe & Secure</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" style={{ animationDelay: '0.5s' }} />
              <span>Instant Settlements</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" style={{ animationDelay: '1s' }} />
              <span>24/7 Support</span>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
