"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function RSVPForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [formData, setFormData] = useState({
    name: "",
    attending: "Absolutely! ❤️",
    guests: "1",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    // Simulate API call to Supabase or custom backend
    setTimeout(() => {
      setStatus("success");
    }, 1500);
  };

  return (
    <section id="rsvp" className="py-24 md:py-32 bg-ivory relative overflow-hidden">
      {/* Decorative floral corners */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-[url('/corner-ornament.svg')] opacity-10 bg-no-repeat bg-contain pointer-events-none" />
      <div className="absolute top-0 right-0 w-32 h-32 bg-[url('/corner-ornament.svg')] opacity-10 bg-no-repeat bg-contain pointer-events-none rotate-90" />
      
      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-maroon mb-6">
            Will You <span className="italic text-gold">Celebrate With Us?</span>
          </h2>
          <p className="font-sans text-maroon/80 max-w-xl mx-auto leading-relaxed">
            Our story wouldn&apos;t be complete without the people who have been part of our journey. We would love to know if you&apos;ll be there as we begin this new chapter.
          </p>
        </div>

        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-gold/20 relative">
          <AnimatePresence mode="wait">
            {status === "success" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-16"
              >
                <div className="text-6xl mb-6">❤️</div>
                <h3 className="font-serif text-3xl text-maroon mb-4">Thank You</h3>
                <p className="font-sans text-maroon/80 mb-2">We can&apos;t wait to celebrate with you.</p>
                {formData.attending.includes("Absolutely") && (
                  <p className="font-sans text-sm text-gold uppercase tracking-widest mt-6">
                    Lalit & Shivani are counting you in!
                  </p>
                )}
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div>
                  <label htmlFor="name" className="block font-serif text-maroon mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border-b-2 border-maroon/20 bg-ivory/30 focus:outline-none focus:border-gold transition-colors text-maroon font-sans"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block font-serif text-maroon mb-3">Will you be joining us?</label>
                  <div className="space-y-3">
                    {["Absolutely! ❤️", "Wouldn't miss it", "Sending love from afar"].map((option) => (
                      <label key={option} className="flex items-center space-x-3 cursor-pointer group">
                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${formData.attending === option ? 'border-maroon bg-maroon' : 'border-maroon/30 group-hover:border-maroon/60'}`}>
                           {formData.attending === option && <div className="w-2 h-2 bg-ivory rounded-full" />}
                        </div>
                        <input
                          type="radio"
                          name="attending"
                          value={option}
                          checked={formData.attending === option}
                          onChange={(e) => setFormData({ ...formData, attending: e.target.value })}
                          className="hidden"
                        />
                        <span className="font-sans text-maroon/90">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {formData.attending !== "Sending love from afar" && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                  >
                    <label htmlFor="guests" className="block font-serif text-maroon mb-2">Number of Guests</label>
                    <select
                      id="guests"
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                      className="w-full px-4 py-3 border-b-2 border-maroon/20 bg-ivory/30 focus:outline-none focus:border-gold transition-colors text-maroon font-sans appearance-none"
                    >
                      {[1, 2, 3, 4, 5].map((num) => (
                        <option key={num} value={num}>{num}</option>
                      ))}
                    </select>
                  </motion.div>
                )}

                <div>
                  <label htmlFor="message" className="block font-serif text-maroon mb-2">Leave a message for Lalit & Shivani <span className="text-xs text-maroon/50 uppercase tracking-widest">(Optional)</span></label>
                  <textarea
                    id="message"
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 border-b-2 border-maroon/20 bg-ivory/30 focus:outline-none focus:border-gold transition-colors text-maroon font-sans resize-none"
                    placeholder="Share your wishes or excitement..."
                  />
                </div>

                <div className="pt-6 text-center">
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="px-10 py-4 bg-maroon text-gold font-serif text-lg tracking-widest uppercase rounded-sm hover:bg-maroon/90 transition-all shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed w-full md:w-auto"
                  >
                    {status === "submitting" ? "Sending..." : "Count Me In"}
                  </button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
