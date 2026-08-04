import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, ShieldCheck, CheckCircle2, XCircle, FileText } from 'lucide-react';
import Breadcrumb from '@/components/layouts/Breadcrumb';

interface VerificationResult { valid: boolean; certificateNo: string; name: string; course: string; issueDate: string; expiryDate: string }

export default function Verification() {
  const [certNo, setCertNo] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<VerificationResult | null>(null);

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault(); if (!certNo) return; setLoading(true); setResult(null);
    await new Promise((r) => setTimeout(r, 1200));
    const isValid = certNo.toUpperCase().startsWith('OMA');
    setResult({ valid: isValid, certificateNo: certNo, name: isValid ? 'Imran Khan' : 'Unknown', course: isValid ? 'Pre-Sea Deck Cadet Training' : 'N/A', issueDate: isValid ? '2025-06-15' : 'N/A', expiryDate: isValid ? '2030-06-15' : 'N/A' });
    setLoading(false);
  };

  return (
    <>
      <Helmet><title>Certificate Verification | Ocean Maritime Academy</title><meta name="description" content="Verify the authenticity of certificates issued by Ocean Maritime Academy." /></Helmet>
      <Breadcrumb items={[{ label: 'Certificate Verification' }]} title="Certificate Verification" subtitle="Employers and maritime authorities can verify the authenticity of certificates issued by Ocean Maritime Academy." />
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-2xl px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="rounded-2xl border border-border bg-card p-6 md:p-8 shadow-sm">
            <div className="mb-6 flex items-center gap-3"><span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary"><ShieldCheck className="h-6 w-6" /></span><div><h2 className="font-display text-lg font-bold">Verify a Certificate</h2><p className="text-sm text-muted-foreground">Enter the certificate number to check its validity.</p></div></div>
            <form onSubmit={handleVerify} className="flex gap-3">
              <div className="relative flex-1"><Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" /><input value={certNo} onChange={(e) => setCertNo(e.target.value)} placeholder="e.g. OMA-2025-001234" className="w-full rounded-xl border border-border bg-background py-3.5 pl-11 pr-4 text-sm focus:border-accent focus:outline-none" /></div>
              <button type="submit" disabled={loading} className="rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-50">{loading ? 'Verifying...' : 'Verify'}</button>
            </form>
            <p className="mt-3 text-xs text-muted-foreground">Tip: Certificate numbers start with "OMA" followed by the year and a unique ID.</p>
          </motion.div>
          {result && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className={`mt-6 rounded-2xl border p-6 ${result.valid ? 'border-success/30 bg-success/5' : 'border-destructive/30 bg-destructive/5'}`}>
              <div className="mb-4 flex items-center gap-3">{result.valid ? <CheckCircle2 className="h-8 w-8 text-success" /> : <XCircle className="h-8 w-8 text-destructive" />}<div><h3 className={`font-display text-lg font-bold ${result.valid ? 'text-success' : 'text-destructive'}`}>{result.valid ? 'Certificate Verified' : 'Certificate Not Found'}</h3><p className="text-sm text-muted-foreground">{result.valid ? 'This certificate is valid and issued by Ocean Maritime Academy.' : 'No certificate found with this number. Please check and try again.'}</p></div></div>
              {result.valid && (<div className="space-y-3 rounded-xl border border-border bg-card p-5">{[{ label: 'Certificate No.', value: result.certificateNo }, { label: 'Holder Name', value: result.name }, { label: 'Course', value: result.course }, { label: 'Issue Date', value: result.issueDate }, { label: 'Expiry Date', value: result.expiryDate }].map((item, i) => (<div key={i} className="flex justify-between border-b border-border pb-2 last:border-0 last:pb-0"><span className="text-sm text-muted-foreground">{item.label}</span><span className="text-sm font-semibold text-foreground">{item.value}</span></div>))}</div>)}
            </motion.div>
          )}
          <div className="mt-8 rounded-2xl border border-border bg-muted/30 p-6"><div className="flex items-start gap-3"><FileText className="mt-0.5 h-5 w-5 shrink-0 text-accent" /><div><h3 className="mb-1 font-display text-sm font-bold">Need Help?</h3><p className="text-sm text-muted-foreground">If you are unable to verify a certificate or need assistance, please contact our verification office at <a href="mailto:verification@omabd.com" className="font-semibold text-accent">verification@omabd.com</a></p></div></div></div>
        </div>
      </section>
    </>
  );
}
