import { useEffect, useState } from 'react'

const API = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Dashboard() {
  const [user, setUser] = useState(null)
  const [projects, setProjects] = useState([])
  const [chat, setChat] = useState([])
  const [form, setForm] = useState({ title: '', description: '', tags: '' })
  const [activeProject, setActiveProject] = useState(null)

  useEffect(() => {
    bootstrap()
  }, [])

  const bootstrap = async () => {
    // Create a demo user for the session (id persisted in localStorage)
    let uid = localStorage.getItem('ff_uid')
    if (!uid) {
      const res = await fetch(`${API}/api/users`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: 'Guest User', email: `guest-${Date.now()}@example.com` })
      })
      const data = await res.json()
      uid = data.id
      localStorage.setItem('ff_uid', uid)
    }
    setUser({ id: uid })
    await refreshProjects(uid)
  }

  const refreshProjects = async (uid) => {
    const res = await fetch(`${API}/api/projects?user_id=${uid}`)
    const data = await res.json()
    setProjects(data)
    if (data[0]) {
      setActiveProject(data[0])
      await refreshChat(data[0]._id)
    }
  }

  const refreshChat = async (projectId) => {
    const res = await fetch(`${API}/api/messages?project_id=${projectId}`)
    const data = await res.json()
    setChat(data)
  }

  const createProject = async (e) => {
    e.preventDefault()
    if (!user) return
    const payload = {
      user_id: user.id,
      title: form.title,
      description: form.description,
      tags: form.tags.split(',').map(t => t.trim()).filter(Boolean),
    }
    const res = await fetch(`${API}/api/projects`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })
    await res.json()
    setForm({ title: '', description: '', tags: '' })
    await refreshProjects(user.id)
  }

  const sendMessage = async (e) => {
    e.preventDefault()
    if (!user || !activeProject || !form.description) return
    const payload = {
      project_id: activeProject._id,
      author_id: user.id,
      author_name: 'You',
      role: 'user',
      content: form.description,
    }
    const res = await fetch(`${API}/api/messages`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })
    await res.json()
    setForm(f => ({ ...f, description: '' }))
    await refreshChat(activeProject._id)
  }

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm border p-6">
            <h2 className="text-xl font-semibold mb-4">Your Projects</h2>
            <ul className="space-y-3">
              {projects.map(p => (
                <li key={p._id} className={`p-3 rounded-lg border cursor-pointer ${activeProject?._id === p._id ? 'bg-black text-white' : 'bg-white hover:bg-gray-50'}`} onClick={() => setActiveProject(p)}>
                  <div className="font-medium">{p.title}</div>
                  <div className="text-sm opacity-80">{p.status}</div>
                </li>
              ))}
              {projects.length === 0 && (
                <p className="text-gray-500">No projects yet. Create your first one below.</p>
              )}
            </ul>
          </div>

          <form onSubmit={createProject} className="bg-white rounded-xl shadow-sm border p-6 space-y-4">
            <h2 className="text-xl font-semibold">Create a New Project</h2>
            <input value={form.title} onChange={e => setForm(f => ({ ...f, title: e.target.value }))} placeholder="Project title" className="w-full border rounded-lg px-3 py-2" required />
            <textarea value={form.description} onChange={e => setForm(f => ({ ...f, description: e.target.value }))} placeholder="Brief / description" className="w-full border rounded-lg px-3 py-2" rows="3" />
            <input value={form.tags} onChange={e => setForm(f => ({ ...f, tags: e.target.value }))} placeholder="Tags (comma separated)" className="w-full border rounded-lg px-3 py-2" />
            <button className="px-4 py-2 rounded-lg bg-black text-white hover:bg-gray-800">Create Project</button>
          </form>
        </div>

        <div className="bg-white rounded-xl shadow-sm border p-6 flex flex-col">
          <h2 className="text-xl font-semibold mb-4">Project Chat</h2>
          <div className="flex-1 overflow-y-auto space-y-3 mb-4 pr-1">
            {activeProject ? (
              chat.length > 0 ? (
                chat.map(m => (
                  <div key={m._id} className={`p-3 rounded-lg max-w-[80%] ${m.role === 'admin' ? 'bg-indigo-50 border border-indigo-200' : 'bg-gray-100'}`}>
                    <div className="text-xs text-gray-500 mb-1">{m.author_name}</div>
                    <div className="text-gray-800">{m.content}</div>
                  </div>
                ))
              ) : (
                <p className="text-gray-500">No messages yet. Start the conversation below.</p>
              )
            ) : (
              <p className="text-gray-500">Select a project to see the chat.</p>
            )}
          </div>
          <form onSubmit={sendMessage} className="grid grid-cols-[1fr_auto] gap-2">
            <input value={form.description} onChange={e => setForm(f => ({ ...f, description: e.target.value }))} placeholder="Type a message..." className="border rounded-lg px-3 py-2" />
            <button className="px-4 py-2 rounded-lg bg-black text-white hover:bg-gray-800">Send</button>
          </form>
        </div>
      </div>
    </div>
  )
}
