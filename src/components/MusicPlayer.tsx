"use client";

import { useState, useRef, useEffect } from "react";
import { Music, Music4 } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio("/music.mp3"); // Ensure you place music.mp3 in public folder
    audioRef.current.loop = true;
    audioRef.current.volume = 0.3;
    
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play().catch(e => console.log("Audio play failed:", e));
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 2, duration: 0.8 }}
      onClick={togglePlay}
      className={cn(
        "fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-xl transition-all duration-300 flex items-center gap-2",
        isPlaying ? "bg-gold text-maroon" : "bg-maroon text-gold hover:bg-maroon/90"
      )}
      aria-label="Toggle Music"
    >
      {isPlaying ? <Music size={20} className="animate-pulse" /> : <Music4 size={20} />}
      <span className="font-serif text-xs uppercase tracking-widest hidden md:inline-block pr-1">
        {isPlaying ? "Pause Song" : "Our Song"}
      </span>
    </motion.button>
  );
}
