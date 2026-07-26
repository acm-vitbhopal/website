"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

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
    <section className="pt-40 pb-40 bg-brand-pink relative z-10 border-b-[3px] border-brand-black rounded-b-[3rem] -mb-[3rem]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-24 text-center">
          <h2 className="text-6xl md:text-8xl font-black mb-4 text-white">Shipped.</h2>
          <p className="text-2xl font-bold font-inter text-brand-black transform -rotate-1">
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
          <motion.div variants={cardDropVariants} className="relative w-full max-w-sm transform -rotate-3 hover:rotate-0 transition-transform z-10 hover:z-30">
            {/* Tape */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-24 h-8 bg-[#e6ddc5] border-[3px] border-brand-black shadow-[2px_2px_0px_0px_#111] rotate-2 z-20"></div>
            {/* Polaroid Card */}
            <div className="bg-white p-6 pb-12 brutal-border brutal-shadow rounded-xl">
              <div className="w-full aspect-video bg-brand-cyan brutal-border mb-6 flex items-center justify-center">
                 <span className="text-6xl">🌐</span>
              </div>
              <h3 className="text-3xl font-black font-space-grotesk mb-2">ACM Portal</h3>
              <p className="font-bold font-inter text-gray-700">The central hub for all member activities, built with Next.js.</p>
            </div>
          </motion.div>

          {/* Project 2 */}
          <motion.div variants={cardDropVariants} className="relative w-full max-w-sm transform rotate-6 hover:-rotate-2 transition-transform z-20 hover:z-30 mt-0 md:mt-12">
            {/* Tape */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-24 h-8 bg-[#e6ddc5] border-[3px] border-brand-black shadow-[2px_2px_0px_0px_#111] -rotate-3 z-20"></div>
            {/* Polaroid Card */}
            <div className="bg-brand-yellow p-6 pb-12 brutal-border brutal-shadow rounded-xl">
              <div className="w-full aspect-video bg-white brutal-border mb-6 flex items-center justify-center">
                 <span className="text-6xl">📱</span>
              </div>
              <h3 className="text-3xl font-black font-space-grotesk mb-2">Campus Map</h3>
              <p className="font-bold font-inter text-brand-black/80">Interactive 3D map of VIT Bhopal campus to help freshers navigate.</p>
            </div>
          </motion.div>

          {/* Project 3 */}
          <motion.div variants={cardDropVariants} className="relative w-full max-w-sm transform -rotate-2 hover:rotate-2 transition-transform z-10 hover:z-30 mt-0 md:-mt-8">
            {/* Tape */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-24 h-8 bg-[#e6ddc5] border-[3px] border-brand-black shadow-[2px_2px_0px_0px_#111] rotate-4 z-20"></div>
            {/* Polaroid Card */}
            <div className="bg-white p-6 pb-12 brutal-border brutal-shadow rounded-xl">
              <div className="w-full aspect-video bg-brand-purple brutal-border mb-6 flex items-center justify-center">
                 <span className="text-6xl">🤖</span>
              </div>
              <h3 className="text-3xl font-black font-space-grotesk mb-2">Discord Bot</h3>
              <p className="font-bold font-inter text-gray-700">Open-source bot that manages our 2,000+ member server.</p>
            </div>
          </motion.div>

        </motion.div>
        
        <div className="mt-20 text-center relative z-20">
           <Button variant="outline" className="bg-white hover:bg-brand-yellow">View all projects</Button>
        </div>
      </div>
    </section>
  );
}
