"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const memories = [
  { id: 7, caption: "You, me & everywhere", alt: "Lalit and Shivani together in a colorful courtyard", width: 960, height: 1280 },
  { id: 1, caption: "Our kind of everyday", alt: "Lalit and Shivani smiling together at home", width: 1280, height: 720 },
  { id: 3, caption: "A little closer to the clouds", alt: "Shivani and Lalit hiking together in the mountains", width: 960, height: 1280 },
  { id: 4, caption: "My favourite company", alt: "Lalit and Shivani taking a selfie at a restaurant", width: 1280, height: 720 },
  { id: 6, caption: "A moment worth keeping", alt: "Lalit and Shivani dressed up for an evening together", width: 960, height: 1280 },
  { id: 2, caption: "His mountain heart", alt: "Lalit standing on rocks beneath a blue mountain sky", width: 960, height: 1280 },
  { id: 5, caption: "All smiles, always us", alt: "Shivani and Lalit taking a close-up evening selfie", width: 960, height: 1280 },
];

export function PhotoGallery() {
  const reducedMotion = useReducedMotion();
  return (
    <section id="memories" className="py-24 md:py-32 bg-ivory relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-maroon/60 mb-5">Little moments. A whole lot of love.</p>
          <h2 className="font-serif text-4xl md:text-5xl text-maroon mb-6">And Somehow, <span className="italic text-gold">Here We Are…</span></h2>
          <p className="font-sans text-maroon/70 max-w-2xl mx-auto leading-relaxed">What started with Zumba… continued through conversations, friendship, countless memories and a little help from destiny. And now we are ready for our favourite chapter yet.</p>
          <p className="font-calligraphy text-6xl md:text-8xl text-maroon mt-8">Forever.</p>
        </div>
        <div className="memory-columns">
          {memories.map((memory, index) => (
            <motion.figure key={memory.id} initial={{ opacity: 0, y: reducedMotion ? 0 : 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="memory-print" style={{ rotate: (reducedMotion ? 0 : [-2, 1.5, -1, 2, -1.5, 1, -2][index]) + "deg" }}>
              <a href={"/photos/memory-" + memory.id + ".jpeg"} target="_blank" rel="noopener noreferrer" aria-label={"View full photo: " + memory.alt} className="block focus-visible:outline-2 focus-visible:outline-maroon focus-visible:outline-offset-4">
                <Image src={"/photos/memory-" + memory.id + ".jpeg"} alt={memory.alt} width={memory.width} height={memory.height} sizes="(max-width: 639px) 90vw, (max-width: 1023px) 45vw, 30vw" className="w-full h-auto" />
              </a>
              <figcaption className="font-serif italic text-maroon/80 text-center pt-4 pb-2 text-base">{memory.caption}</figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
