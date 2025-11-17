import { motion } from 'framer-motion'
import { Wrench, Droplets, Flame, Pipeline, ShowerHead, Zap } from 'lucide-react'

const items = [
  { icon: Wrench, title: 'Réparations & Fuites', desc: 'Détection et réparation de fuites, robinetterie, joints, siphons.' },
  { icon: Droplets, title: 'Débouchage', desc: 'Canalisations, WC, éviers, douches. Intervention rapide et propre.' },
  { icon: Flame, title: 'Chauffe-eau & Chaudière', desc: 'Installation, entretien, dépannage toutes marques.' },
  { icon: Pipeline, title: 'Installation', desc: 'Cuisine, salle de bain, robinets, WC suspendu, adoucisseur.' },
  { icon: ShowerHead, title: 'Rénovation Salle de Bain', desc: 'Rénovation partielle/complète, design et finitions soignées.' },
  { icon: Zap, title: 'Urgences 24/7', desc: 'Intervention de nuit et week-end en cas de dégâts des eaux.' },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-slate-900 text-center"
        >
          Services
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mt-3 text-slate-600 text-center max-w-2xl mx-auto"
        >
          Des prestations complètes pour particuliers et professionnels.
        </motion.p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((Item, idx) => (
            <motion.div
              key={Item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
              className="group rounded-2xl border border-slate-200 p-6 bg-white/70 backdrop-blur hover:shadow-xl transition"
            >
              <Item.icon className="text-cyan-600" />
              <h3 className="mt-4 font-semibold text-slate-900 text-lg">{Item.title}</h3>
              <p className="mt-2 text-slate-600 text-sm">{Item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
