import { Helmet } from 'react-helmet-async';
import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Download, FileText } from 'lucide-react';
import Breadcrumb from '@/components/layouts/Breadcrumb';
import { downloads } from '@/data/site';

const categories = ['All', 'Admissions', 'Courses', 'General'];

export default function Downloads() {
  const [category, setCategory] = useState('All');
  const filtered = useMemo(() => category === 'All' ? downloads : downloads.filter((d) => d.category === category), [category]);
  return (
    <>
      <Helmet><title>Downloads | Ocean Maritime Academy</title><meta name="description" content="Download admission forms, brochures, course schedules, and other documents from Ocean Maritime Academy." /></Helmet>
      <Breadcrumb items={[{ label: 'Downloads' }]} title="Downloads" subtitle="Access admission forms, course brochures, fee structures, and other important documents." />
      <section className="py-16">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-8 flex flex-wrap gap-2">{categories.map((c) => (<button key={c} onClick={() => setCategory(c)} className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${category === c ? 'bg-primary text-primary-foreground' : 'bg-muted text-foreground hover:bg-accent/10'}`}>{c}</button>))}</div>
          <div className="grid gap-4 sm:grid-cols-2">
            {filtered.map((item, i) => (
              <motion.div key={item.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="group flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-all hover:border-accent/40 hover:shadow-md">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary"><FileText className="h-6 w-6" /></span>
                <div className="flex-1"><h3 className="font-display text-sm font-bold text-foreground">{item.title}</h3><p className="text-xs text-muted-foreground">{item.format} · {item.fileSize} · {item.category}</p></div>
                <a href={item.url} className="flex h-10 w-10 items-center justify-center rounded-lg border border-border transition-colors group-hover:border-accent group-hover:bg-accent group-hover:text-accent-foreground" aria-label={`Download ${item.title}`}><Download className="h-5 w-5" /></a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
