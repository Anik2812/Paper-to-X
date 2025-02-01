export function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="font-bold">Paper to X</span> © {new Date().getFullYear()}
          </div>
          <nav className="flex gap-4">
            <a href="#" className="text-sm hover:underline">
              About
            </a>
            <a href="#" className="text-sm hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="text-sm hover:underline">
              Terms of Service
            </a>
          </nav>
        </div>
      </div>
    </footer>
  )
}

