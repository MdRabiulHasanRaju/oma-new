import { motion } from "framer-motion";
import {
  ArrowRight,
  PlayCircle,
  CheckCircle2,
  Anchor,
  Ship,
  GraduationCap,
} from "lucide-react";

import HeroBackground from "./hero/HeroBackground";
import FloatingCard from "./hero/FloatingCard";
import HeroStats from "./hero/HeroStats";

import {Link} from 'react-router-dom'

// import CadetImage from "../../assets/hero-cadet.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden py-16">
      {/* Background */}
      <HeroBackground />

      {/* Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.05]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
            linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)
          `,
            backgroundSize: "70px 70px",
          }}
        />
      </div>

      {/* Main Container */}
      <div className="relative z-20 container mx-auto px-6 lg:px-12 min-h-screen flex items-center">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT CONTENT */}

          <motion.div
            initial={{ opacity: 0, x: -70 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .9 }}
          >

            {/* Badge */}

            <div className="inline-flex items-center gap-2 rounded-full bg-cyan-500/15 border border-cyan-400/20 backdrop-blur-xl px-5 py-2 text-cyan-300">

              <Anchor size={18} />

              International Maritime Training Excellence

            </div>

            {/* Heading */}

            <h1 className="mt-8 text-white text-5xl lg:text-7xl font-black leading-tight">

              Build Your

              <br />

              Maritime Career

              <br />

              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">

                With Global Standards

              </span>

            </h1>

            {/* Description */}

            <p className="mt-8 text-lg text-slate-300 leading-8 max-w-xl">

              Ocean Maritime Academy empowers future seafarers through
              internationally recognized maritime education, practical
              workshops, simulator-based training, and globally accepted
              certification programs.

            </p>

            {/* Buttons */}

            <div className="flex flex-wrap gap-5 mt-10">

              <Link to="/verification" className="group px-8 py-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 transition-all text-white font-semibold flex items-center gap-3 shadow-xl shadow-cyan-500/30">

                OMA Certificate Verify

                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition"
                />

              </Link>

              <Link to="/courses" className="px-8 py-4 rounded-xl border border-white/20 backdrop-blur-xl text-white hover:bg-white/10 transition flex items-center gap-3">

                <PlayCircle size={20} />

                Explore Courses

              </Link>

            </div>

            {/* Trust Points */}

            <div className="flex flex-wrap gap-6 mt-10">

              <div className="flex items-center gap-2 text-cyan-300">

                <CheckCircle2 size={18} />

                IMO Standard

              </div>

              <div className="flex items-center gap-2 text-cyan-300">

                <CheckCircle2 size={18} />

                STCW Approved

              </div>

              <div className="flex items-center gap-2 text-cyan-300">

                <CheckCircle2 size={18} />

                Practical Training

              </div>

            </div>

            {/* Statistics */}

            <HeroStats />

          </motion.div>

          {/* RIGHT SIDE */}

          <motion.div
            initial={{ opacity: 0, x: 70 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative"
          >

            {/* Glow */}

            <div className="absolute w-[450px] h-[450px] rounded-full bg-cyan-500/20 blur-[140px] left-1/2 -translate-x-1/2 top-24" />

            {/* Main Image */}

            <motion.img
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 5,
              }}
            //   src={CadetImage}
              src="/images/hero-cadet.png"
              
              className="relative z-10 w-full max-w-xl mx-auto drop-shadow-[0_30px_80px_rgba(0,0,0,.45)]"
            />

            {/* Floating Cards */}

            <div className="absolute left-0 top-20">

              <FloatingCard

                icon={<GraduationCap />}

                title="19,000+"

                subtitle="Successful Graduates"

              />

            </div>

            <div className="absolute right-0 top-52">

              <FloatingCard

                icon={<Ship />}

                title="85+"

                subtitle="Professional Maritime Courses"

              />

            </div>

            <div className="absolute left-10 bottom-16">

              <FloatingCard

                icon={<Anchor />}

                title="IMO"

                subtitle="International Standard Training"

              />

            </div>

          </motion.div>

        </div>

      </div>

      {/* Wave Divider */}

      <div className="absolute -bottom-8 left-0 w-full">

        <svg
          viewBox="0 0 1440 220"
          className="w-full fill-white"
        >

          <path d="M0,160L80,149.3C160,139,320,117,480,128C640,139,800,181,960,186.7C1120,192,1280,160,1360,144L1440,128L1440,320L0,320Z" />

        </svg>

      </div>

    </section>
  );
};

export default Hero;