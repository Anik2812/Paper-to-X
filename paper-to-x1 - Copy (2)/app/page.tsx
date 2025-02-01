import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { HowItWorks } from "@/components/how-it-works"
import { Testimonials } from "@/components/testimonials"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"
import { About } from "@/components/about"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <HowItWorks />
        <About />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

