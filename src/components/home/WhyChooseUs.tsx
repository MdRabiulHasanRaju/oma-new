import { motion } from 'framer-motion';
import { Ship, Award, Globe2, Users, BookOpen, ShieldCheck } from 'lucide-react';
import SectionHeader from '@/components/shared/SectionHeader';

const features = [
  { icon: Award, title: 'IMO & STCW Standard Education & Training.', description: 'All courses are approved by the Department of Shipping and comply with STCW Convention standards, recognized by all IMO member states.' },
  { icon: Award, title: 'Full Placed Air Conditioned Class Room.', description: 'All courses are approved by the Department of Shipping and comply with STCW Convention standards, recognized by all IMO member states.' },
  { icon: Award, title: 'Govt. Approved Practical & Workshop Training Center', description: 'All courses are approved by the Department of Shipping and comply with STCW Convention standards, recognized by all IMO member states.' },
  { icon: Ship, title: 'Govt. Approved Ship Manning Agency (Golden Career Ship Management)', description: 'All courses are approved by the Department of Shipping and comply with STCW Convention standards, recognized by all IMO member states.' },
  { icon: Ship, title: 'Regularly Shipyard/Dockyard/Ship Break yard/Running BSC Ship Visit.', description: 'All courses are approved by the Department of Shipping and comply with STCW Convention standards, recognized by all IMO member states.' },
  { icon: Users, title: 'Provide Quality Cadet And Crew Through Training By Professional Instructors.', description: 'All courses are approved by the Department of Shipping and comply with STCW Convention standards, recognized by all IMO member states.' },
  { icon: Globe2, title: 'Fully Online Based Own Database software to Monitor Students to Provide needed Courses In time.', description: 'All courses are approved by the Department of Shipping and comply with STCW Convention standards, recognized by all IMO member states.' },
  { icon: BookOpen, title: 'Well Stocked Library To Cater For Examination To All Grades Of Certificates Of Competency.', description: 'All courses are approved by the Department of Shipping and comply with STCW Convention standards, recognized by all IMO member states.' },
  { icon: Users, title: 'We have More than 25 certified teachers in Our Academy', description: 'All courses are approved by the Department of Shipping and comply with STCW Convention standards, recognized by all IMO member states.' },

  // { icon: Award, title: 'International Accreditation', description: 'All courses are approved by the Department of Shipping and comply with STCW Convention standards, recognized by all IMO member states.' },

  // { icon: Ship, title: 'State-of-the-Art Simulators', description: 'Train on Kongsberg Polaris full-mission bridge and engine room simulators, providing realistic scenarios in a controlled environment.' },

  // { icon: Globe2, title: 'Global Career Pathways', description: 'Our graduates serve on vessels worldwide with leading shipping companies. We maintain a consistent 96% placement rate.' },

  // { icon: Users, title: 'Experienced Faculty', description: 'Learn from Master Mariners, Chief Engineers, and PhD-qualified instructors with decades of combined sea-going and academic experience.' },

  // { icon: BookOpen, title: 'Comprehensive Curriculum', description: 'From Pre-Sea cadet training to specialized STCW courses and degree programs, we cover every stage of a maritime career.' },

  // { icon: ShieldCheck, title: 'Residential Campus', description: 'A fully residential campus with modern hostels, workshops, labs, and recreational facilities fostering discipline and camaraderie.' },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader eyebrow="Why OMA" title="Why Choose Ocean Maritime Academy" description="We combine world-class infrastructure, experienced faculty, and international standards to deliver maritime education that opens doors to global careers." />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div key={f.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} whileHover={{ y: -6 }} className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:shadow-xl">
              <span className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-accent text-white shadow-md transition-transform group-hover:scale-110"><f.icon className="h-7 w-7" /></span>
              <h3 className="mb-2 font-display text-lg font-bold text-foreground">{f.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{f.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
