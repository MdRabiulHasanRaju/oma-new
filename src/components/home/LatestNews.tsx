import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionHeader from '@/components/shared/SectionHeader';
import NewsCard from '@/components/shared/NewsCard';
import { news } from '@/data/news';

export default function LatestNews() {
  const latest = news.slice(0, 3);
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-end justify-between gap-6 md:flex-row">
          <SectionHeader align="left" eyebrow="News Room" title="Latest News & Events" description="Stay informed about the latest achievements, partnerships, and happenings at Ocean Maritime Academy." />
          <Link to="/news" className="group flex shrink-0 items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-semibold transition-colors hover:border-accent hover:text-accent">All News <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {latest.map((n, i) => (<NewsCard key={n.id} news={n} index={i} />))}
        </div>
      </div>
    </section>
  );
}
