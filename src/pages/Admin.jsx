import { useEffect, useState } from 'react'

const API = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Admin() {
  const [projects, setProjects] = useState([])
  const [filter, setFilter] = useState('')
  const [message, setMessage] = useState('')

  useEffect(() => {
    refresh()
  }, [])

  const refresh = async () => {
    const res = await fetch(`${API}/api/projects`)
    const data = await res.json()
    setProjects(data)
  }

  const pushUpdate = async (project) => {
    if (!message) return
    await fetch(`${API}/api/messages`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        project_id: project._id,
        author_id: 'admin',
        author_name: 'Admin',
        role: 'admin',
        content: message
      })
    })
    setMessage('')
    await refresh()
  }

  const filtered = projects.filter(p => p.title.toLowerCase().includes(filter.toLowerCase()))

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-2xl font-bold mb-6">Admin Panel</h1>

        <div className="grid md:grid-cols-[1fr_360px] gap-6">
          <div className="bg-white rounded-xl shadow-sm border p-6">
            <div className="flex items-center justify-between mb-4">
              <input value={filter} onChange={e => setFilter(e.target.value)} placeholder="Filter projects by title" className="border rounded-lg px-3 py-2 w-64" />
              <button onClick={refresh} className="px-4 py-2 rounded-lg bg-black text-white hover:bg-gray-800">Refresh</button>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filtered.map(p => (
                <div key={p._id} className="border rounded-lg p-4 bg-white">
                  <div className="font-semibold">{p.title}</div>
                  <div className="text-sm text-gray-600">{p.status}</div>
                  <div className="mt-2 text-xs text-gray-500">Tags: {p.tags?.join(', ') || '—'}</div>
                  <button onClick={() => pushUpdate(p)} className="mt-3 px-3 py-1.5 rounded bg-indigo-600 text-white text-sm">Send Update</button>
                </div>
              ))}
              {filtered.length === 0 && (
                <p className="text-gray-500">No projects found.</p>
              )}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border p-6 h-fit">
            <h2 className="text-lg font-semibold mb-3">Broadcast an Update</h2>
            <textarea value={message} onChange={e => setMessage(e.target.value)} placeholder="Type an update for the selected projects. Click 'Send Update' on cards to send." className="w-full border rounded-lg px-3 py-2" rows="8" />
            <p className="text-xs text-gray-500 mt-2">This will post a message into the selected project's chat as Admin.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
