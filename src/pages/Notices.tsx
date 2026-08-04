import { Helmet } from 'react-helmet-async';
import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import Breadcrumb from '@/components/layouts/Breadcrumb';
import NoticeCard from '@/components/shared/NoticeCard';
import { notices } from '@/data/notices';

const categories = ['All', 'Admission', 'Exam', 'Event', 'General', 'Holiday'];

export default function Notices() {
  const [category, setCategory] = useState('All');
  const filtered = useMemo(() => category === 'All' ? notices : notices.filter((n) => n.category === category), [category]);
  return (
    <>
      <Helmet>
        <title>Notice Board | Ocean Maritime Academy</title>
        <meta name="description" content="Official notices and announcements from Ocean Maritime Academy." />
      </Helmet>

      <Breadcrumb items={[{ label: 'Notice Board' }]} title="Notice Board" subtitle="Stay updated with the latest official announcements, admission notices, exam schedules, and campus events." />
      <section className="py-16">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-8 flex flex-wrap gap-2">
            {categories.map((c) => (
              <button key={c} onClick={() => setCategory(c)} className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${category === c ? 'bg-primary text-primary-foreground' : 'bg-muted text-foreground hover:bg-accent/10'}`}>
                {c}
              </button>
            ))}
            </div>

          <div className="space-y-4">
            {filtered.map((n, i) => (<NoticeCard key={n.id} notice={n} index={i} />))}
          </div>

          {filtered.length === 0 && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="rounded-2xl border border-border bg-card p-12 text-center">
            <p className="text-muted-foreground">No notices found in this category.</p>
          </motion.div>}

        </div>
      </section>
    </>
  );
}
