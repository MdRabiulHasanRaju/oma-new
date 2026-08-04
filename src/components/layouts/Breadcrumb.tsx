import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { motion } from 'framer-motion';

interface BreadcrumbItem { label: string; href?: string }
interface BreadcrumbProps { items: BreadcrumbItem[]; title?: string; subtitle?: string }

export default function Breadcrumb({ items, title, subtitle }: BreadcrumbProps) {
  return (
    <section className="relative overflow-hidden bg-ocean-900 pt-8 pb-12 text-white">
      <div className="absolute inset-0 bg-grid-pattern bg-[size:40px_40px] opacity-10" />
      <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.nav initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mb-4 flex items-center gap-1.5 text-sm text-white/60">
          <Link to="/" className="flex items-center gap-1 transition-colors hover:text-accent"><Home className="h-3.5 w-3.5" /></Link>
          {items.map((item, i) => (
            <span key={i} className="flex items-center gap-1.5">
              <ChevronRight className="h-3.5 w-3.5" />
              {item.href ? <Link to={item.href} className="transition-colors hover:text-accent">{item.label}</Link> : <span className="text-white/90">{item.label}</span>}
            </span>
          ))}
        </motion.nav>
        {title && <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-display text-3xl font-extrabold tracking-tight md:text-4xl lg:text-5xl">{title}</motion.h1>}
        {subtitle && <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mt-3 max-w-2xl text-base text-white/70">{subtitle}</motion.p>}
      </div>
    </section>
  );
}
