"use client";

import { motion } from "framer-motion";

const timelineEvents = [
  {
    chapter: "Chapter 01",
    title: "It Started With Zumba",
    subtitle: "Not exactly where either of us expected to find love.",
    content: "Lalit and Shivani first noticed each other during a Zumba class in Delhi. At that point, they were simply two people attending the same class. No dramatic movie moment. No idea what was coming next. Just two strangers whose paths had quietly crossed.",
  },
  {
    chapter: "Chapter 02",
    title: "Then Came the Cake…",
    subtitle: "Apparently, cake can start more than just a conversation.",
    content: "Lalit eventually found a reason to start talking to Shivani. And somehow… the excuse involved making a cake. What started as a simple conversation became the first small opening in a story neither of them had planned.",
    icon: "🍰",
  },
  {
    chapter: "Chapter 03",
    title: "Every Love Story Needs a Wingman",
    subtitle: "Enter Pushkar.",
    content: "Then came Pushkar — the unexpected supporting character in the story. One day, Shivani's scooty had a problem. Pushkar stepped in to help. Through these small everyday moments, Lalit and Shivani naturally started spending more time around each other.",
  },
  {
    chapter: "Chapter 04",
    title: "The Class Ended. The Conversation Didn't.",
    subtitle: "",
    content: "Eventually their Zumba subscription came to an end. Technically, that could have been where their story ended too. But Lalit and Shivani had already started talking. And this time, there was no class, workout or cake needed as an excuse. They simply wanted to keep talking.",
    highlight: "Sometimes you know a connection is real when the reason that introduced you disappears — but the person stays.",
  },
  {
    chapter: "Chapter 05",
    title: "One Month Later…",
    subtitle: "The Gym Chapter",
    content: "Around a month later, Shivani joined their gym. Now the occasional conversations became regular ones. Workouts turned into conversations. Conversations became friendship. And somewhere between everyday meetings, jokes and long talks, that friendship quietly started becoming something more.",
  },
  {
    chapter: "Chapter 06",
    title: "04 August",
    subtitle: "Our First Date",
    content: "And then came the day when all those conversations finally became something more. On 4th August, Lalit and Shivani went on their first official date. A simple day. But one that would eventually become one of the most important dates in their story.",
    dateHighlight: true,
  }
];

export function StoryTimeline() {
  return (
    <section className="py-24 md:py-32 bg-ivory/50">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Timeline Container */}
        <div className="relative">
          {/* Main vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gold/30 md:-translate-x-1/2"></div>

          {timelineEvents.map((event, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={event.chapter}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className={`relative flex flex-col md:flex-row items-center justify-between mb-24 last:mb-0 ${
                  isEven ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Center Node */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-maroon rounded-full border-4 border-ivory md:-translate-x-1/2 shadow-sm z-10" />

                {/* Content Box */}
                <div className={`ml-12 md:ml-0 md:w-5/12 ${isEven ? "md:text-left" : "md:text-right"}`}>
                  <div className="bg-white p-8 rounded-xl shadow-sm border border-gold/10 hover:shadow-md transition-shadow duration-300 relative group overflow-hidden">
                    {/* Subtle ornamental corner */}
                    <div className="absolute top-0 right-0 w-16 h-16 bg-[url('/corner-ornament.svg')] opacity-5 bg-no-repeat bg-contain pointer-events-none" />

                    <span className="font-sans text-xs tracking-widest text-gold uppercase mb-2 block">
                      {event.chapter}
                    </span>
                    
                    {event.dateHighlight ? (
                      <div className="mb-4">
                        <span className="inline-block border-2 border-maroon rounded-full px-6 py-2 font-serif text-xl text-maroon relative group-hover:bg-maroon group-hover:text-ivory transition-colors">
                          04 AUG
                          <motion.div
                            initial={{ pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="absolute -inset-2 pointer-events-none text-gold/30"
                          >
                             {/* SVG Heart Circle could go here */}
                          </motion.div>
                        </span>
                      </div>
                    ) : null}

                    <h3 className="font-serif text-2xl md:text-3xl text-maroon mb-2">
                      {event.title}
                    </h3>
                    
                    {event.subtitle && (
                      <p className="font-serif italic text-maroon/70 mb-4">
                        {event.subtitle}
                      </p>
                    )}
                    
                    <p className="font-sans text-maroon/80 leading-relaxed text-sm md:text-base">
                      {event.content}
                    </p>

                    {event.icon && (
                      <div className="mt-4 text-3xl opacity-80">{event.icon}</div>
                    )}

                    {event.highlight && (
                      <div className="mt-6 p-4 bg-maroon/5 border-l-4 border-gold rounded-r-lg">
                        <p className="font-serif text-maroon italic font-medium">
                          &quot;{event.highlight}&quot;
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
