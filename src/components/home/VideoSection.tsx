import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

export default function VideoSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative overflow-hidden rounded-3xl">
          <div className="relative h-[400px] md:h-[500px]">
            <img src="https://images.pexels.com/photos/1637965/pexels-photo-1637965.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="Life at OMA" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-ocean-900/90 via-ocean-900/50 to-transparent" />
            <div className="absolute inset-0 flex items-center">
              <div className="px-8 md:px-16">
                <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-md">Campus Life</span>
                <h2 className="mb-4 max-w-xl font-display text-3xl font-extrabold text-white md:text-4xl">A Glimpse Into Life at Ocean Maritime Academy</h2>
                <p className="mb-6 max-w-lg text-white/70">From rigorous training to memorable campus moments — experience what makes OMA a truly transformative journey.</p>
                <button className="group flex items-center gap-3 rounded-full bg-white/10 px-6 py-3 backdrop-blur-md transition-all hover:bg-accent">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-accent-foreground"><Play className="h-5 w-5 fill-current" /></span>
                  <span className="text-sm font-semibold text-white">Watch Video</span>
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
