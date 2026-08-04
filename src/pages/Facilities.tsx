import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Ship, Cog, Flame, Waves, Wrench, Radio, BookOpen, Building2 } from 'lucide-react';
import Breadcrumb from '@/components/layouts/Breadcrumb';
import SectionHeader from '@/components/shared/SectionHeader';
import { facilities } from '@/data/facilities';

const iconMap = { Ship, Cog, Flame, Waves, Wrench, Radio, BookOpen, Building2 };

export default function Facilities() {
  return (
    <>
      <Helmet><title>Training Facilities | Ocean Maritime Academy</title><meta name="description" content="Explore the world-class training facilities and infrastructure at Ocean Maritime Academy." /></Helmet>
      <Breadcrumb items={[{ label: 'Training Facilities' }]} title="Training Facilities" subtitle="Industry-standard simulators, workshops, and training grounds that provide hands-on, realistic maritime education." />
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="space-y-8">
            {facilities.map((f, i) => {
              const Icon = iconMap[f.icon as keyof typeof iconMap] || Ship;
              const isEven = i % 2 === 0;
              return (<motion.div key={f.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className={`grid items-center gap-6 lg:grid-cols-2 ${isEven ? '' : 'lg:[direction:rtl]'}`}><div className={`relative overflow-hidden rounded-2xl ${isEven ? '' : 'lg:[direction:ltr]'}`}><img src={f.image} alt={f.name} loading="lazy" className="h-64 w-full object-cover transition-transform duration-500 hover:scale-105" /></div><div className={isEven ? '' : 'lg:[direction:ltr]'}><span className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl maritime-gradient text-white shadow-md"><Icon className="h-6 w-6" /></span><h3 className="mb-3 font-display text-xl font-bold">{f.name}</h3><p className="text-sm leading-relaxed text-muted-foreground">{f.description}</p></div></motion.div>);
            })}
          </div>
        </div>
      </section>
      <section className="bg-muted/40 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader eyebrow="Quality Assurance" title="Built to International Standards" description="All our facilities are designed and maintained in compliance with STCW, IMO, and ISO standards, ensuring our cadets train on equipment that mirrors real-world maritime operations." />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[{ label: 'STCW Compliant', value: '100%' }, { label: 'Simulator Hours', value: '500+' }, { label: 'Workshop Area', value: '15,000 sqft' }, { label: 'Campus Area', value: '15 Acres' }].map((item, i) => (<motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="rounded-2xl border border-border bg-card p-6 text-center shadow-sm"><p className="font-display text-3xl font-extrabold text-accent">{item.value}</p><p className="mt-1 text-sm text-muted-foreground">{item.label}</p></motion.div>))}
          </div>
        </div>
      </section>
    </>
  );
}
