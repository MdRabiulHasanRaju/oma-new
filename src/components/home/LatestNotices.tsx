import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Bell, ArrowRight, Pin } from 'lucide-react';
import { notices } from '@/data/notices';

export default function LatestNotices() {
  const latest = notices.slice(0, 5);
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 lg:grid-cols-[1fr_2fr]">
          <div>
            <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent"><span className="h-1.5 w-1.5 rounded-full bg-accent" /> Stay Updated</span>
            <h2 className="font-display text-3xl font-extrabold tracking-tight md:text-4xl">Latest Notices</h2>
            <p className="mt-4 text-muted-foreground">Keep up with the latest announcements, admission notices, examination schedules, and campus events.</p>
            <Link to="/notices" className="mt-6 inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-semibold transition-colors hover:border-accent hover:text-accent">View All Notices <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <div className="space-y-3">
            {latest.map((notice, i) => (
              <motion.div key={notice.id} initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                <Link to="/notices" className="group flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-all hover:border-accent/40 hover:shadow-md">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">{notice.pinned ? <Pin className="h-5 w-5" /> : <Bell className="h-5 w-5" />}</span>
                  <div className="flex-1">
                    <h3 style={{fontFamily: "Hind Siliguri"}} className="font-medium text-foreground transition-colors group-hover:text-accent">{notice.title}</h3>
                    <p className="text-xs text-muted-foreground">{new Date(notice.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })} · {notice.category}</p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
