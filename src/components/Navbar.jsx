import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const linkClass = ({ isActive }) => `px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive ? 'text-white bg-black/80' : 'text-gray-700 hover:text-black hover:bg-black/10'}`

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-white/60 border-b border-white/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500" />
          <span className="font-bold text-lg">FreelanceFlow</span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/dashboard" className={linkClass}>Dashboard</NavLink>
          <NavLink to="/admin" className={linkClass}>Admin</NavLink>
          <NavLink to="/about" className={linkClass}>About</NavLink>
          <NavLink to="/contact" className={linkClass}>Contact</NavLink>
          <NavLink to="/terms" className={linkClass}>Terms</NavLink>
          <NavLink to="/test" className={linkClass}>System Test</NavLink>
        </nav>

        <button className="md:hidden p-2" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/40 bg-white/70 backdrop-blur">
          <div className="px-4 py-3 grid gap-2">
            <NavLink onClick={() => setOpen(false)} to="/" className={linkClass}>Home</NavLink>
            <NavLink onClick={() => setOpen(false)} to="/dashboard" className={linkClass}>Dashboard</NavLink>
            <NavLink onClick={() => setOpen(false)} to="/admin" className={linkClass}>Admin</NavLink>
            <NavLink onClick={() => setOpen(false)} to="/about" className={linkClass}>About</NavLink>
            <NavLink onClick={() => setOpen(false)} to="/contact" className={linkClass}>Contact</NavLink>
            <NavLink onClick={() => setOpen(false)} to="/terms" className={linkClass}>Terms</NavLink>
            <NavLink onClick={() => setOpen(false)} to="/test" className={linkClass}>System Test</NavLink>
          </div>
        </div>
      )}
    </header>
  )
}
