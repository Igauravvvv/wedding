"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { Heart, Sparkles } from "lucide-react";

export function CoupleEntrance() {
  const reducedMotion = useReducedMotion();
  const [loaded, setLoaded] = useState<Record<string, boolean>>({});
  const [replay, setReplay] = useState(0);
  const ready = loaded.lalit && loaded.shivani && loaded.together && loaded.family && loaded.shivaniFamily;
  const animateEntrance = ready && !reducedMotion;

  return (
    <div className="couple-entrance">
      <div className="couple-stage couple-stage--family" role="img" aria-label="Lalit and Shivani meet in the center. Lalit's family joins on the left and Shivani's father, mother and brother join on the right.">
        <div key={replay} className="couple-stage-layers" aria-hidden="true">
          <motion.div className="entrance-family entrance-family--shivani" initial={{ opacity: 0, x: 120 }} animate={ready && loaded.shivaniFamily ? { opacity: 1, x: 0 } : { opacity: 0 }} transition={{ delay: reducedMotion ? 0 : 4.4, duration: reducedMotion ? 0 : 1.8, ease: "easeOut" }}>
            <Image src="/illustrations/shivani-family.png" alt="" width={1536} height={1024} sizes="(max-width: 767px) 280px, 30vw" loading="eager" onLoad={() => setLoaded((previous) => ({ ...previous, shivaniFamily: true }))} className="entrance-family-image" />
            <p className="font-serif text-maroon text-lg">Shivani’s family</p>
            <p className="font-serif italic text-maroon/60 text-xs mt-1">With love, laughter & blessings</p>
          </motion.div>
          <motion.div className="entrance-family entrance-family--lalit" initial={{ opacity: 0, x: -120 }} animate={ready && loaded.family ? { opacity: 1, x: 0 } : { opacity: 0 }} transition={{ delay: reducedMotion ? 0 : 4.4, duration: reducedMotion ? 0 : 1.8, ease: "easeOut" }}>
            <Image src="/illustrations/lalit-family-first.png" alt="" width={1536} height={1024} sizes="(max-width: 767px) 280px, 30vw" loading="eager" onLoad={() => setLoaded((previous) => ({ ...previous, family: true }))} className="entrance-family-image" />
            <p className="font-serif text-maroon text-lg">Lalit’s family</p>
            <p className="font-serif italic text-maroon/60 text-xs mt-1">With love, laughter & blessings</p>
          </motion.div>
          <motion.div className="meeting-halo" initial={{ opacity: 0, scale: 0.6 }} animate={ready ? { opacity: 1, scale: 1 } : { opacity: 0 }} transition={{ delay: reducedMotion ? 0 : 2.5, duration: 1.4 }} />
          {!reducedMotion && ready && <>
            <svg className="meeting-trails" viewBox="0 0 560 480" fill="none">
              <motion.path d="M-140 400 C40 490 60 140 240 280" stroke="#c59745" strokeWidth="1.5" strokeDasharray="4 9" initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: [0, 0.7, 0] }} transition={{ duration: 3.7, ease: "easeInOut" }} />
              <motion.path d="M700 400 C520 490 500 140 320 280" stroke="#c59745" strokeWidth="1.5" strokeDasharray="4 9" initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: [0, 0.7, 0] }} transition={{ duration: 3.7, ease: "easeInOut" }} />
            </svg>
            {Array.from({ length: 18 }, (_, index) => (
              <motion.span key={`petal-${index}`} className={`meeting-petal meeting-petal--${index % 3}`} style={{ left: `${(index * 31 + 8) % 100}%`, top: -25 }} initial={{ opacity: 0, y: -30 }} animate={{ y: [0, 520], x: [0, index % 2 ? 55 : -55, 0], rotate: [0, 180, 340], opacity: [0, 0.85, 0.7, 0] }} transition={{ duration: 6 + index % 4, delay: 2.8 + index * 0.22, repeat: Infinity, repeatDelay: 1.2, ease: "linear" }} />
            ))}
            {[0, 1, 2, 3, 4, 5].map((index) => (
              <motion.span className="meeting-sparkle" key={`spark-${index}`} style={{ left: `${index % 2 ? 84 : 10}%`, top: `${12 + Math.floor(index / 2) * 28}%` }} initial={{ opacity: 0, scale: 0 }} animate={{ opacity: [0, 0.8, 0], scale: [0.4, 1, 0.4], rotate: [0, 35, 0] }} transition={{ delay: 3.3 + index * 0.3, duration: 2.8, repeat: Infinity, repeatDelay: 1 }}><Sparkles size={index % 2 ? 24 : 18} strokeWidth={1} /></motion.span>
            ))}
            {[0, 1, 2].map((index) => <motion.span key={`heart-${index}`} className="meeting-heart" initial={{ opacity: 0, y: 0, scale: 0.3 }} animate={{ opacity: [0, 1, 0], y: [0, -100 - index * 20], x: [0, (index - 1) * 65], scale: [0.3, 1, 0.8] }} transition={{ delay: 3.1 + index * 0.2, duration: 2.4 }}><Heart size={20 + index * 4} fill="currentColor" strokeWidth={1} /></motion.span>)}
          </>}
          {(["lalit", "shivani"] as const).map((person) => (
            <motion.div
              key={person}
              className={`couple-solo couple-solo--${person}`}
              initial={{ x: person === "lalit" ? "-70vw" : "70vw", opacity: 0 }}
              animate={animateEntrance ? { x: [person === "lalit" ? "-70vw" : "70vw", "0vw", "0vw"], opacity: [0, 1, 1, 0] } : undefined}
              transition={{ x: { duration: 3.2, times: [0, 0.85, 1], ease: "easeInOut" }, opacity: { duration: 3.8, times: [0, 0.12, 0.82, 1] } }}
            >
              <motion.div className="couple-figure" animate={animateEntrance ? { y: [0, -7, 0, -6, 0, -4, 0], rotate: person === "lalit" ? [0, -1, 0, 1, 0] : [0, 1, 0, -1, 0] } : { y: 0, rotate: 0 }} transition={{ duration: 3.1, ease: "easeInOut" }}>
                <Image src={`/illustrations/${person}-entrance.png`} alt="" fill sizes="(max-width: 639px) 190px, 280px" loading="eager" className="object-contain" onLoad={() => setLoaded((previous) => ({ ...previous, [person]: true }))} />
              </motion.div>
            </motion.div>
          ))}
          <motion.div
            className="couple-together"
            initial={{ opacity: 1 }}
            animate={animateEntrance ? { opacity: [0, 0, 1], scale: [0.96, 0.96, 1] } : { opacity: 1, scale: 1 }}
            transition={{ duration: 4.2, times: [0, 0.75, 1], ease: "easeOut" }}
          >
            <motion.div className="couple-figure" animate={animateEntrance ? { y: [0, -5, 0], rotate: [0, 0.6, 0, -0.6, 0] } : { y: 0, rotate: 0 }} transition={{ delay: 4.2, duration: 7, repeat: Infinity, ease: "easeInOut" }}>
              <Image src="/illustrations/lalit-shivani.png" alt="" fill sizes="(max-width: 639px) 280px, 380px" loading="eager" className="object-contain" onLoad={() => setLoaded((previous) => ({ ...previous, together: true }))} />
            </motion.div>
          </motion.div>
        </div>
      </div>
      {!reducedMotion && <button type="button" className="couple-replay" disabled={!ready} onClick={() => setReplay((value) => value + 1)}>Replay our meeting <span aria-hidden="true">↻</span></button>}
    </div>
  );
}
