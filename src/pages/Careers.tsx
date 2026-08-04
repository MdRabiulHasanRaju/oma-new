import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Clock, ArrowRight } from 'lucide-react';
import Breadcrumb from '@/components/layouts/Breadcrumb';
import { careers } from '@/data/site';

export default function Careers() {
  return (
    <>
      <Helmet><title>Careers | Ocean Maritime Academy</title><meta name="description" content="Explore career opportunities at Ocean Maritime Academy." /></Helmet>
      <Breadcrumb items={[{ label: 'Careers' }]} title="Career Opportunities" subtitle="Join our team of dedicated maritime educators and professionals. We are always looking for talented individuals to help shape the next generation of mariners." />
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6">
          <div className="space-y-4">
            {careers.map((job, i) => (
              <motion.div key={job.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:border-accent/40 hover:shadow-md">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div className="flex-1">
                    <h3 className="mb-2 font-display text-lg font-bold transition-colors group-hover:text-accent">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 text-xs text-muted-foreground"><span className="flex items-center gap-1.5"><Briefcase className="h-3.5 w-3.5" /> {job.department}</span><span className="flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" /> {job.location}</span><span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" /> {job.type}</span></div>
                    <p className="mt-3 text-sm text-muted-foreground">{job.description}</p>
                  </div>
                  <div className="flex flex-col items-start gap-2 md:items-end"><span className="rounded-lg bg-warning/10 px-3 py-1 text-xs font-semibold text-warning">Deadline: {new Date(job.deadline).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span><a href="mailto:careers@omabd.com" className="flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90">Apply Now <ArrowRight className="h-4 w-4" /></a></div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-12 rounded-2xl maritime-gradient p-8 text-center text-white"><h3 className="font-display text-2xl font-bold">Don't see the right role?</h3><p className="mt-2 text-white/80">Send your CV to careers@omabd.com and we'll keep you in mind for future opportunities.</p></div>
        </div>
      </section>
    </>
  );
}
