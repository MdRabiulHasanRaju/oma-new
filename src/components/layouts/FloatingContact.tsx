import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, MessageCircle, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteConfig } from '@/data/navigation';

export default function FloatingContact() {
  const [open, setOpen] = useState(false);
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="glass-strong w-72 rounded-2xl border border-border p-5 shadow-xl"
          >
            <div className="mb-4 flex items-center justify-between">
              <h3 className="font-display text-base font-bold text-foreground">Contact Us</h3>
              <button onClick={() => setOpen(false)} aria-label="Close contact menu"><X className="h-4 w-4 text-muted-foreground" /></button>
            </div>
            <div className="space-y-3">
              <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-3 text-sm text-foreground hover:text-accent transition-colors">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary"><Phone className="h-4 w-4" /></span>{siteConfig.phone}
              </a>
              <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-3 text-sm text-foreground hover:text-accent transition-colors">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary"><Mail className="h-4 w-4" /></span>{siteConfig.email}
              </a>
              <Link to="/contact" className="flex items-center gap-3 text-sm text-foreground hover:text-accent transition-colors">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary"><MapPin className="h-4 w-4" /></span>{siteConfig.address}
              </Link>
            </div>
            <Link to="/admissions/apply" className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90">
              <MessageCircle className="h-4 w-4" /> Apply Online
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} onClick={() => setOpen((p) => !p)} className="flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-lg shadow-accent/40" aria-label="Contact options">
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </motion.button>
    </div>
  );
}
