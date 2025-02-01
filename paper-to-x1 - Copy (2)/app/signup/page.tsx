import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SignupForm } from "@/components/signup-form"

export default function SignupPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-center">
        <div className="w-full max-w-md">
          <SignupForm />
        </div>
      </main>
      <Footer />
    </div>
  )
}

