import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
      <div className="container mx-auto px-4 py-16 sm:py-24 lg:py-32 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 lg:pr-12 mb-8 lg:mb-0">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 animate-fade-in-up">
            Transform Your Research
          </h1>
          <p className="text-xl sm:text-2xl mb-6 animate-fade-in-up animation-delay-200">
            Turn your papers into engaging presentations, podcasts, and more with AI-powered Paper to X.
          </p>
          <Button
            size="lg"
            className="bg-white text-blue-600 hover:bg-blue-50 transition-colors duration-300 animate-fade-in-up animation-delay-400 rounded-full"
            asChild
          >
            <Link href="/project">
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
        <div className="lg:w-1/2 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-apple filter blur-3xl opacity-50"></div>
            <img
              src="/hero-image.png"
              alt="Paper to X transformation"
              className="relative z-10 float hover-lift rounded-apple shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

