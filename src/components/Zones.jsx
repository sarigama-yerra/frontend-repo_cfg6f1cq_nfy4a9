import { motion } from 'framer-motion'

const zones = ['Paris', 'Boulogne', 'Neuilly', 'Issy', 'Montrouge', 'Levallois', 'Clichy']

export default function Zones() {
  return (
    <section id="zones" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-bold text-slate-900 text-center">Zones d’intervention</motion.h2>
        <p className="text-center text-slate-600 mt-2">Déplacement rapide sur toute l’Île-de-France</p>
        <div className="mt-8 flex flex-wrap gap-3 justify-center">
          {zones.map((z, i) => (
            <motion.span key={z} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }} className="px-4 py-2 bg-slate-100 rounded-full border text-slate-700 hover:bg-blue-50 hover:border-blue-300">
              {z}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  )
}
