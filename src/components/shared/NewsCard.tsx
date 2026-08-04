import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';
import type { NewsItem } from '@/types';

export default function NewsCard({ news, index = 0 }: { news: NewsItem; index?: number }) {
  return (
    <motion.article initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:shadow-xl">
      <div className="relative h-52 overflow-hidden">
        <img src={news.image} alt={news.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-ocean-900/60 to-transparent" />
        <span className="absolute left-3 top-3 rounded-full bg-accent px-2.5 py-1 text-xs font-semibold text-accent-foreground">{news.category}</span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-2 flex items-center gap-1.5 text-xs text-muted-foreground"><Calendar className="h-3.5 w-3.5" /> {new Date(news.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</div>
        <h3 className="mb-2 font-display text-lg font-bold leading-snug text-foreground transition-colors group-hover:text-accent">{news.title}</h3>
        <p className="mb-4 line-clamp-3 flex-1 text-sm text-muted-foreground">{news.excerpt}</p>
        <Link to="/news" className="flex items-center gap-1.5 text-sm font-semibold text-accent transition-all hover:gap-2.5">Read More <ArrowRight className="h-4 w-4" /></Link>
      </div>
    </motion.article>
  );
}
