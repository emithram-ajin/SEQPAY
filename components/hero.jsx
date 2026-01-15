"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Zap, Smartphone, CreditCard, Banknote, Receipt, Users, TrendingUp, Clock, Headphones } from "lucide-react"
import { FadeIn, ScaleIn, SlideIn } from "./motion-wrapper"
import { motion } from "framer-motion"

export default function Hero() {
  const services = [
    { 
      icon: Smartphone, 
      title: "Aadhaar Enabled Payment System (AEPS)", 
      desc: "Turn your shop into a bank branch. Allow customers to withdraw cash, check their account balance, and get mini-statements using only their Aadhaar number and biometric authentication." 
    },
    { 
      icon: CreditCard, 
      title: "Domestic Money Transfer (DMT)", 
      desc: "Send money to any bank account across India instantly. Our secure channel ensures that funds reach the recipient in seconds, even on holidays." 
    },
    { 
      icon: Banknote, 
      title: "Mini ATM (Micro ATM)", 
      desc: "Offer cash withdrawal services through Debit Cards. Our compact, portable Micro-ATM devices are easy to use and provide a convenient way for customers to access their money." 
    },
    { 
      icon: Receipt, 
      title: "BBPS & Utility Bill Payments", 
      desc: "Simplify life for your customers by accepting payments for Electricity, Water, Gas, Landline, and Broadband. Powered by Bharat Bill Pay (BBPS) for maximum reliability." 
    },
    { 
      icon: Smartphone, 
      title: "Mobile & DTH Recharge", 
      desc: "Instant recharges for all major telecom operators and DTH service providers with high success rates and attractive margins." 
    },
  ]

  const benefits = [
    { 
      icon: Shield, 
      title: "Trust & Reliability", 
      desc: "As a unit of ESTA ENTERPRISES PVT LTD, we prioritize transparency and security in every transaction.",
      color: "from-green-600 to-emerald-600"
    },
    { 
      icon: TrendingUp, 
      title: "Superior Earnings", 
      desc: "Benefit from the best commission structures in the industry and grow your monthly income.",
      color: "from-blue-600 to-cyan-600"
    },
    { 
      icon: Zap, 
      title: "Advanced Technology", 
      desc: "Experience a user-friendly interface with a high-speed backend to ensure seamless transactions.",
      color: "from-purple-600 to-indigo-600"
    },
    { 
      icon: Clock, 
      title: "Instant Settlements", 
      desc: "Access your hard-earned money anytime with our 24/7 instant settlement feature.",
      color: "from-orange-500 to-red-500"
    },
    { 
      icon: Headphones, 
      title: "Continuous Support", 
      desc: "Our dedicated helpdesk is always ready to assist you with any technical or operational queries.",
      color: "from-pink-600 to-rose-600"
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section id="home" className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <motion.div 
        className="absolute inset-0 -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div 
          className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/5 to-cyan-500/5 rounded-full blur-3xl"
          animate={{ 
            rotate: 360
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <FadeIn delay={0}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-blue-500/10 border border-primary/20 text-primary text-sm font-medium mb-8">
              <Zap className="w-4 h-4 animate-pulse" />
              <span>A unit of ESTA ENTERPRISES PVT LTD</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="text-foreground">Your Gateway to</span>
              <br />
              <span className="text-gradient">Digital Financial Freedom</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Empowering retailers and entrepreneurs with secure, fast, and reliable banking solutions. Join SeqPay and transform your business today.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <motion.div 
              className="flex flex-wrap items-center justify-center gap-4"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={itemVariants}>
                <Button size="lg" className="gap-2" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  Become a Retailer <ArrowRight className="w-4 h-4" />
                </Button>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Button size="lg" variant="outline" className="gap-2" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  Become a Distributor
                </Button>
              </motion.div>
            </motion.div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="flex flex-wrap items-center justify-center gap-6 mt-10">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20">
                <Shield className="w-4 h-4 text-green-600" />
                <span className="font-medium text-green-700">Safe</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20">
                <Shield className="w-4 h-4 text-blue-600" />
                <span className="font-medium text-blue-700">Secure</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20">
                <Shield className="w-4 h-4 text-purple-600" />
                <span className="font-medium text-purple-700">Seamless</span>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* About Section */}
        <FadeIn delay={0.5}>
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About SeqPay</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              SeqPay is a leading Fintech platform operated under ESTA ENTERPRISES PVT LTD. We are committed to financial inclusion by bringing essential banking and payment services to every doorstep. Our robust technology enables local retailers to serve as a digital hub for their community, providing everything from cash withdrawals to utility payments.
            </p>
          </div>
        </FadeIn>

        

        {/* Benefits Section */}
        <FadeIn delay={0.7}>
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Why Partner with <span className="text-gradient">SeqPay?</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, idx) => (
                <ScaleIn key={idx} delay={0.1 * idx}>
                  <motion.div 
                    className="group relative p-6 rounded-2xl bg-gradient-to-br from-primary/5 to-blue-500/5 border border-primary/20 hover:shadow-lg transition-all overflow-hidden"
                    whileHover={{ 
                      scale: 1.05,
                      borderColor: "rgba(var(--primary), 0.5)"
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    {/* Gradient overlay on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                    
                    <div className="relative">
                      <motion.div
                        initial={{ scale: 1 }}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <benefit.icon className="w-10 h-10 text-primary mb-4" />
                      </motion.div>
                      <h3 className="text-lg font-bold mb-3">{benefit.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{benefit.desc}</p>
                    </div>

                    {/* Bottom gradient line */}
                    <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${benefit.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
                  </motion.div>
                </ScaleIn>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Partnership Model */}
       
      </div>
    </section>
  )
}
