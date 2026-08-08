// import { useState } from "react";
import { Anchor, ArrowRight} from "lucide-react";
import { Link } from 'react-router-dom';

export default function AboutSection() {
    // const [isPlaying, setIsPlaying] = useState(false);
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background via-background to-muted/30 py-24">
      {/* Background Blur */}
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-ocean-500/10 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-accent/10 blur-3xl"></div>

      <div className="container mx-auto px-6 lg:px-10">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left */}
          <div>
            {/* Label */}
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2 text-sm font-semibold text-accent shadow-sm">
              <Anchor size={16} />
              WELCOME TO OCEAN MARITIME ACADEMY
            </div>

            <h2 className="mt-8 font-display text-4xl font-bold leading-tight text-foreground lg:text-6xl">
              Building Future
              <span className="block text-[#003B73]">
                Maritime Professionals
              </span>
            </h2>

            <div className="mt-6 h-1 w-28 rounded-full bg-gradient-to-r from-accent to-accent/60"></div>

            <p className="mt-8 text-lg leading-9 text-muted-foreground">
              Ocean Maritime Academy is committed to preparing future seafarers
              through internationally recognized maritime education, practical
              training, and experienced instructors. Our mission is to develop
              competent professionals ready to serve the global shipping
              industry with confidence and excellence.
            </p>

            <div className="mt-10 space-y-5">
              {[
                "International Standard Maritime Training",
                "Experienced Marine Instructors",
                "Modern Training Facilities",
                "Career-Oriented Practical Learning",
              ].map((item) => (
                <div key={item} className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10">
                    ⚓
                  </div>

                  <span className="text-lg font-medium text-foreground">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-12 flex flex-wrap gap-5">
              <Link to="/courses" className="group flex items-center gap-3 rounded-full bg-accent px-8 py-4 font-semibold text-accent-foreground transition hover:-translate-y-1 hover:shadow-xl hover:opacity-90">
                Explore Courses
                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-1"
                />
              </Link>

              <Link to="/contact" className="rounded-full border border-border bg-card px-8 py-4 font-semibold text-foreground transition hover:border-accent hover:text-accent hover:shadow-lg">
                Contact Us
              </Link>
            </div>
          </div>

          {/* Right */}
          <div className="relative">
            {/* Decorative Border */}
            <div className="absolute -left-5 -top-5 h-full w-full rounded-[35px] border border-border"></div>

            <div className="relative overflow-hidden rounded-[30px] border border-border bg-card shadow-xl">
              <div className="aspect-video">
                <iframe
                  className="h-full w-full"
                  src={`https://www.youtube.com/embed/57o9T3NRfjI`}
                  title="Ocean Maritime Academy"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
              </div>

            </div>

            {/* Floating Decorative Card */}
            <div className="absolute -right-6 -bottom-2 rounded-2xl border border-border bg-card/80 px-6 py-5 shadow-xl backdrop-blur-xl">
              <p className="text-sm font-semibold text-">
                Excellence in Maritime Education
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// import { useState } from "react";
// import { Anchor, ArrowRight, Play } from "lucide-react";
// import { Link } from 'react-router-dom';

// export default function AboutSection() {
//     const [isPlaying, setIsPlaying] = useState(false);
//   return (
//     <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white py-24">
//       {/* Background Blur */}
//       <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-blue-100 blur-3xl opacity-60"></div>
//       <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-amber-100 blur-3xl opacity-40"></div>

//       <div className="container mx-auto px-6 lg:px-10">
//         <div className="grid items-center gap-16 lg:grid-cols-2">
//           {/* Left */}
//           <div>
//             {/* Label */}
//             <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-5 py-2 text-sm font-semibold text-[#003B73]">
//               <Anchor size={16} />
//               WELCOME TO OCEAN MARITIME ACADEMY
//             </div>

//             <h2 className="mt-8 text-4xl font-bold leading-tight text-slate-900 lg:text-6xl">
//               Building Future
//               <span className="block text-[#003B73]">
//                 Maritime Professionals
//               </span>
//             </h2>

//             <div className="mt-6 h-1 w-28 rounded-full bg-gradient-to-r from-[#D4AF37] to-yellow-400"></div>

//             <p className="mt-8 text-lg leading-9 text-slate-600">
//               Ocean Maritime Academy is committed to preparing future seafarers
//               through internationally recognized maritime education, practical
//               training, and experienced instructors. Our mission is to develop
//               competent professionals ready to serve the global shipping
//               industry with confidence and excellence.
//             </p>

//             <div className="mt-10 space-y-5">
//               {[
//                 "International Standard Maritime Training",
//                 "Experienced Marine Instructors",
//                 "Modern Training Facilities",
//                 "Career-Oriented Practical Learning",
//               ].map((item) => (
//                 <div key={item} className="flex items-center gap-4">
//                   <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#003B73]/10">
//                     ⚓
//                   </div>

//                   <span className="text-lg font-medium text-slate-700">
//                     {item}
//                   </span>
//                 </div>
//               ))}
//             </div>

//             <div className="mt-12 flex flex-wrap gap-5">
//               <Link to="/courses" className="group flex items-center gap-3 rounded-full bg-[#003B73] px-8 py-4 font-semibold text-white transition hover:-translate-y-1 hover:bg-[#002650] hover:shadow-2xl">
//                 Explore Courses
//                 <ArrowRight
//                   size={18}
//                   className="transition group-hover:translate-x-1"
//                 />
//               </Link>

//               <Link to="/contact" className="rounded-full border border-slate-300 bg-white px-8 py-4 font-semibold text-slate-700 transition hover:border-[#003B73] hover:text-[#003B73] hover:shadow-lg">
//                 Contact Us
//               </Link>
//             </div>
//           </div>

//           {/* Right */}
//           <div className="relative">
//             {/* Decorative Border */}
//             <div className="absolute -left-5 -top-5 h-full w-full rounded-[35px] border border-blue-100"></div>

//             <div className="relative overflow-hidden rounded-[30px] bg-white shadow-[0_35px_70px_rgba(0,43,91,.15)]">
//               <div className="aspect-video">
//                 <iframe
//                   className="h-full w-full"
//                   src={`https://www.youtube.com/embed/57o9T3NRfjI?${
//                         isPlaying ? "autoplay=1" : ""
//                 }`}
//                   title="Ocean Maritime Academy"
//                   allow="autoplay; encrypted-media"
//                   allowFullScreen
//                 />
//               </div>

//               {/* Floating Badge */}
//               <div className="absolute left-6 top-6 rounded-full bg-white/90 px-5 py-3 shadow-xl backdrop-blur-md">
//                 <span className="text-sm font-semibold text-[#003B73]">
//                   International Maritime Training
//                 </span>
//               </div>

//               {/* Play Card */}
//               {!isPlaying && (
//               <div onClick={() => setIsPlaying(true)} className="absolute bottom-24 left-6 right-6 rounded-2xl border border-white/20 bg-black/40 p-5 backdrop-blur-md">
//                 <div className="flex items-center gap-4">
//                   <div className="flex h-14 w-14 items-center justify-center rounded-full bg-red-600 text-white shadow-lg">
//                     <Play size={22} fill="white" />
//                   </div>

//                   <div>
//                     <h4 className="text-lg font-semibold text-white">
//                       Watch Our Academy Story
//                     </h4>

//                     <p className="mt-1 text-sm text-slate-200">
//                       Discover our campus, maritime training, and future career
//                       opportunities.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//               )}
//             </div>

//             {/* Floating Decorative Card */}
//             <div className="absolute -right-6 -bottom-6 rounded-2xl border border-white/30 bg-white/80 px-6 py-5 shadow-2xl backdrop-blur-xl">
//               <p className="text-sm font-semibold text-[#003B73]">
//                 Excellence in Maritime Education
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
