"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export function Membership() {
  const benefits = [
    { icon: "🏆", text: "Hackathons & competitions" },
    { icon: "🤝", text: "Industry networking" },
    { icon: "🔬", text: "Research opportunities" },
    { icon: "🎟️", text: "Exclusive events" },
    { icon: "👥", text: "Mentorship & guidance" },
    { icon: "📚", text: "ACM Digital Library" },
  ];

  return (
    <section className="pt-32 pb-40 bg-brand-yellow relative z-0 border-t-[3px] border-brand-black">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-6xl md:text-8xl font-black mb-6">Join Our Ranks!</h2>
        <p className="text-xl md:text-2xl font-bold font-inter text-brand-black/80 max-w-3xl mx-auto mb-16">
          Step into a thriving tech community where ideas turn into impact. As a member of ACM Student Chapter VIT Bhopal, you'll gain hands-on experience, expand your network, and unlock opportunities designed to accelerate your journey in technology.
        </p>
        
        {/* Infinite Marquee of Benefits */}
        <div className="relative w-full overflow-hidden flex mb-20 py-4">
           {/* Gradient Masks for smooth fade on edges */}
           <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-brand-yellow to-transparent z-10 pointer-events-none"></div>
           <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-brand-yellow to-transparent z-10 pointer-events-none"></div>
           
           <motion.div 
              animate={{ x: ["0%", "-50%"] }} 
              transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
              className="flex gap-6 w-max"
           >
              {/* We double the content to make it infinite */}
              {[...benefits, ...benefits, ...benefits].map((benefit, i) => (
                <div key={i} className="flex items-center gap-3 bg-brand-yellow border-[3px] border-brand-black shadow-[4px_4px_0px_0px_#111] px-6 py-3 rounded-full font-bold font-inter text-lg md:text-xl transform hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_#111] transition-all cursor-default">
                  <span className="opacity-70">{benefit.icon}</span> <span>{benefit.text}</span>
                </div>
              ))}
           </motion.div>
        </div>

        <div className="flex justify-center">
          <Button variant="primary" size="lg" className="bg-brand-black text-brand-yellow hover:text-white hover:bg-gray-900 border-[3px] border-brand-black text-xl px-12 py-5 uppercase tracking-widest">
            Apply for Membership
          </Button>
        </div>
      </div>
    </section>
  );
}
