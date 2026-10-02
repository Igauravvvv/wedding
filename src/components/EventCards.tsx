"use client";

import { motion } from "framer-motion";

const events = [
  {
    title: "Haldi",
    date: "[Add Date]",
    time: "[Add Time]",
    venue: "[Add Venue]",
    dressCode: "Yellow / White",
    icon: "🌼",
  },
  {
    title: "Mehendi",
    date: "[Add Date]",
    time: "[Add Time]",
    venue: "[Add Venue]",
    dressCode: "Green / Floral",
    icon: "🌿",
  },
  {
    title: "Sangeet",
    date: "[Add Date]",
    time: "[Add Time]",
    venue: "[Add Venue]",
    dressCode: "Indo-Western / Glamorous",
    icon: "🎵",
  },
  {
    title: "Wedding",
    date: "[Add Date]",
    time: "[Add Time]",
    venue: "[Add Venue]",
    dressCode: "Traditional Indian",
    icon: "✨",
  },
];

export function EventCards() {
  return (
    <section id="events" className="py-24 md:py-32 bg-ivory">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-maroon mb-6">
            Wedding <span className="italic text-gold">Events</span>
          </h2>
          <div className="w-24 h-[1px] bg-gold mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="bg-white p-8 rounded-t-[50px] rounded-b-md border border-gold/20 shadow-sm text-center flex flex-col items-center relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gold scale-x-0 group-hover:scale-x-100 transition-transform origin-center duration-300"></div>
              
              <div className="text-4xl mb-6">{event.icon}</div>
              
              <h3 className="font-serif text-2xl text-maroon mb-6">{event.title}</h3>
              
              <div className="space-y-4 font-sans text-sm text-maroon/70 w-full">
                <div className="border-b border-gray-100 pb-2">
                  <p className="uppercase tracking-widest text-xs text-gold mb-1">Date & Time</p>
                  <p>{event.date}</p>
                  <p>{event.time}</p>
                </div>
                <div className="border-b border-gray-100 pb-2">
                  <p className="uppercase tracking-widest text-xs text-gold mb-1">Venue</p>
                  <p>{event.venue}</p>
                </div>
                <div>
                  <p className="uppercase tracking-widest text-xs text-gold mb-1">Dress Code</p>
                  <p className="italic">{event.dressCode}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
