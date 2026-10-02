"use client";

import { motion } from "framer-motion";
import { CalendarHeart, MapPin } from "lucide-react";

export function WeddingDetails() {
  return (
    <section id="wedding" className="py-24 md:py-32 bg-maroon text-ivory relative overflow-hidden">
      {/* Mandap / Arch Border Pattern */}
      <div className="absolute inset-4 md:inset-8 border-2 border-gold/30 rounded-t-[100px] pointer-events-none z-0"></div>
      <div className="absolute inset-6 md:inset-10 border border-gold/20 rounded-t-[90px] pointer-events-none z-0"></div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="font-serif text-4xl md:text-5xl text-gold mb-6 uppercase tracking-widest">
            We&apos;re Getting Married
          </h2>
          <p className="font-serif italic text-ivory/80 text-lg md:text-xl mb-12">
            And nothing would make us happier than celebrating it with you.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="my-8 py-12 px-8 w-full md:w-3/4 border-y border-gold/30 relative"
        >
          {/* Decorative center element */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-maroon px-4 text-gold">
            ❦
          </div>

          <h3 className="font-calligraphy text-5xl md:text-7xl mb-4">Lalit</h3>
          <p className="font-serif text-2xl text-gold italic mb-4">&</p>
          <h3 className="font-calligraphy text-5xl md:text-7xl">Shivani</h3>

          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-maroon px-4 text-gold">
            ❦
          </div>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 1, delay: 0.6 }}
           className="mt-12 space-y-8"
        >
          <div className="flex flex-col items-center gap-2">
            <CalendarHeart className="text-gold mb-2" size={32} />
            <h4 className="font-serif text-xl tracking-widest uppercase">Wedding Date</h4>
            <p className="font-sans text-ivory/80">[Add Date]</p>
            <p className="font-sans text-ivory/80">[Add Time]</p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <MapPin className="text-gold mb-2" size={32} />
            <h4 className="font-serif text-xl tracking-widest uppercase">Venue</h4>
            <p className="font-sans text-ivory/80">[Add Venue Name]</p>
            <p className="font-sans text-ivory/80">Dwarka, New Delhi</p>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6 pt-8">
            <button className="px-8 py-3 bg-gold text-maroon font-serif tracking-widest uppercase text-sm hover:bg-ivory hover:text-maroon transition-colors rounded-sm shadow-md">
              View Location
            </button>
            <button className="px-8 py-3 bg-transparent border border-gold text-gold font-serif tracking-widest uppercase text-sm hover:bg-gold/10 transition-colors rounded-sm">
              Add to Calendar
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
