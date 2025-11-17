import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
  const [loading, setLoading] = useState(false)
  const [ok, setOk] = useState(null)

  async function onSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setOk(null)
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())

    try {
      const res = await fetch(`${baseUrl}/inquiry`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      const data = await res.json()
      if (res.ok) setOk(true)
      else setOk(false)
    } catch (e) {
      setOk(false)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-bold text-slate-900 text-center">Contact & Devis</motion.h2>
        <form onSubmit={onSubmit} className="mt-8 bg-white rounded-xl shadow border p-6 grid gap-4">
          <div className="grid md:grid-cols-2 gap-4">
            <input name="name" required placeholder="Nom" className="border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
            <input type="email" name="email" required placeholder="Email" className="border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <input name="phone" placeholder="Téléphone / WhatsApp" className="border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
            <input name="service" placeholder="Service" className="border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <input name="zone" placeholder="Zone" className="border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
            <input name="subject" placeholder="Sujet" className="border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
          </div>
          <textarea name="message" required rows="5" placeholder="Votre message" className="border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <button disabled={loading} className="bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700 disabled:opacity-60">
            {loading ? 'Envoi…' : 'Envoyer la demande'}
          </button>
          {ok === true && <p className="text-green-600">Merci ! Votre demande a bien été envoyée.</p>}
          {ok === false && <p className="text-red-600">Une erreur est survenue. Réessayez.</p>}
        </form>
      </div>
    </section>
  )
}
