import Link from "next/link"
import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4 flex flex-wrap justify-between items-center">
        <div className="flex items-center space-x-4">
          <Link href="/" className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
              <polyline points="14 2 14 8 20 8" />
              <path d="M8 13h2" />
              <path d="M8 17h2" />
              <path d="M14 13h2" />
              <path d="M14 17h2" />
            </svg>
            <span className="font-bold text-lg">Paper to X</span>
          </Link>
          <nav className="hidden md:flex space-x-4">
            <Link href="/" className="text-sm font-medium hover:underline">
              Home
            </Link>
            <Link href="/project" className="text-sm font-medium hover:underline">
              Project
            </Link>
            <Link href="#how-it-works" className="text-sm font-medium hover:underline">
              How It Works
            </Link>
            <Link href="#about" className="text-sm font-medium hover:underline">
              About
            </Link>
          </nav>
        </div>
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          <ModeToggle />
          <Button variant="outline" asChild className="rounded-full">
            <Link href="/login">Log In</Link>
          </Button>
          <Button asChild className="rounded-full">
            <Link href="/signup">Sign Up</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}

