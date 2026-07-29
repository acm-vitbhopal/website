"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export function Membership() {
  const benefits = [
    { title: "Hackathons & competitions", icon: "🏆" },
    { title: "Industry networking", icon: "🤝" },
    { title: "Research opportunities", icon: "🔬" },
    { title: "Exclusive events", icon: "🎟️" },
    { title: "Mentorship & guidance", icon: "👥" },
    { title: "ACM Digital Library", icon: "📚" },
  ];

  return (
    <section className="pt-32 pb-40 bg-brand-light-blue relative overflow-hidden">
      {/* Background Waves */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-40">
        <svg className="absolute bottom-0 left-0 w-[150%] md:w-full h-auto min-h-[50vh] text-brand-blue" viewBox="0 0 1440 600" fill="currentColor" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,350 C250,550 550,50 950,250 C1200,350 1440,200 1440,200 L1440,600 L0,600 Z" opacity="0.3"/>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="text-6xl md:text-8xl font-black mb-6 text-brand-navy">Join Our Ranks!</h2>
          <p className="text-xl md:text-2xl font-bold font-inter text-brand-navy/80 max-w-3xl">
            Step into a thriving tech community where ideas turn into impact. 
            As a member of ACM Student Chapter VIT Bhopal, you'll gain hands-on experience, 
            expand your network, and unlock opportunities designed to accelerate your journey in technology.
          </p>
        </div>
      </div>

      {/* Infinite Scrolling Marquee */}
      <div className="relative w-full overflow-hidden py-12 z-10">
        
        {/* Moving Belt */}
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 25, repeat: Infinity }}
          className="flex gap-4 md:gap-6 whitespace-nowrap min-w-max"
        >
          {/* We duplicate the array 4 times to ensure seamless infinite scrolling regardless of screen size */}
          {[...benefits, ...benefits, ...benefits, ...benefits].map((benefit, i) => (
            <div key={i} className="inline-flex items-center gap-3 px-8 py-4 bg-white border-[2px] border-brand-navy rounded-full shadow-sm hover:shadow-md transition-shadow">
              <span className="text-2xl">{benefit.icon}</span>
              <span className="font-space-grotesk font-bold text-xl md:text-2xl text-brand-navy">{benefit.title}</span>
            </div>
          ))}
        </motion.div>
        
      </div>

      <div className="mt-20 flex justify-center relative z-10">
        <Button variant="primary" size="lg" className="px-12 uppercase tracking-widest text-sm md:text-base">
          Apply for Membership
        </Button>
      </div>

    </section>
  );
}
