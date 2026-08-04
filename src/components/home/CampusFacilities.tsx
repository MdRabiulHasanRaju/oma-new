import { motion } from 'framer-motion';
import SectionHeader from '@/components/shared/SectionHeader';
import { facilities } from '@/data/facilities';
import { Ship, Cog, Flame, Waves, Wrench, Radio, BookOpen, Building2 } from 'lucide-react';

const iconMap = { Ship, Cog, Flame, Waves, Wrench, Radio, BookOpen, Building2 };

export default function CampusFacilities() {
  return (
    <section className="bg-muted/40 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader eyebrow="Infrastructure" title="World-Class Campus Facilities" description="Our campus is equipped with industry-standard simulators, workshops, and training grounds that provide hands-on, realistic maritime education." />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {facilities.map((f, i) => {
            const Icon = iconMap[f.icon as keyof typeof iconMap] || Ship;
            return (
              <motion.div key={f.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:shadow-xl">
                <div className="relative h-40 overflow-hidden">
                  <img src={f.image} alt={f.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ocean-900/80 to-transparent" />
                  <span className="absolute left-3 top-3 flex h-10 w-10 items-center justify-center rounded-xl bg-white/90 text-primary backdrop-blur-md"><Icon className="h-5 w-5" /></span>
                </div>
                <div className="p-4"><h3 className="mb-1.5 font-display text-base font-bold text-foreground">{f.name}</h3><p className="line-clamp-2 text-xs text-muted-foreground">{f.description}</p></div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
