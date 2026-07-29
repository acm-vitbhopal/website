"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Globe, Map, Bot } from "lucide-react";

export function PastProjects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardDropVariants = {
    hidden: { y: -150, opacity: 0, scale: 0.8 },
    visible: { 
      y: 0, 
      opacity: 1, 
      scale: 1,
      transition: { 
        type: "spring", 
        stiffness: 150, 
        damping: 12,
        mass: 1.2
      } 
    },
  };

  return (
    <section className="pt-40 pb-40 bg-brand-navy relative z-10 border-b-[3px] border-brand-navy rounded-b-[3rem] -mb-[3rem] overflow-hidden">
      
      {/* Background Waves */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-20">
        <svg className="absolute top-0 right-0 w-[150%] md:w-full h-auto min-h-[70vh] text-brand-light-blue" viewBox="0 0 1440 600" fill="currentColor" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,450 C250,150 550,550 950,350 C1200,250 1440,400 1440,400 L1440,0 L0,0 Z" opacity="0.5"/>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center mb-24 text-center">
          <h2 className="text-6xl md:text-8xl font-black mb-4 text-white">Shipped.</h2>
          <p className="text-2xl font-bold font-inter text-brand-light-blue/80">
            Projects built by our members
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-8 max-w-6xl mx-auto"
        >
          
          {/* Project 1 */}
          <motion.div variants={cardDropVariants} className="relative w-full max-w-sm transform -rotate-3 hover:rotate-0 transition-transform z-10 hover:z-30 hover:scale-105 duration-300">
            {/* Tape */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-24 h-8 bg-brand-tape shadow-sm rotate-2 z-20"></div>
            {/* Polaroid Card */}
            <div className="bg-brand-off-white p-6 pb-12 border-[2px] border-brand-navy rounded-md shadow-brand">
              <div className="w-full aspect-video bg-white border-[2px] border-brand-navy mb-6 flex items-center justify-center rounded-sm">
                 <Globe className="w-16 h-16 text-brand-blue" strokeWidth={1.5} />
              </div>
              <h3 className="text-3xl font-black font-space-grotesk mb-2 text-brand-navy">ACM Portal</h3>
              <p className="font-medium font-inter text-brand-navy/70 text-sm">The central hub for all member activities, built with Next.js.</p>
            </div>
          </motion.div>

          {/* Project 2 */}
          <motion.div variants={cardDropVariants} className="relative w-full max-w-sm transform rotate-6 hover:-rotate-2 transition-transform z-20 hover:z-30 mt-0 md:mt-12 hover:scale-105 duration-300">
            {/* Tape */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-24 h-8 bg-brand-tape shadow-sm -rotate-3 z-20"></div>
            {/* Polaroid Card */}
            <div className="bg-brand-off-white p-6 pb-12 border-[2px] border-brand-navy rounded-md shadow-brand">
              <div className="w-full aspect-video bg-white border-[2px] border-brand-navy mb-6 flex items-center justify-center rounded-sm">
                 <Map className="w-16 h-16 text-brand-blue" strokeWidth={1.5} />
              </div>
              <h3 className="text-3xl font-black font-space-grotesk mb-2 text-brand-navy">Campus Map</h3>
              <p className="font-medium font-inter text-brand-navy/70 text-sm">Interactive 3D map of VIT Bhopal campus to help freshers navigate.</p>
            </div>
          </motion.div>

          {/* Project 3 */}
          <motion.div variants={cardDropVariants} className="relative w-full max-w-sm transform -rotate-2 hover:rotate-2 transition-transform z-10 hover:z-30 mt-0 md:-mt-8 hover:scale-105 duration-300">
            {/* Tape */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-24 h-8 bg-brand-tape shadow-sm rotate-4 z-20"></div>
            {/* Polaroid Card */}
            <div className="bg-brand-off-white p-6 pb-12 border-[2px] border-brand-navy rounded-md shadow-brand">
              <div className="w-full aspect-video bg-white border-[2px] border-brand-navy mb-6 flex items-center justify-center rounded-sm">
                 <Bot className="w-16 h-16 text-brand-blue" strokeWidth={1.5} />
              </div>
              <h3 className="text-3xl font-black font-space-grotesk mb-2 text-brand-navy">Discord Bot</h3>
              <p className="font-medium font-inter text-brand-navy/70 text-sm">Open-source bot that manages our 2,000+ member server.</p>
            </div>
          </motion.div>

        </motion.div>
        
        <div className="mt-20 text-center relative z-20">
           <Button variant="outline" className="bg-white hover:bg-brand-light-blue border-none shadow-none text-brand-blue">View all projects</Button>
        </div>
      </div>
    </section>
  );
}
