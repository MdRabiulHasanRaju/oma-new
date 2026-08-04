import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

export default function NewsletterCTA() {
  const [email, setEmail] = useState('');
  const handleSubscribe = (e: React.FormEvent) => { e.preventDefault(); if (!email) return; toast.success('Subscribed! Check your inbox for confirmation.'); setEmail(''); };
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative overflow-hidden rounded-3xl maritime-gradient p-8 md:p-14">
          <div className="absolute inset-0 bg-grid-pattern bg-[size:40px_40px] opacity-10" />
          <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-accent/20 blur-3xl" />
          <div className="relative grid items-center gap-8 lg:grid-cols-2">
            <div>
              <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-md">Newsletter</span>
              <h2 className="font-display text-3xl font-extrabold tracking-tight text-white md:text-4xl">Stay Informed, Stay Ahead</h2>
              <p className="mt-3 max-w-lg text-white/80">Subscribe to our newsletter for the latest admission updates, course announcements, maritime industry news, and academy events.</p>
            </div>
            <div>
              <form onSubmit={handleSubscribe} className="flex flex-col gap-3 sm:flex-row">
                <div className="relative flex-1">
                  <Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email address" className="w-full rounded-xl border-0 bg-white/95 py-3.5 pl-11 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent" />
                </div>
                <button type="submit" className="group flex items-center justify-center gap-2 rounded-xl bg-foreground px-6 py-3.5 text-sm font-semibold text-background transition-all hover:scale-105">Subscribe <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></button>
              </form>
              <p className="mt-3 text-xs text-white/60">We respect your privacy. Unsubscribe at any time.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
