import { motion } from 'framer-motion';
import SectionHeader from '@/components/shared/SectionHeader';
import { partners } from '@/data/site';

export default function PartnersSection() {
  const groups = [
    { title: 'Government Approvals', items: partners.filter((p) => p.type === 'Government') },
    { title: 'Industry Partners', items: partners.filter((p) => p.type === 'Industry') },
    { title: 'Academic Collaborations', items: partners.filter((p) => p.type === 'Academic') },
  ];
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader eyebrow="Accreditation & Partnerships" title="Trusted by Institutions Worldwide" description="Our accreditations, industry partnerships, and academic collaborations ensure that an OMA qualification is recognized and respected globally." />
        <div className="space-y-10">
          {groups.map((group, gi) => (
            <motion.div key={group.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: gi * 0.1 }}>
              <h3 className="mb-4 text-center font-display text-sm font-bold uppercase tracking-wider text-muted-foreground">{group.title}</h3>
              <div className="flex flex-wrap items-center justify-center gap-4">
                {group.items.map((p) => (
                  <div key={p.id} className="flex h-24 w-40 items-center justify-center gap-2 rounded-2xl border border-border bg-card px-4 shadow-sm transition-all hover:border-accent/40 hover:shadow-md">
                    <span className="text-2xl">{p.logo}</span><span className="text-sm font-semibold text-foreground">{p.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
