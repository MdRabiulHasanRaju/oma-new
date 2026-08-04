import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SectionHeaderProps { eyebrow?: string; title: string; description?: string; align?: 'left' | 'center'; light?: boolean }

export default function SectionHeader({ eyebrow, title, description, align = 'center', light = false }: SectionHeaderProps) {
  return (
    <div className={cn('mb-12 max-w-3xl', align === 'center' && 'mx-auto text-center')}>
      {eyebrow && (
        <motion.span initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className={cn('mb-3 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider', light ? 'bg-white/10 text-accent' : 'bg-accent/10 text-accent')}>
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />{eyebrow}
        </motion.span>
      )}
      <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className={cn('font-display text-3xl font-extrabold tracking-tight md:text-4xl', light ? 'text-white' : 'text-foreground')}>{title}</motion.h2>
      {description && <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className={cn('mt-4 text-base leading-relaxed', light ? 'text-white/70' : 'text-muted-foreground')}>{description}</motion.p>}
    </div>
  );
}
