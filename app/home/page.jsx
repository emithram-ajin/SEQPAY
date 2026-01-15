import Hero from "@/components/hero"
import TrustedBy from "@/components/trusted-by"
import Features from "@/components/features"
import HowItWorks from "@/components/how-it-works"
import Testimonials from "@/components/testimonials"

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustedBy />
      {/* <Features /> */}
      <HowItWorks />
      <Testimonials />
    </main>
  )
}
