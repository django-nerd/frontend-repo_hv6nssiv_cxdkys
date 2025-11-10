import { Routes, Route } from 'react-router-dom'
import App from '../App'
import Dashboard from './Dashboard'
import Admin from './Admin'
import { About, Contact, Terms } from './Static'

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/terms" element={<Terms />} />
    </Routes>
  )
}
