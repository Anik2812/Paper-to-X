import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LoginForm } from "@/components/login-form"

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-center">
        <div className="w-full max-w-md">
          <LoginForm />
        </div>
      </main>
      <Footer />
    </div>
  )
}

