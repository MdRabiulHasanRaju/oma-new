import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Compass, Cog, Zap, ShieldCheck, Scale, Lock, ArrowRight } from 'lucide-react';
import Breadcrumb from '@/components/layouts/Breadcrumb';
import { departments } from '@/data/departments';

const iconMap = { Compass, Cog, Zap, ShieldCheck, Scale, Lock };

export default function Departments() {
  return (
    <>
      <Helmet><title>Departments | Ocean Maritime Academy</title><meta name="description" content="Explore the academic departments at Ocean Maritime Academy." /></Helmet>
      <Breadcrumb items={[{ label: 'Departments' }]} title="Academic Departments" subtitle="Our departments cover every discipline of maritime education, from navigation and engineering to safety and maritime law." />
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {departments.map((dept, i) => {
              const Icon = iconMap[dept.icon as keyof typeof iconMap] || Compass;
              return (<motion.div key={dept.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} whileHover={{ y: -6 }} className="group flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-xl"><span className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl maritime-gradient text-white shadow-md"><Icon className="h-7 w-7" /></span><h3 className="mb-2 font-display text-lg font-bold">{dept.name}</h3><p className="mb-4 flex-1 text-sm text-muted-foreground">{dept.description}</p><div className="flex items-center justify-between border-t border-border pt-4"><div><p className="text-xs text-muted-foreground">Head of Dept.</p><p className="text-sm font-semibold text-foreground">{dept.head}</p></div><span className="rounded-lg bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">{dept.courses} Courses</span></div></motion.div>);
            })}
          </div>
          <div className="mt-12 text-center"><Link to="/courses" className="group inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg transition-all hover:scale-105">View All Courses <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></Link></div>
        </div>
      </section>
    </>
  );
}
