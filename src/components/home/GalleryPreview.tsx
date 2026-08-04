import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Play } from 'lucide-react';
import SectionHeader from '@/components/shared/SectionHeader';
import { galleryItems } from '@/data/gallery';

export default function GalleryPreview() {
  const preview = galleryItems.filter((g) => g.type === 'image').slice(0, 6);
  return (
    <section className="bg-muted/40 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-end justify-between gap-6 md:flex-row">
          <SectionHeader align="left" eyebrow="Gallery" title="Moments at OMA" description="A visual journey through our campus, training facilities, events, and cadet life." />
          <Link to="/gallery" className="group flex shrink-0 items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-semibold transition-colors hover:border-accent hover:text-accent">View Full Gallery <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></Link>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {preview.map((item, i) => (
            <motion.div key={item.id} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className={`group relative overflow-hidden rounded-xl ${i === 0 ? 'col-span-2 row-span-2 md:col-span-2 md:row-span-2' : ''}`}>
              <img src={item.thumbnail} alt={item.title} loading="lazy" className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${i === 0 ? 'h-full min-h-[200px]' : 'h-32 md:h-36'}`} />
              <div className="absolute inset-0 bg-gradient-to-t from-ocean-900/80 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="absolute bottom-0 left-0 right-0 p-3 opacity-0 transition-opacity group-hover:opacity-100"><p className="text-xs font-medium text-white">{item.title}</p></div>
              {item.type === 'video' && <span className="absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-primary backdrop-blur-md"><Play className="h-5 w-5 fill-current" /></span>}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
