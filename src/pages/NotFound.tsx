import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Home, Ship } from 'lucide-react';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <>
      <Helmet><title>Page Not Found | Ocean Maritime Academy</title></Helmet>
      <section className="flex min-h-[70vh] items-center justify-center px-6 py-16">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center">
          <span className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl maritime-gradient text-white shadow-lg"><Ship className="h-10 w-10" /></span>
          <h1 className="font-display text-7xl font-extrabold text-gradient">404</h1>
          <h2 className="mt-4 font-display text-2xl font-bold">Page Not Found</h2>
          <p className="mt-2 text-muted-foreground">The page you're looking for has drifted off course.</p>
          <Link to="/" className="mt-8 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg transition-all hover:scale-105"><Home className="h-4 w-4" /> Back to Home</Link>
        </motion.div>
      </section>
    </>
  );
}
