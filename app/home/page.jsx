import Hero from "@/components/hero"
import TrustedBy from "@/components/trusted-by"
import Features from "@/components/features"
import HowItWorks from "@/components/how-it-works"
import Testimonials from "@/components/testimonials"

export const metadata = {
  title: "SeqPay | Lead Fintech App For AEPS, DMT, BBPS & Recharge",
  description: "Experience the future of digital payments with SeqPay. Empowering local shops with AEPS, Money Transfer, and Bill Payment services across India.",
  keywords: "AEPS service provider, DMT agent, BBPS portal, Mobile Recharge API, Best Fintech app India",
}

export default function Home() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "SeqPay",
    "url": "https://seqpay.in",
    "logo": "https://seqpay.in/logonew.png",
    "sameAs": [
      "https://facebook.com/seqpay",
      "https://twitter.com/seqpay",
      "https://instagram.com/seqpay"
    ],
    "description": "SeqPay is a leading digital payment service provider in India offering AEPS, DMT, and utility payment solutions."
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Hero />
      <TrustedBy />
      {/* <Features /> */}
      <HowItWorks />
      <Testimonials />
    </main>
  )
}
