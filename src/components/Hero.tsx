"use client";

import { motion, useReducedMotion } from "framer-motion";
import { CoupleEntrance } from "./CoupleEntrance";
import { Atmosphere } from "./Atmosphere";
import { WeddingOrnaments } from "./WeddingOrnaments";

export function Hero() {
  const reducedMotion = useReducedMotion();

  return (
    <section id="home" className="wedding-hero wedding-hero--entrance relative w-full flex items-center justify-center overflow-hidden bg-ivory">
      <Atmosphere />
      <WeddingOrnaments />
      {/* Background Image / Arch Pattern */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-20 pointer-events-none">
        {/* Placeholder for an arch or couple photo */}
        <div className="hero-arch w-[80vw] h-[90%] border-[1px] border-gold rounded-t-full relative">
          <div className="absolute inset-2 border-[1px] border-gold/50 rounded-t-full"></div>
        </div>
      </div>

      <div className="hero-personalized relative z-10 text-center flex flex-col items-center px-6">
        <p className="wedding-blessing" lang="hi">शुभ विवाह</p>
        {/* Name Reveal */}
        <div className="flex flex-row items-center justify-center gap-4 md:gap-8 py-5">
          <motion.h1
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
            className="font-calligraphy text-5xl md:text-8xl lg:text-9xl text-maroon drop-shadow-sm"
          >
            Lalit
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 2 }}
            className="font-serif text-3xl md:text-5xl text-gold italic"
          >
            &
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 1 }}
            className="font-calligraphy text-5xl md:text-8xl lg:text-9xl text-maroon drop-shadow-sm"
          >
            Shivani
          </motion.h1>
        </div>

        <CoupleEntrance />

        {/* Secondary Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="mt-5 space-y-4"
        >
          <h2 className="font-serif text-2xl md:text-3xl tracking-[0.2em] text-maroon uppercase">
            We&apos;re Getting Married
          </h2>
          <p className="font-serif italic text-lg md:text-xl text-maroon/80">
            Two journeys. Two cultures. One beautiful beginning.
          </p>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.8, duration: 1 }}
        className="absolute z-10 bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 whitespace-nowrap"
      >
        <span className="font-sans text-xs uppercase tracking-[0.3em] text-maroon/60">
          Scroll to unfold our story
        </span>
        <motion.div
          animate={{ y: reducedMotion ? 0 : [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-[1px] h-12 bg-gold mt-2"
        />
      </motion.div>

    </section>
  );
}
