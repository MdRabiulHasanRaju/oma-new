import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionHeader from '@/components/shared/SectionHeader';
import CourseCard from '@/components/shared/CourseCard';
import { courses } from '@/data/courses';

export default function FeaturedCourses() {
  const featured = courses.filter((c) => c.featured).slice(0, 4);
  return (
    <section className="bg-muted/40 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-end justify-between gap-6 md:flex-row">
          <SectionHeader align="left" eyebrow="Programs" title="Featured Courses" description="Explore our most sought-after maritime training programs designed to launch your career at sea." />
          <Link to="/courses" className="group flex shrink-0 items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-semibold transition-colors hover:border-accent hover:text-accent">View All Courses <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((c, i) => (<CourseCard key={c.id} course={c} index={i} />))}
        </div>
      </div>
    </section>
  );
}
