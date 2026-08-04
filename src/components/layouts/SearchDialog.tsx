import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, ArrowRight } from 'lucide-react';
import { useSearch } from '@/context/SearchContext';
import { courses } from '@/data/courses';
import { notices } from '@/data/notices';
import { news } from '@/data/news';

interface SearchResult { title: string; href: string; category: string }

export default function SearchDialog() {
  const { isSearchOpen, closeSearch } = useSearch();
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => { if (!isSearchOpen) setQuery(''); }, [isSearchOpen]);
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') closeSearch(); };
    if (isSearchOpen) { document.addEventListener('keydown', handler); document.body.style.overflow = 'hidden'; }
    return () => { document.removeEventListener('keydown', handler); document.body.style.overflow = ''; };
  }, [isSearchOpen, closeSearch]);

  const results: SearchResult[] = query
    ? [
        ...courses.filter((c) => c.title.toLowerCase().includes(query.toLowerCase())).map((c) => ({ title: c.title, href: `/courses/${c.slug}`, category: 'Course' })),
        ...notices.filter((n) => n.title.toLowerCase().includes(query.toLowerCase())).map((n) => ({ title: n.title, href: '/notices', category: 'Notice' })),
        ...news.filter((n) => n.title.toLowerCase().includes(query.toLowerCase())).map((n) => ({ title: n.title, href: '/news', category: 'News' })),
      ].slice(0, 8)
    : [];

  return (
    <AnimatePresence>
      {isSearchOpen && (
        <>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={closeSearch} className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm" />
          <motion.div initial={{ opacity: 0, y: -20, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -20, scale: 0.97 }} className="fixed left-1/2 top-20 z-[60] w-full max-w-2xl -translate-x-1/2 px-4">
            <div className="glass-strong overflow-hidden rounded-2xl border border-border shadow-2xl">
              <div className="flex items-center gap-3 border-b border-border px-5 py-4">
                <Search className="h-5 w-5 text-muted-foreground" />
                <input autoFocus value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search courses, notices, news..." className="flex-1 bg-transparent text-foreground outline-none placeholder:text-muted-foreground" />
                <button onClick={closeSearch} aria-label="Close search"><X className="h-5 w-5 text-muted-foreground" /></button>
              </div>
              {results.length > 0 && (
                <div className="max-h-80 overflow-y-auto p-2">
                  {results.map((r, i) => (
                    <button key={i} onClick={() => { navigate(r.href); closeSearch(); }} className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-left transition-colors hover:bg-accent/10">
                      <div><p className="text-sm font-medium text-foreground">{r.title}</p><p className="text-xs text-muted-foreground">{r.category}</p></div>
                      <ArrowRight className="h-4 w-4 text-muted-foreground" />
                    </button>
                  ))}
                </div>
              )}
              {query && results.length === 0 && <div className="px-5 py-8 text-center text-sm text-muted-foreground">No results found for "{query}"</div>}
              {!query && <div className="px-5 py-8 text-center text-sm text-muted-foreground">Start typing to search across courses, notices, and news</div>}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
