import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import {
  ArrowRight,
  Anchor,
  Globe2,
  ShieldCheck,
  Play,
  Compass,
  Waves,
  Award,
  ChevronDown,
} from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Pagination,
  EffectFade,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";


/* =========================================================
   HERO SLIDES
========================================================= */

const heroSlides = [
  {
    image:
      "https://omabd.com/uploads/images/slider-image/sliderimageabcde.jpg",
  },
  {
    image:
      "https://omabd.com/uploads/images/slider-image/oceanmaritimeacademy2.jpg",
  },
  {
    image:
      "https://omabd.com/uploads/images/slider-image/oceanmaritimeacademy3.jpg",
  },
];


/* =========================================================
   HERO STATS
========================================================= */

const floatingStats = [
  {
    icon: ShieldCheck,
    value: "9001:2015",
    label: "ISO Certified",
  },
  {
    icon: Globe2,
    value: "Global",
    label: "Recognition",
  },
  {
    icon: Anchor,
    value: "96%",
    label: "Placement Rate",
  },
];


export default function Hero() {

  /* =======================================================
     SWIPER REFERENCES
  ======================================================== */

  const mainSwiperRef = useRef(null);
  const journeySwiperRef = useRef(null);


  /* =======================================================
     ACTIVE SLIDE
  ======================================================== */

  const [activeSlide, setActiveSlide] = useState(0);


  /* =======================================================
     SYNC MAIN HERO -> JOURNEY CARD
  ======================================================== */

  const handleMainSlideChange = (swiper) => {

    const realIndex = swiper.realIndex;

    setActiveSlide(realIndex);

    const journeySwiper = journeySwiperRef.current;

    if (
      journeySwiper &&
      journeySwiper.realIndex !== realIndex
    ) {
      journeySwiper.slideToLoop(
        realIndex,
        900
      );
    }
  };


  /* =======================================================
     SYNC JOURNEY CARD -> MAIN HERO
  ======================================================== */

  const handleJourneySlideChange = (swiper) => {

    const realIndex = swiper.realIndex;

    setActiveSlide(realIndex);

    const mainSwiper = mainSwiperRef.current;

    if (
      mainSwiper &&
      mainSwiper.realIndex !== realIndex
    ) {
      mainSwiper.slideToLoop(
        realIndex,
        900
      );
    }
  };


  return (
    <section
      className="
        relative
        min-h-[calc(100vh-80px)]
        overflow-hidden
        bg-background
      "
    >

      {/* =====================================================
          MAIN BACKGROUND HERO SLIDER
      ====================================================== */}

      <div className="absolute inset-0 z-0">

        <Swiper
          modules={[
            Autoplay,
            Pagination,
            EffectFade,
          ]}

          onSwiper={(swiper) => {
            mainSwiperRef.current = swiper;
          }}

          onSlideChange={handleMainSlideChange}

          effect="fade"

          fadeEffect={{
            crossFade: true,
          }}

          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
          }}

          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}

          loop

          speed={1200}

          className="h-full w-full"
        >

          {heroSlides.map((slide, index) => (

            <SwiperSlide key={index}>

              <div
                className="
                  relative
                  h-full
                  min-h-[calc(100vh-80px)]
                  w-full
                  overflow-hidden
                "
              >

                <motion.img
                  src={slide.image}
                  alt="Ocean Maritime Academy"
                  initial={{
                    scale: 1.08,
                  }}
                  animate={{
                    scale: 1,
                  }}
                  transition={{
                    duration: 7,
                    ease: "easeOut",
                  }}
                  className="
                    absolute
                    inset-0

                    h-full
                    w-full

                    object-cover
                  "
                />

              </div>

            </SwiperSlide>

          ))}

        </Swiper>

      </div>


      {/* =====================================================
          PREMIUM MARITIME OVERLAY
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-[1]

          bg-gradient-to-r
          from-[#041F30]/95
          via-[#073B55]/72
          via-[55%]
          to-[#073B55]/10
        "
      />


      {/* Cyan Ocean Atmosphere */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-[1]

          bg-[radial-gradient(circle_at_18%_42%,rgba(34,211,238,0.18),transparent_38%)]
        "
      />


      {/* Top Cinematic Shade */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-[1]

          bg-gradient-to-b
          from-[#021521]/35
          via-transparent
          to-[#021521]/35
        "
      />


      {/* Right Ocean Glow */}

      <div
        className="
          pointer-events-none
          absolute
          -right-40
          top-1/2
          z-[1]

          h-[600px]
          w-[600px]

          -translate-y-1/2

          rounded-full

          bg-cyan-400/10

          blur-[140px]
        "
      />


      {/* Bottom Fade */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          z-[1]

          h-52

          bg-gradient-to-t
          from-[#021521]/80
          via-[#021521]/25
          to-transparent
        "
      />


      {/* =====================================================
          DECORATIVE COMPASS
      ====================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          rotate: -30,
        }}
        animate={{
          opacity: 0.25,
          rotate: 0,
        }}
        transition={{
          duration: 1.4,
        }}
        className="
          pointer-events-none
          absolute
          right-[7%]
          top-[15%]
          z-[2]

          hidden
          xl:block
        "
      >

        <div
          className="
            relative

            flex
            h-40
            w-40

            items-center
            justify-center

            rounded-full

            border
            border-cyan-300/30
          "
        >

          <div
            className="
              absolute
              inset-3

              rounded-full

              border
              border-cyan-300/15
            "
          />

          <div
            className="
              absolute
              inset-8

              rounded-full

              border
              border-cyan-300/10
            "
          />

          <Compass
            size={62}
            strokeWidth={1}
            className="text-cyan-300"
          />

        </div>

      </motion.div>


      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <div
        className="
          relative
          z-[3]

          mx-auto

          flex
          min-h-[calc(100vh-80px)]

          max-w-7xl

          items-center

          px-5
          py-20

          sm:px-8
          lg:px-10
        "
      >

        <div
          className="
            grid
            w-full

            grid-cols-1

            items-center

            gap-12

            lg:grid-cols-[1.1fr_0.9fr]
            lg:gap-16
          "
        >


          {/* =================================================
              LEFT CONTENT
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.9,
              ease: "easeOut",
            }}
            className="max-w-3xl"
          >

            {/* =================================================
                ADMISSION BADGE
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.2,
                duration: 0.6,
              }}
              className="
                mb-7

                inline-flex

                items-center
                gap-2

                rounded-full

                border
                border-cyan-300/30

                bg-[#052B40]/55

                px-4
                py-2

                text-sm
                font-medium

                text-white

                shadow-lg
                shadow-black/20

                backdrop-blur-xl
              "
            >

              <span
                className="
                  relative
                  flex
                  h-2
                  w-2
                "
              >

                <span
                  className="
                    absolute

                    inline-flex

                    h-full
                    w-full

                    animate-ping

                    rounded-full

                    bg-cyan-300

                    opacity-75
                  "
                />

                <span
                  className="
                    relative

                    inline-flex

                    h-2
                    w-2

                    rounded-full

                    bg-cyan-300
                  "
                />

              </span>

              Admissions Open — January 2026 Intake

            </motion.div>


            {/* =================================================
                EYEBROW
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.3,
                duration: 0.6,
              }}
              className="
                mb-4

                flex
                items-center
                gap-3

                text-sm
                font-semibold
                uppercase
                tracking-[0.24em]

                text-cyan-300
              "
            >

              <span
                className="
                  h-px
                  w-10

                  bg-cyan-300
                "
              />

              Ocean Maritime Academy

            </motion.div>


            {/* =================================================
                MAIN HEADING
            ================================================== */}

            <motion.h1
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.4,
                duration: 0.8,
              }}
              className="
                max-w-4xl

                text-4xl
                font-black
                leading-[1.04]
                tracking-tight

                text-white

                sm:text-5xl
                md:text-6xl
                lg:text-7xl
              "
            >

              Shaping the

              <span
                className="
                  block

                  bg-gradient-to-r
                  from-cyan-300
                  via-sky-300
                  to-white

                  bg-clip-text
                  text-transparent
                "
              >
                Maritime Leaders
              </span>

              of Tomorrow

            </motion.h1>


            {/* =================================================
                DESCRIPTION
                ALWAYS WHITE
            ================================================== */}

            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.55,
                duration: 0.7,
              }}
              className="
                mt-7

                max-w-2xl

                text-base
                leading-7

                text-white

                sm:text-lg
                sm:leading-8
              "
            >
              A world-class maritime academy delivering
              internationally accredited education,
              cutting-edge simulator training, and a proven
              pathway to a global seafaring career.
            </motion.p>


            {/* =================================================
                CTA BUTTONS
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.7,
                duration: 0.7,
              }}
              className="
                mt-9

                flex
                flex-col
                gap-3

                sm:flex-row
              "
            >

              {/* Apply Online */}

              <Link
                to="/verification"
                className="
                  group

                  inline-flex

                  items-center
                  justify-center
                  gap-2

                  rounded-xl

                  bg-cyan-400

                  px-6
                  py-3.5

                  text-sm
                  font-bold

                  text-slate-950

                  shadow-xl
                  shadow-cyan-500/25

                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:bg-cyan-300
                  hover:shadow-2xl
                  hover:shadow-cyan-400/30
                "
              >

                OMA Certificate Verify

                <ArrowRight
                  size={18}
                  className="
                    transition-transform
                    duration-300

                    group-hover:translate-x-1
                  "
                />

              </Link>


              {/* Explore Courses */}

              <Link
                to="/courses"
                className="
                  group

                  inline-flex

                  items-center
                  justify-center
                  gap-2

                  rounded-xl

                  border
                  border-white/25

                  bg-white/10

                  px-6
                  py-3.5

                  text-sm
                  font-bold

                  text-white

                  shadow-lg
                  shadow-black/10

                  backdrop-blur-xl

                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:border-cyan-300/50
                  hover:bg-white/15
                "
              >

                <Play
                  size={16}
                  fill="currentColor"
                />

                Explore Courses

              </Link>

            </motion.div>


            {/* =================================================
                STATS
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.85,
                duration: 0.7,
              }}
              className="
                mt-10

                grid
                max-w-2xl
                grid-cols-3

                divide-x
                divide-white/15
              "
            >

              {floatingStats.map((stat, index) => {

                const Icon = stat.icon;

                return (
                  <div
                    key={index}
                    className="
                      flex
                      items-center
                      gap-3

                      px-3
                      first:pl-0

                      sm:px-5
                    "
                  >

                    <div
                      className="
                        hidden

                        h-10
                        w-10
                        shrink-0

                        items-center
                        justify-center

                        rounded-xl

                        border
                        border-cyan-300/20

                        bg-cyan-300/10

                        text-cyan-300

                        sm:flex
                      "
                    >

                      <Icon size={19} />

                    </div>


                    <div>

                      <div
                        className="
                          text-sm
                          font-extrabold

                          text-white

                          sm:text-base
                        "
                      >
                        {stat.value}
                      </div>


                      <div
                        className="
                          mt-0.5

                          text-[10px]
                          font-medium
                          uppercase
                          tracking-wide

                          text-white/50

                          sm:text-xs
                        "
                      >
                        {stat.label}
                      </div>

                    </div>

                  </div>
                );

              })}

            </motion.div>

          </motion.div>


          {/* =================================================
              RIGHT JOURNEY CARD
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 40,
              scale: 0.97,
            }}
            animate={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            transition={{
              delay: 0.45,
              duration: 0.9,
              ease: "easeOut",
            }}
            className="
              relative

              mx-auto
              w-full
              max-w-md

              lg:ml-auto
            "
          >

            {/* Card Glow */}

            <div
              className="
                absolute

                -inset-5
                -z-10

                rounded-[2.5rem]

                bg-cyan-400/10

                blur-3xl
              "
            />


            {/* Main Card */}

            <div
              className="
                relative
                overflow-hidden

                rounded-[2rem]

                border
                border-white/20

                bg-[#06283D]/55

                p-3

                shadow-2xl
                shadow-black/40

                backdrop-blur-2xl
              "
            >

              {/* =================================================
                  CARD HEADER
              ================================================== */}

              <div
                className="
                  flex
                  items-center
                  justify-between

                  px-3
                  pb-3
                  pt-1
                "
              >

                <div
                  className="
                    flex
                    items-center
                    gap-3
                  "
                >

                  {/* OMA Icon */}

                  <div
                    className="
                      flex
                      h-10
                      w-10

                      items-center
                      justify-center

                      rounded-xl

                      bg-cyan-400

                      text-slate-950

                      shadow-lg
                      shadow-cyan-500/20
                    "
                  >

                    <Anchor size={20} />

                  </div>


                  {/* OMA Text */}

                  <div>

                    <div
                      className="
                        text-sm
                        font-extrabold

                        text-white
                      "
                    >
                      OMA
                    </div>

                    <div
                      className="
                        text-xs

                        text-white/50
                      "
                    >
                      Your Journey Starts Here
                    </div>

                  </div>

                </div>


                {/* Explore Indicator */}

                <div
                  className="
                    flex
                    items-center
                    gap-1.5
                  "
                >

                  <span
                    className="
                      h-1.5
                      w-1.5

                      rounded-full

                      bg-cyan-300

                      shadow-lg
                      shadow-cyan-300/50
                    "
                  />

                  <span
                    className="
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-wider

                      text-white/50
                    "
                  >
                    Explore
                  </span>

                </div>

              </div>


              {/* =================================================
                  SYNCHRONIZED JOURNEY SWIPER
              ================================================== */}

              <div
                className="
                  relative
                  overflow-hidden

                  rounded-[1.4rem]

                  touch-pan-y
                "
              >

                <Swiper
                  modules={[]}

                  onSwiper={(swiper) => {
                    journeySwiperRef.current = swiper;
                  }}

                  onSlideChange={handleJourneySlideChange}

                  loop

                  speed={900}

                  slidesPerView={1}

                  allowTouchMove={true}

                  simulateTouch={true}

                  grabCursor={true}

                  resistance={true}

                  resistanceRatio={0.65}

                  className="
                    journey-card-swiper
                    h-60
                    w-full
                  "
                >

                  {heroSlides.map((slide, index) => (

                    <SwiperSlide key={index}>

                      <div
                        className="
                          relative
                          h-60
                          w-full
                          overflow-hidden
                        "
                      >

                        <img
                          src={slide.image}
                          alt={`Ocean Maritime Academy slide ${index + 1}`}
                          draggable={false}
                          className="
                            h-full
                            w-full

                            select-none

                            object-cover
                          "
                        />


                        {/* Image Overlay */}

                        <div
                          className="
                            pointer-events-none
                            absolute
                            inset-0

                            bg-gradient-to-t
                            from-[#021521]/95
                            via-[#021521]/25
                            to-transparent
                          "
                        />


                        {/* Image Content */}

                        <div
                          className="
                            pointer-events-none
                            absolute

                            inset-x-0
                            bottom-0

                            p-5
                          "
                        >

                          {/* Label */}

                          <div
                            className="
                              mb-2

                              inline-flex

                              items-center
                              gap-2

                              rounded-full

                              border
                              border-cyan-300/20

                              bg-[#06283D]/55

                              px-3
                              py-1.5

                              text-[10px]
                              font-semibold
                              uppercase
                              tracking-wider

                              text-cyan-200

                              backdrop-blur-md
                            "
                          >

                            <Waves size={12} />

                            Maritime Excellence

                          </div>


                          {/* Title */}

                          <h3
                            className="
                              text-xl
                              font-bold

                              text-white
                            "
                          >
                            Train. Sail. Lead.
                          </h3>


                          {/* Description */}

                          <p
                            className="
                              mt-1

                              text-xs
                              leading-5

                              text-white/70
                            "
                          >
                            Build the skills, confidence and
                            knowledge for a successful maritime career.
                          </p>

                        </div>

                      </div>

                    </SwiperSlide>

                  ))}

                </Swiper>


                {/* Swipe Hint */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    right-4
                    top-4
                    z-10

                    flex
                    items-center
                    gap-1.5

                    rounded-full

                    border
                    border-white/15

                    bg-black/20

                    px-2.5
                    py-1.5

                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-wider

                    text-white/70

                    backdrop-blur-md
                  "
                >

                  <ArrowRight
                    size={11}
                  />

                  Swipe

                </div>

              </div>


              {/* =================================================
                  CARD FOOTER
              ================================================== */}

              <div
                className="
                  mt-3

                  grid
                  grid-cols-2
                  gap-3
                "
              >

                {/* Certified */}

                <div
                  className="
                    rounded-xl

                    border
                    border-white/10

                    bg-white/[0.06]

                    p-3

                    transition-all
                    duration-300

                    hover:border-cyan-300/20
                    hover:bg-white/[0.09]
                  "
                >

                  <div
                    className="
                      flex
                      items-center
                      gap-2
                    "
                  >

                    <ShieldCheck
                      size={16}
                      className="text-cyan-300"
                    />

                    <span
                      className="
                        text-xs
                        font-bold

                        text-white
                      "
                    >
                      Certified
                    </span>

                  </div>


                  <p
                    className="
                      mt-1

                      text-[10px]

                      text-white/45
                    "
                  >
                    International standards
                  </p>

                </div>


                {/* Global */}

                <div
                  className="
                    rounded-xl

                    border
                    border-white/10

                    bg-white/[0.06]

                    p-3

                    transition-all
                    duration-300

                    hover:border-cyan-300/20
                    hover:bg-white/[0.09]
                  "
                >

                  <div
                    className="
                      flex
                      items-center
                      gap-2
                    "
                  >

                    <Globe2
                      size={16}
                      className="text-cyan-300"
                    />

                    <span
                      className="
                        text-xs
                        font-bold

                        text-white
                      "
                    >
                      Global
                    </span>

                  </div>


                  <p
                    className="
                      mt-1

                      text-[10px]

                      text-white/45
                    "
                  >
                    Career opportunities
                  </p>

                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </div>


      {/* =====================================================
          SCROLL INDICATOR
      ====================================================== */}

      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 1.5,
          duration: 0.8,
        }}
        className="
          absolute

          bottom-5
          left-1/2

          z-[4]

          hidden

          -translate-x-1/2

          flex-col
          items-center
          gap-1.5

          md:flex
        "
      >

        <span
          className="
            text-[9px]
            font-semibold
            uppercase
            tracking-[0.3em]

            text-white/40
          "
        >
          Scroll to explore
        </span>


        <motion.div
          animate={{
            y: [0, 5, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >

          <ChevronDown
            size={17}
            className="text-cyan-300"
          />

        </motion.div>

      </motion.div>


      {/* =====================================================
          SWIPER PAGINATION
      ====================================================== */}

      <style>
        {`
          .swiper-pagination {
            position: absolute !important;

            left: auto !important;
            right: 2rem !important;
            bottom: 2rem !important;

            width: auto !important;

            z-index: 20 !important;
          }

          .swiper-pagination-bullet {
            width: 7px !important;
            height: 7px !important;

            opacity: 0.35 !important;

            background: rgba(103, 232, 249, 0.9) !important;

            transition: all 0.3s ease !important;
          }

          .swiper-pagination-bullet-active {
            width: 26px !important;

            border-radius: 999px !important;

            opacity: 1 !important;

            background: rgb(103, 232, 249) !important;

            box-shadow:
              0 0 14px
              rgba(34, 211, 238, 0.45) !important;
          }

          .journey-card-swiper {
            width: 100%;
            height: 240px;
          }

          .journey-card-swiper .swiper-slide {
            width: 100%;
            height: 240px;
          }

          .journey-card-swiper .swiper-slide img {
            -webkit-user-drag: none;
            user-select: none;
          }

          @media (max-width: 768px) {

            .swiper-pagination {
              right: 1rem !important;
              bottom: 1rem !important;
            }

            .journey-card-swiper {
              height: 230px;
            }

            .journey-card-swiper .swiper-slide {
              height: 230px;
            }

          }
        `}
      </style>

    </section>
  );
}