import { motion } from 'framer-motion';
import SectionHeader from '@/components/shared/SectionHeader';
import { testimonials } from '@/data/site';
import { Star, Quote } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-ocean-900 py-16 md:py-24">
      <div className="absolute inset-0 bg-grid-pattern bg-[size:40px_40px] opacity-10" />
      <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-accent/15 blur-3xl" />
      <div className="absolute -right-20 bottom-20 h-72 w-72 rounded-full bg-ocean-500/15 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeader light eyebrow="Success Stories" title="Hear From Our Alumni" description="Our graduates are serving with distinction on vessels across the globe. Here is what they have to say about their journey at OMA." />
        <Swiper modules={[Autoplay, Pagination]} autoplay={{ delay: 5000, disableOnInteraction: false }} loop pagination={{ clickable: true }} spaceBetween={24} slidesPerView={1} breakpoints={{ 768: { slidesPerView: 2 } }} className="!pb-12">
          {testimonials.map((t) => (
            <SwiperSlide key={t.id}>
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
                <Quote className="mb-4 h-8 w-8 text-accent" />
                <p className="mb-6 flex-1 text-sm leading-relaxed text-white/80">"{t.quote}"</p>
                <div className="flex items-center gap-3">
                  <img src={t.image} alt={t.name} loading="lazy" className="h-12 w-12 rounded-full object-cover" />
                  <div>
                    <p className="font-display text-sm font-bold text-white">{t.name}</p>
                    <p className="text-xs text-white/60">{t.role} · {t.company}</p>
                    <div className="mt-0.5 flex gap-0.5">{Array.from({ length: t.rating }).map((_, i) => (<Star key={i} className="h-3 w-3 fill-accent text-accent" />))}</div>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
