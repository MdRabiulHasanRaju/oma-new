import { Helmet } from 'react-helmet-async';
import { useState, useMemo } from 'react';
import Breadcrumb from '@/components/layouts/Breadcrumb';
import NewsCard from '@/components/shared/NewsCard';
import { news } from '@/data/news';

const categories = ['All', 'Achievement', 'Partnership', 'Placement', 'Community', 'Accreditation'];

export default function News() {
  const [category, setCategory] = useState('All');
  const [page, setPage] = useState(1);
  const perPage = 6;
  const filtered = useMemo(() => category === 'All' ? news : news.filter((n) => n.category === category), [category]);
  const paginated = filtered.slice((page - 1) * perPage, page * perPage);
  const totalPages = Math.ceil(filtered.length / perPage);
  return (
    <>
      <Helmet><title>News & Events | Ocean Maritime Academy</title><meta name="description" content="Latest news, events, and achievements at Ocean Maritime Academy." /></Helmet>
      <Breadcrumb items={[{ label: 'News & Events' }]} title="News & Events" subtitle="Discover the latest happenings, achievements, and events at Ocean Maritime Academy." />
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-8 flex flex-wrap gap-2">{categories.map((c) => (<button key={c} onClick={() => { setCategory(c); setPage(1); }} className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${category === c ? 'bg-primary text-primary-foreground' : 'bg-muted text-foreground hover:bg-accent/10'}`}>{c}</button>))}</div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{paginated.map((n, i) => (<NewsCard key={n.id} news={n} index={i} />))}</div>
          {totalPages > 1 && (<div className="mt-10 flex items-center justify-center gap-2">{Array.from({ length: totalPages }).map((_, i) => (<button key={i} onClick={() => setPage(i + 1)} className={`flex h-10 w-10 items-center justify-center rounded-lg text-sm font-medium transition-colors ${page === i + 1 ? 'bg-primary text-primary-foreground' : 'border border-border hover:bg-accent/10'}`}>{i + 1}</button>))}</div>)}
        </div>
      </section>
    </>
  );
}
