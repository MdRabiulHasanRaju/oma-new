import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast } from 'sonner';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import Breadcrumb from '@/components/layouts/Breadcrumb';
import { siteConfig } from '@/data/navigation';

const schema = z.object({ name: z.string().min(2, 'Name is required'), email: z.string().email('Valid email is required'), phone: z.string().min(6, 'Phone is required'), subject: z.string().min(2, 'Subject is required'), message: z.string().min(10, 'Message must be at least 10 characters') });
type FormData = z.infer<typeof schema>;

const contactInfo = [
  { icon: MapPin, label: 'Visit Us', value: siteConfig.address }, { icon: Phone, label: 'Call Us', value: siteConfig.phone }, { icon: Mail, label: 'Email Us', value: siteConfig.email }, { icon: Clock, label: 'Office Hours', value: 'Sun - Thu, 9:00 AM - 5:00 PM' },
];

export default function Contact() {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormData>({ resolver: zodResolver(schema) });
  const onSubmit = async () => { await new Promise((r) => setTimeout(r, 1000)); toast.success('Message sent! We will get back to you soon.'); reset(); };

  return (
    <>
      <Helmet><title>Contact Us | Ocean Maritime Academy</title><meta name="description" content="Get in touch with Ocean Maritime Academy. Find our address, phone, email, and contact form." /></Helmet>
      <Breadcrumb items={[{ label: 'Contact' }]} title="Contact Us" subtitle="We'd love to hear from you. Reach out with any questions about admissions, courses, or anything else." />
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.5fr]">
            <div className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                {contactInfo.map((info, i) => (<motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="rounded-2xl border border-border bg-card p-5 shadow-sm"><span className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary"><info.icon className="h-5 w-5" /></span><p className="mb-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">{info.label}</p><p className="text-sm font-medium text-foreground">{info.value}</p></motion.div>))}
              </div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="overflow-hidden rounded-2xl border border-border shadow-sm"><iframe title="OMA Campus Location" src="https://maps.google.com/maps?q=chittagong%20bangladesh&t=&z=12&ie=UTF8&iwloc=&output=embed" className="h-64 w-full" loading="lazy" /></motion.div>
            </div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-2xl border border-border bg-card p-6 md:p-8 shadow-sm">
              <h2 className="mb-6 font-display text-2xl font-bold">Send Us a Message</h2>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div><label className="mb-1.5 block text-sm font-medium">Full Name *</label><input {...register('name')} className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm focus:border-accent focus:outline-none" placeholder="Your name" />{errors.name && <p className="mt-1 text-xs text-destructive">{errors.name.message}</p>}</div>
                  <div><label className="mb-1.5 block text-sm font-medium">Email *</label><input type="email" {...register('email')} className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm focus:border-accent focus:outline-none" placeholder="your@email.com" />{errors.email && <p className="mt-1 text-xs text-destructive">{errors.email.message}</p>}</div>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div><label className="mb-1.5 block text-sm font-medium">Phone *</label><input {...register('phone')} className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm focus:border-accent focus:outline-none" placeholder="+880 XXXXXXXXXX" />{errors.phone && <p className="mt-1 text-xs text-destructive">{errors.phone.message}</p>}</div>
                  <div><label className="mb-1.5 block text-sm font-medium">Subject *</label><input {...register('subject')} className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm focus:border-accent focus:outline-none" placeholder="How can we help?" />{errors.subject && <p className="mt-1 text-xs text-destructive">{errors.subject.message}</p>}</div>
                </div>
                <div><label className="mb-1.5 block text-sm font-medium">Message *</label><textarea {...register('message')} rows={5} className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm focus:border-accent focus:outline-none" placeholder="Your message..." />{errors.message && <p className="mt-1 text-xs text-destructive">{errors.message.message}</p>}</div>
                <button type="submit" disabled={isSubmitting} className="w-full rounded-xl bg-primary py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-50">{isSubmitting ? 'Sending...' : 'Send Message'}</button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
