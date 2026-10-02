"use client";

import { motion } from "framer-motion";
import { RegionalArtwork } from "./RegionalArtwork";
import { RegionalFood } from "./RegionalFood";

export function Journey() {
  return (
    <section id="story" className="relative w-full py-24 md:py-32 bg-ivory overflow-hidden">
      {/* Decorative Top Border */}
      <div className="absolute top-0 w-full h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent opacity-50"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="text-center mb-14"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-maroon mb-6">
            Different roots. <span className="italic text-gold">One city.</span> One story.
          </h2>
          <p className="font-sans text-maroon/70 max-w-2xl mx-auto leading-relaxed">
            Lalit came from the mountains of Uttarakhand. Shivani carried with her the warmth and culture of Bihar. Their journeys eventually crossed in Delhi — a city neither of them knew would become the beginning of their forever.
          </p>
        </motion.div>

        <div className="regional-journey">
          {/* Path Connection Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-[20%] right-[20%] h-[1px] bg-gold/30 -translate-y-1/2 z-0 overflow-hidden">
            <motion.div
              initial={{ x: "-100%" }}
              whileInView={{ x: "100%" }}
              transition={{ duration: 2, ease: "linear", repeat: Infinity, repeatDelay: 1 }}
              className="w-1/2 h-full bg-gradient-to-r from-transparent via-gold to-transparent"
            />
          </div>

          {/* Path Connection Line (Mobile) */}
          <div className="hidden">
             <motion.div
              initial={{ y: "-100%" }}
              whileInView={{ y: "100%" }}
              transition={{ duration: 2, ease: "linear", repeat: Infinity, repeatDelay: 1 }}
              className="w-full h-1/2 bg-gradient-to-b from-transparent via-gold to-transparent"
            />
          </div>

          {/* Uttarakhand */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1 }}
            className="regional-card"
          >
            <RegionalArtwork region="uttarakhand" />
            <h3 className="font-serif text-2xl text-maroon">Lalit</h3>
            <p className="font-sans text-xs tracking-widest text-gold uppercase mt-2">Uttarakhand</p>
            <p className="regional-caption">Himalayan skies & mountain roots</p>
            <RegionalFood region="uttarakhand" />
          </motion.div>

          {/* Delhi */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1, delay: 0.5 }}
            className="regional-card regional-card--delhi"
          >
            <RegionalArtwork region="delhi" />
            <h3 className="font-serif text-3xl text-maroon italic">Delhi</h3>
            <p className="font-sans text-xs tracking-widest text-maroon/60 uppercase mt-2">Where Paths Crossed</p>
            <p className="regional-caption">India Gate & a beautiful beginning</p>
            <RegionalFood region="delhi" />
          </motion.div>

          {/* Bihar */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1, delay: 0.2 }}
            className="regional-card"
          >
            <RegionalArtwork region="bihar" />
            <h3 className="font-serif text-2xl text-maroon">Shivani</h3>
            <p className="font-sans text-xs tracking-widest text-gold uppercase mt-2">Bihar</p>
            <p className="regional-caption">Madhubani colors & cherished traditions</p>
            <RegionalFood region="bihar" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
