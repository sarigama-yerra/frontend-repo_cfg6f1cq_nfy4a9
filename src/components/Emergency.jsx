import { motion } from 'framer-motion'
import { AlarmClockCheck } from 'lucide-react'

export default function Emergency() {
  return (
    <section id="emergency" className="py-20 bg-gradient-to-r from-blue-600 to-sky-500 text-white">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <h2 className="text-3xl md:text-4xl font-bold">Urgences 24/7</h2>
          <p className="mt-3 text-blue-50">Intervention rapide jour et nuit pour dégâts des eaux, fuites, débouchage et pannes de chauffe-eau.</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="justify-self-end">
          <div className="flex items-center gap-3 bg-white/10 backdrop-blur px-5 py-3 rounded-xl">
            <AlarmClockCheck />
            <div>
              <div className="font-semibold">Délais moyen</div>
              <div className="text-sm text-blue-100">30 - 60 minutes</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
