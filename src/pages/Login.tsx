import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast } from 'sonner';
import { Ship, User, Lock, Mail } from 'lucide-react';

const schema = z.object({ email: z.string().email('Valid email is required'), password: z.string().min(6, 'Password must be at least 6 characters') });
type FormData = z.infer<typeof schema>;

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>({ resolver: zodResolver(schema) });
  const onSubmit = async () => { await new Promise((r) => setTimeout(r, 1000)); toast.success(isLogin ? 'Login successful!' : 'Account created successfully!'); };

  return (
    <>
      <Helmet><title>Login | Ocean Maritime Academy</title><meta name="description" content="Login to your Ocean Maritime Academy student portal account." /></Helmet>
      <section className="flex min-h-[80vh] items-center justify-center bg-muted/30 px-6 py-16">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-md">
          <div className="rounded-3xl border border-border bg-card p-8 shadow-xl">
            <div className="mb-8 text-center"><span className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl maritime-gradient text-white shadow-lg"><Ship className="h-7 w-7" /></span><h1 className="font-display text-2xl font-extrabold">{isLogin ? 'Welcome Back' : 'Create Account'}</h1><p className="mt-2 text-sm text-muted-foreground">{isLogin ? 'Sign in to access your student portal' : 'Register to start your application journey'}</p></div>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div><label className="mb-1.5 block text-sm font-medium">Email</label><div className="relative"><Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" /><input type="email" {...register('email')} className="w-full rounded-lg border border-border bg-background py-3 pl-11 pr-3 text-sm focus:border-accent focus:outline-none" placeholder="your@email.com" /></div>{errors.email && <p className="mt-1 text-xs text-destructive">{errors.email.message}</p>}</div>
              <div><label className="mb-1.5 block text-sm font-medium">Password</label><div className="relative"><Lock className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" /><input type="password" {...register('password')} className="w-full rounded-lg border border-border bg-background py-3 pl-11 pr-3 text-sm focus:border-accent focus:outline-none" placeholder="••••••••" /></div>{errors.password && <p className="mt-1 text-xs text-destructive">{errors.password.message}</p>}</div>
              {isLogin && <div className="flex items-center justify-between text-sm"><label className="flex items-center gap-2 text-muted-foreground"><input type="checkbox" className="rounded border-border" /> Remember me</label><a href="#" className="font-semibold text-accent">Forgot password?</a></div>}
              <button type="submit" disabled={isSubmitting} className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-50"><User className="h-4 w-4" />{isSubmitting ? 'Please wait...' : isLogin ? 'Sign In' : 'Create Account'}</button>
            </form>
            <div className="mt-6 text-center text-sm text-muted-foreground">{isLogin ? "Don't have an account? " : 'Already have an account? '}<button onClick={() => setIsLogin(!isLogin)} className="font-semibold text-accent">{isLogin ? 'Sign up' : 'Sign in'}</button></div>
          </div>
        </motion.div>
      </section>
    </>
  );
}
