import Hero from './components/Hero'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Header from './components/Header'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 scroll-smooth">
      <Header />
      <main className="pt-16">
        <Hero />
        <Services />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <footer className="py-8 text-center text-slate-500 text-sm">© {new Date().getFullYear()} Plombier indépendant — Tous droits réservés.</footer>
    </div>
  )
}

export default App
