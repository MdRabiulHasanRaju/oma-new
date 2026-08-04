import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Target, Eye, Award, Users, Building2, Globe2 } from 'lucide-react';
import Breadcrumb from '@/components/layouts/Breadcrumb';
import SectionHeader from '@/components/shared/SectionHeader';
import MessageSection from '@/components/shared/MessageSection';
import { chairmanMessage, principalMessage } from '@/data/site';
import { facilities } from '@/data/facilities';
import { stats } from '@/data/stats';

const values = [
  { icon: Target, title: 'Our Mission', description: 'To deliver world-class maritime education and training that empowers cadets with the knowledge, skills, and discipline required to excel as global maritime professionals.' },
  { icon: Eye, title: 'Our Vision', description: 'To be a globally recognized maritime institution that sets the benchmark for excellence in maritime education, innovation, and industry partnership.' },
  { icon: Award, title: 'Our Values', description: 'Integrity, discipline, excellence, safety consciousness, and a commitment to sustainable maritime practices guide everything we do at OMA.' },
];

const profileStats = [
  { icon: Building2, label: 'Founded', value: '2000' }, { icon: Users, label: 'Students', value: '1,200+' }, { icon: Award, label: 'Courses', value: '60+' }, { icon: Globe2, label: 'Global Alumni', value: '18,000+' },
];

export default function About() {
  return (
    <>
      <Helmet><title>About Us | Ocean Maritime Academy</title><meta name="description" content="Learn about Ocean Maritime Academy — our mission, vision, leadership, campus, and 25 years of excellence in maritime education." /></Helmet>
      <Breadcrumb items={[{ label: 'About' }]} title="About Ocean Maritime Academy" subtitle="A legacy of excellence in maritime education, shaping seafarers who serve with distinction across the world's oceans." />
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative overflow-hidden rounded-3xl">
              <img src="./images/oma-campus.png" alt="OMA Campus" loading="lazy" className="h-[520px] w-full object-cover" />
              <div className="absolute bottom-0 left-0 right-0 flex justify-around bg-ocean-900/80 p-4 text-center text-white backdrop-blur-md">
                {profileStats.map((s, i) => (<div key={i}><s.icon className="mx-auto mb-1 h-5 w-5 text-accent" /><p className="font-display text-lg font-bold">{s.value}</p><p className="text-xs text-white/70">{s.label}</p></div>))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent"><span className="h-1.5 w-1.5 rounded-full bg-accent" /> Company Profile</span>
              <h2 className="mb-4 font-display text-3xl font-extrabold tracking-tight">A Quarter Century of Maritime Excellence</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>Founded in 2012, Ocean Maritime Academy has grown from a modest training center into one of South Asia's premier maritime institutions. Located in the Shangu Beribadh, Salimpur, Fauzdarhat, Sitakunda, Chattogram, Bangladesh, OMA has trained over 19,000 mariners who now serve on vessels across the globe.</p>
                <p>Our campus spans 2 acres and features state-of-the-art training facilities including full-mission bridge and engine room simulators, fire fighting grounds, survival training pools, and fully equipped marine workshops. All our courses are approved by the Department of Shipping and comply with the STCW Convention.</p>
                <p>We are committed to producing not just competent seafarers, but well-rounded maritime professionals who embody the values of discipline, safety, and environmental responsibility. Our strong industry partnerships ensure excellent placement opportunities for our graduates.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <section id="mission-vision" className="bg-muted/40 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader eyebrow="Our Purpose" title="Mission, Vision & Values" description="The principles that guide our institution and shape the mariners of tomorrow." />
          <div className="grid gap-6 md:grid-cols-3">
            {values.map((v, i) => (
              <motion.div key={v.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="rounded-2xl border border-border bg-card p-8 shadow-sm transition-shadow hover:shadow-lg">
                <span className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl maritime-gradient text-white shadow-md"><v.icon className="h-7 w-7" /></span>
                <h3 className="mb-3 font-display text-xl font-bold">{v.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{v.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section id="chairman" className="py-16 md:py-24"><div className="mx-auto max-w-7xl px-6"><MessageSection data={chairmanMessage} eyebrow="Leadership" title="Message from the Chairman" index={0} /></div></section>
      <section id="principal" className="bg-muted/40 py-16 md:py-24"><div className="mx-auto max-w-7xl px-6"><MessageSection data={principalMessage} eyebrow="Leadership" title="Message from the Principal" index={1} /></div></section>
      <section id="campus" className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader eyebrow="Our Campus" title="Explore Our Facilities" description="A 15-acre residential campus equipped with world-class maritime training infrastructure." />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {facilities.slice(0, 4).map((f, i) => (
              <motion.div key={f.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:shadow-lg">
                <div className="relative h-40 overflow-hidden"><img src={f.image} alt={f.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" /><div className="absolute inset-0 bg-gradient-to-t from-ocean-900/60 to-transparent" /></div>
                <div className="p-4"><h3 className="mb-1 font-display text-base font-bold">{f.name}</h3><p className="line-clamp-2 text-xs text-muted-foreground">{f.description}</p></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="maritime-gradient py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {stats.map((s, i) => (<motion.div key={s.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center text-white"><p className="font-display text-4xl font-extrabold lg:text-5xl">{s.value}{s.suffix}</p><p className="mt-1 text-sm text-white/70">{s.label}</p></motion.div>))}
          </div>
        </div>
      </section>
    </>
  );
}
