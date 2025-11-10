export function About() {
  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 prose prose-indigo">
        <h1>About Us</h1>
        <p>We are a boutique freelance studio crafting modern apps, websites, and brands. We partner with founders and teams to ship fast, iterate, and win users.</p>
        <h2>What we do</h2>
        <ul>
          <li>Product design and prototyping</li>
          <li>Full‑stack web apps</li>
          <li>Mobile experiences</li>
          <li>Brand and visual identity</li>
        </ul>
      </div>
    </div>
  )
}

export function Contact() {
  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
        <form className="bg-white rounded-xl shadow-sm border p-6 grid gap-4">
          <input className="border rounded-lg px-3 py-2" placeholder="Your name" />
          <input className="border rounded-lg px-3 py-2" placeholder="Email address" />
          <textarea className="border rounded-lg px-3 py-2" placeholder="How can we help?" rows="5" />
          <button className="px-4 py-2 rounded-lg bg-black text-white w-fit">Send</button>
        </form>
      </div>
    </div>
  )
}

export function Terms() {
  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 prose">
        <h1>Terms & Conditions</h1>
        <p>These terms govern the use of this website and our services. By using this site, you agree to these terms.</p>
        <h2>Use of Service</h2>
        <p>You agree not to misuse the service or help anyone else to do so.</p>
        <h2>Privacy</h2>
        <p>We respect your privacy and handle your data responsibly.</p>
      </div>
    </div>
  )
}
