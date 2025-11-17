import { motion } from 'framer-motion'
import { Phone, MessageCircle } from 'lucide-react'

export default function Hero({ name = 'Plombier Expert', phone = '+33 6 12 34 56 78', whatsapp = '+33 6 12 34 56 78' }) {
  return (
    <section className="relative overflow-hidden min-h-[80vh] flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-cyan-50" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-cyan-200/40 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-200/40 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900"
        >
          {name}<span className="text-cyan-600"> 24/7</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.8 }}
          className="mt-4 text-lg md:text-xl text-slate-600 max-w-2xl"
        >
          Dépannage rapide, fuites, débouchage, chauffe-eau, installation et entretien. Intervention express et devis clair.
        </motion.p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <a href={`tel:${phone}`} className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-cyan-600 text-white font-semibold shadow-sm hover:bg-cyan-700 transition">
            <Phone size={18} /> Appeler maintenant
          </a>
          <a target="_blank" href={`https://wa.me/${whatsapp.replace(/\D/g,'')}`} className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-green-600 text-white font-semibold shadow-sm hover:bg-green-700 transition">
            <MessageCircle size={18} /> WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
