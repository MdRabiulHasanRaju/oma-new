import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, Search, ChevronDown, LogIn } from 'lucide-react';
import { mainNav, siteConfig } from '@/data/navigation';
import { useTheme } from '@/context/ThemeContext';
import { useSearch } from '@/context/SearchContext';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMega, setOpenMega] = useState<string | null>(null);
  const { theme, toggleTheme } = useTheme();
  const { openSearch } = useSearch();
  const location = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => { setMobileOpen(false); setOpenMega(null); }, [location.pathname]);

  const isActive = (href: string) => href === '/' ? location.pathname === '/' : location.pathname.startsWith(href);

  return (
    <>
      <div className="hidden bg-primary text-primary-foreground/90 lg:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-xs">
          <div className="flex items-center gap-6">
            <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-1.5 transition-colors hover:text-accent"><span>📞</span> {siteConfig.phone}</a>
            <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-1.5 transition-colors hover:text-accent"><span>✉</span> {siteConfig.email}</a>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-primary-foreground/70">ISO 9001:2015 Certified</span>
            <span className="h-3 w-px bg-primary-foreground/30" />
            <a href={siteConfig.social.facebook} target="_blank" rel="noreferrer" className="transition-colors hover:text-accent">Facebook</a>
            <a href={siteConfig.social.linkedin} target="_blank" rel="noreferrer" className="transition-colors hover:text-accent">LinkedIn</a>
            <a href={siteConfig.social.youtube} target="_blank" rel="noreferrer" className="transition-colors hover:text-accent">YouTube</a>
          </div>
        </div>
      </div>

      <header className={cn('sticky top-0 z-50 transition-all duration-300', scrolled ? 'glass-strong shadow-md' : 'bg-background/80 backdrop-blur-sm')}>
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <Link to="/" className="flex items-center gap-2.5">
            <span className="flex h-12 w-12 items-center justify-center rounded-full text-white">
              <img src="/images/oma-logo.png" alt="Ocean maritime academy-logo" />
              {/* <Ship className="h-5 w-5" /> */}
              </span>
            <div className="flex flex-col leading-tight">
              <span className="font-display text-base font-extrabold tracking-tight text-foreground">Ocean Maritime</span>
              <span className="text-[#ED201E] text-[10px] font-semibold uppercase tracking-[0.2em] text-accent">Academy</span>
            </div>
          </Link>

          <ul className="hidden items-center gap-1 xl:flex">
            {mainNav.map((item) => (
              <li key={item.title} className="relative" onMouseEnter={() => item.children && setOpenMega(item.title)} onMouseLeave={() => setOpenMega(null)}>
                <Link to={item.href} className={cn('flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors', isActive(item.href) ? 'text-accent' : 'text-foreground/80 hover:text-accent')}>
                  {item.title}{item.children && <ChevronDown className="h-3.5 w-3.5" />}
                </Link>
                <AnimatePresence>
                  {item.children && openMega === item.title && (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} transition={{ duration: 0.2 }} className="bg-white rounded-2xl absolute left-0 top-full pt-2">
                      <div className="glass-strong w-64 rounded-2xl border border-border p-2 shadow-xl">
                        {item.children.map((child) => (
                          <Link key={child.title} to={child.href} className="block rounded-lg px-3 py-2.5 text-sm text-foreground/80 transition-colors hover:bg-accent/10 hover:text-accent">{child.title}</Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <button onClick={openSearch} className="flex h-9 w-9 items-center justify-center rounded-lg text-foreground/70 transition-colors hover:bg-accent/10 hover:text-accent" aria-label="Search"><Search className="h-4 w-4" /></button>
            <button onClick={toggleTheme} className="flex h-9 w-9 items-center justify-center rounded-lg text-foreground/70 transition-colors hover:bg-accent/10 hover:text-accent" aria-label="Toggle theme">{theme === 'light' ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}</button>
            <Link to="/login" className="hidden items-center gap-1.5 rounded-lg border border-border px-3 py-2 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent sm:flex"><LogIn className="h-4 w-4" /> Login</Link>
            <Link to="/admissions/apply" className="hidden rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:shadow-md md:inline-flex">Apply Now</Link>
            <button onClick={() => setMobileOpen(true)} className="flex h-9 w-9 items-center justify-center rounded-lg text-foreground xl:hidden" aria-label="Open menu"><Menu className="h-5 w-5" /></button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setMobileOpen(false)} className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm xl:hidden" />
            <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: 'spring', damping: 30, stiffness: 300 }} className="fixed right-0 top-0 z-50 h-full w-80 max-w-[85vw] overflow-y-auto bg-background shadow-2xl xl:hidden">
              <div className="flex items-center justify-between border-b border-border p-4">
                <span className="font-display text-lg font-bold">Menu</span>
                <button onClick={() => setMobileOpen(false)} aria-label="Close menu"><X className="h-5 w-5" /></button>
              </div>
              <div className="p-4">
                {mainNav.map((item) => (
                  <div key={item.title} className="mb-1">
                    {item.children ? (
                      <details className="group">
                        <summary className="flex cursor-pointer items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium text-foreground hover:bg-accent/10">{item.title}<ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" /></summary>
                        <div className="ml-3 border-l border-border pl-3">
                          {item.children.map((child) => (<Link key={child.title} to={child.href} className="block rounded-lg px-3 py-2 text-sm text-foreground/70 hover:text-accent">{child.title}</Link>))}
                        </div>
                      </details>
                    ) : (
                      <Link to={item.href} className={cn('block rounded-lg px-3 py-2.5 text-sm font-medium transition-colors', isActive(item.href) ? 'bg-accent/10 text-accent' : 'text-foreground hover:bg-accent/10')}>{item.title}</Link>
                    )}
                  </div>
                ))}
                <div className="mt-4 flex flex-col gap-2">
                  <Link to="/login" onClick={() => setMobileOpen(false)} className="flex items-center justify-center gap-2 rounded-lg border border-border px-4 py-2.5 text-sm font-medium"><LogIn className="h-4 w-4" /> Login</Link>
                  <Link to="/admissions/apply" onClick={() => setMobileOpen(false)} className="flex items-center justify-center rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground">Apply Now</Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
