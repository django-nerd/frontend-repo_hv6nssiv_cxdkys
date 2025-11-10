export default function Footer() {
  return (
    <footer className="border-t bg-white/70 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-600">© {new Date().getFullYear()} FreelanceFlow. All rights reserved.</p>
        <nav className="flex gap-4 text-sm">
          <a href="/about" className="text-gray-600 hover:text-gray-900">About</a>
          <a href="/contact" className="text-gray-600 hover:text-gray-900">Contact</a>
          <a href="/terms" className="text-gray-600 hover:text-gray-900">Terms</a>
        </nav>
      </div>
    </footer>
  )
}
