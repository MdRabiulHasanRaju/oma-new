import { motion } from 'framer-motion';
import SectionHeader from '@/components/shared/SectionHeader';
import { admissionSteps } from '@/data/site';
import { FileText, ClipboardCheck, Stethoscope, PenLine, CheckCircle } from 'lucide-react';

const iconMap = { FileText, ClipboardCheck, Stethoscope, PenLine, CheckCircle };

export default function AdmissionTimeline() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader eyebrow="Admissions" title="Your Path to Admission" description="Follow these five simple steps to begin your maritime journey at Ocean Maritime Academy." />
        <div className="relative">
          <div className="absolute left-0 right-0 top-12 hidden h-0.5 bg-gradient-to-r from-primary via-accent to-primary lg:block" />
          <div className="grid gap-8 lg:grid-cols-5">
            {admissionSteps.map((step, i) => {
              const Icon = iconMap[step.icon as keyof typeof iconMap] || FileText;
              return (
                <motion.div key={step.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }} className="relative flex flex-col items-center text-center">
                  <div className="relative z-10 mb-4 flex h-24 w-24 items-center justify-center rounded-full border-4 border-background bg-gradient-to-br from-primary to-accent text-white shadow-lg">
                    <Icon className="h-8 w-8" />
                    <span className="absolute -right-1 -top-1 flex h-7 w-7 items-center justify-center rounded-full bg-accent text-xs font-bold text-accent-foreground">{step.step}</span>
                  </div>
                  <h3 className="mb-2 font-display text-base font-bold text-foreground">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
