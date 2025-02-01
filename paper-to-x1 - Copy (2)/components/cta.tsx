import Link from "next/link"
import { Button } from "@/components/ui/button"

export function CTA() {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Research?</h2>
        <p className="text-xl mb-8">
          Join thousands of researchers who are already using Paper to X to share their work more effectively.
        </p>
        <Button
          size="lg"
          className="bg-white text-blue-600 hover:bg-blue-50 transition-colors duration-300 rounded-full"
          asChild
        >
          <Link href="/signup">Get Started for Free</Link>
        </Button>
      </div>
    </section>
  )
}

