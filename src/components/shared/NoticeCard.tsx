import { motion } from 'framer-motion';
import { Calendar, Pin } from 'lucide-react';
import type { Notice } from '@/types';

const categoryColors: Record<string, string> = {
  Admission: 'bg-success/10 text-success', Exam: 'bg-warning/10 text-warning', Event: 'bg-accent/10 text-accent', General: 'bg-primary/10 text-primary', Holiday: 'bg-destructive/10 text-destructive',
};

export default function NoticeCard({ notice, index = 0 }: { notice: Notice; index?: number }) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06 }} className="group relative flex gap-4 rounded-2xl border border-border bg-card p-5 transition-all hover:border-accent/40 hover:shadow-lg">
      {notice.pinned && <Pin className="absolute right-4 top-4 h-4 w-4 text-accent" />}
      <div className="flex flex-col items-center justify-center rounded-xl bg-primary/5 px-4 py-3 text-center">
        <span className="font-display text-2xl font-extrabold text-primary">{new Date(notice.date).getDate()}</span>
        <span className="text-xs font-medium uppercase text-muted-foreground">{new Date(notice.date).toLocaleDateString('en-US', { month: 'short' })}</span>
      </div>
      <div className="flex-1">
        <div className="mb-2 flex flex-wrap items-center gap-2">
          <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${categoryColors[notice.category]}`}>{notice.category}</span>
          <span className="flex items-center gap-1 text-xs text-muted-foreground"><Calendar className="h-3 w-3" /> {new Date(notice.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
        </div>
        <h3 style={{fontFamily: "Hind Siliguri"}} className="mb-1.5 font-display text-base font-bold leading-snug text-foreground transition-colors group-hover:text-accent">{notice.title}</h3>
        <p style={{fontFamily: "Hind Siliguri"}} className="line-clamp-2 text-sm text-muted-foreground">{notice.excerpt}</p>
      </div>
    </motion.div>
  );
}
