import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star } from 'lucide-react'

const items = [
  { name: 'Claire M.', text: 'Intervention rapide et très pro. Fuite réparée en 30 minutes !', rating: 5 },
  { name: 'Nicolas R.', text: 'Prix honnêtes, explications claires. Je recommande.', rating: 5 },
  { name: 'Sarah M.', text: 'Très réactif pour une urgence le dimanche. Merci !', rating: 5 },
]

export default function Testimonials() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % items.length), 4000)
    return () => clearInterval(id)
  }, [])

  return (
    <section id="avis" className="py-20 bg-gradient-to-b from-cyan-50 to-white">
      <div className="container mx-auto px-6 max-w-3xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-slate-900"
        >
          Avis clients
        </motion.h2>

        <div className="mt-8 relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-2xl p-8 shadow-xl border border-slate-100"
            >
              <div className="flex justify-center gap-1 mb-3">
                {Array.from({ length: items[index].rating }).map((_, i) => (
                  <Star key={i} className="text-yellow-500 fill-yellow-400" size={18} />
                ))}
              </div>
              <p className="text-slate-700 text-lg">“{items[index].text}”</p>
              <p className="mt-3 text-slate-500">{items[index].name}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
