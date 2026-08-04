import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { Award, Users, BookOpen, TrendingUp } from 'lucide-react';
import { stats } from '@/data/stats';

const iconMap = { Award, Users, BookOpen, TrendingUp };

export default function StatsCounter() {
  return (
    <section className="relative overflow-hidden maritime-gradient py-16 md:py-20">
      <div className="absolute inset-0 bg-grid-pattern bg-[size:40px_40px] opacity-10" />
      <div className="absolute -left-20 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-accent/20 blur-3xl" />
      <div className="absolute -right-20 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-ocean-300/20 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {stats.map((stat, i) => {
            const Icon = iconMap[stat.icon as keyof typeof iconMap] || Award;
            return (
              <motion.div key={stat.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex flex-col items-center rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-md">
                <span className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-accent"><Icon className="h-6 w-6" /></span>
                <div className="font-display text-4xl font-extrabold text-white lg:text-5xl"><CountUp end={stat.value} suffix={stat.suffix} duration={2.5} enableScrollSpy scrollSpyOnce /></div>
                <p className="mt-1 text-sm text-white/70">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
