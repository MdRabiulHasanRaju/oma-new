import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast } from 'sonner';
import Breadcrumb from '@/components/layouts/Breadcrumb';
import { courses } from '@/data/courses';
import { Upload, CheckCircle } from 'lucide-react';

const schema = z.object({
  fullName: z.string().min(2, 'Full name is required'), email: z.string().email('Valid email is required'), phone: z.string().min(6, 'Phone number is required'), course: z.string().min(1, 'Please select a course'), dateOfBirth: z.string().min(1, 'Date of birth is required'), nationality: z.string().min(2, 'Nationality is required'), address: z.string().min(5, 'Address is required'), education: z.string().min(2, 'Education qualification is required'), message: z.string().optional(),
});
type FormData = z.infer<typeof schema>;

export default function ApplyOnline() {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>({ resolver: zodResolver(schema) });
  const onSubmit = async () => { await new Promise((r) => setTimeout(r, 1000)); toast.success('Application submitted successfully! We will contact you soon.'); setSubmitted(true); };

  if (submitted) {
    return (<><Breadcrumb items={[{ label: 'Admissions', href: '/admissions' }, { label: 'Apply Online' }]} /><section className="py-20"><div className="mx-auto max-w-2xl px-6 text-center"><motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-success/10 text-success"><CheckCircle className="h-10 w-10" /></motion.div><h1 className="font-display text-3xl font-extrabold">Application Submitted!</h1><p className="mt-4 text-muted-foreground">Thank you for applying to Ocean Maritime Academy. Our admissions team will review your application and contact you within 3-5 business days.</p><button onClick={() => setSubmitted(false)} className="mt-8 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground">Submit Another Application</button></div></section></>);
  }

  return (
    <>
      <Helmet><title>Apply Online | Ocean Maritime Academy</title><meta name="description" content="Apply online for admission to Ocean Maritime Academy courses." /></Helmet>
      <Breadcrumb items={[{ label: 'Admissions', href: '/admissions' }, { label: 'Apply Online' }]} title="Online Application" subtitle="Complete the form below to apply for your chosen course. Our team will get back to you within 3-5 business days." />
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-6">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 rounded-2xl border border-border bg-card p-6 md:p-8 shadow-sm">
            <div className="grid gap-5 sm:grid-cols-2">
              <div><label className="mb-1.5 block text-sm font-medium">Full Name *</label><input {...register('fullName')} className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm focus:border-accent focus:outline-none" placeholder="Enter your full name" />{errors.fullName && <p className="mt-1 text-xs text-destructive">{errors.fullName.message}</p>}</div>
              <div><label className="mb-1.5 block text-sm font-medium">Email *</label><input type="email" {...register('email')} className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm focus:border-accent focus:outline-none" placeholder="your@email.com" />{errors.email && <p className="mt-1 text-xs text-destructive">{errors.email.message}</p>}</div>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <div><label className="mb-1.5 block text-sm font-medium">Phone *</label><input {...register('phone')} className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm focus:border-accent focus:outline-none" placeholder="+880 XXXXXXXXXX" />{errors.phone && <p className="mt-1 text-xs text-destructive">{errors.phone.message}</p>}</div>
              <div><label className="mb-1.5 block text-sm font-medium">Date of Birth *</label><input type="date" {...register('dateOfBirth')} className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm focus:border-accent focus:outline-none" />{errors.dateOfBirth && <p className="mt-1 text-xs text-destructive">{errors.dateOfBirth.message}</p>}</div>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <div><label className="mb-1.5 block text-sm font-medium">Select Course *</label><select {...register('course')} className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm focus:border-accent focus:outline-none"><option value="">Select a course</option>{courses.map((c) => (<option key={c.id} value={c.title}>{c.title}</option>))}</select>{errors.course && <p className="mt-1 text-xs text-destructive">{errors.course.message}</p>}</div>
              <div><label className="mb-1.5 block text-sm font-medium">Nationality *</label><input {...register('nationality')} className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm focus:border-accent focus:outline-none" placeholder="e.g. Bangladeshi" />{errors.nationality && <p className="mt-1 text-xs text-destructive">{errors.nationality.message}</p>}</div>
            </div>
            <div><label className="mb-1.5 block text-sm font-medium">Address *</label><textarea {...register('address')} rows={2} className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm focus:border-accent focus:outline-none" placeholder="Your current address" />{errors.address && <p className="mt-1 text-xs text-destructive">{errors.address.message}</p>}</div>
            <div><label className="mb-1.5 block text-sm font-medium">Education Qualification *</label><input {...register('education')} className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm focus:border-accent focus:outline-none" placeholder="e.g. HSC Science, GPA 3.5" />{errors.education && <p className="mt-1 text-xs text-destructive">{errors.education.message}</p>}</div>
            <div><label className="mb-1.5 block text-sm font-medium">Additional Message</label><textarea {...register('message')} rows={3} className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm focus:border-accent focus:outline-none" placeholder="Any additional information you'd like to share" /></div>
            <div className="rounded-lg border border-dashed border-border bg-muted/30 p-4 text-center"><Upload className="mx-auto mb-2 h-6 w-6 text-muted-foreground" /><p className="text-sm text-muted-foreground">Upload documents (academic certificates, passport photo, medical certificate)</p><input type="file" multiple className="mt-2 text-xs text-muted-foreground" /></div>
            <button type="submit" disabled={isSubmitting} className="w-full rounded-xl bg-primary py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-50">{isSubmitting ? 'Submitting...' : 'Submit Application'}</button>
          </form>
        </div>
      </section>
    </>
  );
}
