import { Helmet } from 'react-helmet-async';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, Users, GraduationCap, CheckCircle, ArrowLeft, ArrowRight, BookOpen, Target, Wallet, ShieldCheck } from 'lucide-react';
import Breadcrumb from '@/components/layouts/Breadcrumb';
import { courses } from '@/data/courses';

export default function CourseDetails() {
  const { slug } = useParams();
  const course = courses.find((c) => c.slug === slug);
  if (!course) {
    return (<div className="flex min-h-[60vh] items-center justify-center text-center"><div><h1 className="font-display text-2xl font-bold">Course Not Found</h1><Link to="/courses" className="mt-4 inline-flex items-center gap-2 text-accent"><ArrowLeft className="h-4 w-4" /> Back to Courses</Link></div></div>);
  }
  const related = courses.filter((c) => c.category === course.category && c.id !== course.id).slice(0, 3);
  return (
    <>
      <Helmet><title>{course.title} | Ocean Maritime Academy</title><meta name="description" content={course.description} /></Helmet>
      <Breadcrumb items={[{ label: 'Courses', href: '/courses' }, { label: course.title }]} title={course.title} subtitle={course.description} />
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-[2fr_1fr]">
            <div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8 overflow-hidden rounded-2xl"><img src={course.image} alt={course.title} className="h-72 w-full object-cover" /></motion.div>
              <div className="mb-8 flex flex-wrap gap-3">
                <span className="flex items-center gap-1.5 rounded-lg bg-accent/10 px-3 py-1.5 text-sm font-medium text-accent"><GraduationCap className="h-4 w-4" /> {course.level}</span>
                <span className="flex items-center gap-1.5 rounded-lg bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary"><Clock className="h-4 w-4" /> {course.duration}</span>
                <span className="flex items-center gap-1.5 rounded-lg bg-success/10 px-3 py-1.5 text-sm font-medium text-success"><Users className="h-4 w-4" /> {course.seats} Seats</span>
              </div>
              <div className="prose prose-sm max-w-none"><h2 className="font-display text-2xl font-bold">Course Overview</h2><p className="text-muted-foreground">{course.longDescription}</p></div>
              <div className="mt-8">
                <h3 className="mb-4 font-display text-xl font-bold">Course Highlights</h3>
                <div className="grid gap-3 sm:grid-cols-2">
                  {course.highlights.map((h, i) => (<motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="flex items-start gap-2.5 rounded-xl border border-border bg-card p-4"><CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-success" /><span className="text-sm text-foreground">{h}</span></motion.div>))}
                </div>
              </div>
              <div className="mt-8">
                <h3 className="mb-4 font-display text-xl font-bold">Syllabus</h3>
                <div className="space-y-4">
                  {course.syllabus.map((module, i) => (
                    <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="rounded-xl border border-border bg-card p-5">
                      <div className="mb-3 flex items-center gap-2"><span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-sm font-bold text-primary">{i + 1}</span><h4 className="font-display text-base font-bold">{module.title}</h4></div>
                      <div className="ml-10 flex flex-wrap gap-2">{module.topics.map((t, j) => (<span key={j} className="rounded-lg bg-muted px-2.5 py-1 text-xs text-muted-foreground">{t}</span>))}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} className="sticky top-24 rounded-2xl border border-border bg-card p-6 shadow-sm">
                <h3 className="mb-4 font-display text-lg font-bold">Course Information</h3>
                <div className="space-y-4 text-sm">
                  <div className="flex items-start gap-3"><BookOpen className="mt-0.5 h-5 w-5 shrink-0 text-accent" /><div><p className="font-semibold text-foreground">Category</p><p className="text-muted-foreground">{course.category}</p></div></div>
                  <div className="flex items-start gap-3"><Target className="mt-0.5 h-5 w-5 shrink-0 text-accent" /><div><p className="font-semibold text-foreground">Level</p><p className="text-muted-foreground">{course.level}</p></div></div>
                  <div className="flex items-start gap-3"><Clock className="mt-0.5 h-5 w-5 shrink-0 text-accent" /><div><p className="font-semibold text-foreground">Duration</p><p className="text-muted-foreground">{course.duration}</p></div></div>
                  <div className="flex items-start gap-3"><ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-accent" /><div><p className="font-semibold text-foreground">Eligibility</p><p className="text-muted-foreground">{course.eligibility}</p></div></div>
                  <div className="flex items-start gap-3"><Wallet className="mt-0.5 h-5 w-5 shrink-0 text-accent" /><div><p className="font-semibold text-foreground">Course Fee</p><p className="text-muted-foreground">{course.fees}</p></div></div>
                </div>
                <Link to="/admissions/apply" className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90">Apply for this Course <ArrowRight className="h-4 w-4" /></Link>
                <Link to="/contact" className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl border border-border py-3 text-sm font-semibold transition-colors hover:border-accent hover:text-accent">Enquire Now</Link>
              </motion.div>
            </div>
          </div>
          {related.length > 0 && (
            <div className="mt-16">
              <h3 className="mb-6 font-display text-2xl font-bold">Related Courses</h3>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {related.map((c) => (<Link key={c.id} to={`/courses/${c.slug}`} className="group flex gap-4 rounded-xl border border-border bg-card p-4 transition-all hover:border-accent/40 hover:shadow-md"><img src={c.image} alt={c.title} loading="lazy" className="h-20 w-20 rounded-lg object-cover" /><div><p className="text-xs text-muted-foreground">{c.level}</p><h4 className="font-display text-sm font-bold leading-snug transition-colors group-hover:text-accent">{c.title}</h4><p className="mt-1 text-xs text-muted-foreground">{c.duration}</p></div></Link>))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
