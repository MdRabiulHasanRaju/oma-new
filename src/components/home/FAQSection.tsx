import { motion } from 'framer-motion';
import SectionHeader from '@/components/shared/SectionHeader';
import { faqs } from '@/data/faqs';
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FAQSection() {
  const [open, setOpen] = useState<string | null>(faqs[0]?.id || null);
  const display = faqs.slice(0, 6);
  return (
    <section className="bg-muted/40 py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-6">
        <SectionHeader eyebrow="FAQ" title="Frequently Asked Questions" description="Find answers to the most common questions about admissions, courses, and life at OMA." />
        <div className="space-y-3">
          {display.map((faq, i) => (
            <motion.div key={faq.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="overflow-hidden rounded-xl border border-border bg-card">
              <button onClick={() => setOpen(open === faq.id ? null : faq.id)} className="flex w-full items-center justify-between gap-4 p-5 text-left">
                <span className="font-display text-base font-semibold text-foreground">{faq.question}</span>
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">{open === faq.id ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}</span>
              </button>
              <motion.div initial={false} animate={{ height: open === faq.id ? 'auto' : 0, opacity: open === faq.id ? 1 : 0 }} className="overflow-hidden">
                <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">{faq.answer}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
        <div className="mt-8 text-center"><Link to="/faq" className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-semibold transition-colors hover:border-accent hover:text-accent">View All FAQs</Link></div>
      </div>
    </section>
  );
}
