"use client";

import { motion } from "framer-motion";
import { Atmosphere } from "./Atmosphere";

export function Footer() {
  return (
    <footer className="relative bg-maroon text-ivory py-24 overflow-hidden border-t-[10px] border-gold">
      <Atmosphere subtle />
      {/* Soft overlay pattern (optional SVG Jali could go here) */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: "url('/pattern-jali.png')", backgroundSize: "300px" }}></div>
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="space-y-6"
        >
          <p className="font-serif text-xl md:text-2xl italic font-light tracking-wide text-gold">
            From Uttarakhand & Bihar…
          </p>
          <p className="font-serif text-xl md:text-2xl italic font-light tracking-wide text-gold">
            to Delhi…
          </p>
          <p className="font-serif text-xl md:text-2xl italic font-light tracking-wide text-gold">
            from strangers at Zumba…
          </p>
          <p className="font-serif text-3xl md:text-4xl italic font-medium tracking-wider text-gold mt-4">
            to forever.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-16 space-y-6"
        >
          <h2 className="font-calligraphy text-6xl md:text-8xl text-ivory drop-shadow-md">
            Lalit <span className="text-blush">❤️</span> Shivani
          </h2>
          <p className="font-serif text-lg tracking-widest uppercase">
            We can&apos;t wait to celebrate with you.
          </p>
          <p className="font-sans text-sm tracking-widest uppercase opacity-80">
            See you in Dwarka, Delhi.
          </p>
        </motion.div>

        {/* Decorative divider */}
        <div className="w-24 h-[1px] bg-gold/50 my-12"></div>

        <p className="font-sans text-xs tracking-widest uppercase opacity-60">
          Made with love for Lalit & Shivani
        </p>
      </div>
    </footer>
  );
}
