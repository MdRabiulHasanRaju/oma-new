import { Link } from 'react-router-dom';
import { Facebook, Linkedin, Youtube, Twitter, Instagram, MapPin, Phone, Mail, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/data/navigation';
import { useState } from 'react';
import { toast } from 'sonner';

const quickLinks = [
  { title: 'About Us', href: '/about' }, { title: 'Courses', href: '/courses' }, { title: 'Admissions', href: '/admissions' }, { title: 'Faculty', href: '/faculty' }, { title: 'Facilities', href: '/facilities' }, { title: 'Careers', href: '/careers' },
];
const resourceLinks = [
  { title: 'Notice Board', href: '/notices' }, { title: 'News & Events', href: '/news' }, { title: 'Certificate Verification', href: '/verification' }, { title: 'Downloads', href: '/downloads' }, { title: 'FAQ', href: '/faq' }, { title: 'Gallery', href: '/gallery' },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const handleSubscribe = (e: React.FormEvent) => { e.preventDefault(); if (!email) return; toast.success('Subscribed successfully! You will receive our latest updates.'); setEmail(''); };

  return (
    <footer className="relative overflow-hidden bg-ocean-900 text-white">
      <div className="absolute inset-0 opacity-10"><div className="absolute -left-1/4 top-0 h-full w-1/2 animate-wave bg-[radial-gradient(ellipse_at_center,_rgba(0,180,216,0.4),transparent_70%)]" /></div>
      <div className="relative mx-auto max-w-7xl px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="mb-4 flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-full text-white">
                {/* <Ship className="h-5 w-5" /> */}
                 <img src="/images/oma-logo.png" alt="Ocean maritime academy-logo" />
                </span>
              <div className="flex flex-col leading-tight"><span className="font-display text-base font-extrabold">Ocean Maritime</span><span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#ffffff]">Academy</span></div>
            </Link>
            <p className="mb-5 text-sm leading-relaxed text-white/70">{siteConfig.description}</p>
            <div className="flex gap-3">
              {[Facebook, Linkedin, Youtube, Twitter, Instagram].map((Icon, i) => (
                <a key={i} href={siteConfig.social.facebook} target="_blank" rel="noreferrer" className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-white/80 transition-all hover:bg-accent hover:text-white"><Icon className="h-4 w-4" /></a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="mb-5 font-display text-sm font-bold uppercase tracking-wider text-ocean-200">Quick Links</h4>
            <ul className="space-y-2.5">{quickLinks.map((l) => (<li key={l.title}><Link to={l.href} className="text-sm text-white/70 transition-colors hover:text-accent">{l.title}</Link></li>))}</ul>
          </div>
          <div>
            <h4 className="mb-5 font-display text-sm font-bold uppercase tracking-wider text-ocean-200">Resources</h4>
            <ul className="space-y-2.5">{resourceLinks.map((l) => (<li key={l.title}><Link to={l.href} className="text-sm text-white/70 transition-colors hover:text-accent">{l.title}</Link></li>))}</ul>
          </div>
          <div>
            <h4 className="mb-5 font-display text-sm font-bold uppercase tracking-wider text-ocean-200">Stay Connected</h4>
            <div className="mb-5 space-y-3">
              <div className="flex items-start gap-2.5 text-sm text-white/70"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" /><span>{siteConfig.address}</span></div>
              <div className="flex items-center gap-2.5 text-sm text-white/70"><Phone className="h-4 w-4 shrink-0 text-accent" /><a href={`tel:${siteConfig.phone}`}>{siteConfig.phone}</a></div>
              <div className="flex items-center gap-2.5 text-sm text-white/70"><Mail className="h-4 w-4 shrink-0 text-accent" /><a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></div>
            </div>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your email" className="w-full rounded-lg border border-white/20 bg-white/10 px-3 py-2 text-sm text-white placeholder:text-white/40 focus:border-accent focus:outline-none" />
              <button type="submit" className="flex shrink-0 items-center justify-center rounded-lg bg-accent px-3 text-white transition-colors hover:bg-accent/80" aria-label="Subscribe"><ArrowRight className="h-4 w-4" /></button>
            </form>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 md:flex-row">
          <p className="text-xs text-white/50">© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <div className="flex gap-6 text-xs text-white/50">
            <Link to="/about" className="transition-colors hover:text-accent">Privacy Policy</Link>
            <Link to="/about" className="transition-colors hover:text-accent">Terms of Service</Link>
            <Link to="/contact" className="transition-colors hover:text-accent">Support</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
