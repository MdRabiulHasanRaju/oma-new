import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Clock, Users, GraduationCap, ArrowRight } from 'lucide-react';
import type { Course } from '@/types';

export default function CourseCard({ course, index = 0 }: { course: Course; index?: number }) {
  return (
    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} whileHover={{ y: -6 }} className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-xl">
      <div className="relative h-48 overflow-hidden">
        <img src={course.image} alt={course.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-ocean-900/80 via-ocean-900/20 to-transparent" />
        <span className="absolute left-3 top-3 rounded-full bg-accent px-2.5 py-1 text-xs font-semibold text-accent-foreground">{course.level}</span>
        <span className="absolute bottom-3 left-3 text-xs font-medium uppercase tracking-wider text-white/80">{course.category}</span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="mb-2 font-display text-lg font-bold leading-snug text-foreground transition-colors group-hover:text-accent">{course.title}</h3>
        <p className="mb-4 line-clamp-2 flex-1 text-sm text-muted-foreground">{course.description}</p>
        <div className="mb-4 flex items-center gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" /> {course.duration}</span>
          <span className="flex items-center gap-1.5"><Users className="h-3.5 w-3.5" /> {course.seats} seats</span>
          <span className="flex items-center gap-1.5"><GraduationCap className="h-3.5 w-3.5" /> {course.shortCode}</span>
        </div>
        <Link to={`/courses/${course.slug}`} className="flex items-center justify-between rounded-lg border border-border px-4 py-2.5 text-sm font-medium text-foreground transition-all group-hover:border-accent group-hover:bg-accent group-hover:text-accent-foreground">
          View Details <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  );
}
