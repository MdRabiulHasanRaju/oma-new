import { Helmet } from 'react-helmet-async';
import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, SlidersHorizontal } from 'lucide-react';
import Breadcrumb from '@/components/layouts/Breadcrumb';
import CourseCard from '@/components/shared/CourseCard';
import { courses } from '@/data/courses';

const levels = ['All', 'Pre-Sea', 'Post-Sea', 'STCW', 'Specialized', 'Degree'] as const;
const categories = ['All', 'Navigation', 'Engineering', 'Safety', 'Communication', 'Security', 'Degree'];

export default function Courses() {
  const [searchParams] = useSearchParams();
  const initialLevel = searchParams.get('level') || 'All';
  const [query, setQuery] = useState('');
  const [level, setLevel] = useState<string>(initialLevel);
  const [category, setCategory] = useState('All');

  const filtered = useMemo(() => courses.filter((c) => {
    const mq = c.title.toLowerCase().includes(query.toLowerCase()) || c.description.toLowerCase().includes(query.toLowerCase());
    const ml = level === 'All' || c.level === level;
    const mc = category === 'All' || c.category === category;
    return mq && ml && mc;
  }), [query, level, category]);

  return (
    <>
      <Helmet><title>Courses | Ocean Maritime Academy</title><meta name="description" content="Explore all maritime courses at Ocean Maritime Academy — Pre-Sea, Post-Sea, STCW, specialized, and degree programs." /></Helmet>
      <Breadcrumb items={[{ label: 'Courses' }]} title="Our Courses" subtitle="Internationally accredited maritime training programs designed for every stage of your seafaring career." />
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 space-y-4">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search courses by name or keyword..." className="w-full rounded-xl border border-border bg-card py-3.5 pl-12 pr-4 text-sm focus:border-accent focus:outline-none" />
            </div>
            <div className="flex flex-col gap-4 rounded-xl border border-border bg-card p-4">
              <div className="flex items-center gap-2"><SlidersHorizontal className="h-4 w-4 text-muted-foreground" /><span className="text-sm font-semibold">Filters</span></div>
              <div className="flex flex-wrap gap-2">{levels.map((l) => (<button key={l} onClick={() => setLevel(l)} className={`rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${level === l ? 'bg-primary text-primary-foreground' : 'bg-muted text-foreground hover:bg-accent/10'}`}>{l}</button>))}</div>
              <div className="flex flex-wrap gap-2">{categories.map((c) => (<button key={c} onClick={() => setCategory(c)} className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${category === c ? 'bg-accent text-accent-foreground' : 'bg-muted text-foreground hover:bg-accent/10'}`}>{c}</button>))}</div>
            </div>
          </div>
          <p className="mb-6 text-sm text-muted-foreground">Showing <span className="font-semibold text-foreground">{filtered.length}</span> course{filtered.length !== 1 ? 's' : ''}</p>
          {filtered.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{filtered.map((c, i) => (<CourseCard key={c.id} course={c} index={i} />))}</div>
          ) : (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="rounded-2xl border border-border bg-card p-12 text-center"><p className="text-lg font-semibold text-foreground">No courses found</p><p className="mt-2 text-sm text-muted-foreground">Try adjusting your search or filters.</p></motion.div>
          )}
        </div>
      </section>
    </>
  );
}
