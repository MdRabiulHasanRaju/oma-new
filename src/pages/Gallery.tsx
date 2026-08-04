import { Helmet } from 'react-helmet-async';
import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, ChevronLeft, ChevronRight } from 'lucide-react';
import Breadcrumb from '@/components/layouts/Breadcrumb';
import { galleryItems } from '@/data/gallery';

const categories = ['All', 'Events', 'Training', 'Campus', 'Class Room', 'Office', 'Cadets', 'Ratings', 'Videos'];

export default function Gallery() {
  const [category, setCategory] = useState('All');
  const [lightbox, setLightbox] = useState<number | null>(null);
  const filtered = useMemo(() => category === 'All' ? galleryItems : galleryItems.filter((g) => g.category === category), [category]);
  const closeLightbox = () => setLightbox(null);
  const nextImage = () => setLightbox((p) => p === null ? null : (p + 1) % filtered.length);
  const prevImage = () => setLightbox((p) => p === null ? null : (p - 1 + filtered.length) % filtered.length);

  return (
    <>
      <Helmet><title>Gallery | Ocean Maritime Academy</title><meta name="description" content="Explore photos and videos of campus life, training, and events at Ocean Maritime Academy." /></Helmet>
      <Breadcrumb items={[{ label: 'Gallery' }]} title="Gallery" subtitle="A visual journey through our campus, training facilities, events, and cadet life at OMA." />
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-8 flex flex-wrap gap-2">{categories.map((c) => (<button key={c} onClick={() => setCategory(c)} className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${category === c ? 'bg-primary text-primary-foreground' : 'bg-muted text-foreground hover:bg-accent/10'}`}>{c}</button>))}</div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {filtered.map((item, i) => (
              <motion.div key={item.id} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.05 }} onClick={() => setLightbox(i)} className="group relative cursor-pointer overflow-hidden rounded-xl">
                <img src={item.thumbnail} alt={item.title} loading="lazy" className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-ocean-900/80 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="absolute bottom-0 left-0 right-0 p-3 opacity-0 transition-opacity group-hover:opacity-100"><p className="text-xs font-medium text-white">{item.title}</p><p className="text-[10px] text-white/60">{item.category}</p></div>
                {item.type === 'video' && <span className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-primary backdrop-blur-md"><Play className="h-6 w-6 fill-current" /></span>}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={closeLightbox} className="fixed inset-0 z-[70] flex items-center justify-center bg-black/90 p-4">
            <button onClick={closeLightbox} className="absolute right-5 top-5 text-white" aria-label="Close"><X className="h-8 w-8" /></button>
            <button onClick={(e) => { e.stopPropagation(); prevImage(); }} className="absolute left-5 text-white" aria-label="Previous"><ChevronLeft className="h-10 w-10" /></button>
            <motion.img key={lightbox} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} src={filtered[lightbox].url} alt={filtered[lightbox].title} onClick={(e) => e.stopPropagation()} className="max-h-[80vh] max-w-[90vw] rounded-xl object-contain" />
            <button onClick={(e) => { e.stopPropagation(); nextImage(); }} className="absolute right-5 text-white" aria-label="Next"><ChevronRight className="h-10 w-10" /></button>
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-center text-white"><p className="text-sm font-medium">{filtered[lightbox].title}</p></div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
