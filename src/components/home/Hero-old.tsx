import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Anchor, Globe2, ShieldCheck } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const heroSlides = [
  'https://omabd.com/uploads/images/slider-image/sliderimageabcde.jpg',
  'https://omabd.com/uploads/images/slider-image/oceanmaritimeacademy2.jpg',
  'https://omabd.com/uploads/images/slider-image/oceanmaritimeacademy3.jpg',
];

const floatingStats = [
  { icon: ShieldCheck, label: 'ISO Certified', value: '9001:2015' },
  { icon: Globe2, label: 'Global Recognition', value: 'IMO Member States' },
  { icon: Anchor, label: 'Placement Rate', value: '96%' },
];

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden">
      <Swiper modules={[Autoplay, Pagination]} autoplay={{ delay: 5000, disableOnInteraction: false }} loop speed={1000} className="absolute inset-0 h-full w-full">
        {heroSlides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className="relative h-full w-full">
              <img src={slide} alt="Maritime" className="absolute h-full w-full object-cover" />

              <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 overflow-hidden">
                <svg className="absolute bottom-0 w-[200%] h-full" viewBox="0 0 2880 100" preserveAspectRatio="none"><path d="M0,40 C360,100 720,0 1440,40 C2160,80 2520,20 2880,40 L2880,100 L0,100 Z" fill="hsl(var(--background))" opacity="0.8" /></svg>
              </div>

              <div className="p-6 relative z-10 mx-auto flex min-h-[92vh] max-w-7xl items-center px-6">
                <div className="max-w-3xl">
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-md">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-accent" /> Admissions Open — January 2026 Intake
                  </motion.div>
                  <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
                    Shaping the<span className="block text-[#e9730c]">Maritime Leaders</span>of Tomorrow
                  </motion.h1>
                  <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
                    A world-class maritime academy delivering internationally accredited education, cutting-edge simulator training, and a proven pathway to a global seafaring career.
                  </motion.p>
                  <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mt-8 flex flex-wrap items-center gap-4">
                    <Link to="/admissions/apply" className="group flex items-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground shadow-lg shadow-accent/30 transition-all hover:scale-105 hover:shadow-xl">Apply Online <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></Link>
                    <Link to="/courses" className="flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-all hover:bg-white/20">Explore Courses</Link>
                  </motion.div>
                  <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="mt-12 flex flex-wrap gap-6">
                    {floatingStats.map((stat, i) => (
                      <div key={i} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-md">
                        <stat.icon className="h-5 w-5 text-accent" />
                        <div><p className="text-sm font-bold text-white">{stat.value}</p><p className="text-xs text-white/60">{stat.label}</p></div>
                      </div>
                    ))}
                  </motion.div>
                </div>
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-br from-ocean-900/95 via-ocean-800/80 to-ocean-700/60" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      
    </section>
  );
}
