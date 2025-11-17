import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  { q: 'Intervenez-vous en urgence ?', a: 'Oui, 24/7 pour les dégâts des eaux et fuites importantes.' },
  { q: 'Quels secteurs couvrez-vous ?', a: 'Nous intervenons dans votre ville et alentours proches.' },
  { q: 'Devis gratuit ?', a: 'Oui, devis clair et transparent avant chaque intervention.' },
]

export default function FAQ() {
  const [open, setOpen] = useState(null)

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-3xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-slate-900 text-center"
        >
          FAQ
        </motion.h2>

        <div className="mt-10 space-y-3">
          {faqs.map((item, idx) => (
            <div key={idx} className="border border-slate-200 rounded-xl overflow-hidden">
              <button onClick={() => setOpen(open === idx ? null : idx)} className="w-full text-left px-4 py-3 font-medium">
                {item.q}
              </button>
              <AnimatePresence initial={false}>
                {open === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="px-4 pb-4 text-slate-600"
                  >
                    {item.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
