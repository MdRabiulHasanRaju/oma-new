import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FileText, ClipboardCheck, Stethoscope, PenLine, CheckCircle, ArrowRight, Download, Wallet } from 'lucide-react';
import Breadcrumb from '@/components/layouts/Breadcrumb';
import SectionHeader from '@/components/shared/SectionHeader';
import { admissionSteps } from '@/data/site';
import { courses } from '@/data/courses';

const iconMap = { FileText, ClipboardCheck, Stethoscope, PenLine, CheckCircle };
const eligibility = [
  { level: 'Pre-Sea Deck Cadet', requirement: 'HSC with Physics & Mathematics, minimum GPA 3.5' }, { level: 'Pre-Sea Engine Cadet', requirement: 'Diploma/BSc in Mechanical or Marine Engineering' }, { level: 'ETO Pre-Sea', requirement: 'BSc in Electrical/Electronic Engineering' }, { level: 'STCW Courses', requirement: 'Minimum 18 years, medically fit, basic English' }, { level: 'BSc Nautical Science', requirement: 'HSC with Physics & Mathematics, minimum GPA 3.5' },
];
const feeStructure = [
  { program: 'Pre-Sea Deck Cadet', duration: '12 Months', fee: 'BDT 450,000' }, { program: 'Pre-Sea Engine Cadet', duration: '12 Months', fee: 'BDT 480,000' }, { program: 'ETO Pre-Sea', duration: '9 Months', fee: 'BDT 380,000' }, { program: 'BSc Nautical Science', duration: '3 Years', fee: 'BDT 1,200,000' }, { program: 'STCW Basic Safety', duration: '2 Weeks', fee: 'BDT 25,000' }, { program: 'GMDSS Operator', duration: '2 Weeks', fee: 'BDT 22,000' },
];

export default function Admissions() {
  return (
    <>
      <Helmet><title>Admissions | Ocean Maritime Academy</title><meta name="description" content="Learn about the admission process, eligibility criteria, and fee structure at Ocean Maritime Academy." /></Helmet>
      <Breadcrumb items={[{ label: 'Admissions' }]} title="Admissions" subtitle="Begin your journey to a global maritime career. Follow our simple admission process to join the next intake." />
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader eyebrow="Process" title="Admission Process" description="Five straightforward steps from application to enrollment." />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            {admissionSteps.map((step, i) => {
              const Icon = iconMap[step.icon as keyof typeof iconMap] || FileText;
              return (<motion.div key={step.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="relative rounded-2xl border border-border bg-card p-6 text-center shadow-sm"><span className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl maritime-gradient text-white shadow-md"><Icon className="h-8 w-8" /></span><span className="absolute right-4 top-4 font-display text-2xl font-extrabold text-muted/40">{step.step}</span><h3 className="mb-2 font-display text-base font-bold">{step.title}</h3><p className="text-xs text-muted-foreground">{step.description}</p></motion.div>);
            })}
          </div>
          <div className="mt-10 text-center"><Link to="/admissions/apply" className="group inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg transition-all hover:scale-105">Start Your Application <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></Link></div>
        </div>
      </section>
      <section id="eligibility" className="bg-muted/40 py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeader eyebrow="Requirements" title="Eligibility Criteria" description="Each program has specific academic and medical requirements. Ensure you meet the criteria before applying." />
          <div className="overflow-hidden rounded-2xl border border-border bg-card"><table className="w-full text-left text-sm"><thead className="bg-primary text-primary-foreground"><tr><th className="px-6 py-4 font-semibold">Program</th><th className="px-6 py-4 font-semibold">Requirements</th></tr></thead><tbody>{eligibility.map((item, i) => (<tr key={i} className="border-t border-border"><td className="px-6 py-4 font-medium text-foreground">{item.level}</td><td className="px-6 py-4 text-muted-foreground">{item.requirement}</td></tr>))}</tbody></table></div>
        </div>
      </section>
      <section id="fees" className="py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeader eyebrow="Investment" title="Fee Structure" description="Transparent and competitive fees for all our programs. Installment options and scholarships are available." />
          <div className="overflow-hidden rounded-2xl border border-border bg-card"><table className="w-full text-left text-sm"><thead className="bg-primary text-primary-foreground"><tr><th className="px-6 py-4 font-semibold">Program</th><th className="px-6 py-4 font-semibold">Duration</th><th className="px-6 py-4 font-semibold">Fee</th></tr></thead><tbody>{feeStructure.map((item, i) => (<tr key={i} className="border-t border-border"><td className="px-6 py-4 font-medium text-foreground">{item.program}</td><td className="px-6 py-4 text-muted-foreground">{item.duration}</td><td className="px-6 py-4 font-semibold text-accent">{item.fee}</td></tr>))}</tbody></table></div>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link to="/downloads" className="flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-semibold transition-colors hover:border-accent hover:text-accent"><Download className="h-4 w-4" /> Download Fee Details</Link>
            <Link to="/admissions/apply" className="flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/80"><Wallet className="h-4 w-4" /> Apply Online</Link>
          </div>
        </div>
      </section>
      <section className="bg-muted/40 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader eyebrow="Programs" title="Courses Open for Admission" description="Explore the programs currently accepting applications for the January 2026 intake." />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {courses.slice(0, 4).map((course, i) => (<motion.div key={course.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}><Link to={`/courses/${course.slug}`} className="group flex h-full flex-col rounded-xl border border-border bg-card p-5 transition-all hover:border-accent/40 hover:shadow-md"><span className="mb-2 text-xs font-semibold uppercase text-accent">{course.level}</span><h3 className="mb-2 font-display text-base font-bold leading-snug transition-colors group-hover:text-accent">{course.title}</h3><p className="mb-4 flex-1 text-xs text-muted-foreground">{course.duration} · {course.seats} seats</p><span className="flex items-center gap-1 text-sm font-semibold text-primary">View Details <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" /></span></Link></motion.div>))}
          </div>
        </div>
      </section>
    </>
  );
}
