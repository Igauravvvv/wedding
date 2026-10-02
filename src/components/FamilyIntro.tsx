"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function FamilyIntro() {
  return (
    <section id="family" className="py-24 md:py-32 bg-ivory/50">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-maroon mb-6">
            Two Families, <span className="italic text-gold">One Celebration</span>
          </h2>
          <div className="w-24 h-[1px] bg-gold mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
          {/* Bhatt Family */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 md:p-12 border border-gold/20 rounded-xl text-center shadow-sm relative"
          >
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-ivory px-4 text-3xl">🏔️</div>
            <h3 className="font-serif text-3xl text-maroon mb-2 mt-4">The Bhatt Family</h3>
            <p className="font-sans text-xs uppercase tracking-widest text-gold mb-8">Welcoming you from Uttarakhand</p>
            <Image src="/illustrations/lalit-family-first.png" alt="Illustration of Pushkar, his mother Taiji, and Lalit's eldest, middle and youngest sisters" width={1536} height={1024} sizes="(max-width: 767px) 85vw, 440px" className="w-full h-auto mb-6" />
            <p className="font-serif text-maroon/80 leading-relaxed mb-6">Pushkar · Taiji · Lalit’s eldest, middle & youngest sisters</p>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-serif text-lg text-maroon italic border-b border-gold/20 pb-2 mb-3 inline-block">Parents</h4>
                <p className="font-sans text-maroon/80">[Father&apos;s Name]</p>
                <p className="font-sans text-maroon/80">[Mother&apos;s Name]</p>
              </div>
              <div>
                <h4 className="font-serif text-lg text-maroon italic border-b border-gold/20 pb-2 mb-3 inline-block">Siblings</h4>
                <p className="font-sans text-maroon/80">[Names]</p>
              </div>
            </div>
          </motion.div>

          {/* Pandey Family */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white p-8 md:p-12 border border-gold/20 rounded-xl text-center shadow-sm relative"
          >
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-ivory px-4 text-3xl">🌸</div>
            <h3 className="font-serif text-3xl text-maroon mb-2 mt-4">The Pandey Family</h3>
            <p className="font-sans text-xs uppercase tracking-widest text-gold mb-8">Welcoming you from Bihar</p>
            <Image src="/illustrations/shivani-family.png" alt="Illustration of Shivani's father, mother and brother" width={1536} height={1024} sizes="(max-width: 767px) 85vw, 440px" className="w-full h-auto mb-6" />
            <p className="font-serif text-maroon/80 leading-relaxed mb-6">Shivani’s father · mother · brother</p>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-serif text-lg text-maroon italic border-b border-gold/20 pb-2 mb-3 inline-block">Parents</h4>
                <p className="font-sans text-maroon/80">[Father&apos;s Name]</p>
                <p className="font-sans text-maroon/80">[Mother&apos;s Name]</p>
              </div>
              <div>
                <h4 className="font-serif text-lg text-maroon italic border-b border-gold/20 pb-2 mb-3 inline-block">Siblings</h4>
                <p className="font-sans text-maroon/80">[Names]</p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="font-serif italic text-xl text-maroon/80">
            Different traditions. Different stories. <span className="font-medium text-maroon">One new family.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
