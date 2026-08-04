import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import type { MessageContent } from '@/types';

interface MessageSectionProps { data: MessageContent; eyebrow: string; title: string; index?: number }

export default function MessageSection({ data, eyebrow, title, index = 0 }: MessageSectionProps) {
  const isEven = index % 2 === 0;
  return (
    <div className={`grid items-center gap-8 lg:grid-cols-2 ${isEven ? '' : 'lg:[direction:rtl]'}`}>
      <motion.div initial={{ opacity: 0, x: isEven ? -30 : 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative lg:[direction:ltr]">
        <div className="relative overflow-hidden rounded-2xl">
          <img src={data.image} alt={data.name} loading="lazy" className="h-[600px] w-full object-cover object-top" />
          <div className="absolute inset-0 bg-gradient-to-t from-ocean-900/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white"><p className="font-display text-xl font-bold">{data.name}</p><p className="text-sm text-white/80">{data.role}</p></div>
        </div>
      </motion.div>
      <motion.div initial={{ opacity: 0, x: isEven ? 30 : -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:[direction:ltr]">
        <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent"><span className="h-1.5 w-1.5 rounded-full bg-accent" /> {eyebrow}</span>
        <h2 className="mb-4 font-display text-2xl font-extrabold tracking-tight md:text-3xl">{title}</h2>
        <Quote className="mb-4 h-8 w-8 text-accent/40" />
        <p className="text-base leading-relaxed text-muted-foreground">{data.message}</p>
        <div className="mt-6"><p className="font-display text-lg font-bold text-foreground">{data.signature}</p><p className="text-sm text-muted-foreground">{data.role}</p></div>
      </motion.div>
    </div>
  );
}
