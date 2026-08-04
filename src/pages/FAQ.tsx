import { Helmet } from 'react-helmet-async';
import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import Breadcrumb from '@/components/layouts/Breadcrumb';
import SectionHeader from '@/components/shared/SectionHeader';
import { faqs } from '@/data/faqs';

const categories = ['All', 'Admissions', 'Courses', 'Certification', 'Career', 'Campus Life'];

export default function FAQ() {
  const [category, setCategory] = useState('All');
  const [open, setOpen] = useState<string | null>(faqs[0]?.id || null);
  const filtered = useMemo(() => category === 'All' ? faqs : faqs.filter((f) => f.category === category), [category]);
  return (
    <>
      <Helmet><title>FAQ | Ocean Maritime Academy</title><meta name="description" content="Frequently asked questions about admissions, courses, and life at Ocean Maritime Academy." /></Helmet>
      <Breadcrumb items={[{ label: 'FAQ' }]} title="Frequently Asked Questions" subtitle="Find answers to the most common questions about admissions, courses, certification, and campus life at OMA." />
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-6">
          <div className="mb-8 flex flex-wrap gap-2">{categories.map((c) => (<button key={c} onClick={() => setCategory(c)} className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${category === c ? 'bg-primary text-primary-foreground' : 'bg-muted text-foreground hover:bg-accent/10'}`}>{c}</button>))}</div>
          <div className="space-y-3">
            {filtered.map((faq, i) => (
              <motion.div key={faq.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="overflow-hidden rounded-xl border border-border bg-card">
                <button onClick={() => setOpen(open === faq.id ? null : faq.id)} className="flex w-full items-center justify-between gap-4 p-5 text-left"><span className="font-display text-base font-semibold text-foreground">{faq.question}</span><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">{open === faq.id ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}</span></button>
                <motion.div initial={false} animate={{ height: open === faq.id ? 'auto' : 0, opacity: open === faq.id ? 1 : 0 }} className="overflow-hidden"><p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">{faq.answer}</p></motion.div>
              </motion.div>
            ))}
          </div>
          {filtered.length === 0 && <p className="py-12 text-center text-muted-foreground">No FAQs found in this category.</p>}
        </div>
      </section>
      <section className="bg-muted/40 py-16"><div className="mx-auto max-w-3xl px-6 text-center"><SectionHeader eyebrow="Still have questions?" title="We're Here to Help" description="If you couldn't find the answer you were looking for, our team is ready to assist you." /><a href="mailto:info@omabd.com" className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg transition-all hover:scale-105">Contact Us</a></div></section>
    </>
  );
}
